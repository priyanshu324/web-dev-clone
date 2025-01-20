import React from 'react';
import { Link } from 'react-router-dom';

// List_15 Component
const List_15 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color, width and padding */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
                    Baseline Newly available CSS features
                </h3>
                 {/* Description of the section */}
                <p className='pt-7 text-2xl sm:pl-5 md:pl-3 2xl:text-lg'>
                    <span className='underline'>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some CSS features that are now Baseline Newly available.
                </p>
            </div>
            {/* Container for the list items */}
            <div className='grid grid-cols-1 mt-10 sm:grid sm:grid-cols-2 2xl:grid-cols-3'>
                {/* Mapping through the items array */}
                {items.map((feature) => (
                    // Container for each item
                     <div key={feature.key} className='pl-5 sm:pl-2 2xl:pl-2'>
                        {/* Container for the card content */}
                        <div className='block mt-10 2xl:text-lg'>
                             {/* Icon of the features */}
                            <div className='material-icons 2xl:text-3xl'>
                                {feature.icons}
                            </div>
                            {/* Title of the features */}
                            <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold mt-2 text-2xl 2xl:text-2xl'>
                                {feature.title}
                            </p>
                            {/* Content of the features */}
                            <p className='text-lg 2xl:text-lg'>
                                {feature.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List_15;