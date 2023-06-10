import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaCheck } from 'react-icons/fa';
import { motion } from "framer-motion"
const Plan = () => {
    return (
        <div>
            <SectionTitle heading='Manage your plan with billing details'></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5 ml-20">
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}

                    className="bg-orange-200 w-72 pt-5 h-[430px]">
                    <p className='text-center font-bold text-2xl'>Beginer</p>
                    <p className='text-center font-bold text-2xl'>69
                        /month</p>

                    <div className="p-12 ">
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Free 3x Class Meeting</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Free Silver Facilitites</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>2x Lunch time</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Certificate Guarantee</p>
                        </div>

                    </div>
                    <div className="text-center">

                        <button className='btn btn-outline'>Join Now </button>
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }} className="bg-yellow-200 pt-5 w-72 h-[430px]">
                    <p className='text-center font-bold text-2xl'>Intermediete</p>
                    <p className='text-center font-bold text-2xl'>99
                        /month</p>

                    <div className="p-12 ">
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Free 3x Class Meeting</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Free Silver Facilitites</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>2x Lunch time</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Certificate Guarantee</p>
                        </div>

                    </div>
                    <div className="text-center">

                        <button className='btn btn-outline'>Join Now </button>
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    className="bg-sky-200 pt-5 w-72 h-[430px]">
                    <p className='text-center font-bold text-2xl'>Master</p>
                    <p className='text-center font-bold text-2xl'>256
                        /month</p>

                    <div className="p-12 ">
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Free 3x Class Meeting</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Free Silver Facilitites</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>2x Lunch time</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaCheck>

                            </FaCheck>
                            <p>Certificate Guarantee</p>
                        </div>

                    </div>
                    <div className="text-center">

                        <button className='btn btn-outline'>Join Now </button>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Plan;