var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Referly' });
});

/* GET dashboard, only if logged in */
/* This code probably will not work - fit it after getting the views ready and some data in the Jobs collection


router.get('/dashboard', loggedIn, function(req, res, next) {
  var userCreatedJobs = db.jobs.count({"createdbyUser" = user._id);
  if userCreatedJobs === 0 {
    res.render('emptyDashboard', { title: 'Jobs Dashboard'})
  };
  else res.render('dashboard', { title: 'Jobs Dashboard'})

  });
*/

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
