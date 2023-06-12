import React from 'react';
import { motion } from "framer-motion"
const Classcard = ({ card }) => {
    const { image, name, students, details } = card;
    return (
        <div>




            <motion.div className="card w-80 ml-5 bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <figure><img className='w-full h-[200px] rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class-name : {name}</h2>
                    <p> <span className='font-semibold'>Enrolled :</span>  {students}</p>
                    <p ><span className='font-semibold'>Info :</span>  {details}</p>

                </div>
            </motion.div>
        </div>
    );
};

export default Classcard;