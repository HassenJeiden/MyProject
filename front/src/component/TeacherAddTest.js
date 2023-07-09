import React from 'react'
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { submitTest } from '../actions/testActions';
import { signIn } from '../actions/signInActions';
import { useForm } from "react-hook-form";
import Mininav from './mininav';

const Teacher = () => {
  const { register, handleSubmit } = useForm();
  const Email = useSelector(state => state.signin.email)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const control = (dataTest) => {
    dispatch(submitTest(dataTest))
    document.getElementById("myForm").reset()
  }
  
  const goToHome = (data) => {
    dispatch(signIn(data))
    nav('/')
  }

  return (
    <div>
      <Mininav />
      <Form id='myForm' onSubmit={handleSubmit(control)}>
        <select className='custom-select' {...register("testType")}>
          <option value={1} >Test Type</option>
          <option value={"Ar"} >Ar</option>
          <option value={"En"} >En</option>
          <option value={"Fr"} >Fr</option>
        </select>
        <select className='custom-select' {...register("level")}>
          <option value={1} >Select Level</option>
          <option value={2} >Level 1</option>
          <option value={3} >Level 2</option>
          <option value={4} >Level 3</option>
          <option value={5} >Level 4</option>
        </select>
        <select className='custom-select' {...register("group")}>
          <option >Select Group</option>
          <option value={"A"} >Group "A"</option>
          <option value={"B"} >Group "B"</option>
          <option value={"C"} >Group "C"</option>
          <option value={"D"} >Group "D"</option>
          <option value={"E"} >Group "E"</option>
          <option value={"F"} >Group "F"</option>
        </select>
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' value={Email} {...register("email") } />
        <br />
        <br />
        <Form.Group className="mb-3 myfont" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="textarea" rows={15} {...register("question")} />
        </Form.Group>

        <button type="submit" className="btn  btn-outline-danger mb-4 mybutton">Subbmit</button>
        <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Leave</button>
      </Form>
    </div>
  )
}

export default Teacher