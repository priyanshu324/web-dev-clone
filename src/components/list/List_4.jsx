import React from 'react';
import { Link } from 'react-router-dom';

// List_4 Component
const List_4 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                {/* Heading for the section */}
                <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5 2xl:text-3xl'>Build excellent websites</h3>
                {/* Container for all the cards */}
                <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the items */}
                    <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid sm:grid-cols-2 xl:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                        {/* Mapping through the items array */}
                        {items.map(({ key, title, content, imglink }) => (
                            // Container for each item
                            <div className='m-5 sm:m-2' key={key}>
                                {/* Container for the individual card */}
                                <div className='bg-white border-[#858686] border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[380px] lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image container  */}
                                    <div className='flex items-center justify-center rounded-full text-7xl pt-10 m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={imglink} alt={key} />
                                        </a>
                                    </div>
                                    {/* Container for the title */}
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List_4;