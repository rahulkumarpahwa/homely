const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();
app.engine("ejs", ejsMate); 


app.use(express.static("public"));
app.use(express.static(path.join(__dirname ,"/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get ("/", (req,res)=>{
// res.send("this is root!");
res.redirect("/homely");
});

app.get("/homely", (req,res)=>{
// res.send(" this is the main page");
res.render("main/homely.ejs");
});

app.get("/homely/get-involved", (req, res) => {
  res.send(" this is the get-involved page");
});

app.get("/homely/about", (req, res) => {
  res.send(" this is the about page");
});

app.get("/homely/donate", (req, res) => {
  res.send(" this is the donate page");
});

app.listen(8080, ()=>{
    console.log("server is listening at port 8080");
});

