import React from 'react';
import { Link } from 'react-router-dom';

// List_16 Component
const List_16 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color and padding */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    Dive into CSS patterns
                </h3>
                {/* Description of the section */}
                <p className='pt-7 text-2xl sm:pl-5 2xl:text-lg'>Check out some of our CSS patterns you can use to quickly build layouts, animations, and theming for your web pages.</p>
                {/* Container for the list items */}
                <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                    {/* Mapping through the items array */}
                    {items.map(({ key, title, content, button, imglink }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' key={key}>
                            {/* Container for the individual card */}
                            <div className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[320px] xl:w-[370px] lg:h-[530px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Container for the image */}
                                <div className='flex items-center justify-center rounded-full text-7xl pt-10 2xl:text-xl'>
                                    {/* Image of the card */}
                                    <img src={imglink} alt={title} className='p-10 rounded-[50px]' />
                                </div>
                                {/* Link for the title of the card */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center 2xl:text-2xl'>
                                        {title}
                                    </h3>
                                </a>
                                {/* Content of the card */}
                                <p className='text-lg mt-3 2xl:text-lg'>
                                    {content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex items-center justify-center mt-5'>
                                    {/* Button link */}
                                    <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white 2xl:w-[200px]'>
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
    );
};

export default List_16;