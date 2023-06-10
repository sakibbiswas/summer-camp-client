import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../component/Providers/Authprovider';
const axiosSecure = axios.create({
    baseURL: 'https://summer-camp-server-sakibbiswas.vercel.app',
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(Authcontext);


    useEffect(() => {

        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Logout the user
                    // await logOut();
                    // // Redirect to login page
                    // navigate('/login');
                }
                return Promise.reject(error);
            }
        );

    }, [logOut, navigate])

    return [axiosSecure];
};

export default useAxiosSecure;
