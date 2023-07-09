var mongoose = require('mongoose');

var listOfUserSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true,
  },
  userType : {
    type : String,
    enum : ['TEACHER', 'STUDENT'],
    required : true 
  },
  level : {
    type : String,
    required : true
  },
  group : {
    type : String,
    required : true
  }
  ,
  email : {
    type : String,
    required : true
  }
  ,
  registred : {
    type : Boolean,
    required : true,
    default:false
  }
})

 
module.exports = listOfUsers = mongoose.model('listOfUsers', listOfUserSchema)