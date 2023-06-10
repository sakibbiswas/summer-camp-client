import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Useclass from '../../../hooks/useclass/Useclass';
// fgfgfhgh
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
import { motion } from "framer-motion";
const Popularinstructor = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const [classes] = Useclass();
    const slicedData = classes.slice(0, 6);
    return (
        <div>
            <SectionTitle heading="Popular Instructor"></SectionTitle>
            <p className='text-center font-semibold text-2xl mb-8'>Music is everybody’s possession. It’s only publishers who think that people own it.</p>
            <motion.div className="grid md:grid-cols-3 gap-5"
                initial={false}
                animate={
                    isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}







            >
                {
                    slicedData.map(card => <div
                        key={card._id}
                        card={card}
                    >

                        <img className='rounded-xl w-full h-[300px]' src={card.instructor_img} alt="" onLoad={() => setIsLoaded(true)} />

                    </div>)
                }
            </motion.div>
        </div>
    );
};

export default Popularinstructor;

