import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import List_1 from '../components/list/List_1';

// Patterns Component
const Patterns = () => {
    // Fetch data using custom hook
    const { loading, error, data } = useFetch('http://localhost:1337/api/patterns?populate=*');

    return (
        <>
            {/* Main container for the Patterns page */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {/* List_1 component to display data */}
                {!loading && !error && <List_1 items={data.data || []} />}
            </div>
        </>
    );
};

export default Patterns;