import React from 'react';
import useFetch from '../hooks/useFetch';
import List_28 from './list/List_28';

// Box Component
const Box = () => {
    // API endpoint
    const api1 = 'http://localhost:1337/api/home-news';
    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);

    return (
        <>
            {/* Main container for the Box component */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Loading indicator */}
                {loading1 && <p>Loading...</p>}
                {/* Error message */}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_28 Component to display the data if no error or loading state is present */}
                {!loading1 && !error1 && <List_28 items={list1.data || []} />}
            </div>
        </>
    );
};

export default Box;