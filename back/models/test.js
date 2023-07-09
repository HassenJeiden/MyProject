var mongoose = require('mongoose');

var testsSchema = new mongoose.Schema({
 testType: {
    type: String,
    required: true,
    enum : ['Ar', 'En','Fr'],
  },
  question: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
  

})


module.exports = tests = mongoose.model('tests', testsSchema)