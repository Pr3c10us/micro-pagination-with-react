import axios from 'axios';
import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const {data} = await axios(url);
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);
    return { loading, data };
};
