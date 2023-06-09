import React from 'react';
import UseEnrolled from '../../hooks/UseEnrolled';
import { Helmet } from 'react-helmet';

const Paymenthistory = () => {
    const [enrolled] = UseEnrolled()
    return (
        <div className='w-full'>
            <Helmet>
                <title>Mozart || Payment History</title>
            </Helmet>



            <div className="uppercase font-semibold flex justify-center items-center 
             h-[60px] gap-10 ">

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-slate-300 font-bold text-gray-950'>
                            <th>
                                #
                            </th>
                            <th>ClassImage</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>TransactionId</th>
                            <th>Date</th>
                            <th>ClassQuantity</th>


                        </tr>
                    </thead>
                    <tbody>
                        {enrolled.map((cl, index) => <tr
                            key={cl._id}>
                            <td>
                                {index + 1}
                            </td>
                            <th>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cl.classPhoto[0]} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"></div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </th>
                            <td>
                                {cl.classNames[0]}
                            </td>
                            <td >
                                ${cl.price}
                            </td>
                            <td>
                                {cl.transactionId}
                            </td>
                            <td>
                                {cl.date}
                            </td>
                            <td className='text-center'>
                                {cl.quantity}
                            </td>

                        </tr>
                        )}




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Paymenthistory;