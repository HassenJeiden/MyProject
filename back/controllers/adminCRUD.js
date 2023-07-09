
var Userlist = require('../models/listOfUsers');

var userlistRegister = async (req, res) => {
    try {
        var { firstName, lastName, userType, email, level, group } = req.body
        var user = await Userlist.findOne({ 'email': email })
        //user already exists
        if (user) {
            res.status(400).json({  message: 'This email is already exists!' })
        } else {
            await Userlist.create({
                firstName, lastName, userType, email, level, group,
            })
            const newListUser = await Userlist.find()
            res.status(201).json({ msg: "User created succussfully", newListUser })
        }

    } catch (error) {
        res.status(500).json({message: "Unable to register Profile",error: error.message })
    }
}
var allRegister = async (req, res) => {
    try {
        const newListUser = await Userlist.find()
        res.status(200).json({ message: 'all records are following:', newListUser })
    } catch (error) {
        res.status(500).json({ message: "somthing went wrong", error: error.message })
    }
}

var delOneUser = async (req, res) => {
    try {
        await Userlist.deleteOne({ _id: req.params["id"] })
        const newListUser = await Userlist.find()
        res.status(200).json({ message: 'Yser Deleted Succusffuly:', newListUser })
        
    } catch (error) {
        res.status(500).json({ message: "Unable to Delete user", error: error.message })
    }

}

var editUser = async (req, res) => {
    try {
        const { _id } = req.body
        console.log(_id)
        const { firstName, lastName, userType, level, group,email } = req.body
        await Userlist.findOneAndUpdate({ _id},
            { "firstName": firstName, "lastName": lastName, "userType": userType, "level": level, "group": group,"email": email })
        const newListUser = await Userlist.find()
        res.status(200).json({ message: 'user edited succusffuly:', newListUser })
    } catch (error) {
        res.status(500).json({ message: "Unable to edit user", error: error.message })
    }
}
module.exports = { userlistRegister, allRegister, delOneUser, editUser }