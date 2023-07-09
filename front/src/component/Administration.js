import React from 'react';
import { useForm } from "react-hook-form";
import './mystyles.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, allUser } from '../actions/usersActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';


function Administration() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const allregister = useSelector(state => state.user.userInfos)
  const message = useSelector(state=>state.user.message)
  const alluser = () => { dispatch(allUser())}
  const control = (data) => {dispatch(registerUser(data))}
  const goToHome = () => { nav('/') }


  return (
    <div>
      <form onSubmit={handleSubmit(control)} id='myForm'>
        <Row className="mb-3 myfont ">
          <Form.Group as={Col} md="12" controlId="validationCustom01" className="form-outline mb-4">
            <label>Select user type :</label>
            <select  className='custom-select' {...register("userType")}>
              <option required ></option>
              <option  value={"STUDENT"}>Student</option>
              <option  value={"TEACHER"}>Teacher</option>
            </select >
            <label className='lbl'>level : </label>
            <select className='custom-select' {...register("level")}>
              <option ></option>
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
              <option value={4}>Level 4</option>
            </select>
            <label className='lbl'>group :</label>
            <select className='custom-select' {...register("group")}>
              <option ></option>
              <option value={"A"} >Group "A"</option>
              <option value={"B"} >Group "B"</option>
              <option value={"C"} >Group "C"</option>
              <option value={"D"} >Group "D"</option>
              <option value={"E"} >Group "E"</option>
              <option value={"F"} >Group "F"</option>
            </select>
            <br />
            <Form.Control required type="text" placeholder="First name" {...register("firstName")} />
            <Form.Control required type="text" placeholder="Last name" {...register("lastName")} />
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control required type="email" placeholder="name@example.com"  {...register("email")} />
            </Form.Group>
            <button type="submit" className='btn btn-outline-danger mb-4 mybutton'>Submit form</button>
          </Form.Group>
        </Row>
      </form>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">LastName</th>
              <th scope="col">Status</th>
              <th scope="col">Explore</th>
            </tr>
          </thead>
          <tbody>
            { typeof allregister !== 'undefined'? allregister.map((user) => (<tr>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.registred ? 'Registred' : 'Not Registred'}</td>
              <td><Link to={`/Administration/${user._id}`}>Details</Link></td>
            </tr>)):alert(message)}
          </tbody>
        </table>
      </div>
      <button type="submit" className='btn btn-outline-danger mb-4 mybutton' onClick={alluser()}>See All Users</button>
      <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Leave</button>
    </div>
  );
}

export default Administration;