var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create Job Schema

var Job = new Schema({
  companyLinkedinID: String,
  title: String,
  employmentType: String,
  //full-time, part-time, contract
  description: String,
  personSpecification: String,
  salary: {
    min: Number,
    max: Number,
    currency: String,
    payPeriod: String
    //"per year", "per day"
  },
  hiringManagerEmail: String,
  createdDate: Date,
  postingStatus: String,
  //draft, pending, live, filled, withdrawn
  createdbyUser: String,
  //ObjectID of user
  bounty: {
    currency: String,
    amount: Number,
    status: String
    //unpaid, paid, refunded, transferred
  }
});

//To-do: add field validation

module.exports = mongoose.model('jobs', Job);
