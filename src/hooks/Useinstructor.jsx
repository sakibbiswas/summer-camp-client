import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../component/Providers/Authprovider';

const Useinstructor = () => {
    const { user, loading } = useContext(Authcontext)
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorloading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)

            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorloading]
}
export default Useinstructor;