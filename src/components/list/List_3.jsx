import React from 'react';
import { Link } from 'react-router-dom';

// List_3 Component
const List_3 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='bg-white dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 2xl:text-2xl'>Performance</h3>
                {/* Container for all the cards */}
                <div className='mt-10'>
                    {/* Grid container for the items */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white  dark:text-white'>
                        {/* mapping through the item from the `items` array */}
                        {items.map(({ key, title, content, imglink }) => (
                            // Container for each item
                            <div className='pl-5 sm:pl-2' key={key}>
                                {/* Container for the individual card */}
                                <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[380px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='rounded-full m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={imglink} alt={title} />
                                        </a>
                                    </div>
                                    {/* Link for the title */}
                                    <a href="#">
                                        {/* Title of the card */}
                                        <h3 className='text-2xl font-extrabold text-black  dark:text-white pl-2 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg  mt-3 pl-2 2xl:text-lg'>
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

export default List_3;