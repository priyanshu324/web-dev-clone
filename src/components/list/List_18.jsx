import React from 'react';
import { Link } from 'react-router-dom';

// List_9 Component
export const List_9 = ({ items }) => {
    return (
        {
            items.map((item) => (
                <div

                >
                    <div className='grid grid-cols-1 dark:bg-[#202124] dark:text-white pb-10 lg:grid-cols-2'>
                        {/* Left side of the section */}
                        <div
                            key={item.key}
                            id={`${item.path}`}
                        >
                            {/* Heading of the section */}
                            <h3 className='mt-10 text-4xl font-bold hover:underline hover:underline-offset-2 sm:ml-10 2xl:text-4xl'>{item.title}</h3>
                            {/* Description of the podcast */}
                            <p className='text-lg mt-8 w-[375px] sm:w-[600px] sm:ml-10 md:w-[700px] lg:w-[650px] xl:w-[750px] 2xl:text-lg 2xl:w-[800px]'>
                                {item.content}
                            </p>
                            {/* Link to the podcast */}
                            <div className='sm:ml-10 lg:ml-96 pt-[50px] 2xl:ml-[100px]'>
                                {/* Listen Now! link */}
                                <div className='border-[#1a73e8] cursor-pointer border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 text-[#1a73e8] font-bold hover:text-white hover:bg-[#1a73e8]'>
                                    <a href="#">
                                        {item.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Right side of the section */}
                        <div className='rounded-[24px] '>
                            {/* Podcast image */}
                            <img src={item.imglink} alt={item.title} className=' rounded-[24px] mt-10 w-[290px] h-[290px] sm:ml-56 md:ml-44 sm:w-[490px] sm:h-[350px] md:w-[490px] md:h-[350px] lg:w-[290px] lg:h-[290px] xl:ml-96 2xl:w-[400px] 2xl:h-[400px] 2xl:ml-[100px]' />
                        </div>
                    </div>
                </div>
            ))
        }
    );
};

export default List_18;