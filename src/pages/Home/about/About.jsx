import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaFileCode, FaLocationArrow, FaPhoneAlt, FaTelegramPlane, FaVoicemail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <SectionTitle heading='Contact us'></SectionTitle>
            <div className="bg-green-300 grid md:grid-cols-3">
                <div className="p-16 ml-8">
                    <div className="flex gap-4 items-center">
                        <FaLocationArrow>

                        </FaLocationArrow>
                        <p className='text-xl font-bold'>Where We Are</p>
                    </div>
                    <h3 className='text-xl'>Santo Claro, Selo</h3>
                </div>
                <div className="p-16">
                    <div className="flex gap-4 items-center">
                        <FaPhoneAlt>

                        </FaPhoneAlt>
                        <p className='text-xl font-bold'>What’s The Phone Number</p>
                    </div>
                    <h3 className='text-xl'>+092435436547</h3>
                </div>
                <div className="p-16">
                    <div className="flex gap-4 items-center">
                        <FaFileCode>

                        </FaFileCode>
                        <p className='text-xl font-bold'>Email</p>
                    </div>
                    <h3 className='text-xl'>Your@email.com</h3>
                </div>


            </div>

        </div>
    );
};

export default About;