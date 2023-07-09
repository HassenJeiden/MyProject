import React from 'react';
import { useForm } from "react-hook-form";
import './mystyles.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { selectTest } from '../actions/studentActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../actions/signInActions';


function Selecttest() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const tests = useSelector(state => state.student.alltests)
    const select = (data) => { dispatch(selectTest(data)) }
    const goToHome = (data) => { 
        dispatch(signIn(data))
        nav('/') }


    return (
        <div>
            <form onSubmit={handleSubmit(select)} id='myForm'>
                <Row className="mb-3 myfont ">
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="form-outline mb-4">
                        <select className='custom-select' {...register("testType")}>
                            <option required >Select test</option>
                            <option value={"Ar"}>Ar</option>
                            <option value={"En"}>En</option>
                            <option value={"Fr"}>Fr</option>
                        </select >
                        <select className='custom-select' {...register("level")}>
                            <option >Select Level</option>
                            <option value={1}>Level 1</option>
                            <option value={2}>Level 2</option>
                            <option value={3}>Level 3</option>
                            <option value={4}>Level 4</option>
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
                        <br />
                        <button type="submit" className='btn btn-outline-danger mb-4 mybutton'>Show Selection</button>
                    </Form.Group>
                </Row>
            </form>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Test</th>
                            <th scope="col">Level</th>
                            <th scope="col">Group</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tests !== 'undefined'?tests.map((test) => (<tr>
                            <td>{test.testType}</td>
                            <td>{test.level}</td>
                            <td>{test.group}</td>
                              <td><Link to={`/Administration/${test._id}`}>Details</Link></td>
                        </tr>)):alert('something went wrong')}
                    </tbody>
                </table>
            </div>
            <button type="button" onClick={goToHome} className="btn  btn-outline-danger mb-4 mybutton">Leave</button>
        </div>
    );
}

export default Selecttest;