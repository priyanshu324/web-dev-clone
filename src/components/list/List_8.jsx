import React from 'react';
import { Link } from 'react-router-dom';

// List_8 Component
export const List_4 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background and padding */}
            <div className='bg-white mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center sm:flex-none sm:items-start sm:justify-start md:pl-5 2xl:text-3xl'>
                    Baseline Newly available JavaScript features
                </h3>
                {/* Description of Baseline */}
                <p className='pt-7 font-semibold text-xl sm:pl-3 md:pl-1 2xl:text-lg'>
                    <span className='underline'>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some JavaScript features that are now Baseline Newly available.
                </p>
            </div>
            {/* Container for the features */}
            <div className='grid grid-cols-1 mt-10 sm:grid sm:grid-cols-2 2xl:grid-cols-2'>
                {/* mapping the item from the `items` array */}
                {items.map((feature) => (
                    // Container for each item
                    <div key={feature.key} id={`${feature.path}`} className='row-span-2'>
                        {/* Container for the card content */}
                        <div className='block mt-10'>
                            {/* Icon of the features */}
                            <div className='material-icons 2xl:text-2xl'>{feature.icons}</div>
                            {/* Title of the features */}
                            <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold mt-2 text-2xl 2xl:text-2xl'>
                                {feature.title}
                            </p>
                        </div>
                        {/* Content of the features */}
                        <p className='text-lg 2xl:text-lg'>
                            {feature.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List_8;