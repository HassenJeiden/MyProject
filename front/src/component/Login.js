import React from 'react';
import './mystyles.css';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../actions/signInActions';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




const Login = () => {
  const nav = useNavigate()
  const isHwo = useSelector(state => state.signin.message)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const control = (data) => {
    dispatch(signIn(data))
  }
const goToSin=()=>{
  nav('/Register')
}
const goToHome=()=>{
  nav('/')
}
  return (
    <form className='login-box' onSubmit={handleSubmit(control)}>
      <div className="form-outline mb-4">
        <input type="email" placeholder='E-mail' className="form-control" {...register("email")} />
        <br />
        <input type="password" placeholder='password' className="form-control" {...register("password")} />
        <br />
        <button type="submit" className="btn btn-primary btn-block mb-4 mybutton">Sign in</button>
        <button type="button" onClick={goToSin} className="btn  btn-outline-danger mb-4 mybutton">Sign Up</button>
        <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Cancel</button>
       <h1>{isHwo}</h1>
      </div>
    </form>
  )
}

export default Login 