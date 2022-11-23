var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/CAMRY', function(req, res, next) {
  res.send("<h1>Страница Camry</h1>")
});
router.get('/CROWN', function(req, res, next) {
  res.send("<h1>Страница Crown</h1>")
});
router.get('/PRIUS', function(req, res, next) {
  res.send("<h1>Страница Prius</h1>")
});

module.exports = router;
