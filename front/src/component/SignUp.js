import React from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch,useSelector } from 'react-redux';
import { signUp } from '../actions/signUpAction';
import './mystyles.css';
import { useNavigate } from 'react-router-dom';



function Register() {
 
  const nav = useNavigate()
  const goToHome=()=>{
    nav('/')
  }
  
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const control = (data) => {
    dispatch(signUp(data))
  }
  var message=useSelector(state=>state.signup.message)
  const isregistred = useSelector(state=>state.signup.isRegistred)
  if (isregistred) {nav('/')} else {message ="Operation not done"}
  return (
    <div className='login-box'>
      <h1 className='myfont'>Register</h1>
      <Form noValidate onSubmit={handleSubmit(control)}>
        <Row className="mb-3 myfont">
          <Form.Control  required type="text" placeholder="First name"  {...register("email")} />
          <br />
          <Form.Control type="password" placeholder="password"  {...register("password")} />
          <Form.Text className='myfont' >
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Text id="passwordHelpBlock" muted>{message}</Form.Text>
        </Row>
        <button type="submit" className="btn  btn-outline-danger mb-4 mybutton">Submit form</button>
        <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Cancel</button>
      </Form>


    </div>

  );
}

export default Register; 