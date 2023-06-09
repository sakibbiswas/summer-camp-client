import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import UseSelect from '../../hooks/useaxiosSecure/UseSelect';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const Myselectedclasses = () => {
    const [selected, refetch] = UseSelect();
    console.log(selected);
    const handelDelete = cl => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/select/${cl._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Mozart || MY enroled class</title>
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
                            <th>classImage</th>
                            <th>class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {selected.map((cl, index) => <tr
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
                                <button onClick={() => handelDelete(cl)} className="btn btn-ghost bg-red-500 text-white btn-md"><FaTrashAlt ></FaTrashAlt></button>
                            </td>
                            <td>
                                <Link to="/deshbord/payment">  <button className='btn btn-accent btn-sm'>Pay</button></Link>
                            </td>
                        </tr>
                        )}




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Myselectedclasses;