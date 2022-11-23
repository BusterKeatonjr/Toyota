var express = require('express');
var router = express.Router();

/* GET home page. */
r/* Страница Карамельки */
router.get('/CAMRY', function(req, res, next) {
  res.render('car', {
      title: "Camry",
      picture: "images/Camry.jpg",
      desc: ""
  });
});

/* Страница Компота */
router.get('/CROWN', function(req, res, next) {
  res.render('car', {
      title: "Crown",
      picture: "images/Crown.jpg",
      desc: "."
  });
});

/* Страница Коржика */
router.get('/PRIUS', function(req, res, next) {
  res.render('car', {
      title: "Prius",
      picture: "images/Prius.jpg",
      desc: ""
  });
});


module.exports = router;
