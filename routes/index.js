var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/person', function(req, res, next) {
  res.render('person', { title: 'person' });
});

module.exports = router;
