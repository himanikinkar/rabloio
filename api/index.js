const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authBook = require("./routes/auth");
const updateBook = require("./routes/books");


dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authBook);
app.use("/api/books", updateBook);

app.listen(process.env.PORT || 8800 , ()=> {
    console.log("Backend server is running");
})