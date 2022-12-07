var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Страница машин */
router.get('/:nick', function(req, res, next) {
  Cat.findOne({nick:req.params.nick}, function(err,car){
      if(err) return next(err)
      if(!car) return next(new Error("Такой машины не существует"))
      res.render('car', {
          title: car.title,
          picture: car.avatar,
          desc: car.desc
      })
  })
})
