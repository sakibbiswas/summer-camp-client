import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../src/pages/Home/Navbar/Navbar';
import Footer from '../../src/pages/Home/footer/Footer';


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('errorpage')

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;