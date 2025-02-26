import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

// List_1 Component
export const List_1 = ({ items }) => {
    return (
        <>
            {/* Map through the items array */}
            {items.map((item) => (
                // Main container for each list item
                <div key={item.key} className='bg-[#f4f4f4] dark:bg-[#121212] pb-5'>
                    {/* Title of the list item */}
                    <h1 className='text-[#212121] dark:text-[#EEEEEE] text-3xl font-bold pl-5 mt-10 2xl:text-4xl'>
                        {item.title}
                    </h1>
                    {/* Content of the list item */}
                    <p className='text-[#757575] dark:text-[#BDBDBD] text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5  leading-[30px] font-semibold 2xl:text-lg 2xl:w-[450px]'>
                        {item.content}
                    </p>
                    {/* Container for the button */}
                    <div className='pl-5 mt-5 2xl:pl-10'>
                        {/* Button */}
                        <div className='border-[#42A5F5] hover:border-[#8BC34A] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#42A5F5] font-bold hover:text-[#7C4DFF] transition-colors duration-200 dark:text-[#42A5F5] dark:hover:text-[#FFAB00] dark:border-[#42A5F5] dark:hover:border-[#8BC34A] '>
                            {/* Conditionally render Link or anchor tag based on path */}
                            {item.path && item.path.startsWith('/') ? (
                                <Link to={item.path} className='text-[#42A5F5] font-bold hover:text-[#7C4DFF] dark:text-[#42A5F5] dark:hover:text-[#FFAB00]'>
                                    {item.button}
                                </Link>
                            ) : (
                                <a href={item.path} className='text-[#42A5F5] font-bold hover:text-[#7C4DFF] dark:text-[#42A5F5] dark:hover:text-[#FFAB00]'>
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
                <div key={item.key} className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 items-start bg-[#f4f4f4] dark:bg-[#121212] pb-5'>
                    {/* First column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the first section */}
                        {item.title && (
                            <a href="#" className='text-[#42A5F5] dark:text-[#42A5F5] hover:underline underline-offset-2 text-3xl lg:text-xl font-bold mt-10   pl-4 sm:pl-5 lg:pl-10 lg:w-[400px] xl:pl-20 2xl:text-2xl'>
                                {item.title}
                            </a>
                        )}
                        {/* Content of the first section */}
                        {item.content && (
                            <p className='text-[#757575] dark:text-[#BDBDBD] text-lg w-[375px] sm:w-[300px] md:w-[350px] pl-4 mt-5 font-semibold md:pl-5 lg:pl-10 lg:w-[350px] xl:pl-20 2xl:text-lg 2xl:w-[400px] sm:'>
                                {item.content}
                            </p>
                        )}
                    </div>
                    {/* Second column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the second section */}
                        {item.title_1 && (
                            <a href="#" className='text-[#42A5F5] dark:text-[#42A5F5] hover:underline underline-offset-2 text-3xl lg:w-[500px] lg:pl-48 lg:text-xl md:pl-0 font-bold mt-10  pl-4 sm:pl-2 xl:ml-20 2xl:text-2xl'>
                                {item.title_1}
                            </a>
                        )}
                        {/* Content of the second section */}
                        {item.content_1 && (
                            <p className='text-[#757575] dark:text-[#BDBDBD] text-lg pl-4 sm:pl-2 mt-5 md:pl-0 lg:pl-48 lg:w-[500px] leading-[30px] font-semibold xl:ml-20 2xl:text-lg 2xl:w-[550px]'>
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
                <div key={item.key} className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 items-start bg-[#f4f4f4] dark:bg-[#121212] pb-5'>
                    {/* First column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the first section */}
                        {item.title && (
                            <a href="#" className='text-[#42A5F5] dark:text-[#42A5F5] hover:underline underline-offset-2 text-3xl sm:w-[300px] md:w-[350px] lg:text-xl lg:pl-96 lg:w-[660px] xl:w-[750px]  xl:pl-[480px]  font-bold mt-10 flex md:pl-5  xl:ml-12 2xl:text-2xl 2xl:ml-28 2xl:w-[850px]'>
                                {item.title}
                            </a>
                        )}
                        {/* Content of the first section */}
                        {item.content && (
                            <p className='text-[#757575] dark:text-[#BDBDBD] text-lg  pl-4 mt-5 flex lg:text-lg  lg:pl-96 lg:w-[630px] xl:w-[700px]  xl:pl-[480px] md:w-[350px] font-semibold md:pl-5 xl:ml-12 2xl:text-lg 2xl:w-[750px] 2xl:ml-28'>
                                {item.content}
                            </p>
                        )}
                    </div>
                    {/* Second column */}
                    <div className='flex flex-col items-start'>
                        {/* Title of the second section */}
                        {item.title_1 && (
                            <a href="#" className='text-[#42A5F5] dark:text-[#42A5F5] hover:underline underline-offset-2 text-3xl lg:w-[800px] lg:pl-[450px] lg:text-xl  md:pl-48 font-bold mt-10  pl-4 sm:pl-40 xl:ml-40 2xl:text-2xl 2xl:ml-52'>
                                {item.title_1}
                            </a>
                        )}
                        {/* Content of the second section */}
                        {item.content_1 && (
                            <p className='text-[#757575] dark:text-[#BDBDBD] text-lg pl-4 sm:pl-40 sm:w-[440px] mt-5 md:pl-48 md:w-[570px] lg:w-[800px] lg:pl-[450px] leading-[30px] font-semibold xl:ml-40 2xl:text-lg 2xl:w-[850px] '>
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
const Box_4 = () => {
    // Define API endpoints
    const api1 = 'http://localhost:1337/api/home-box4s?populate=*';
    const api2 = 'http://localhost:1337/api/home-link7s?populate=*';
    const api3 = 'http://localhost:1337/api/home-link8s?populate=*';
    // Fetch data using custom hook

    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: data3, loading: loading3, error: error3 } = useFetch(api3);

    return (
        <>
            {/* Main container for Box_1 component */}
            <div className='bg-[#f4f4f4] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px] border-solid border-b-2 dark:bg-[#121212] dark:text-white dark:border-y-2 dark:border-2 dark:border-[#78909C]'>
                {/* Content container within Box_1 */}
                <div className='mb-10'>
                    {/* Grid container for the List_1 and List_2 components */}
                    <div className='grid grid-cols-1 lg:grid lg:grid-cols-3'>
                        {/* Data loading and error handling for List_1 */}
                        {loading1 && <p>Loading...</p>}
                        {error1 && <p className="text-red-500">{error1}</p>}
                        {!loading1 && !error1 && <List_1 items={data1?.data || []} />}
                        {/* Data loading and error handling for List_2 */}
                        {loading2 && <p>Loading...</p>}
                        {error2 && <p className="text-red-500">{error2}</p>}
                        {!loading2 && !error2 && <List_2 items={data2?.data || []} />}
                    </div>
                    {/* Grid container for the List_3 component */}
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2'>
                        {/* Data loading and error handling for List_3 */}
                        {loading3 && <p>Loading...</p>}
                        {error3 && <p className="text-red-500">{error3}</p>}
                        {!loading3 && !error3 && <List_3 items={data3?.data || []} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Box_4;