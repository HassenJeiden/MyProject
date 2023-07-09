var User = require('../models/user');
var Userlist = require('../models/listOfUsers');
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')


var userRegister = async (req, res) => {
  try {
    var { email, password,userType } = req.body
    var finduser = await Userlist.findOne({ 'email': email })
    console.log(finduser)
    //user already exists
    if (!finduser) {
      res.status(400).json({ success: false, message: 'Email not registred' })
    } else  {
      if (!finduser.registred) {
        console.log(finduser.registred)
        const salt = bcrypt.genSaltSync(5);
        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log(email,hashedPassword)
        const nweUser = await User.create({
          email, password: hashedPassword,userType:finduser.userType
        })
        console.log(nweUser)
        const token = jwt.sign({ id: User._id }, process.env.JWT_TKN, { expiresIn: '1d' })
        await Userlist.findOneAndUpdate({ email: email }, { registred: true })
        console.log(Userlist)
        res.status(201).json({ message: "User created succussfully", nweUser,token })
      } else {
        res.status(400).json({ success: false, message: 'allready registred' })
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to register Profile" })
  }
}
var userLogin = async (req, res, next) => {
  var { password, email } = req.body
  var user = await User.findOne({ "email": email })
  //user does not exists
  if (!user) {
    res.status(400).json({ success: false, message: 'This email does not exists!Try to register' })
  } else {
    var checkPW = await bcrypt.compare(password, user.password)
    if (!checkPW) {
      res.status(400).json({ success: false, message: 'Invalid Inputs' })
    }
    const token = jwt.sign({ id: User._id }, process.env.JWT_TKN, { expiresIn: '1d' })
    var userDetails = await Userlist.findOne({ "email": email })
    var usertype=userDetails.userType
    var email=userDetails.email
    res.status(201).json({ message: "login sucess",email, usertype, token })
  }
}
var submitTest = async (req, res) => {
  try {
      var { type, question, level, group, prof } = req.body
      //add test
      const newTest = await test.create({
          type, question, level, group, prof
      })
      console.log(newTest)
      res.status(201).json({ message: "test created succussfully", newTest })
  } catch (error) {
      res.status(500).json({ message: "Unable to create test", error: error.message })
  }
  
}



module.exports = { userRegister, userLogin  }