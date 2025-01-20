import React from 'react';
import useFetch from '../hooks/useFetch';
import List_27 from './list/List_27';

// Card Component
const Card = () => {
    // API endpoint
    const api1 = 'http://localhost:1337/api/home-cards';
    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);

    return (
        <>
            {/* Main container for the cards */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_27 component to display data */}
                {!loading1 && !error1 && <List_27 items={list1.data || []} />}
            </div>
        </>
    );
};

export default Card;