import React from 'react'
import useFetch from '../hooks/useFetch';


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


// list 2
export const List_2 = ({ items }) => {
    return (
        <>
            <div>
                {/* Map through the items array */}
                {
                    items.map((item) => (
                        // Main container for each list item
                        <div key={item.key}>
                            {/* Title of the list item */}
                            <h1 className='text-3xl font-bold pl-5  2xl:text-6xl'>
                                {item.title}
                            </h1>
                            {/* Content of the list item */}
                            <p className='text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5  leading-[30px] font-semibold 2xl:text-lg 2xl:w-[450px]'>
                                {item.content}
                            </p>

                        </div>
                    ))
                }
            </div>
        </>


    );
};

// list 3
export const List_3 = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5 px-4">
            {items.map((item, index) => (
                <div key={index} className="mb-5">
                    <h1 className="text-4xl font-semibold mb-4 dark:text-white pl-4">
                        {item.title}
                    </h1>
                    <div className="flex flex-col mt-2 pl-4">
                        {item.link_1 && (
                            <a
                                href="#"
                                className="text-lg mt-2 hover:underline hover:underline-offset-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_1}
                            </a>
                        )}
                        {item.link_2 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_2}
                            </a>
                        )}
                        {item.link_3 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_3}
                            </a>
                        )}
                        {item.link_4 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_4}
                            </a>
                        )}
                        {item.link_5 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_5}
                            </a>
                        )}
                        {item.link_6 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_6}
                            </a>
                        )}

                        {item.link_7 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_7}
                            </a>
                        )}
                        {item.link_8 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_8}
                            </a>
                        )}

                        {item.link_9 && (
                            <a
                                href="#"
                                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
                            >
                                {item.link_9}
                            </a>
                        )}



                    </div>
                </div>
            ))}
        </div>
    );
};

const Progressive = () => {
    // API endpoint
    const api1 = 'http://localhost:1337/api/progressive-banners';
    const api2 = 'http://localhost:1337/api/progressive-overviews';
    const api3 = 'http://localhost:1337/api/progressive-links';



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

            <div className='flex items-center justify-center'>
                {/* Main container for the cards */}
                <div className='mt-[-650px] dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading2 && <p>Loading...</p>}
                    {error2 && <p className="text-red-500">{error2}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading2 && !error2 && <List_2 items={data2.data || []} />}
                </div>

                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading3 && <p>Loading...</p>}
                    {error3 && <p className="text-red-500">{error3}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading3 && !error3 && <List_3 items={data3.data || []} />}
                </div>

            </div>

        </>
    )
}

export default Progressive