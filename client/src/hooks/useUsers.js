import axios from "axios";
import { useState, useEffect } from "react"

const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get('/users');
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return users;
};

export default useUsers;