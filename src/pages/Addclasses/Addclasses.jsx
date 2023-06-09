import React from 'react';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import SectionTitle from '../Home/SectionTitle/SectionTitle';
const img_hosting_token = import.meta.env.VITE_image_upload_token;

const Addclasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { name, price, seats } = data;
                    const newClass = { name, price: parseFloat(price), seats, image: imgURL, status: 'pending' }

                    axiosSecure.post('/class', newClass)
                        .then(data => {
                            console.log('after posting new class', data.data);
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    return (
        <div className='w-full px-10 bg-slate-300'>
            <Helmet>
                <title>Mozart || Add class </title>
            </Helmet>
            <SectionTitle heading='Add an Class'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3' >
                <div class="form-control  w-full ">
                    <label class="label">
                        <span class="label-text font-semibold">Class-name</span>
                    </label>
                    <input type="text" placeholder="Class Name" {...register("name", { required: true, maxLength: 120 })} class="input input-bordered w-full " />
                </div>


                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true, })} placeholder="Type here" class="input input-bordered w-full " />
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text font-semibold">Available seats</span>

                    </label>
                    <input type="text" {...register("seats", { required: true, })} placeholder="seats" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full  ">
                    <label class="label">
                        <span class="label-text font-semibold">class Image</span>

                    </label>
                    <input type="file" {...register("image", { required: true, })} class="file-input file-input-bordered w-full " />

                </div>


                <div className="mb-20">
                    <input className='btn btn-block btn-outline  mt-5' type="submit" value="Add class" />
                </div>



            </form >
        </div >
    );
};

export default Addclasses;