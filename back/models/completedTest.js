var mongoose = require('mongoose');

var completedTestSchema = new mongoose.Schema({
   owner: {
    type: String,
    ref: listOfUsers,
  },
  note: {
    type: String,
    required: true,
    default:888
  },
  cours: {
    type: String,
    required: true,
    enum : ['Ar', 'En','Fr'],
  },
  subject: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  dateTest: {
    type: Date,
    required: true,
  }
})


module.exports = completedTest = mongoose.model('completedTest', completedTestSchema)