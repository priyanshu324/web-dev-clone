import React from 'react';
import { Link } from 'react-router-dom';

// List_7 Component
export const List_7 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color, padding and width */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    Optimize third-party JavaScript resources
                </h3>
                {/* Description of the section */}
                <p className='pt-7 text-2xl sm:pl-5 2xl:text-lg'>
                    A common performance problem on the web involves the use of third-party JavaScript, which can cause pages to load more slowly and even cause problems with page responsiveness. Check out these guides to get a handle on some common third-party JavaScript performance problems.
                </p>
                {/* Container for all the cards */}
                <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                    {/* Mapping through the items array */}
                    {items.map(({ key, title, content, button, icons, path }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' key={key} id={`${path}`}>
                            {/* Container for the individual card */}
                            <div className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[320px] xl:w-[370px] lg:h-[530px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Image Container */}
                                <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                    {/* Icon of the card */}
                                    <div className='material-icons 2xl:text-3xl'>
                                        {icons}
                                    </div>
                                </div>
                                {/* Link to the title */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center 2xl:text-2xl'>{title}</h3>
                                </a>
                                {/* Content of the card */}
                                <p className='text-lg  mt-3 2xl:text-lg'>{content}</p>
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

export default List_11;