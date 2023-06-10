import React from 'react';
import { useLocation } from 'react-router-dom';
import errpic from '../../assets/404-error-with-person-looking-concept-illustration_114360-7912.avif'
const Errorpage = () => {
    const location = useLocation()
    return (
        <div className='text-center ml-[150px]'>
            <img src={errpic} alt="" />
        </div>
    );
};

export default Errorpage;