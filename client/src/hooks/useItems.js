import axios from "axios";
import { useState, useEffect } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const { data } = await axios.get('/items');
            setItems(data);
        };
        fetchItems();
    }, []);
    return items;
};

export default useItems;