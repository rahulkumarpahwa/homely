const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const Donor = require("./models/donor");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

}



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
 res.render("main/getInvolved.ejs");
});

app.get("/homely/about", (req, res) => {
  res.render("main/about.ejs");
});

app.get("/homely/donate", (req, res) => {
 res.render("main/donate.ejs");
});

app.post("/homely/donate", async(req,res)=>{
  console.log(req.body.donor);
// await Donor.create(...req.body.donor);
// res.send("/homely/donate");
});

app.listen(8080, ()=>{
    console.log("server is listening at port 8080");
});

