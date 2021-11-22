const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true   //This trow some error in the terminal
}).then(console.log("Conntected to MongoDB")).catch(err => console.log(err));

app.use("/", (req, res) => {
    console.log("Hello this is main url");
})

app.listen("5000", () => {
    console.log("Backend is runing");
})