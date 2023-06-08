import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaCheck } from 'react-icons/fa';

const Plan = () => {
    return (
        <div>
            <SectionTitle heading='Manage your plan with billing details'></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5 ml-20">
                <div className="bg-orange-200 w-72 pt-5">
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
                </div>
                <div className="bg-yellow-200 pt-5 w-72">
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
                </div>
                <div className="bg-sky-200 pt-5 w-72 h-[350px]">
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
                </div>


            </div>
        </div>
    );
};

export default Plan;