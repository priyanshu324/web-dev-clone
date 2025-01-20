import React from 'react';
import { Link } from 'react-router-dom';

// List_19 Component
export const List_19 = ({ items }) => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-full px-4 py-8">
            <h3 className="text-2xl font-bold mb-8 pl-4 dark:text-white">
                Jump ahead on this page:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {items.map((item) => (
                    <div key={item.key} className="flex items-start gap-4">
                        <button onClick={() => handleScroll(`${item.path}`)} className="mt-2 flex items-center justify-center">
                            <div className="bg-[#f5f6f7] rounded-full w-24 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:w-20 sm:h-20 sm:text-[80px] lg:w-24 lg:h-24 lg:text-[100px]">
                                <div className="material-icons text-2xl">{item.icons}</div>
                            </div>
                        </button>

                        <div className="">
                            <button onClick={() => handleScroll(`${item.path}`)} className="text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl block">
                                {item.title}
                            </button>
                            <span className="text-base leading-relaxed dark:text-gray-300 mt-2">
                                {item.content}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default List_19;