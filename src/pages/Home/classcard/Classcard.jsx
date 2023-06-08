import React from 'react';

const Classcard = ({ card }) => {
    const { image, name, students, details } = card;
    return (
        <div>




            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-[200px] rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class-name : {name}</h2>
                    <p> <span className='font-semibold'>Enrolled :</span>  {students}</p>
                    <p ><span className='font-semibold'>Info :</span>  {details}</p>

                </div>
            </div>
        </div>
    );
};

export default Classcard;