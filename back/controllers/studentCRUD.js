var tests = require('../models/test');


var passTest = async (req, res) => {

}
var selectTests = async (req, res) => {
    try {
        const { testType,group,level } = req.body
        console.log(testType)
        const findtest = await tests.find({'testType':testType,'group':group,'level':level})
        res.status(201).json({ message: "tests with selected criterias are folowuing:", findtest })
    } catch (error) {
        res.status(500).json({  message: "Unable to find any test with selected criterias" })
    }
}
module.exports = { passTest,selectTests }