import React, { useState } from 'react'

const AccordionList = ({ items }) => {
    const [openItem, setOpenItem] = useState(null); // Tracks the currently opened item

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index); // Toggles item open/close
    };

    return (
        <div className="px-4 py-8 bg-white">
            {items.map((item, index) => (
                <div key={item.key} className={`border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 relative ${openItem === index ? "h-40" : ""}`}>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleItem(index)}
                    >
                        <div className="flex items-center relative">
                            {/* Border Line */}
                            <div
                                className={`absolute left-0 top-1/2 transform -translate-y-1/2 max-h-96 h-20 border-l-2 ml-6  border-gray-300 dark:border-gray-600 ${openItem === index
                                    ? 'h-32 mt-10' : ''
                                    }`}
                            ></div>
                            {/* Circle with the index */}
                            <div
                                className={`rounded-full w-6 h-6 flex items-center justify-center mr-3 relative ml-3 text-white  ${openItem === index
                                    ? 'bg-blue-500 dark:bg-blue-500'
                                    : 'bg-gray-800 dark:bg-gray-900'
                                    }`}
                            >
                                {index + 1}
                            </div>
                            <div>
                                {/* Title */}
                                <h3 className="text-xl font-medium text-gray-600 dark:text-white">{item.title}</h3>
                                {/* Article Label */}
                                <p className="text-gray-500 text-sm flex items-center dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5m-16.5-7.5h16.5" />
                                    </svg>
                                    Article
                                </p>
                            </div>
                        </div>
                        {/* Toggle Button */}
                        <button
                            className={`rounded-full p-1 border-2 border-blue-500 text-black hover:bg-blue-500 flex items-center justify-center transition-transform duration-200  ${openItem === index ? 'rotate-180' : ''
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    {/* open item Container */}
                    {openItem === index && (
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-gray-700 dark:text-gray-300 text-justify mb-4 ml-10">
                                {item.content}
                            </p>
                            <a href={item.articleLink} target="_blank" rel="noopener noreferrer">
                                <button className="bg-white hover:text-black hover:border-black rounded-3xl border-2 border-solid border-blue-500 text-blue-500 font-bold py-2 px-4 ">
                                    {item.button}
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AccordionList