


import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { Authcontext } from '../../component/Providers/Authprovider';

const UseAdmin = () => {
    const { user, loading } = useContext(Authcontext)
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminloading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminloading]
}

export default UseAdmin;
