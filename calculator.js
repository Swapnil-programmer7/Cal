const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// this is the route that will calculate the sum of two numbers
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result is " + result);
});
// sum calculator ends here


// this is the route that will calculate the BMI of a person
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight / (height * height);

    res.send("Your BMI is " + result);
});
// bmi calculator ends here

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});