import React from 'react';
import { Link } from 'react-router-dom';

// list 6 Component
export const List_6 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the background color and padding at top */}
            <div className='w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    Optimize poor INP caused by JavaScript
                </h3>
                {/* Description of the section */}
                <p className='pt-7 text-2xl sm:pl-5 2xl:text-lg'>
                    How you use JavaScript can have an effect on your web application's <span className='underline underline-offset-2'>Interaction to Next Paint (INP)</span>. These guides will help you to get a handle on page repsonsiveness issues caused by JavaScript.
                </p>
                {/* Container for all the cards */}
                <div className='grid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
                    {/* Mapping through the items array */}
                    {items.map(({ key, title, content, button, icons, path }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' key={key} id={`${path}`}>
                            {/* Container for the individual card */}
                            <div className='bg-[#f5f6f7] border-white border-2 border-solid w-[380px] h-[540px] sm:w-[310px] md:w-[350px] lg:w-[230px] lg:h-[650px] xl:w-[330px] xl:h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Image Container */}
                                <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                    {/* Icon for the card */}
                                    <div className='material-icons 2xl:text-2xl'>
                                        {icons}
                                    </div>
                                </div>
                                {/* Link for the title */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-2xl'>{title}</h3>
                                </a>
                                {/* Content of the card */}
                                <p className='text-lg  mt-3 2xl:text-lg'>
                                    {content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex items-center justify-center  mt-5'>
                                    {/* Button */}
                                    <div className='bg-white text-[#1a73e8] font-bold border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:bg-[#f5f6f7] 2xl:w-[180px]'>
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

export default List_10;