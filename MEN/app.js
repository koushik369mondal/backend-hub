const express = require("express");
const morgan = require('morgan')
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

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

app.post("/register", async (req, res) => {

    const { username, email, password } = req.body;

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })

    console.log(req.body);
    res.send(newUser);
})

app.get("/get-users", (req, res) => {
    userModel.find({
        username: "charlie"
    }).then((user) => {
        console.log(user);
        res.send(user);
    })
})

app.get("/update-user", async (req, res) => {
    await userModel.findOneAndUpdate({
        username: "demo"
    }, {
        email: "demo123@gmail.com"
    })
    res.send("User updated");
})

app.get("/delete-user", async (req, res) => {
    await userModel.findOneAndDelete({
        username: "demo"
    })
    res.send("User deleted");
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send("Form data received");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
