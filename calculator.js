const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = (weight) / ((height/100) * (height/100));

  res.send("Your BMI is %" + result);
});

app.listen(3000, function() {
  console.log("Server 3000 started...");
});
