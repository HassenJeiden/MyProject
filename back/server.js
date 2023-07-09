const express = require ('express')
const app= express()
const mongoose= require('mongoose')
const dotenv= require('dotenv').config()
const cors=require('cors')
app.use(cors('http://localhost:5000'))
////connect databse
const conectDB=require('./config/dbConnextion')
conectDB()
//////////////////////////
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
const port= process.env.PORT
app.use(express.json())
app.use('/api',require('./routes/routes'))

app.listen(port,()=>{console.log('app listening on port',port)})
