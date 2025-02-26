import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for routing
import { FaChrome } from 'react-icons/fa';

// List_1 Component

export const List_1 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.key}>
                        <div className='block bg-[#F0F4F8] dark:bg-[#121212] dark:text-white pb-20 dark:mt-[-20px]
                             sm:grid sm:grid-cols-2
                             xl:grid xl:grid-cols-2
                             2xl:grid-cols-2'>

                            {/* Left side of the banner */}
                            <div>
                                {/* Banner Heading */}
                                <a href="#" className='hover:underline underline-offset-2'>
                                    <h3 className='text-[#212121] dark:text-[#EEEEEE] text-6xl pl-4 mt-5 w-[420px]
                                        xl:text-5xl xl:font-bold
                                        2xl:text-6xl'>
                                        {item.title}
                                    </h3>
                                </a>
                                {/* Banner Description */}
                                <p className='text-[#757575] dark:text-[#BDBDBD] text-[25px] w-[350px] leading-relaxed pl-4 mt-10
                                    lg:w-[600px]
                                    xl:w-[750px]
                                    2xl:w-[900px]'>
                                    {item.content}
                                </p>
                                {/* "About Web.dev" Button (Mobile Only) */}
                                <div className='mt-14 pl-20 lg:hidden'>
                                    <div className='border-[#42A5F5] hover:border-[#8BC34A] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 text-[#42A5F5] hover:text-[#8BC34A] font-bold transition-colors duration-200 dark:text-[#42A5F5] dark:hover:text-[#8BC34A]'>
                                        <a href='#' className="dark:text-[#42A5F5] dark:hover:text-[#8BC34A]">{item.button}</a>
                                    </div>
                                </div>
                            </div>

                            {/* Right side of the banner (Image) */}
                            <div className='mt-5'>
                                {/* Container for the banner image */}
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            {/* Banner Image */}
                                            <img
                                                src={item.imglink}
                                                alt={item.title}
                                                className='w-[375px] h-[300px] pl-4
                                               sm:w-[300px] sm:h-[200px] sm:mt-52 sm:ml-5 sm:mr-20
                                               md:ml-28
                                               lg:ml-80
                                               xl:mt-10 xl:ml-[300px] xl:w-[50%] xl:h-[50%] xl:max-w-auto
                                               2xl:ml-[200px] 2xl:mt-10 2xl:w-[60%] 2xl:h-[60%]'
                                            />
                                        </picture>
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

