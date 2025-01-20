import React from 'react';
import { Link } from 'react-router-dom';

// List_14 Component
const List_14 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='mt-10'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    The latest in CSS and UI design
                </h3>
                {/* Description for the section */}
                <p className='pt-7 text-2xl font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-[1380px] 2xl:text-lg 2xl:w-[1400px] sm:pl-0'>
                    Learn the latest tips and techniques to use in your work, right now.
                </p>
                {/* Container for all the cards */}
                <div className='bg-white mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the list items */}
                    <div className='bg-white grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                        {/* Mapping through the items array */}
                        {items.map(({ key, title, content, button, icons }) => (
                            // Container for each list item
                            <div className='m-5 sm:m-2' key={key}>
                                {/* Container for each individual card */}
                                <div className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[380px] lg:h-[650px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Container for the icon */}
                                    <div className='flex items-center justify-center 2xl:text-3xl'>
                                        {/* Icon of the card */}
                                        <div className='material-icons'>{icons}</div>
                                    </div>
                                    {/* Link for the title of the card */}
                                    <a href="#">
                                        {/* Title of the card */}
                                        <h3 className='mt-10 text-xl font-bold  text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg  mt-3 2xl:text-lg 2xl:w-[400px]'>
                                        {content}
                                    </p>
                                    {/* Container for the button */}
                                    <div className='flex items-center justify-center mt-5'>
                                        {/* Button of the card */}
                                        <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white 2xl:w-[200px]'>
                                            <a href="#">
                                                {button}
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

export default List_14;