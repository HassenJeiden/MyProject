var routes = require('express').Router()
var{ userLogin, userRegister,}=require('../controllers/usersCRUD')
var{ addTest, editTest, deleteTest,getAllTest,getOneTest }=require('../controllers/teacherCRUD')
var{userlistRegister,allRegister,delOneUser,editUser}=require('../controllers/adminCRUD')
var{passTest,selectTests}=require('../controllers/studentCRUD')

routes.post('/Register',userRegister)
routes.post('/admin/add',userlistRegister)
routes.post('/Login',userLogin)
routes.post('/student/passTest',passTest)
routes.put('/student/getTest',selectTests)
routes.get('/teacher/TheTest',getOneTest)
routes.get('/teacher/allTest',getAllTest)
routes.get('/admin/allUser',allRegister)
routes.post('/teacher/addTest',addTest)
routes.post('/teacher/deleteTest',deleteTest)
routes.delete("/admin/deleteUser/:id",delOneUser)
routes.put('/teacher/editTest/:id',editTest)
routes.put("/admin/editUser",editUser)



module.exports = routes