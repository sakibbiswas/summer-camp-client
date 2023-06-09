import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Useclass from '../../../hooks/useclass/Useclass';

const Popularinstructor = () => {
    const [classes] = Useclass();
    const slicedData = classes.slice(0, 6);
    return (
        <div>
            <SectionTitle heading="Popular Instructor"></SectionTitle>
            <p className='text-center font-semibold text-2xl mb-8'>Music is everybody’s possession. It’s only publishers who think that people own it.</p>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    slicedData.map(card => <div
                        key={card._id}
                        card={card}
                    >

                        <img className='rounded-xl w-full h-[300px]' src={card.instructor_img} alt="" />

                    </div>)
                }
            </div>
        </div>
    );
};

export default Popularinstructor;