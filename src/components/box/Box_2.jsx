import React from 'react'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

// List_1 Component
export const List_1 = ({ items }) => {
    return (
        <>
            {/* Map through the items array */}
            {items.map((item) => (
                // Main container for each list item
                <div key={item.key}>
                    {/* Title of the list item */}
                    <h1 className='text-3xl font-bold pl-5 mt-10 2xl:text-4xl'>
                        {item.title}
                    </h1>
                    {/* Content of the list item */}
                    <p className='text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5  leading-[30px] font-semibold 2xl:text-lg 2xl:w-[450px]'>
                        {item.content}
                    </p>
                    {/* Container for the button */}
                    <div className='pl-5 mt-5 2xl:pl-10'>
                        {/* Button */}
                        <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2 '>
                            {/* Conditionally render Link or anchor tag based on path */}
                            {item.path && item.path.startsWith('/') ? (
                                <Link to={item.path} className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                    {item.button}
                                </Link>
                            ) : (
                                <a href={item.path} className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                    {item.button}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

// List_2 Component
export const List_2 = ({ items }) => {
    return (
        <>
            {/* Map through the items array */}
            {items.map((item) => (
                // Main container for each item (grid layout)
                <div key={item.key} className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 items-start'>
                    {/* First column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the first section */}
                        {item.title && (
                            <a href="#" className='text-3xl lg:text-xl font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 md:pl-5  pl-4 sm:pl-5 lg:pl-10 lg:w-[400px] xl:pl-20 2xl:text-2xl'>
                                {item.title}
                            </a>
                        )}
                        {/* Content of the first section */}
                        {item.content && (
                            <p className='text-lg w-[375px] sm:w-[300px] sm:pl-5 pl-4 mt-5 font-semibold md:pl-5 lg:pl-10 lg:w-[350px] xl:pl-20 2xl:text-lg 2xl:w-[400px]'>
                                {item.content}
                            </p>
                        )}
                    </div>
                    {/* Second column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the second section */}
                        {item.title_1 && (
                            <a href="#" className='text-3xl lg:w-[500px] lg:pl-56 lg:text-xl md:pl-5 font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2  pl-4 sm:pl-2 xl:ml-20 2xl:text-2xl'>
                                {item.title_1}
                            </a>
                        )}
                        {/* Content of the second section */}
                        {item.content_1 && (
                            <p className='text-lg pl-4 sm:pl-2 mt-5 md:pl-5 lg:pl-56 lg:w-[500px] leading-[30px] font-semibold xl:ml-20 2xl:text-lg 2xl:w-[550px]'>
                                {item.content_1}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

// List_3 Component
export const List_3 = ({ items }) => {
    return (
        <>
            {/* Map through the items array */}
            {items.map((item) => (
                // Main container for each item (grid layout)
                <div key={item.key} className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 items-start'>
                    {/* First column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the first section */}
                        {item.title && (
                            <a href="#" className='text-3xl sm:w-[390px] sm:pl-5 lg:text-xl lg:pl-96 lg:w-[650px] xl:w-[750px]  xl:pl-[480px]  font-bold mt-10 flex md:pl-5 text-[#1a73e8] hover:underline underline-offset-2  pl-4 xl:ml-12 2xl:text-2xl 2xl:ml-28 2xl:w-[850px]'>
                                {item.title}
                            </a>
                        )}

                        {/* Content of the first section */}
                        {item.content && (
                            <p className='text-lg pl-4 mt-5 sm:w-[350px] flex sm:pl-5 lg:text-lg lg:pl-96 lg:w-[650px] xl:w-[790px]  xl:pl-[480px] font-semibold md:pl-5 xl:ml-12 2xl:text-lg 2xl:w-[850px] 2xl:ml-28 '>
                                {item.content}
                            </p>
                        )}
                    </div>
                    {/* Second column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the second section */}
                        {item.title_1 && (
                            <a href="#" className='text-3xl  lg:w-[700px]  lg:pl-[490px] lg:text-xl  md:pl-52 md:w-[550px] font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2  pl-4 sm:pl-56 xl:ml-40 xl:w-[780px] 2xl:text-2xl 2xl:ml-48 2xl:w-[800px]'>
                                {item.title_1}
                            </a>
                        )}

                        {/* Content of the second section */}
                        {item.content_1 && (
                            <p className='text-lg pl-4 sm:pl-56 sm:w-[450px] mt-5 md:pl-52 md:w-[550px] lg:w-[800px] lg:pl-[490px] leading-[30px] font-semibold xl:ml-40 2xl:text-lg 2xl:ml-48 2xl:w-[850px]'>
                                {item.content_1}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};


// Box_1 Component
const Box_2 = () => {

    // Define API endpoints
    const api1 = 'http://localhost:1337/api/home-box2s?populate=*';
    const api2 = 'http://localhost:1337/api/home-link3s?populate=*';
    const api3 = 'http://localhost:1337/api/home-link4s?populate=*';
    
    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: data3, loading: loading3, error: error3 } = useFetch(api3);

    return (
        <>
            {/* Main container for Box_1 component */}
            <div className='bg-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px] border-solid border-b-2 dark:bg-[#202124] dark:text-white dark:border-y-2 dark:border-2 dark:border-[#5f6368]'>
                {/* Content container within Box_1 */}
                <div className='mb-10'>
                    {/* Grid container for the List_1 and List_2 components */}
                    <div className='grid grid-cols-1 lg:grid lg:grid-cols-3'>
                        {/* Data loading and error handling for List_1 */}
                        {loading1 && <p>Loading...</p>}
                        {error1 && <p className="text-red-500">{error1}</p>}
                        {!loading1 && !error1 && <List_1 items={data1.data || []} />}

                        {/* Data loading and error handling for List_2 */}
                        {loading2 && <p>Loading...</p>}
                        {error2 && <p className="text-red-500">{error2}</p>}
                        {!loading2 && !error2 && <List_2 items={data2.data || []} />}
                    </div>
                    {/* Grid container for the List_3 component */}
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2'>
                        {/* Data loading and error handling for List_3 */}
                        {loading3 && <p>Loading...</p>}
                        {error3 && <p className="text-red-500">{error3}</p>}
                        {!loading3 && !error3 && <List_3 items={data3.data || []} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Box_2;