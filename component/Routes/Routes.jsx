
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../src/pages/Home/home/Home.jsx';
import Main from '../layout/Main.jsx';
import Login from '../../src/pages/Home/Login/Login.jsx';
import Signup from '../../src/pages/Home/signup/Signup.jsx';
import Instructor from '../../src/pages/Home/instructor/Instructor.jsx';
import Classescard from '../../src/pages/Home/Classes/Classescard.jsx';
import Privaterout from '../privateroute/Privaterout.jsx';
import Deshbord from '../layout/Deshbord.jsx';

import Myselectedclasses from '../../src/pages/myslectedclasses/Myselectedclasses.jsx';
import ALLusers from '../../src/pages/ALLstudents/Allstudents.jsx';
import Payment from '../../src/pages/payment/Payment.jsx';
import MyenrolledClass from '../../src/pages/MyenrolledClass/MyenrolledClass.jsx';
import AdminRoute from './AdminRoute.jsx';
import Paymenthistory from '../../src/pages/paymenthistory/Paymenthistory.jsx';
import Addclasses from '../../src/pages/Addclasses/Addclasses.jsx';
import InstructorRoute from './InstructorRoute.jsx';
import Myclasses from '../../src/pages/myclasses/Myclasses.jsx';
import ManageClasses from '../../src/pages/Manangeclasses/ManageClasses.jsx';
import Errorpage from '../../src/pages/errorpage/Errorpage.jsx';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/classes',
                element: <Classescard></Classescard>
            },
            {
                path: '/instructor',
                element: <Instructor></Instructor>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/errorpage',
                element: <Errorpage></Errorpage>
            },
        ]
    },
    {
        path: 'deshbord',
        element: <Privaterout><Deshbord></Deshbord></Privaterout>,
        children: [
            {
                path: 'selected',
                element: <Myselectedclasses></Myselectedclasses>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'enrolled',
                element: <MyenrolledClass></MyenrolledClass>
            },
            {
                path: 'history',
                element: <Paymenthistory></Paymenthistory>
            },
            // admin routes
            {
                path: 'allusers',
                element: <AdminRoute><ALLusers></ALLusers></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            // Instructor rout
            {
                path: 'addclasses',
                element: <InstructorRoute><Addclasses></Addclasses></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute>
                    <Myclasses></Myclasses>
                </InstructorRoute>
            },

        ]
    }
]);