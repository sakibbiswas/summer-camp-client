
import { Helmet } from 'react-helmet-async';
import { Authcontext } from '../../../../component/Providers/Authprovider';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sociallogin from '../sociallogin/Sociallogin';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(Authcontext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    console.log(location);
    const Navigate = useNavigate()
    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Navigate(from, { replace: true })
                reset()
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })



            })
            .catch(error => {
                console.log(error);
            })
    }
    return (

        <>

            <Helmet
            >
                <title>Mozart || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
                        <div className="card-body ">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered w-[350px] " />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password'
                                        {...register("password", {
                                            required: true,
                                            maxLength: 20,
                                            minLength: 6,
                                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

                                        })}

                                        placeholder="password" className="input input-bordered w-[350px]" />

                                    {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}

                                    {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}

                                    {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less then 20 characters</span>}

                                    {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one Uppercase one lower case one number and one spacial character</span>}





                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-4">

                                    <input className="btn btn-primary btn-md w-[350px] " type="submit" value="login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New to Mozart Academy <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                            <Sociallogin></Sociallogin>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Login;