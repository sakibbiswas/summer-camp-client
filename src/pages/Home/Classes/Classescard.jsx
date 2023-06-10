import React, { useContext } from 'react';
import Useclass from '../../../hooks/useclass/Useclass';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import Selectcard from './Selectcard';


const Classescard = () => {
    const [classes] = Useclass()

    return (
        <div >
            <Helmet>
                <title>Mozart || Classes page</title>
            </Helmet>
            <SectionTitle heading=""></SectionTitle>
            <SectionTitle heading="our Classes"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    classes.map(cl => <Selectcard
                        key={cl._id}
                        cl={cl}>



                    </Selectcard>)
                }
            </div>

        </div>
    );
};

export default Classescard;