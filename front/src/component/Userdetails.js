import React from 'react';
import { useForm } from "react-hook-form";
import './mystyles.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, deleteUser } from '../actions/usersActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'



const Userdetails = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const userDetail = useSelector(state => state.user.userInfos)
    const message = useSelector(state => state.user.message)
    const { id } = useParams();
    const user = userDetail.find((el) => el._id === id)
    const isdelete = typeof user !== 'undefined'
    console.log(isdelete)
    const edit = (data) => {
        dispatch(editUser(data))
        document.getElementById("myForm").reset()
    }
    const goToHome = () => { nav('/Administration') }

    return (
        <div>
            <form onSubmit={handleSubmit(edit)} id='myForm'>
                <Row className="mb-3 myfont ">
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="form-outline mb-4">
                        <label>curent: {isdelete ? `${user.userType}` : 'Deleted'}</label>
                        <select required className='custom-select' {...register("userType")}>
                            <option ></option>
                            <option value={"STUDENT"}>Student</option>
                            <option value={"TEACHER"}>Teacher</option>
                        </select >
                        <label>curent: {isdelete ? `${user.level}` : 'Deleted'}</label>
                        <select required className='custom-select' {...register("level")}>
                            <option ></option>
                            <option value={1}>Level 1</option>
                            <option value={2}>Level 2</option>
                            <option value={3}>Level 3</option>
                            <option value={4}>Level 4</option>
                        </select>
                        <label>curent: {isdelete ? `${user.group}` : 'Deleted'}</label>
                        <select required className='custom-select' {...register("group")}>
                            <option ></option>
                            <option value={"A"} >Group "A"</option>
                            <option value={"B"} >Group "B"</option>
                            <option value={"C"} >Group "C"</option>
                            <option value={"D"} >Group "D"</option>
                            <option value={"E"} >Group "E"</option>
                            <option value={"F"} >Group "F"</option>
                        </select>
                        <br />
                        <Form.Control required type="text" placeholder={isdelete ? `${user.firstName}` : 'Deleted'} {...register("firstName")} />
                        <Form.Control required type="text" placeholder={isdelete ? `${user.lastName}` : 'Deleted'} {...register("lastName")} />
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control required type="email" placeholder={isdelete ? `${user.email}` : 'Deleted'} {...register("email")} />
                            <Form.Control type="text" value={isdelete ? `${user._id}` : 'Deleted'} {...register("_id")} />
                        </Form.Group>
                    </Form.Group>
                </Row>
                <button type="submit" className='btn btn-outline-danger mb-4 mybutton'>Edit User</button>
            </form>
            <button type="submit" className='btn btn-outline-danger mb-4 mybutton'>Edit User</button>
            <button className='btn btn-outline-danger mb-4 mybutton' on onClick={(data) => { dispatch(deleteUser(user._id)) }}>Delete User</button>
            <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Leave</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Userdetails;