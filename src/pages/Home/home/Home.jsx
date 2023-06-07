import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>school || Home</title>
            </Helmet>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;