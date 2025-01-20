import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// List_1 Component
export const List_1 = ({ items }) => {
    return (
        // Main container for the list
        <div className='bg-white dark:bg-[#202124] dark:text-white'>
            {/* Heading for the section */}
            <h3 className='text-2xl font-bold pt-10 flex items-center justify-center 2xl:text-3xl'>Courses </h3>
            {/* Container for all the cards */}
            <div className='mt-10'>
                {/* Grid container for the items */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:text-white dark:bg-[#202124] 2xl:grid-cols-3'>
                    {/* Mapping the items from the `items` array */}
                    {items.map((item) => (
                        // Container for each item
                        <div className='pl-5 sm:pl-2 2xl:pl-2' key={item.key}>
                            {/* Container for the individual card */}
                            <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[380px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7 2xl:w-[400px] 2xl:h-[600px]'>
                                {/* Container for the image */}
                                <div className='rounded-full m-10 flex items-center justify-center'>
                                    {/* Link to the image */}
                                    <a href="#">
                                        {/* Image of the card */}
                                        <img src={item.imglink} alt={item.key} />
                                    </a>
                                </div>
                                {/* Container for the title */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='text-2xl font-extrabold text-black  dark:text-white pl-2 flex items-center justify-center 2xl:text-2xl'>
                                        {item.title}
                                    </h3>
                                </a>
                                {/* Container for the content */}
                                <p className='text-lg  mt-3 pl-2 flex items-center justify-center 2xl:text-lg'>
                                    {item.content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex items-center justify-center mt-5'>
                                    {/* Button */}
                                    <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[200px]'>
                                        {/* Link to the button */}
                                        <a href="#">
                                            {item.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Courses Component
const Courses = () => {
    // API endpoint
    const api1 = "http://localhost:1337/api/courses";
    
    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);

    return (
        // Main container for the courses
        <div className='mt-40'>
            {/* Data loading and error handling */}
            {loading1 && <p>Loading...</p>}
            {error1 && <p className="text-red-500">{error1}</p>}
            {/* List_1 component to display the data if no error or loading */}
            {!loading1 && !error1 && <List_1 items={data1.data || []} />}
        </div>
    );
};

export default Courses;