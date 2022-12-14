var express = require('express')
var router = express.Router()
var Car = require("../models/car").Car


/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('greeting', 'Hi!!!').render('index', { title: 'Express', menu:menu });
});


/* Страница Camry */
router.get('/CAMRY', function(req, res, next) {
  res.render('car', {
      title: "Camry",
      picture: "images/Camry.jpg",
      desc: "Стильный дизайн с динамичными линиями кузова, эффектная форма переднего бампера, решетка радиатора с боковой серебристой окантовкой, новые цвета экстерьера и уникальный двухцветный окрас кузова для специальной серии GR SPORT — все это подчеркивает выразительный облик бизнес-седана."
  });
});

/* Страница Crown */
router.get('/CROWN', function(req, res, next) {
  res.render('car', {
      title: "Crown",
      picture: "images/Crown.jpg",
      desc: "."
  });
});

/* Страница Prius */
router.get('/PRIUS', function(req, res, next) {
  res.render('car', {
      title: "Prius",
      picture: "images/Prius.jpg",
      desc: ""
  });
});


module.exports = router;
