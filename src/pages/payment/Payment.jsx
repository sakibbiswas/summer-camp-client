import React from 'react';

import { loadStripe } from '@stripe/stripe-js';

import { Elements } from '@stripe/react-stripe-js';
import UseSelect from '../../hooks/useaxiosSecure/UseSelect';
import SectionTitle from '../Home/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_pk_Payment_gateway);
const Payment = () => {
    const [selected] = UseSelect();
    // reduce calculation
    const total = selected.reduce((sum, set) => set.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full bg-slate-300'>
            <SectionTitle heading='Payment'></SectionTitle>


            <Elements stripe={stripePromise}>
                <CheckoutForm selected={selected} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
