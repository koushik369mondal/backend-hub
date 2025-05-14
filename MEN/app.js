const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Home Page");
    }
    if (req.url == "/about") {
        res.end("About Page");
    }
    if (req.url == "/profile") {
        res.end("Profile Page");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
