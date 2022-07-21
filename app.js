//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'Our secret',
  resave: false,
  saveUninitialized: false,
}));


// mongoose.connect("mongodb+srv://aishu:18011M2201@cluster.czvok.mongodb.net/candyDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
///////////////////////////get///////////////////////
app.get("/",function(req,res){
  res.render("game")
})




/////////////////////////////listen///////////////////////////////

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("in port 3000");
});
