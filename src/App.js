import React, { useContext, useState } from 'react';
import './App.css';
import Page from './page';
import { useFetch } from './useFetch';
import User from './user';
const AppContext = React.createContext();

export function App() {
    const { loading, data } = useFetch();
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const post = data.slice(firstPostIndex, lastPostIndex);

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <AppContext.Provider
            value={{ post, data, postPerPage, setCurrentPage, currentPage }}
        >
            <h1>Pagination</h1>
            <User />
            <Page />
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
