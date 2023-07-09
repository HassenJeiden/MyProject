import React from 'react';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mininav from './mininav';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTest,deleteTest } from '../actions/testActions';
import { useForm } from "react-hook-form";

const Testsliste = () => {
    
    const { register, handleSubmit } = useForm();
    const exams = useSelector(state => state.testactions.alltest)
    const message = useSelector(state => state.testactions.message)
    const dispatch = useDispatch()
    const control = () => {dispatch(getAllTest())}
    const delet = (data) => {
        dispatch(deleteTest(data))
        dispatch(getAllTest())
    }
 
    return (
        <div>
            <Mininav />
            <div>
                <button type="button" className="btn btn-outline-success mybutton" 
                onClick={control}>Show Exams</button>
                <p className=" btn-outline-danger mb-4 myfont">{message}</p>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Sience</th>
                            <th scope="col">Level</th>
                            <th scope="col">Group</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((test) => (<tr >
                            <th scope="row" >{test._id}
                            
                            </th>
                            <td>{test.testType}</td>
                            <td>{test.level}</td>
                            <td>{test.group}</td>
                            <td>{test.email}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmit(delet)}>
            <input className="form-control" type="text" {...register("_id")}></input>
            <button type="submit" className="btn btn-outline-danger mybutton" >Delete</button>
            </form>
        </div>
    )
}

export default Testsliste