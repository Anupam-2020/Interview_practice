import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
            setLoading(false);
            setError(error);
        } catch(error) {
            // console.log(error);
            setError(error)
        }
    }

    useEffect(() => {
        getData();
    },[])

    return {users, error, loading};
} 

export default useFetch;