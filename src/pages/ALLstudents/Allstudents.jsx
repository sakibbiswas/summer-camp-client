import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
const ALLusers = () => {
    const [asc, setase] = useState(true)
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:3000/users`)
        return res.json();
    })




    const handelDelete = user => {

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
                fetch(`http://localhost:3000/users/${user._id}`, {
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
    const handelMakeAdmin = user => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
            method: 'PATCH'
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handelMakeIntructor = user => {
        fetch(`http://localhost:3000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='w-full'>

            <Helmet
            >
                <title>Mozart|| Manage Users</title>
            </Helmet>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='bg-slate-300 font-bold text-gray-950'>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <th>
                                <div className="flex  users-center space-x-3">
                                    {user.name}
                                    <div>
                                        <div className="font-bold"></div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </th>
                            <td>
                                {user.email}
                            </td>
                            <td >
                                {user.role === 'admin' ? 'admin' :

                                    <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost bg-orange-500 text-white btn-md">
                                        <FaUserShield></FaUserShield>
                                    </button>

                                }
                            </td>
                            <td >
                                {user.role === 'instructor' ? 'instructor' :

                                    <button onClick={() => handelMakeIntructor(user)} className="btn btn-ghost bg-orange-500 text-white btn-md">
                                        <FaUserShield></FaUserShield>
                                    </button>

                                }
                            </td>
                            <td>
                                <button onClick={() => handelDelete(user)} className="btn btn-ghost bg-red-500 text-white btn-md"><FaTrashAlt ></FaTrashAlt></button>
                            </td>
                            <td>
                                <button className="btn btn-xs btn-info"
                                    onClick={() => setase(!asc)}
                                >{asc ? 'pending' : "approved"}</button>
                            </td>

                        </tr>
                        )}




                    </tbody>


                </table>
            </div>

        </div >
    );
};

export default ALLusers;