const express = require("express");
const morgan = require('morgan')
const app = express();
const userModel = require('./models/user')
const dbConnection = require('./config/db')

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ encoded: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/profile", (req, res) => {
    res.send("This is the profile page");
});

app.get("/register", (req, res) => {
    res.render('register');
})

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("User registered");
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send("Form data received");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
