import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';

import './CheckoutForm.css'
import { Authcontext } from '../../../component/Providers/Authprovider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CheckoutForm = ({ selected, price }) => {

    const [cardError, Setcarderror] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(Authcontext)
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setprocessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {

                    setClientSecret(res.data.clientSecret)
                })

        }

    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Setcarderror(error.message)
            console.log('[error]', error);
        }

        else {
            Setcarderror('')

        }

        setprocessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        setprocessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save payment information to server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: ' pending',
                quantity: selected.length,
                selectedclass: selected.map(cl => cl._id),
                classPhoto: selected.map(cl => cl.image),
                classNames: selected.map(cl => cl.name),

            }
            axiosSecure.post('/payments', payment)
                .then(res => {

                })

            // fetch('https://summer-camp-server-sakibbiswas.vercel.app/payments', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(payment)
            // })
            //     .then(res => res.json())
            //     .then(data => {

            //     })

        }

    }


    return (
        <>
            <form className='w-2/3 m-8 ' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 text-sm ml-8'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-500'>Transaction complete with TransactionId : {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;