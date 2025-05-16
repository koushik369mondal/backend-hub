const express = require("express");
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    const a = 2;
    const b = 3;
    console.log(a + b);
    next();
}, (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/profile", (req, res) => {
    res.send("This is the profile page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
