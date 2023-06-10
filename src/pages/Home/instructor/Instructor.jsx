import React from 'react';
import Useclass from '../../../hooks/useclass/Useclass';
import { Helmet } from 'react-helmet';
import SectionTitle from '../SectionTitle/SectionTitle';

const Instructor = () => {
    const [classes] = Useclass()
    const slicedata = classes.slice(0, 6)
    return (
        <div className=''>
            <Helmet>
                <title>Mozart || instructor</title>
            </Helmet>
            <SectionTitle heading=""></SectionTitle>
            <SectionTitle heading="our Instructor"></SectionTitle>
            <p className='text-4xl text uppercase font-bold text-center mb-10'>“Music is everybody’s possession. It’s only publishers who think that people own it.”</p>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    slicedata.map(cl => <div
                        key={cl._id}
                        cl={cl}>

                        <div className="card w-80 bg-base-100 shadow-xl">
                            <figure><img className='w-full h-[200px] rounded-xl' src={cl.instructor_img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : {cl.instructor}</h2>
                                <p> <span className='font-semibold'>Email :</span>  {cl.email}</p>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;