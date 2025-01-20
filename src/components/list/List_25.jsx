import React from 'react';
import { Link } from 'react-router-dom';

// List_25 Component
const List_25 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color and padding */}
            <div className='grid grid-cols-1 dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10 sm:grid sm:grid-cols-2 sm:gap-20 2xl:grid-cols-2 2xl:ml-20'>
                {/* Mapping through the items array */}
                {items.map((features) => (
                    // Container for each list item
                    <div key={features.key} className='2xl:w-[500px] 2xl:flex 2xl:items-center'>
                        {/* Container for the content of the card */}
                        <div className=''>
                            {/* Icon of the card */}
                            <div className='material-icon text-9xl  sm:text-6xl  text-black 2xl:text-8xl '>
                                {features.icons}
                            </div>
                            {/* Container for the title and description */}
                            <div className='ml-5 2xl:pl-2 '>
                                {/* Title of the card */}
                                <p className='text-2xl font-bold 2xl:text-2xl  flex items-center justify-center'>
                                    {features.title}
                                </p>
                                {/* Description of the card */}
                                <p className='text-lg lg:w-[600px]  2xl:text-lg  flex items-center justify-center'>
                                    {features.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List_25;