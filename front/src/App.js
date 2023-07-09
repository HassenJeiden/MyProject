
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Administration from './component/Administration';
import Login from './component/Login';
import SignUp from './component/SignUp';
import TeacherAddTest from './component/TeacherAddTest';
import TeacherDashBoard from './component/TeacherDashBoard';
import Userdetails from './component/Userdetails';
import { useSelector } from 'react-redux';

import Testsliste from './component/Testsliste';
import Selecttest from './component/StudentDashBord';


function App() {

  const hwoIs = useSelector(state => state.signin.usertype)

 

  return (
    <div className="App">
      <Routes>
        <Route path="/Teacher" element={(() => {
          if (hwoIs === 'TEACHER') { return <TeacherDashBoard /> }
          else { return <Login /> }
        })()} />
        <Route path="/Teacher/AddTest" element={(() => {
          if (hwoIs === 'TEACHER') { return <TeacherAddTest /> }
          else { return <Login /> }
        })()} />
                <Route path="/Teacher/Alltest" element={(() => {
          if (hwoIs === 'TEACHER') { return <Testsliste /> }
          else { return <Login /> }
        })()} />
        <Route path="/Student" element={(() => {
          if (hwoIs === 'STUDENT') { return <Selecttest /> }
          else { return <Login /> }
        })()} />
        <Route path='/Administration' element={(() => {
          if (hwoIs === 'Admin') { return <Administration /> }
          else { return <Login /> }
        })()} />
        <Route path={`/Administration/:id`} element={(() => {
          if (hwoIs === 'Admin') { return <Userdetails /> }
          else { return <Login /> }
        })()} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        
      </Routes>

    </div>
  );
}

export default App;
