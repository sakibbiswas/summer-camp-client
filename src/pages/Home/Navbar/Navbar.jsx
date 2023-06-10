
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../../component/Providers/Authprovider';
import { useContext } from 'react';
import logo from '../../../assets/logo.png'
const Navbar = () => {
    // const [cart] = UseCart()
    // const [isAdmin] = UseAdmin();
    const { user, logOut } = useContext(Authcontext)
    const handelLogout = () => {
        logOut()
            .then(() => {



            })
            .catch(error => console.log(error))
    }
    const navLi = <>
        <li className='font-bold   hover: transform 
         hover:scale-90 duration-300 '><Link to='/'>Home</Link></li>
        <li className='font-bold ' ><Link to='/classes'>Classes</Link></li>
        <li className='font-bold ' ><Link to='/instructor'>Instructors</Link></li>
        <li className='font-bold ' ><Link to='/errorpage'>Error</Link></li>

        <li className='font-bold ml-5 '><Link to='/deshbord/selected'>
            Dashboard
        </Link></li>

        {user?.email ?
            <>

                <div className="  w-10 ">
                    <div className="w-10 rounded ring   ring-offset-base-100 ring-offset-2">
                        <img title={user.displayName} src={user.photoURL} />
                    </div>
                </div>
                <li className=''><p className='btn btn-success btn-sm ml-5   ' onClick={handelLogout}>Logout</p></li>
            </> :
            <li><Link to='/login'>Login</Link></li>

        }

    </>
    return (


        <div className="navbar  fixed h-10  z-10 text-white bg-rose-500 bg-opacity-60   max-w-screen-xl  mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  pb-2 shadow bg-orange-400  rounded-box w-52">

                        {navLi}

                    </ul>

                </div>
                <Link to='/' className=" ">
                    <img className='w-14 rounded-xl' src={logo} alt="" />
                </Link>
                <h2 className='text-2xl font-bold  uppercase ml-5 '><span className='text-cyan-500'>M</span>ozart</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal mt-5 px-1">

                    {navLi}


                </ul>
            </div >

        </div >



    );
};

export default Navbar;