const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req,res) => {
    res.send("Hi, I am root");
});

// home route
app.get("/home/face", async (req, res) => {
    res.render("home/face.ejs");
});

app.get("/home/project", async (req, res) => {
    res.render("home/project.ejs");
});

app.get("/home/logo", async (req, res) => {
    res.render("home/logo.ejs");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});