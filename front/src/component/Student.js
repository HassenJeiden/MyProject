import React from 'react'
import Form from 'react-bootstrap/Form';
import './mystyles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/signInActions';


const Student = () => {
  
  const dispatch = useDispatch()
  const nav = useNavigate()
  const goToHome = (data) => {
    dispatch(signIn(data))
    nav('/')
  }

  return (

    <div >
      <h1 className='myfont'>Test Subject</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='myfont'>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='myfont'>Type your test here</Form.Label>
          <Form.Control as="textarea" rows={19} />
          <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Leave</button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Student