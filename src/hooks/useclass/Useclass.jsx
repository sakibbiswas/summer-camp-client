import { useQuery } from '@tanstack/react-query';


const Useclass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],

        queryFn: async () => {
            const response = await fetch('http://localhost:3000/class')
            return response.json()

        }
    })
    return [classes, loading, refetch]
}


export default Useclass;