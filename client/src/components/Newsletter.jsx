import React from 'react'
import useFetch from '../hooks/useFetch';
import Contact from './Contact';



// lsit 1
export const List_1 = ({ items }) => {
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

// lsit 2
export const List_2 = ({ items }) => {
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

const Newsletter = () => {

    // API endpoint
    const api1 = 'http://localhost:1337/api/newsletter-banners';
    const api2 = 'http://localhost:1337/api/newsletter-cards';

    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);


    return (

        <>

            <div className='mt-10 lg:mt-32 dark:bg-[#202124] dark:text-white flex items-center justify-center'>
                <Contact />
            </div>
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

        </>
    )
}

export default Newsletter