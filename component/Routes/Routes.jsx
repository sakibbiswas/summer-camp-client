
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../src/pages/Home/home/Home.jsx';
import Main from '../layout/Main.jsx';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            //         {
            //             path: '/menu',
            //             element: <Menu></Menu>
            //         },
            //         {
            //             path: '/shop/:category',
            //             element: <Shop></Shop>
            //         },
            //         {
            //             path: '/login',
            //             element: <Login></Login>
            //         },
            //         {
            //             path: '/signup',
            //             element: <Signup></Signup>
            //         },
            //     ]
            // },
            // {
            //     path: 'deshbord',
            //     element: <Privaterout><Deshbord></Deshbord></Privaterout>,
            //     children: [
            //         {
            //             path: 'cart',
            //             element: <MyCart></MyCart>
            //         },
            //         {
            //             path: 'payment',
            //             element: <Payment></Payment>
            //         },
            //         {
            //             path: 'userhome',
            //             element: <UserHome></UserHome>
            //         },
            //         // admin routes
            //         {
            //             path: 'adminhome',
            //             element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            //         },
            //         {
            //             path: 'allusers',
            //             element: <AdminRoute><ALLusers></ALLusers></AdminRoute>
            //         },
            //         {
            //             path: 'addItems',
            //             element: <AdminRoute><AddItems></AddItems></AdminRoute>
            //         },
            //         {
            //             path: 'manageItems',
            //             element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            //         },

        ]
    }
]);