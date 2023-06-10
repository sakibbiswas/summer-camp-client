import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import Banner from '../banner/Banner';
import Popularclass from '../popularClasses/Popularclass';
import Popularinstructor from '../Popularinstructor/Popularinstructor';
import Plan from '../plan/Plan';
import About from '../about/About';
import Discout from '../discount/Discout';




const Home = () => {
    return (
        <div className='space-y-16'>

            <Helmet>
                <title>Mozart || Home</title>
            </Helmet>

            <Banner></Banner>

            <Popularclass></Popularclass>
            <Popularinstructor></Popularinstructor>
            <Plan></Plan>
            <About></About>

            <Discout></Discout>

        </div>
    );
};

export default Home;