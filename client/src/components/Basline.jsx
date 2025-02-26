import React from 'react'
import useFetch from '../hooks/useFetch';

// list-1
export const List_1 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <>

                        {/* Main container for the ai page */}
                        <div className='block bg-[#f5f6f7] dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px]  sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-2 mt-40'>
                            {/* Left section of the banner */}
                            <div>
                                {/* Heading of the section */}
                                <a href="#" className='hover:underline underline-offset-2'>
                                    <h3 className='text-6xl pl-4 mt-5 w-[800px] xl:text-5xl xl:font-bold 2xl:text-6xl'>
                                        {item.title}
                                    </h3>
                                </a>
                                {/* Description of the section */}
                                <p className='text-[25px] w-[350px]  leading-relaxed pl-4 mt-10 lg:w-[600px] xl:w-[750px] 2xl:w-[900px]'>
                                    {item.content}
                                </p>
                            </div>
                            {/* Right section of the banner */}
                            <div className='mt-5'>
                                {/* Image container */}
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            {/* Image */}
                                            <img src={item.imglink} alt={item.title} className=' w-[375px] h-[300px] pl-4 sm:w-[300px] sm:h-[200px] sm:mt-52 sm:ml-5 sm:mr-20 md:ml-28 lg:ml-80 xl:mt-10 xl:ml-[300px] xl:w-[50%] xl:h-[50%]  xl:max-w-auto 2xl:ml-[270px] 2xl:mt-10 2xl:w-[60%] 2xl:h-[60%] ' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>


                        </div>

                    </>
                ))
            }
        </>
    )
}


