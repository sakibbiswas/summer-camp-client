import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../src/pages/Home/Navbar/Navbar';
import Footer from '../../src/pages/Home/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;