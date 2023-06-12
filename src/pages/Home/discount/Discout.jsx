import React from 'react';
import pic from '../../../assets/passionate-guy-in-headphones-holding-microphone-s-2022-06-16-14-59-42-utc-removebg-preview.png'
import { Link } from 'react-router-dom';
const Discout = () => {
    return (
        <div>
            <div className="bg-green-400 md:h-[400px] relative">

                <p className='text-center text-bold text-5xl pt-20'>Get discount for 50 new members</p>

                <h3 className='text-center mt-5  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt <br /> dignissimos quaerat cupiditate vit Accusantium, fuga.</h3>

                <p className='md:my-4 md:mt-8  md:ml-[550px] btn btn-outline text-center'><Link className='text-orange-500 font-bold' to='/signup'>Register Now</Link></p>
                <img className='absolute md:h-[300px] top-24 md:left-[900px]' src={pic} alt="" />


            </div>
        </div>
    );
};

export default Discout;