// List_2 component: Handles the content structure for "Who defines Baseline?" and "How do things become Baseline?" sections
export const List_2 = ({ items }) => {
    return (
        <div className=" mx-auto px-4 py-8">
            {items.map((item) => (
                <div key={item.key} className="mb-12 md:mb-16 lg:mb-20">
                    {/* Main title and content section */}
                    <div className="mb-20">
                        <h1 className="text-2xl font-bold mb-4 sm:text-3xl md:text-3xl lg:text-4xl">
                            {item.main_title}
                        </h1>
                        <span className="block text-gray-700 leading-relaxed sm:text-lg md:text-xl">
                            {item.main_content}
                        </span>
                    </div>

                    {/* Section for title content and list items, using a flex layout*/}
                    <div className="  gap-10">
                        {/*Title and content Section*/}
                        <div className=" md:w-1/2 ">
                            <h2 className="text-xl font-semibold mb-3 sm:text-2xl md:text-2xl lg:text-3xl">
                                {item.title}
                            </h2>
                            <span className="block text-gray-700 leading-relaxed mb-3 sm:text-lg md:text-xl">
                                {item.content}
                            </span>
                        </div>
                        {/* List of stages */}
                        <div className="md:w-1/2">
                            <ul className="list-disc list-inside text-gray-700 sm:text-lg md:text-xl">
                                <li className="mb-2">
                                    {item.title_1}
                                </li>
                                <li className="mb-2">
                                    {item.title_2}
                                </li>
                                <li>
                                    {item.title_3}
                                </li><li>
                                    {item.title_3}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// List_3 component: Handles the content structure for "The core browser set" section
export const List_3 = ({ items }) => {
    return (
        <div className="ml-[-390px]">
            {items.map((item) => (
                <div key={item.key} className="">
                    {/* Main title and content section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 sm:text-3xl md:text-3xl lg:text-4xl">
                            {item.title}
                        </h2>
                    </div>
                    {/* Section for list items */}
                    <div className="">
                        <ul className="list-disc list-inside text-gray-700 sm:text-lg md:text-xl">
                            <li className="mb-2">
                                {item.link_1}
                            </li>
                            <li className="mb-2">
                                {item.link_2}
                            </li>
                            <li className="mb-2">
                                {item.link_3}
                            </li>
                            <li>
                                {item.link_4}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};


// lsit 4
export const List_4 = ({ items }) => {
    return (

        <>
            {/* Title and Main Content at the Top */}
            {items.length > 0 && (
                <div className="mb-8">
                    <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                </div>
            )}
            <div className='bg-[#f5f6f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
                {items.map((item) => (
                    <div
                        key={item.key}
                        id={`${item.path}`}
                        className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                        {/* Container for the image */}
                        <div className='flex items-center justify-center rounded-full text-7xl 2xl:text-2xl '>
                            {/* Link to the image */}
                            <a href="#">
                                {/* Image of the card */}
                                <img src={item.imglink} alt={item.title} className='p-10 rounded-[50px] sm:p-2 2xl:p-10' />
                            </a>
                        </div>

                        <h1 className='text-2xl font-bold mb-2 text-black hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
                            <a href="#">
                                {item.title}
                            </a>
                        </h1>
                        <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
                            {item.content}
                        </p>
                        <div className='ml-20'>
                            {item.button && (
                                <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[250px]   font-medium'>
                                    <a
                                        href='#'
                                    >
                                        {item.button}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

// list 5
export const List_5 = ({ items }) => {
    return (

        <>
            <div className='bg-[#f5f6f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-8'>
                {items.map((item) => (
                    <div
                        key={item.key}
                        id={`${item.path}`}
                        className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'
                    >
                        <div className="bg-[#f5f6f7] rounded-full w-24 h-24 ml-72 text-[100px] dark:bg-[#202124] sm:w-20 sm:h-20 sm:text-[80px] lg:w-24 lg:h-24 lg:text-[100px] mb-10">
                            <div className="material-icons text-2xl ">{item.icons}</div>
                        </div>
                        <h1 className='text-2xl font-bold mb-2 text-black hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
                            <a href="#">
                                {item.title}
                            </a>
                        </h1>
                        <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
                            {item.content}
                        </p>
                        <div className='ml-20'>
                            {item.button && (
                                <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[250px]   font-medium'>
                                    <a
                                        href='#'
                                    >
                                        {item.button}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

// List_6 component
export const List_6 = ({ items }) => {


    return (
        <>
            <div className="max-w-full bg-white px-4 py-12 ">

                <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.key} className="flex items-start gap-4">
                            <button className="mt-2 flex items-center justify-center">
                                <div className="bg-[#f5f6f7] rounded-full w-24 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:w-20 sm:h-20 sm:text-[80px] lg:w-24 lg:h-24 lg:text-[100px]">
                                    <div className="material-icons text-2xl">{item.icons}</div>
                                </div>
                            </button>

                            <div className="">
                                <button className="text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl block">
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
        </>
    );
};

// lsit 7 
export const List_7 = ({ items }) => {
    return (

        <>
            {/* Title and Main Content at the Top */}
            {items.length > 0 && (
                <div className="mb-8">
                    <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                </div>
            )}
            <div className='bg-[#f5f6f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
                {items.map((item) => (
                    <div
                        key={item.key}
                        id={`${item.path}`}
                        className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                        {/* Container for the image */}
                        <div className='flex items-center justify-center rounded-full text-7xl 2xl:text-2xl '>
                            {/* Link to the image */}
                            <a href="#">
                                {/* Image of the card */}
                                <img src={item.imglink} alt={item.title} className='p-10 rounded-[50px] sm:p-2 2xl:p-10' />
                            </a>
                        </div>
                        <p className='text-2xl leading-relaxed mb-4 dark:text-gray-300 flex items-center justify-center font-bold'>
                            {item.course_name}
                        </p>
                        <h1 className='text-2xl font-bold mb-2 text-black hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
                            <a href="#">
                                {item.title}
                            </a>
                        </h1>
                        <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
                            {item.content}
                        </p>
                        <div className='ml-20'>
                            {item.button && (
                                <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[250px]   font-medium'>
                                    <a
                                        href='#'
                                    >
                                        {item.button}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const Basline = () => {


    // API endpoint
    const api1 = 'http://localhost:1337/api/baseline-banners';
    const api2 = 'http://localhost:1337/api/basline-overviews';
    const api3 = 'http://localhost:1337/api/basline-links';
    const api4 = 'http://localhost:1337/api/basline-latest-news';
    const api5 = 'http://localhost:1337/api/baseline-works';
    const api6 = 'http://localhost:1337/api/basline-jump-cards';
    const api7 = 'http://localhost:1337/api/basline-finds';



    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: data3, loading: loading3, error: error3 } = useFetch(api3);
    const { data: data4, loading: loading4, error: error4 } = useFetch(api4);
    const { data: data5, loading: loading5, error: error5 } = useFetch(api5);
    const { data: data6, loading: loading6, error: error6 } = useFetch(api6);
    const { data: data7, loading: loading7, error: error7 } = useFetch(api7);


    return (
        <>
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white' >
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_1 Component to render the data */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}
            </div>

            <div className='flex items-center justify-center'>
                <div>
                    <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                        {/* Data loading and error handling */}
                        {loading2 && <p>Loading...</p>}
                        {error2 && <p className="text-red-500">{error2}</p>}
                        {/* List_1 Component to render the data */}
                        {!loading2 && !error2 && <List_2 items={data2.data || []} />}
                    </div>
                </div>
                <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading3 && <p>Loading...</p>}
                    {error3 && <p className="text-red-500">{error3}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading3 && !error3 && <List_3 items={data3.data || []} />}
                </div>
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading4 && <p>Loading...</p>}
                {error4 && <p className="text-red-500">{error4}</p>}
                {/* List_1 Component to render the data */}
                {!loading4 && !error4 && <List_4 items={data4.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading5 && <p>Loading...</p>}
                {error5 && <p className="text-red-500">{error5}</p>}
                {/* List_1 Component to render the data */}
                {!loading5 && !error5 && <List_5 items={data5.data || []} />}
            </div>
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading6 && <p>Loading...</p>}
                {error6 && <p className="text-red-500">{error6}</p>}
                {/* List_1 Component to render the data */}
                {!loading6 && !error6 && <List_6 items={data6.data || []} />}
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading7 && <p>Loading...</p>}
                {error7 && <p className="text-red-500">{error7}</p>}
                {/* List_1 Component to render the data */}
                {!loading7 && !error7 && <List_7 items={data7.data || []} />}
            </div>

        </>
    )
}

export default Basline