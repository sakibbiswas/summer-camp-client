import { useQuery } from "@tanstack/react-query";


const UseEnrolled = () => {
    const { data: enrolled = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['enrolled'],

        queryFn: async () => {
            const response = await fetch('http://localhost:3000/enrolled')
            return response.json()

        }
    })
    return [enrolled, loading, refetch]
};

export default UseEnrolled;