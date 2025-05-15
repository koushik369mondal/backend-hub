const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log("Middleware function executed");
    const a = 2;
    const b = 3;
    console.log(a + b);
    return next();
})

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
