const router = require("express").Router();
const Books = require("../Books");


//update

router.put("/:ISBN", async (req,res) =>{
    
    
    try{
        const book = await Books.findOne({ISBN: req.params.ISBN});
        if(req.body.name && typeof(req.body.name) == "string")
        {
            book.name = req.body.name;
        }
        if(req.body.author && typeof(req.body.author) == "string")
        {
            book.author = req.body.author;
        }
    //     if(book)
    //     {
    //     // try{
    //     //     const updateBook = await Books.findByIdAndUpdate(req.params.ISBN,{
    //     //         $set:req.body
    //     //     });
    //     //     res.status(200).json(updateBook);
    //     // } catch(err) {
    //     //     res.status(500).json(err);
    //     // }
    // }
    // else{
    //     res.status(403).json("You can update");
        await book.save();
        res.status(201).json(book);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
});

//Delete
router.delete("/:ISBN", async (req, res) => {
    try{
        const book = await Books.findOne({ISBN: req.params.ISBN});
        if(book)
        {
            
                await Books.findByIdAndDelete(book._id);
                res.status(200).json("book has been deleted");
            
        }
        else{
            res.send("Invalid ISBN number");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//Get
router.get("/:ISBN", async (req, res) => {
    try{
        const book = await Books.findOne({ISBN: req.params.ISBN});
        if(book)
        {
    
            res.status(200).json(book);
        }
        else{
            res.send("Book not found");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GetAll

router.get("/", async (req, res) => {
    try{
        const book = await Books.find();
        // if(book)
        // {
        //     res.status(200).json(book);
        // }
        // else{
        //     res.send("Book not found");
        // }
        res.status(201).json(book);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

module.exports = router