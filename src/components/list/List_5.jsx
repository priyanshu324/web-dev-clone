import React from 'react';
import { Link } from 'react-router-dom';

// List_5 Component
const List_5 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the background color and padding at top */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-7xl mt-20 pl-5 2xl:text-7xl'>Build excellent websites</h3>
                {/* Container for all the cards */}
                <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the items */}
                    <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white  sm:grid sm:grid-cols-2 pb-10 xl:grid-cols-3'>
                        {/* Mapping through the item from the `items` array */}
                        {items.map(({ key, title, content, imglink }) => (
                            // Container for each item
                            <div className='m-5 sm:m-2 xl:ml-32' key={key}>
                                {/* Container for the individual card */}
                                <div className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[420px] lg:h-[650px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='rounded-full m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={imglink} alt={key} />
                                        </a>
                                    </div>
                                    {/* Title Container  */}
                                    <a href="#">
                                        {/* title of the card */}
                                        <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg mt-3 2xl:text-lg'>{content}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List_5;