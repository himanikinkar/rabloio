

// regex = (type, data) => {
//     const regex = {
//         name: ^[A-Za-z][A-Za-z0-9_]{7,29}$
//         ISBN: ^[0-9_]{,13}$,
//     }
// };

// if(type === "name")
// {
//     if(regex.name.text(data)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// else if(type === "ISBN")
// {
//     if(regex.ISBN.text(data)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function validate(req, res, next) {
    const {
       name,
       ISBN,
    } = req.body
    
    if(typeof(ISBN) != "string" || typeof(name) != "string" || ISBN.length != 13)
    {
        return res.send("invalid input data");
    }
    next();
}

module.exports = validate;