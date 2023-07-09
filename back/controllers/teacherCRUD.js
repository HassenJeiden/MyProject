
var tests = require('../models/test');


var addTest = async (req, res) => {
    try {
        var { testType, question, level, group, email } = req.body
        //add test
        const newTest = await tests.create({
            testType, question, level, group, email
        })
        console.log(newTest)
        res.status(201).json({ message: "test created succussfully", newTest })
    } catch (error) {
        res.status(500).json({ message: "Unable to create test", error: error.message })
    }
    
}
var editTest = async (req, res) => {
    try {
        const {id,type,question,level,group} = req.body
        const testedit = await tests.findOneAndUpdate({_id: id}, { "type":type,"question":question,"level":level,"group":group })
        console.log(testedit)
        res.status(200).json({ message: 'test edited succusffuly:', testedit })
    } catch (error) {
        res.status(500).json({ message: "Unable to edit test", error: error.message })
    }
}
var deleteTest = async (req, res) => {
    try {

        const {_id} = req.body;
        console.log(_id)
        const deletedtest = await tests.findOneAndDelete({_id:_id});
        if (deletedtest.deletedCount === 0) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.status(200).json({ message: 'Test deleted', deletedtest });
    } catch (error) {
        res.status(500).json({ message: "Unable to delete test", error: error.message });
    }
}
var getAllTest = async (req, res) => {
    try {

        const AllTest = await tests.find()
        res.status(200).json({ message: 'all records are following:', AllTest })
    } catch (error) {
        res.status(500).json({ message: "somthing went wrong", error: error.message })
    }
}
var getOneTest = async (req, res) => {
    try {
        const {testid} = req.body
        const TheTest = await tests.find({testid})
        res.status(200).json({ message: 'all records are following:', TheTest })
    } catch (error) {
        res.status(500).json({ message: "somthing went wrong", error: error.message })
    }
}


module.exports = { addTest, editTest, deleteTest, getAllTest,getOneTest }