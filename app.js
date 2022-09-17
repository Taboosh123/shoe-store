const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


bodyParser.urlencoded({
    extended: true
});

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.use(express.static("public/album"));


app.get("/", (req, res) => {
    res.render("home", {});
});

app.get("/checkout", (req, res) => {
    res.render('checkout', {});
});

app.get("/signin", (req, res) => {
    res.render('signin', {});
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});