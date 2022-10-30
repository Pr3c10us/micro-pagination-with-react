import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './App';

const Page = () => {
    const { data, postPerPage, setCurrentPage, currentPage } =
        useGlobalContext();
    const pageNumber = [];
    const [activePage, setActivePage] = useState(1);

    const prevFunc = () => {
        if (currentPage <= 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage((currentPage) => currentPage - 1);
        }
    };
    const nextFunc = () => {
        if (currentPage >= pageNumber.length - 1) {
            setCurrentPage(pageNumber.length);
        } else {
            setCurrentPage((currentPage) => currentPage + 1);
        }
    };

    for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <>
            <div className="page-numbers">
                <button className="move" onClick={() => prevFunc()}>
                    Prev
                </button>
                {pageNumber.map((number, index) => {
                    return (
                        <button
                            className={
                                number === currentPage
                                    ? 'page-number active-page-number'
                                    : 'page-number'
                            }
                            onClick={() => setCurrentPage(number)}
                            key={index}
                        >
                            {number}
                        </button>
                    );
                })}
                <button className="move" onClick={() => nextFunc()}>
                    Next
                </button>
            </div>
        </>
    );
};

export default Page;
