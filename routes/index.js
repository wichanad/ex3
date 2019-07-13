var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'งงในงง' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'งงในงง' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'งงในงง' });
});
module.exports = router;
