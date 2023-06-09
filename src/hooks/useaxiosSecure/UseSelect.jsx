import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../../../component/Providers/Authprovider";
// import useAxiosSecure from "../useAxiosSecure";
const UseSelect = () => {
    const { user, loading } = useContext(Authcontext);
    // const token = localStorage.getItem('access-token')
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['select', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/select?email=${user.email}`
            )

            return response.json();
        }



        // queryFn: async () => {
        //     const res = await axiosSecure(`/select?email=${user.email}`
        //     )
        //     console.log('res from axios', res);
        //     return res.data;
        // }
    })
    return [selected, refetch]
};

export default UseSelect;