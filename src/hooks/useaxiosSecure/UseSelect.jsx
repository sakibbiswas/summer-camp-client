import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../../../component/Providers/Authprovider";
const UseSelect = () => {
    const { user, loading } = useContext(Authcontext);
    const token = localStorage.getItem('access-token')
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['select', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`https://summer-camp-server-sakibbiswas.vercel.app/select?email=${user.email}`, {

                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            )

            return response.json();
        }
    })
    return [selected, refetch]
};

export default UseSelect;

