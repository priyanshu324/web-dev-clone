import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

// Define the List_1 component
export const List_1 = ({ items }) => {
    return (
        <>
            {/* Main container for the list section */}
            <div className="bg-[#F0F4F8] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px] border-2 mt-8 border-y-2 dark:bg-[#121212] dark:text-white dark:mt-[-10px] dark:border-y-2 dark:border-2 dark:border-[#78909C]">
                {/* Container for content within the list */}
                <div className="mt-10 mb-10">
                    {/* Title of the list section */}
                    <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold pl-4 2xl:text-6xl">Explore the web platform</h1>
                    <p className="text-[#757575] dark:text-[#BDBDBD] text-sm font-bold pl-4 2xl:text-lg">The web platform is a constantly evolving ecosystem of browser features and APIs that developers can use to make websites that are easy and delightful to use. These pages are pathways for you to dive into each part of the web platform on web.dev—at your pace:</p>
                    {/* Grid container for items */}
                    <div className="bg-[#EEEEEE] dark:bg-[#121212] border-2 border-solid border-[#78909C] grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-3">
                        {/* Map through the items array and render each item */}
                        {items.map((section) => (
                            <div key={section.key} className="pl-4 mt-5 lg:pl-2 2xl:pl-10">
                                <div className='material-icons text-xl text-[#00796B] ml-44 dark:text-[#00BCD4]'>{section.icons}</div>
                                {/* Link to the section */}
                                {/* Conditionally render Link or anchor tag based on path */}
                                {section.path && section.path.startsWith('/') ? (
                                    <Link to={section.path} className="hover:underline underline-offset-2 ">
                                        <h3 className="text-[#212121] dark:text-[#EEEEEE] text-3xl mt-4 flex items-center justify-center  2xl:text-4xl">
                                            {section.title}
                                        </h3>
                                    </Link>
                                ) : (
                                    <a href={section.path} className="hover:underline underline-offset-2 text-[#00796B] dark:text-[#00BCD4]">
                                        <h3 className="text-[#212121] dark:text-[#EEEEEE] text-3xl mt-4 flex items-center justify-center 2xl:text-4xl">
                                            {section.title}
                                        </h3>
                                    </a>
                                )}
                                {/* Content of the section */}
                                <p className="flex items-center justify-center text-sm mt-8 2xl:text-lg text-[#757575] dark:text-[#BDBDBD]">
                                    {section.content}
                                </p>
                                {/* Button container */}
                                <div className="pl-16 mt-5 2xl:pl-20">
                                    {/* Button */}
                                    <div className="border-[#42A5F5]  border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 hover:text-[#7C4DFF] hover:border-[#7C4DFF] dark:hover:border-white dark:hover:text-[#EEEEEE] transition-colors duration-200">
                                        {/* Conditionally render Link or anchor tag based on path */}
                                        {section.path && section.path.startsWith('/') ? (
                                            <Link to={section.path} className="text-[#42A5F5] font-bold hover:text-[#7C4DFF] dark:hover:text-[#EEEEEE] dark:text-[#42A5F5]">
                                                {section.button}
                                            </Link>
                                        ) : (
                                            <button className="text-[#42A5F5] font-bold hover:text-[#7C4DFF] dark:hover:text-[#EEEEEE] dark:text-[#42A5F5]">
                                                {section.button}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// Box Component
const Box = () => {
    // API endpoint
    const api1 = 'http://localhost:1337/api/home-news';
    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);

    return (
        <>
            {/* Main container for the Box component */}
            <div className='mt-10 lg:mt-20 dark:bg-[#121212] dark:text-white'>
                {/* Loading indicator */}
                {loading1 && <p>Loading...</p>}
                {/* Error message */}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_28 Component to display the data if no error or loading state is present */}
                {!loading1 && !error1 && <List_1 items={list1?.data || []} />}
            </div>
        </>
    );
};

export default Box;