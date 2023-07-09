const mongoose=require('mongoose')

const conectDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
.then(console.log('database connected successfully'))
.catch(err=>{if (err) throw err})
}


module.exports = conectDB