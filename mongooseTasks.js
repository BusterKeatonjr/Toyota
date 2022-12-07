var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var car = require("./models/car").car


var car = new car({
title: "Маштна",
})


console.log(car)
car.save(function(err, car, affected){
console.log(car.title)
})

