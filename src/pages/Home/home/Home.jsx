import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import Banner from '../banner/Banner';


const Home = () => {
    return (
        <div className='space-y-16'>

            <Helmet>
                <title>school || Home</title>
            </Helmet>
            <Banner></Banner>

        </div>
    );
};

export default Home;