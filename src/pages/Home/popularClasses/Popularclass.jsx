import React from 'react';
import { Helmet } from 'react-helmet';
import Useclass from '../../../hooks/useclass/Useclass';
import Classcard from '../classcard/Classcard';
import SectionTitle from '../SectionTitle/SectionTitle';

const Popularclass = () => {
    const [classes] = Useclass();
    return (
        <div>
            <SectionTitle
                heading='Popular classes'></SectionTitle>
            <Helmet>
                <title>Mozart || Popularclass</title>
            </Helmet>
            <p className='mb-8 font-bold text-2xl text-center text-orange-400'>Our class is where your passions come into play every day.</p>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    classes.map(card => <Classcard
                        key={card._id}
                        card={card}
                    ></Classcard>)
                }
            </div>

        </div>
    );
};

export default Popularclass;