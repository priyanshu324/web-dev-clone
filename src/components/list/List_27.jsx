import React from 'react';
import { Link } from 'react-router-dom';

// Define the List_27 component
const List_27 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Main container for the list of items */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 
                             2xl:w-[1536px]
                             grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 
                             2xl:grid 2xl:grid-cols-3
                             dark:bg-[#202124] dark:text-white mt-[-50px] pb-20'>
                {/* Map through the items array and render each item */}
                {items.map((item) => (
                    // Container for each list item
                    <div className='pl-4 sm:pl-0 md:pl-10 lg:pl-4 2xl:pl-10' key={item.key}>
                        {/* Container for each individual item card */}
                        <div className='bg-white border-white border-2 border-solid w-[350px] h-[600px] 
                                         sm:w-[300px] sm:h-[450px] 
                                         xl:w-[400px] xl:h-[500px] 
                                         2xl:w-[450px] 2xl:h-[600px]
                                         mt-10 mb-10 rounded-2xl dark:bg-[#202124]'>
                            {/* Item Image */}
                            <img src={item.imglink} alt={item.title} className='p-10 rounded-[50px] 2xl:p-12' />
                            {/* Item Title */}
                            <h3 className='mt-[-20px] pl-14 text-4xl sm:text-2xl font-bold xl:flex xl:items-center xl:justify-center xl:pl-0 2xl:text-3xl 2xl:pl-0 2xl:mt-[-10px]'>
                                {item.title}
                            </h3>
                            {/* Item Content/Description */}
                            <p className='text-lg w-[355px] sm:text-sm sm:w-[280px] xl:w-[380px] pl-10 mt-3 2xl:w-[420px] 2xl:text-lg'>
                                {item.content}
                            </p>
                            {/* Button Container */}
                            <div className='pl-28 sm:pl-16 mt-5 2xl:pl-28'>
                                {/* Button */}
                                <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-2 dark:hover:border-solid'>
                                    {/* Conditionally render Link or anchor tag based on path */}
                                    {item.path.startsWith('/') ? (
                                        <Link to={item.path} className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                            {item.button}
                                        </Link>
                                    ) : (
                                        <a href={item.path} className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                            {item.button}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List_27;