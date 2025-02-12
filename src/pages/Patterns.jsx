import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// List_1 Component
export const List_1 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='pt-20 lg:pt-48'>
                {/* Grid container for the items */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-[#202124] dark:text-white'>
                    {/* Mapping through the `items` array */}
                    {items.map((blog) => (
                        // Container for each item
                        <div className='pl-5 sm:pl-2' key={blog.key}>
                            {/* Container for the individual card */}
                            <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[420px] lg:h-[600px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Image Container */}
                                <div className='rounded-full m-10'>
                                    {/* Container for the image */}
                                    <a href="#">
                                        {/* Image of the blog */}
                                        <img src={blog.imglink} alt={blog.id} />
                                    </a>
                                </div>
                                {/* Heading of the blog */}
                                <a href="#" className='hover:underline hover:underline-offset-2'>
                                    <h3 className='text-2xl font-extrabold text-black dark:text-white pl-2 xl:flex xl:items-center xl:justify-center 2xl:text-2xl'>
                                        {blog.title}
                                    </h3>
                                </a>
                                {/* Content of the blog */}
                                <p className='text-lg pl-2  mt-3 2xl:text-lg'>
                                    {blog.content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex justify-center items-center mt-10'>
                                    {/* Button */}
                                    <div className='border-[#185abc] text-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black hover:text-black dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[300px]'>
                                        {/* Link inside the button */}
                                        <a href='#'>
                                            {blog.button}
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