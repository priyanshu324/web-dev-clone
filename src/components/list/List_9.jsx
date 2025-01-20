import React from 'react';
import { Link } from 'react-router-dom';

// List_5 Component
export const List_5 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color, padding and width */}
            <div className='bg-[#f5f6f7] w-[420px] mt-10 pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    Get familiar with common and useful JavaScript features
                </h3>
                {/* Description for the section */}
                <p className='pt-5 text-2xl sm:pl-3 2xl:text-lg'>
                    JavaScript gives you a lot of tools to help you build applications that respond to the needs of your users. Here are some common features might want to use in your web applications that are worth knowing about!
                </p>
                {/* Container for all the cards */}
                <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the items */}
                    <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dark:bg-[#202124] dark:text-white'>
                        {/* Mapping through the item from the `items` array */}
                        {items.map(({ key, title, content, button, icons, path }) => (
                            // Container for each item
                            <div className='m-5 sm:m-2' key={key} id={`${path}`}>
                                {/* Container for the individual card */}
                                <div className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[370px] lg:h-[650px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                        {/* Icon for the card */}
                                        <div className='material-icons 2xl:text-3xl'>
                                            {icons}
                                        </div>
                                    </div>
                                    {/* Link to the title */}
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
                                        {/* Button */}
                                        <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[200px]'>
                                            {/* Link to the button */}
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

export default List_9;