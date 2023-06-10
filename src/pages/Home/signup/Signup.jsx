
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Authcontext } from '../../../../component/Providers/Authprovider';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Sociallogin from '../sociallogin/Sociallogin';
import Swal from 'sweetalert2';

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createuser, update } = useContext(Authcontext)
    const onSubmit = data => {

        createuser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)

                update(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, status: 'pending' }
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })


                    })

            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <>
            <Helmet
            >
                <title>Mozart || signUp</title>
            </Helmet>
            <div className="hero   bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
                        <div className="card-body ">
                            <h1 className="text-5xl font-bold">Sign up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name'{...register("name", { required: true })} placeholder="Your name" className="input input-bordered w-[350px]" />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo'{...register("photo", { required: true })} placeholder="Your photoUrl" className="input input-bordered w-[350px]" />
                                    {errors.photo && <span className='text-red-600'>Photo is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered w-[350px]" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

                                    })} name='password' placeholder="password" className="input input-bordered w-[350px]" />

                                    {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}

                                    {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}

                                    {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less then 20 characters</span>}

                                    {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one Uppercase one lower case one number and one spacial character</span>}
                                    <label className="label">
                                        <span className="label-text"> confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirm", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

                                    })} name='confirm' placeholder="confirm password" className="input input-bordered w-[350px]" />

                                    {errors.confirm?.message}





                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary w-[350px]" type="submit" value="signup" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>Already have an account please <Link className='text-orange-500 font-bold' to='/login'>login</Link></p>
                            <Sociallogin></Sociallogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;