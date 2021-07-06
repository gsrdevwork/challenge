import axios from "axios";
import { useState, useEffect } from "react"

const useDemographics = (selected) => {
    const [ageDemographics, setAgeDemographics] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchAgeDemographics = async () => {
            setLoading(true)
            const { data } = await axios.get('/users/age', {
                params: {
                    item: selected,
                },
            });
            setAgeDemographics(data);
            setLoading(false)
        };
        fetchAgeDemographics();
    }, [selected]);

    return { ageDemographics, loading }
};

export default useDemographics;