import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../../component/Providers/Authprovider';
import Swal from 'sweetalert2';
import UseSelect from '../../../hooks/useaxiosSecure/UseSelect';
import UseAdmin from '../../../hooks/UseAdmin';
import Vedioplayer from '../../Vedioplayer/Vedioplayer';

const Selectcard = ({ cl }) => {
    const [isAdmin] = UseAdmin();
    const { user } = useContext(Authcontext)
    const navigate = useNavigate();
    const location = useLocation()
    const { _id, seats, name, image, instructor, instructor_img, price } = cl;
    const [, refetch] = UseSelect()
    const [disabled, setdisabled] = useState(true)
    const [color, setcolor] = useState(false)
    const handelselectClass = cl => {

        if (user && user.email) {

            const selected = { selectedId: _id, name, price, image, instructor, instructor_img, seats, email: user.email }
            fetch('http://localhost:3000/select', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(selected),
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {

            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
        // validation color change
        if (seats <= 0) {
            setdisabled(false)

            setcolor(!color)

        }
        else {
            setdisabled(true)

        }

    }

    return (
        <div>
            <div className={`card w-96  shadow-xl ${(color === true) ? 'bg-red-500' : 'bg-base-100'}`}>
                <figure><img className='w-full h-[200px] rounded-xl' src={cl.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=""> <span className='font-semibold'> Class Name :</span> {cl.name}</h2>
                    <h2 className=""> <span className='font-semibold'>Instructor Name : </span>{cl.instructor}</h2>
                    <p> <span className='font-semibold'>Available seats :</span>  {cl.seats}</p>
                    <p> <span className='font-semibold'>Price :</span>  {cl.price}</p>
                    <div className="text-start">
                        <button disabled={!disabled} onClick={() => handelselectClass(cl)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Selectcard;