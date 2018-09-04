//configuration of the Linkedin passport strategy

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var User = require('../models/user');
var config = require('../config');
var init = require('./init');


passport.use(new LinkedInStrategy({
  //[RB] changed 'consumerKey' to 'clientID' to get the server to start.
    clientID: config.linkedin.clientID,
    clientSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL,
    scope: ['r_emailaddress', 'r_basicprofile']
  },
  // linkedin sends back the tokens and profile info
  function(token, tokenSecret, profile, done) {

    //console.log("+++++++++");
    //console.log(profile._json.positions.values);

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id,
      currentPositions: profile._json.positions.values


  /* need to add:
      email:
      currentcompanyIDs: profile.positions.companyID
      currenctcompanyName: profile.positions.companyName

      what if the user has 2+ 'current positions'?  */
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;
