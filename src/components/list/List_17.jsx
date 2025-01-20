import React from 'react';
import { Link } from 'react-router-dom';

// List_17 Component
export const List_17 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for width and padding */}
            <div className='w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10'>
                {/* Heading of the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    CSS and performance
                </h3>
                {/* Description for the section */}
                <p className='pt-7 text-2xl sm:pl-5 2xl:text-lg'>
                    CSS is responsible for much of the rendering work that happens on a page, which is a factor in how fast a page appears and responds to user interactions. These guides can help you write CSS with page speed in mind.
                </p>
                {/* Container for the list items */}
                <div className='grid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                    {/* Mapping the items from `items` array */}
                    {items.map(({ key, title, content, button, icons }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' key={key}>
                            {/* Container for the individual card */}
                            <div className='bg-[#f5f6f7] border-white border-2 border-solid w-[380px] sm:w-[310px] md:w-[350px] lg:w-[230px] lg:h-[650px] xl:w-[330px] h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Image Container */}
                                <div className='flex items-center justify-center  rounded-full text-7xl pt-10 2xl:text-xl'>
                                    {/* Icon of the card */}
                                    <div className='material-icons'>{icons}</div>
                                </div>
                                {/* Link to the card title */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-2xl'>{title}</h3>
                                </a>
                                {/* Content of the card */}
                                <p className='text-lg mt-3 2xl:text-lg'>
                                    {content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex items-center justify-center mt-5'>
                                    {/* button */}
                                    <div className='bg-white text-[#1a73e8] font-bold border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:bg-[#f5f6f7] 2xl:w-[200px]'>
                                        {/* Button link */}
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

export default List_17;