var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Sign in with Linkedin.
router.get('/signin', function(req, res, next) {
  res.send('Go back and register!');
}); */

router.get('/signin', passportLinkedIn.authenticate('linkedin'));

router.get('/signin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/signin' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });

module.exports = router;
