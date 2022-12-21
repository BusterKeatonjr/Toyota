var express = require('express')
var router = express.Router()
var Car = require("../models/pudge").Car
var User = require("./../models/user").User
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
  /* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
var username = req.body.username
var password = req.body.password
User.findOne({username:username},function(err,user){
  if(err) return next(err)
  if(user){
      if(user.checkPassword(password)){
          req.session.user = user._id
          res.redirect('/')
      } else {
        res.render('logreg',{error:"Пароль не верный"});
      }
 } else {
 var user = new User({username:username,password:password})
      user.save(function(err,user){
          if(err) return next(err)
          req.session.user = user._id
          res.redirect('/')
      })        
}
})
});


module.exports = router