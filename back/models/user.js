var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
     email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  }
})


module.exports = User = mongoose.model('users', userSchema)