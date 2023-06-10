import React from 'react';
import Useclass from '../../hooks/useclass/Useclass';
import { Helmet } from 'react-helmet';

const ManageClasses = () => {
    const [classes] = Useclass()
    return (
        <div>
            <Helmet>
                <title>Mozart || My Classes </title>
            </Helmet>
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
                            <th>Seats</th>
                            <th>Status</th>



                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cl, index) => <tr
                            key={cl._id}>
                            <td>
                                {index + 1}
                            </td>
                            <th>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cl.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"></div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </th>
                            <td>
                                {cl.name}
                            </td>
                            <td >
                                ${cl.price}
                            </td>
                            <td>
                                {cl.seats}
                            </td>
                            <td>
                                {cl.status}
                            </td>


                        </tr>
                        )}




                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default ManageClasses;
