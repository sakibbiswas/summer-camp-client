import { useQuery } from '@tanstack/react-query';


const Useclass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],

        queryFn: async () => {
            const response = await fetch('https://summer-camp-server-sakibbiswas.vercel.app/class')
            return response.json()

        }
    })
    return [classes, loading, refetch]
}


export default Useclass;