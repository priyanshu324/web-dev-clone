import React from 'react';
import { Link } from 'react-router-dom';

// Define the List_28 component
const List_28 = ({ items }) => {
    return (
        <>
            {/* Main container for the list section */}
            <div className="bg-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px] border-2 mt-8 border-y-2 dark:bg-[#202124] dark:text-white dark:mt-[-10px] dark:border-y-2 dark:border-2 dark:border-[#5f6368]">
                {/* Container for content within the list */}
                <div className="mt-10 mb-10">
                    {/* Title of the list section */}
                    <h1 className="text-5xl font-bold pl-4 2xl:text-6xl">Explore the web platform</h1>
                    <p className="text-sm font-bold pl-4 2xl:text-lg">The web platform is a constantly evolving ecosystem of browser features and APIs that developers can use to make websites that are easy and delightful to use. These pages are pathways for you to dive into each part of the web platform on web.dev—at your pace:</p>
                    {/* Grid container for items */}
                    <div className="bg-[#f5f6f7] border-2 border-solid border-gray-600 grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-3">
                        {/* Map through the items array and render each item */}
                        {items.map((section) => (
                            <div key={section.key} className="pl-4 mt-5 lg:pl-2 2xl:pl-10">
                                <div className='material-icons text-xl text-blue-500 ml-44'>{section.icons}</div>
                                {/* Link to the section */}
                                {/* Conditionally render Link or anchor tag based on path */}
                                {section.path && section.path.startsWith('/') ? (
                                    <Link to={section.path} className="hover:underline underline-offset-2 ">
                                        <h3 className="text-3xl mt-4 flex items-center justify-center  2xl:text-4xl">
                                            {section.title}
                                        </h3>
                                    </Link>
                                ) : (
                                    <a href={section.path} className="hover:underline underline-offset-2 text-blue-500">
                                        <h3 className="text-3xl mt-4 flex items-center justify-center 2xl:text-4xl">
                                            {section.title}
                                        </h3>
                                    </a>
                                )}

                                {/* Content of the section */}
                                <p className="flex items-center justify-center text-sm mt-8 2xl:text-lg">
                                    {section.content}
                                </p>
                                {/* Button container */}
                                <div className="pl-16 mt-5 2xl:pl-20">
                                    {/* Button */}
                                    <div className="border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 hover:border-2 hover:border-solid hover:border-black dark:hover:border-white dark:hover:border-solid dark:hover:border-2">
                                        {/* Conditionally render Link or anchor tag based on path */}
                                        {section.path && section.path.startsWith('/') ? (
                                            <Link to={section.path} className="text-[#1a73e8] font-bold hover:text-black dark:hover:text-white">
                                                {section.button}
                                            </Link>
                                        ) : (
                                            <button className="text-[#1a73e8] font-bold hover:text-black dark:hover:text-white">
                                                {section.button}
                                            </button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default List_28;