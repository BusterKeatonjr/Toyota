var express = require('express')
var router = express.Router()
var Pudge = require("../models/pudge").Pudge
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с pudge')
});

/* Страница машин */
router.get('/:nick', function(req, res, next) {
  Car.findOne({nick:req.params.nick}, function(err,car){
      if(err) return next(err)
      if(!car) return next(new Error("Нет такого "))
      res.render('car', {
          title: car.title,
          picture: car.avatar,
          desc: car.desc
      })
  })
})
/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });
  


module.exports = router