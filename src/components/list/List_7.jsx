import React from 'react';
import { Link } from 'react-router-dom';

// List_2 Component
export const List_2 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Heading for the "Jump ahead" section */}
            <h3 className="text-3xl font-bold pl-3 2xl:text-3xl">Jump ahead on this page:</h3>
            {/* Grid container for the items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {items.map((item) => (
                    <div
                        key={item.key}
                        id={`${item.path}`}
                        className="flex items-start gap-4">
                        <button className="mt-2 flex items-center justify-center">
                            <div className="bg-[#f5f6f7] rounded-full w-24 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:w-20 sm:h-20 sm:text-[80px] lg:w-24 lg:h-24 lg:text-[100px]">
                                <div className="material-icons text-2xl">{item.icons}</div>
                            </div>
                        </button>

                        <div className="">
                            <button className="text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl block">
                                {item.title}
                            </button>
                            <span className="text-sm font-extrabold leading-relaxed dark:text-gray-300 mt-2  ">
                                {item.content}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default List_7;