var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST sign in. */
router.post('/signin', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
