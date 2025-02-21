import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

// Define the List_1 component
export const List_1 = ({ items }) => {
    return (
        <div className="bg-[#F0F4F8] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px] border-2 mt-8 border-y-2 dark:bg-[#121212] dark:text-white dark:mt-[-10px] dark:border-y-2 dark:border-2 dark:border-[#78909C] p-6">
            {/* Title and Main Content at the Top */}
            {items.length > 0 && (
                <div className="mb-8">
                    <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                    <p className="text-[#757575] dark:text-[#BDBDBD] text-sm font-bold">{items[0].main_content}</p>
                </div>
            )}

            {/* Flex container for side-by-side layout */}
            <div className="flex flex-wrap justify-center gap-8">
                {items.map((section) => (
                    <div key={section.key} className="w-full sm:w-[30%] bg-[#EEEEEE] dark:bg-[#121212] border-2 border-solid border-[#78909C] p-4">
                        {/* Icon */}
                        <div className="material-icons ">
                            {section.icons}
                        </div>

                        {/* Title with Link */}
                        <div className="text-center mt-4">
                            {section.path && section.path.startsWith('/') ? (
                                <Link to={section.path} className="hover:underline underline-offset-2">
                                    <h3 className="text-[#212121] dark:text-[#EEEEEE] text-3xl">{section.title}</h3>
                                </Link>
                            ) : (
                                <a href={section.path} className="hover:underline underline-offset-2 ">
                                    <h3 className="text-[#212121] dark:text-[#EEEEEE] text-3xl">{section.title}</h3>
                                </a>
                            )}
                        </div>

                        {/* Section Content */}
                        <p className="text-center text-sm mt-4 text-[#757575] dark:text-[#BDBDBD]">{section.content}</p>

                        {/* Button */}
                        <div className="flex justify-center mt-5">
                            <div className="border-[#42A5F5] text-[#42A5F5] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 hover:text-black hover:border-black dark:hover:border-white dark:hover:text-[#EEEEEE] transition-colors duration-200">
                                {section.path && section.path.startsWith('/') ? (
                                    <Link to={section.path} >
                                        {section.button}
                                    </Link>
                                ) : (
                                    <button >
                                        {section.button}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Box Component
const Box = () => {
    // API endpoint
    const api1 = 'http://localhost:1337/api/home-news';
    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);

    return (
        <>
            {/* Main container for the Box component */}
            <div className='mt-10 lg:mt-20 dark:bg-[#121212] dark:text-white'>
                {/* Loading indicator */}
                {loading1 && <p>Loading...</p>}
                {/* Error message */}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_28 Component to display the data if no error or loading state is present */}
                {!loading1 && !error1 && <List_1 items={list1?.data || []} />}
            </div>
        </>
    );
};

export default Box;