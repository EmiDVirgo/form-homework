const express = require("express");
const bodyParser = require("body-parser");
const ejse = require("ejs");
const _ = require("lodash");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req,res){
  res.render("home");
})

app.post("/", function(req,res){
  res.render("home");
})




app.listen(process.env.PORT || 3000, function(){
  console.log("this server is running on port 3000");
})
