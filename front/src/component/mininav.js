import React from 'react'
import { useNavigate } from 'react-router-dom';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/signInActions';

const Mininav = () => {
    
const dispatch = useDispatch()
  const exit = (data) => {
    dispatch(signIn(data))
    nav('/')
  }
    const nav = useNavigate()
    const goToHome = () => {
        nav('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-nav">
                <div className="container-fluid">
                    <a className="nav-link active" aria-current="page" href="/Teacher" onClick={goToHome}>Home</a>
                    <a className="nav-link active" aria-current="page" href="/Teacher/AddTest">Create/Edit Exam</a>
                    <a className="nav-link active" aria-current="page" href="/Teacher/Alltest">See Exams</a>
                    <a className="nav-link active" aria-current="page" href="/Teacher" onClick={exit}>Exit</a>
                </div>
            </nav>
        </div>
    )
}

export default Mininav