// List_2 Component
export const List_2 = ({ items }) => {
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
                            <img src={item.imglink} alt={item.title} className='p-10 rounded-[70px] 2xl:p-12 ' />
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
                                <div className='border-[#1a73e8] text-[#1a73e8] font-bold hover:text-black dark:hover:text-white border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-2 dark:hover:border-solid'>
                                    {/* Link to the button */}
                                    <a href="#" >
                                        {item.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

// List_3 Component
export const List_3 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    key={item.key}
                    className="sm:grid sm:grid-cols-2 lg:grid-cols-2 items-start gap-x-8  mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-8 lg:mb-8  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-5xl col-span-2">
                        {item.main_title}
                    </h1>
                    {/* First column */}
                    <div className="flex flex-col items-start">
                        {item.title && (
                            <a
                                href="#"
                                className="text-2xl lg:text-xl font-bold mt-2 text-[#1a73e8] hover:underline underline-offset-2 pl-4 sm:pl-5 lg:pl-10  xl:pl-20 2xl:text-2xl"
                            >
                                {item.title}
                            </a>
                        )}
                        {item.content && (
                            <p className="text-lg mt-2 pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-lg max-w-[450px]">
                                {item.content}
                            </p>
                        )}
                        {/* Button for first column */}
                        {item.button && (
                            <div className="pl-4 mt-5 sm:pl-5 lg:pl-10 xl:pl-20">
                                <div className="border-[#1a73e8]  border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2">
                                    {item.path && item.path.startsWith('/') ? (
                                        <Link
                                            to={item.path}
                                        >
                                            {item.button}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.path}
                                        >
                                            {item.button}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Second column */}
                    <div className="flex flex-col items-start ">
                        {item.title_1 && (
                            <a
                                href="#"
                                className="text-2xl lg:text-xl font-bold mt-2 text-[#1a73e8] hover:underline underline-offset-2  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-2xl"
                            >
                                {item.title_1}
                            </a>
                        )}
                        {item.content_1 && (
                            <p className="text-lg mt-2  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-lg max-w-[450px]">
                                {item.content_1}
                            </p>
                        )}
                        {/* Button for second column */}
                        {item.button_1 && (
                            <div className="pl-4 mt-5 sm:pl-5 lg:pl-10 xl:pl-20">
                                <div className="border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2">
                                    {item.path_1 && item.path_1.startsWith('/') ? (
                                        <Link
                                            to={item.path_1}
                                        >
                                            {item.button_1}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.path_1}
                                        >
                                            {item.button_1}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

// List_4 component to render a list of items with icons, titles, and buttons.
export const List_4 = ({ items }) => {
    return (
        <div className=" flex flex-col  items-start justify-start w-full"> {/* Changed to flex-col for responsive stacking */}
            {items.map((item, index) => (
                <div key={index} className="flex items-center w-full py-4 pl-40 border-b border-gray-200 ">
                    {/* Icon */}
                    <div className="material-icons pl-4 sm:pl-6 md:pl-10  text-2xl sm:text-3xl ">
                        {item.icons}
                    </div>

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold pl-4 sm:pl-6 md:pl-8 flex-grow  ">
                        {item.title}
                    </h1>

                    {/* Button Container */}
                    <div className="pr-4 sm:pr-6 md:pr-10">
                        {/* Button */}
                        <div className="flex items-center justify-center w-full sm:w-[200px] md:w-[250px]  text-[#1a73e8] border-[#1a73e8] border-2 border-solid rounded-2xl hover:text-black hover:border-black transition-colors duration-200">
                            <a href="#" className="block px-4 py-2 w-full text-center"> {/* Added block display and padding for better button styling */}
                                {item.button}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// lsit_5
export const List_5 = ({ items }) => {

    const getVideoId = (url) => {
        try {
            const urlObj = new URL(url);
            const searchParams = new URLSearchParams(urlObj.search);
            return searchParams.get('v');
        } catch (e) {
            console.error("Error parsing URL:", e);
            return null;
        }
    };


    return (
        <div className="w-full overflow-hidden">
            <div className="bg-[#f5f6f7] w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 
                      2xl:w-[1536px]
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                      2xl:grid-cols-3
                      dark:bg-[#202124] dark:text-white mt-[-50px] pb-20">
                {items.map((item, index) => {
                    const videoId = getVideoId(item.videoLink);
                    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
                    return (
                        <div className="pl-5 mt-20 mb-5" key={index}> {/* Added margin to separate items */}
                            <div className="bg-white border-[#f5f6f7] border-2 border-solid w-[350px] sm:w-[300px] xl:w-[400px] 
                           2xl:w-[460px] rounded-2xl dark:bg-[#202124] flex flex-col items-center">
                                {/* Iframe Tag */}
                                {embedUrl ? (
                                    <iframe
                                        src={embedUrl}
                                        title={item.title}
                                        className="  w-[100%] h-[200px] sm:h-[150px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px] p-2 sm:p-2 lg:p-2 xl:p-2 2xl:p-5 "
                                        allowFullScreen
                                        allowTransparency
                                    >
                                    </iframe>
                                ) : (
                                    <p className='p-4 text-center'>Invalid or no video URL</p>
                                )}
                                <h3 className="mt-[20px] px-4 text-2xl sm:text-xl font-bold text-center xl:mt-[10px] 2xl:text-4xl">
                                    {item.title}
                                </h3>
                                <p className="text-sm px-4 mt-3 leading-relaxed sm:text-xs xl:text-sm 2xl:text-base">
                                    {item.content}
                                </p>
                                <div className="mt-5 flex justify-center pb-5">
                                    <div className="border-[#1a73e8] text-[#1a73e8] font-bold hover:text-black dark:hover:text-white border-2 border-solid rounded-3xl flex items-center justify-center w-[200px] h-10 hover:border-black hover:border-2 hover:border-solid dark:hover:border-white dark:hover:border-2 dark:hover:border-solid ">
                                        <a href="#" className="block px-3 py-1 w-full text-center">
                                            {item.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// list 6
export const List_6 = ({ items }) => {
    return (
        <>
            {/* Image Container */}
            {items.length > 0 && items[0].imglink && (
                <div className="w-full flex ml-20  mt-10 mb-20 "> {/* Centered image */}
                    <img
                        src={items[0].imglink}
                        alt={items[0].title}
                        className="w-[200px] h-auto object-contain rounded-md"
                    />
                </div>
            )}

            {/* Main container for the list of items */}
            <div
                className="bg-[#f5f6f7] w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px]
                      mx-auto
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3
                      dark:bg-[#202124] dark:text-white mt-[-50px] pb-20 px-4 sm:px-0"
            >
                {/* Map through the items array and render each item */}
                {items.map((item) => (
                    // Container for each list item
                    <div className="p-4" key={item.key}> {/* Added padding for spacing */}
                        {/* Container for each individual item card */}
                        <div className="bg-white border-[#f5f6f7] border-2 border-solid rounded-2xl dark:bg-[#202124] flex flex-col"> {/* Removed fixed height */}
                            {/* Item Title */}
                            <h3 className="mt-4 px-6 text-2xl sm:text-xl font-bold text-center xl:text-2xl 2xl:text-2xl">
                                {item.title}
                            </h3>
                            {/* Item Content/Description */}
                            <p className="text-base px-6 mt-3 leading-relaxed text-center">
                                {item.content}
                            </p>
                            {/* Button Container */}
                            <div className="mt-5 flex flex-col justify-center items-center pb-5">
                                {/* Button */}
                                <div className="border-[#1a73e8] text-[#1a73e8] font-bold hover:text-black hover:border-black  dark:hover:text-white border-2 border-solid rounded-3xl w-[180px] h-10 flex items-center justify-center">
                                    <a href="#" className="block px-3 py-1 w-full text-center">
                                        {item.button}
                                    </a>
                                </div>
                                {item.button_1 && (
                                    <div className="mt-4 border-[#1a73e8] text-[#1a73e8] font-bold hover:text-black hover:border-black dark:hover:text-white border-2 border-solid rounded-3xl w-[220px] h-10 flex items-center justify-center">
                                        <a href="#" className="block px-3 py-1 w-full text-center">
                                            {item.button_1}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

// list 7
export const List_7 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    key={item.key}
                    className="sm:grid sm:grid-cols-2 lg:grid-cols-2 items-start gap-x-8  mb-12"
                >
                    <FaChrome className='bg-gray-400 text-[#1a73e8] text-5xl ml-24 rounded-[10%] w-20 h-20 ' />
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-8 lg:mb-8  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-5xl col-span-2">
                        {item.main_title}
                    </h1>
                    {/* First column */}
                    <div className="flex flex-col items-start">
                        {item.title && (
                            <a
                                href="#"
                                className="text-2xl lg:text-xl font-bold mt-2 text-[#1a73e8] hover:underline underline-offset-2 pl-4 sm:pl-5 lg:pl-10  xl:pl-20 2xl:text-2xl"
                            >
                                {item.title}
                            </a>
                        )}
                        {item.content && (
                            <p className="text-lg mt-2 pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-lg max-w-[450px]">
                                {item.content}
                            </p>
                        )}
                        {/* Button for first column */}
                        {item.button && (
                            <div className="pl-4 mt-5 sm:pl-5 lg:pl-10 xl:pl-20">
                                <div className="border-[#1a73e8]  border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2">
                                    {item.path && item.path.startsWith('/') ? (
                                        <Link
                                            to={item.path}
                                        >
                                            {item.button}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.path}
                                        >
                                            {item.button}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

// list 8
export const List_8 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    key={item.key}
                    className=" sm:grid sm:grid-cols-2 lg:grid-cols-2 items-start gap-x-8  mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-8 lg:mb-8  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-5xl col-span-2">
                        {item.main_title}
                    </h1>
                    {/* First column */}
                    <div className="flex flex-col items-start">
                        {item.title && (
                            <a
                                href="#"
                                className="text-2xl lg:text-xl font-bold mt-2 text-[#1a73e8] hover:underline underline-offset-2 pl-4 sm:pl-5 lg:pl-10  xl:pl-20 2xl:text-2xl"
                            >
                                {item.title}
                            </a>
                        )}
                        {item.content && (
                            <p className="text-lg mt-2 pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-lg max-w-[450px]">
                                {item.content}
                            </p>
                        )}
                        {/* Button for first column */}
                        {item.button && (
                            <div className="pl-4 mt-5 sm:pl-5 lg:pl-10 xl:pl-20">
                                <div className="border-[#1a73e8]  border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2">
                                    {item.path && item.path.startsWith('/') ? (
                                        <Link
                                        // to={item.path}
                                        >
                                            {item.button}
                                        </Link>
                                    ) : (
                                        <a
                                        // href={item.path}
                                        >
                                            {item.button}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Second column */}
                    <div className="flex flex-col items-start ">
                        {item.title_1 && (
                            <a
                                href="#"
                                className="text-2xl lg:text-xl font-bold mt-2 text-[#1a73e8] hover:underline underline-offset-2  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-2xl"
                            >
                                {item.title_1}
                            </a>
                        )}
                        {item.content_1 && (
                            <p className="text-lg mt-2  pl-4 sm:pl-5 lg:pl-10 xl:pl-20 2xl:text-lg max-w-[450px]">
                                {item.content_1}
                            </p>
                        )}
                        {/* Button for second column */}
                        {item.button_1 && (
                            <div className="pl-4 mt-5 sm:pl-5 lg:pl-10 xl:pl-20">
                                <div className="border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2">
                                    {item.path_1 && item.path_1.startsWith('/') ? (
                                        <Link
                                        // to={item.path_1}
                                        >
                                            {item.button_1}
                                        </Link>
                                    ) : (
                                        <a
                                        // href={item.path_1}
                                        >
                                            {item.button_1}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

// list 9
export const List_9 = ({ items }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            {items.map((item, index) => (
                <div key={index} className="flex items-center w-full py-4 pl-40 border-b border-gray-200"> {/* Adjusted py and pl values */}
                    {/* Icon */}
                    <div className="material-icons text-2xl sm:text-3xl mr-4">  {/* Added mr for icon spacing and removed extra padding */}
                        {item.icons}
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col">  {/* Added flex-col for title and content */}
                        {/* Title */}
                        <h1 className="text-xl text-black sm:text-2xl md:text-3xl font-bold pl-20">
                            {item.title}
                        </h1>
                        {/* Content */}
                        <p className="text-black mt-1 font-bold text-sm pl-20">{item.content}</p> {/* Added content styling and mt for spacing */}

                    </div>

                </div>
            ))}
        </div>
    );
};

// list 10
export const List_10 = ({ items }) => {
    const getVideoId = (url) => {
        try {
            const urlObj = new URL(url);
            const searchParams = new URLSearchParams(urlObj.search);
            return searchParams.get('v');
        } catch (e) {
            console.error("Error parsing URL:", e);
            return null;
        }
    };

    return (
        <div className="w-full overflow-hidden">
            <div className="bg-[#f5f6f7] w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 
                      2xl:w-[1536px]
                      mx-auto
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                      2xl:grid-cols-3
                      dark:bg-[#202124] dark:text-white mt-[-50px] pb-20 px-4 sm:px-0"> {/* Added padding */}
                {items.map((item, index) => {
                    const videoId = getVideoId(item.videoLink);
                    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
                    return (
                        <div className="mt-5 mb-5 px-4" key={index}> {/* Added margin and padding */}
                            <div className="bg-white border-[#f5f6f7] border-2 border-solid rounded-2xl dark:bg-[#202124] flex flex-col items-center"> {/* Removed fixed widths */}
                                {/* Iframe Tag */}
                                {embedUrl ? (
                                    <iframe
                                        src={embedUrl}
                                        title={item.title}
                                        className="w-full h-[200px] sm:h-[150px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px] p-2 sm:p-2 lg:p-2 xl:p-2 2xl:p-5" /* Removed width and made it responsive with width-full */
                                        allowFullScreen
                                        allowTransparency
                                    >
                                    </iframe>
                                ) : (
                                    <p className='p-4 text-center'>Invalid or no video URL</p>
                                )}
                                <h3 className="mt-4 px-4 text-2xl sm:text-xl font-bold text-center xl:text-2xl 2xl:text-3xl"> {/* Adjusted mt */}
                                    {item.title}
                                </h3>
                                <p className="text-sm px-4 mt-3 leading-relaxed text-center sm:text-xs xl:text-sm 2xl:text-base">
                                    {item.content}
                                </p>
                                <div className="mt-5 flex justify-center pb-5">
                                    <div className="border-[#1a73e8] text-[#1a73e8] font-bold hover:text-black dark:hover:text-white border-2 border-solid rounded-3xl flex items-center justify-center w-[180px] h-10 hover:border-black hover:border-2 hover:border-solid dark:hover:border-white dark:hover:border-2 dark:hover:border-solid">  {/* Adjusted width */}
                                        <a href="#" className="block px-3 py-1 w-full text-center">
                                            {item.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


// Ai_1 Component
const Ai_1 = () => {
    // API endpoint

    const api1 = 'http://localhost:1337/api/ai-banners';
    const api2 = 'http://localhost:1337/api/ai-cards';
    const api3 = 'http://localhost:1337/api/ai-rows';
    const api4 = 'http://localhost:1337/api/ai-chrome-video-titles';
    const api5 = 'http://localhost:1337/api/ai-chrome-videos';
    const api6 = 'http://localhost:1337/api/ai-geminis';
    const api7 = 'http://localhost:1337/api/ai-chromes';
    const api8 = 'http://localhost:1337/api/ai-chrome-1s';
    const api9 = 'http://localhost:1337/api/ai-google-video-titles';
    const api10 = 'http://localhost:1337/api/ai-google-videos';


    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: data3, loading: loading3, error: error3 } = useFetch(api3);
    const { data: data4, loading: loading4, error: error4 } = useFetch(api4);
    const { data: data5, loading: loading5, error: error5 } = useFetch(api5);
    const { data: data6, loading: loading6, error: error6 } = useFetch(api6);
    const { data: data7, loading: loading7, error: error7 } = useFetch(api7);
    const { data: data8, loading: loading8, error: error8 } = useFetch(api8);
    const { data: data9, loading: loading9, error: error9 } = useFetch(api9);
    const { data: data10, loading: loading10, error: error10 } = useFetch(api10);

    return (
        <>

            {/* Main container for the List_2  */}
            <div className='mt-10 lg:mt-40 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_2 Component to render the data */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}
            </div>
            {/* <div className='border-[0.5px] border-solid border-[#5f6368] '></div> */}
            {/* Main container for the List_2  */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading2 && <p>Loading...</p>}
                {error2 && <p className="text-red-500">{error2}</p>}
                {/* List_2 Component to render the data */}
                {!loading2 && !error2 && <List_2 items={data2.data || []} />}
            </div>

            {/* Main container for the List_2  */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading3 && <p>Loading...</p>}
                {error3 && <p className="text-red-500">{error3}</p>}
                {/* List_2 Component to render the data */}
                {!loading3 && !error3 && <List_3 items={data3.data || []} />}
            </div>

            {/* Main container for the List_2  */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading4 && <p>Loading...</p>}
                {error4 && <p className="text-red-500">{error4}</p>}
                {/* List_2 Component to render the data */}
                {!loading4 && !error4 && <List_4 items={data4.data || []} />}
            </div>
            {/* Main container for the List_2  */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading5 && <p>Loading...</p>}
                {error5 && <p className="text-red-500">{error5}</p>}
                {/* List_2 Component to render the data */}
                {!loading5 && !error5 && <List_5 items={data5.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading6 && <p>Loading...</p>}
                {error6 && <p className="text-red-500">{error6}</p>}
                {/* List_2 Component to render the data */}
                {!loading6 && !error6 && <List_6 items={data6.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading7 && <p>Loading...</p>}
                {error7 && <p className="text-red-500">{error7}</p>}
                {/* List_2 Component to render the data */}
                {!loading7 && !error7 && <List_7 items={data7.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading8 && <p>Loading...</p>}
                {error8 && <p className="text-red-500">{error8}</p>}
                {/* List_2 Component to render the data */}
                {!loading8 && !error8 && <List_8 items={data8.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading9 && <p>Loading...</p>}
                {error9 && <p className="text-red-500">{error9}</p>}
                {/* List_2 Component to render the data */}
                {!loading9 && !error9 && <List_9 items={data9.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading10 && <p>Loading...</p>}
                {error10 && <p className="text-red-500">{error10}</p>}
                {/* List_2 Component to render the data */}
                {!loading10 && !error10 && <List_10 items={data10.data || []} />}
            </div>
        </>
    );
};

export default Ai_1;