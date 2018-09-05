var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dashboard, only if logged in */

router.get('/dashboard', function(req, res, next) {

//is user loggedin? yes = next

//if user has posted jobs, render dashboard.pug



  res.render('dashboard', { title: 'Dashboard'});
});

/* Sign in with Linkedin. */

router.get('/signin', passportLinkedIn.authenticate('linkedin'));

router.get('/signin/callback',
  passportLinkedIn.authenticate('linkedin', { successRedirect: '/dashboard', failureRedirect: '/' }
),
  function(req, res) {
    // Successful authentication
    //could put another handler function here?
    //res.json(req.user);
  });

//Log out

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
