import React from 'react';
import UseEnrolled from '../../hooks/UseEnrolled';

const MyenrolledClass = () => {
    const [enrolled] = UseEnrolled()
    return (
        <div>
            <h2 className='text-3xl font-bold text-orange-400 text-center'>Enrolled classes</h2>
            <div className='grid md:grid-cols-3 gap-6 mt-5 ml-8' >
                {
                    enrolled.map(cl => <div
                        key={cl._id}
                        cl={cl}
                    >
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <figure><img className='h-[300px] w-full' src={cl.classPhoto[0]} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-center"><span className='font-bold text-gray-900'>ClassName : </span>{cl.classNames[0]}</h2>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyenrolledClass;