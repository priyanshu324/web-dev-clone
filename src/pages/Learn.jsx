import React from 'react';
import useFetch from '../hooks/useFetch';

// lsit 1
export const List_1 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <>

                        {/* Main container for the ai page */}
                        <div className='block bg-[#f5f6f7] dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px]  sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-2 mt-32'>
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
// List_2 Component
export const List_2 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the background color */}
            <div className='bg-white dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section (not rendered) */}
                {/* <h3 className='text-2xl font-bold pt-10'>Performance</h3> */}
                {/* Container for the list items */}
                <div className='mt-10'>
                    {/* Grid container for the items */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white   dark:text-white'>
                        {/* Mapping through the item from the `items` array */}
                        {items.map((blog) => (
                            // Container for each item
                            <div className='pl-5 sm:pl-2 xl:pl-10' key={blog.key}>
                                {/* Container for the individual card */}
                                <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[420px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='rounded-full m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={blog.imglink} alt={blog.id} />
                                        </a>
                                    </div>
                                    {/* Container for the item name */}
                                    <div className='mb-4 mt-5'>
                                        {/* The item name */}
                                        <div className='flex items-center justify-center '>
                                            <p className='font-bold text-2xl dark:text-white 2xl:text-2xl'>{blog.item}</p>
                                        </div>
                                    </div>
                                    {/* Link for the title */}
                                    <a href="#" className='hover:underline hover:underline-offset-2'>
                                        {/* Title of the card */}
                                        <h3 className='text-2xl font-extrabold text-black flex items-center justify-center dark:text-white 2xl:text-2xl'>{blog.title}</h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg pl-5 mt-3 2xl:text-lg'>{blog.content}</p>
                                    {/* Container for the button */}
                                    <div className='flex items-center justify-center mt-5'>
                                        {/* Button */}
                                        <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[200px]'>
                                            {/* Link to the button */}
                                            <a href={blog.path}>
                                                {blog.button}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// Learn Component
const Learn = () => {
    // Fetch data using custom hook
    const api1 = 'http://localhost:1337/api/learn-banners';
    const api2 = 'http://localhost:1337/api/learns?populate=*';

    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    return (
        <>
            {/* Main container for the learn page */}
            <div className=''>

                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List component to display the courses */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}

                {/* Data loading and error handling */}
                {loading2 && <p>Loading...</p>}
                {error2 && <p className="text-red-500">{error2}</p>}
                {/* List component to display the courses */}
                {!loading2 && !error2 && <List_2 items={data2.data || []} />}

            </div>
        </>
    );
};

export default Learn;