import React from 'react'
import useFetch from '../hooks/useFetch'


// List_1 component: Handles the navigation list
export const List_1 = ({ items }) => {
    return (
        <>
            <div className="bg-gray-100 py-20 relative ">
                <nav className=" mx-auto px-4 flex justify-between items-center absolute ">
                    {items.map((item) => (
                        <div key={item.key} className="mx-4">
                            <h3 className="text-lg font-medium">
                                <a
                                    href={item.path}
                                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
                                >
                                    {item.data}
                                </a>
                            </h3>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};

// lsit 2
export const List_2 = ({ items }) => {
    return (
        <>
            <div className='py-0 mt-[-80px]'>
                {
                    items.map((item) => (
                        <>

                            {/* Main container for the ai page */}
                            <div className=' bg-[#F5F6F7] dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px] ' key={item.key}>
                                {/* Left section of the banner */}
                                <div>
                                    {/* Heading of the section */}
                                    <h3 className='text-6xl xl:text-5xl xl:font-bold pt-5 2xl:text-6xl flex items-center justify-center'>
                                        {item.title}
                                    </h3>
                                    {/* Description of the section */}
                                    <span className='text-2xl flex items-center justify-center mt-5'>
                                        {item.content}
                                    </span>
                                </div>
                            </div>

                        </>
                    ))
                }
            </div>
        </>
    )
}

// lsit 3
export const List_3 = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
            {items.map((item) => (
                <div key={item.key} className='bg-[#f5f6f7] border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                    {/* Container for the image */}
                    <div className='flex items-center justify-center rounded-full text-7xl pb-5 2xl:text-2xl '>
                        {/* Link to the image */}
                        <a href="#">
                            {/* Image of the card */}
                            <img src={item.imglink} alt={item.title} className=' p-5  w-auto' />
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
                </div>
            ))}
        </div>
    );
};


const Shows = () => {

    // API endpoint
    const api1 = 'http://localhost:1337/api/shows-nav-items';
    const api2 = 'http://localhost:1337/api/shows-banners';
    const api3 = 'http://localhost:1337/api/shows-cards';

    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: data3, loading: loading3, error: error3 } = useFetch(api3);

    return (
        <>
            {/* Main container for the cards */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_1 Component to render the data */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}
            </div>

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
        </>
    )
}

export default Shows