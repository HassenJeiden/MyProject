import { Navigate,Outlet } from 'react-router-dom';
import Student from './component/Student';
import Teacher from './component/Teacher';
import Administration from './component/Administration';
import Login from './component/Login';
import SignUp from './component/SignUp';

const routes = (isLoggedIn) => [
    { path: '/Login',element: <Login />},
    { path: '/Register',element: <SignUp />},
    {
    path: '/Student', element: {if (isLoggedIn="Student") {<Student />} else {<Navigate to="/Student" />}},
    children: [
      { path: '/dashboard', element: <Teacher /> },
      { path: '/account', element: <Administration /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      {path: 'member', element: <Outlet />,
        children: [
          { path: '/', element: <MemberGrid /> },
          { path: '/add', element: <AddMember /> },
        ],
      },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;