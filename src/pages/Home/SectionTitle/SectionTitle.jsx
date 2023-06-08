import React from 'react';

const SectionTitle = ({ heading }) => {
    return (
        <div className='mx-auto text-center mb-10 md:w-4/12'>

            <h3 className='text-3xl text-red-500 font-semibold uppercase  py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;