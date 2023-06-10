import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const Vedioplayer = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='flex justify-center gap-10 items-center m-10'>
                <h3 className='text-4xl  font-bold text-center '>Grow your skills for free with Mozart Academy</h3>
                <p className='my-4 mt-8 ml-[550px] btn btn-outline text-center'><Link className='text-orange-500 font-bold' to='/signup'>Register Now</Link></p>

            </div>

            <img src="https://mozart.antstheme.com/wp-content/uploads/20…ar-in-front-of-his-st-2021-12-16-00-30-29-utc.jpg" alt="" />
            <div className='md:w-[1270px] '>
                <ReactPlayer
                    url="https://youtu.be/BBz-Jyr23M4"
                    controls={true}
                    width=''
                    height="460px"
                />
            </div>
        </div>







    );
};

export default Vedioplayer;