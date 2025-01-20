import React from 'react';
import { Link } from 'react-router-dom';

// List_6 Component
export const List_2 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the background color */}
            <div className='bg-white dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section (not rendered) */}
                {/* <h3 className='text-2xl font-bold pt-10'>Performance</h3> */}
                {/* Container for the list items */}
                <div className='mt-10'>
                    {/* Grid container for the items */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white   dark:text-white'>
                        {/* Mapping through the item from the `items` array */}
                        {items.map((blog) => (
                            // Container for each item
                            <div className='pl-5 sm:pl-2 xl:pl-10' key={blog.key}>
                                {/* Container for the individual card */}
                                <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[420px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='rounded-full m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={blog.imglink} alt={blog.id} />
                                        </a>
                                    </div>
                                    {/* Container for the item name */}
                                    <div className='mb-4 mt-5'>
                                        {/* The item name */}
                                        <div className='flex items-center justify-center '>
                                            <p className='font-bold text-2xl dark:text-white 2xl:text-2xl'>{blog.item}</p>
                                        </div>
                                    </div>
                                    {/* Link for the title */}
                                    <a href="#" className='hover:underline hover:underline-offset-2'>
                                        {/* Title of the card */}
                                        <h3 className='text-2xl font-extrabold text-black flex items-center justify-center dark:text-white 2xl:text-2xl'>{blog.title}</h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg pl-5 mt-3 2xl:text-lg'>{blog.content}</p>
                                    {/* Container for the button */}
                                    <div className='flex items-center justify-center mt-5'>
                                        {/* Button */}
                                        <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[200px]'>
                                            {/* Link to the button */}
                                            <a href="#">
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
        </div>
    );
};

export default List_6;