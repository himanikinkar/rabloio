const router = require("express").Router();
const Book = require("../Books");
const validate = require("../routes/regex");
const jwt = require("jsonwebtoken");

router.post("/books", validate, async (req,res)=>{
    try {
        const newBook = new Book({
            name: req.body.name,
            ISBN: req.body.ISBN,
            author: req.body.author,
            price: req.body.price,
            year: req.body.year,
            stocks: req.body.stocks,
            digitalform: req.body.digitalform,
        });
        const book = await newBook.save();
        // const accessToken = jwt.sign(book, process.env.ACCESS_SECRET_TOKEN)
        res.status(201).json(book);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;