import React from 'react'

import pic1 from '../../../assets/istockphoto-596345112-612x612.jpg'
import pic3 from '../../../assets/p2.jpg'
import pic2 from '../../../assets/p3.jpg'
import { motion } from "framer-motion"
const Banner = () => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}

            className="carousel w-full h-[600px] " >

            <div id="slide2" className="carousel-item relative w-full">
                <img src={pic2} className=" rounded-xl w-full" />
                <div className="absolute h-full left-0 flex items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold '>Grow your skills for free with Mozart Academy</h2>


                    </div>

                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={pic3} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 flex items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold '>Grow your skills for free with Mozart Academy</h2>


                    </div>

                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={pic1} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 flex items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold '>Grow your skills for free with Mozart Academy</h2>

                    </div>

                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </motion.div >

    );
};

export default Banner;