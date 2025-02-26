import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// List_1 Component
export const List_1 = ({ items }) => {
    return (
        <div className="p-5">
            {/* Display Main Title and Main Content only once */}
            {items.length > 0 && (
                <div className="mb-8 text-center">
                    <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">
                        {items[0].main_title}
                    </h1>
                    <p className="text-[#757575] dark:text-[#BDBDBD] text-sm font-bold">
                        {items[0].main_content}
                    </p>
                </div>
            )}

            {/* Grid container for items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => (
                    <div key={item.key} className="pb-2">
                        {/* Link to each team member */}
                        <Link className="p-5 cursor-pointer 2xl:p-2 block">
                            {/* Profile image */}
                            <img
                                src={item.imglink}
                                alt={item.title}
                                className="w-[150px] h-[150px] rounded-full mx-auto 2xl:w-[120px] 2xl:h-[120px] block"
                            />

                            {/* Title */}
                            <h3 className="text-[#212121] dark:text-[#EEEEEE] text-center font-bold mt-5 2xl:text-lg hover:underline hover:underline-offset-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-center text-[#757575] dark:text-[#BDBDBD] text-sm 2xl:text-center 2xl:text-sm">
                                {item.content}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


// List_2 Component
export const List_2 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color and padding */}
            <div className='grid grid-cols-1 dark:bg-[#121212] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10 sm:grid sm:grid-cols-2 sm:gap-20 2xl:grid-cols-2 2xl:ml-20'>
                {/* Mapping through the items array */}
                {items.map((features) => (
                    // Container for each list item
                    <div key={features.key} className='2xl:w-[500px] 2xl:flex 2xl:items-center'>
                        {/* Container for the content of the card */}
                        <div className=''>
                            {/* Icon of the card */}
                            <div className='material-icon '>
                                {features.icons}
                            </div>
                            {/* Container for the title and description */}
                            <div className='ml-5 2xl:pl-2 '>
                                {/* Title of the card */}
                                <p className='text-[#212121] dark:text-[#EEEEEE] text-2xl font-bold 2xl:text-2xl  flex items-center justify-center'>
                                    {features.title}
                                </p>
                                {/* Description of the card */}
                                <p className='text-[#757575] dark:text-[#BDBDBD] text-lg lg:w-[600px]  2xl:text-lg  flex items-center justify-center'>
                                    {features.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export const List_3 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.key} className="pb-5">
                        {/* Main container for the banner */}
                        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 bg-[#F0F4F8] dark:bg-[#121212] dark:text-white'>
                            {/* Left section of the banner */}
                            <div className='mt-20'>
                                {/* Heading of the banner */}
                                <a href="#" className='hover:underline underline-offset-2'>
                                    <h3 className='text-[#212121] dark:text-[#EEEEEE] text-7xl font-bold pl-5 lg:mt-10 xl:text-8xl 2xl:text-7xl'>
                                        {item.title}
                                    </h3>
                                </a>
                                {/* Description of the banner */}
                                <p className='text-[#757575] dark:text-[#BDBDBD] text-xl leading-relaxed mt-10 pl-5 sm:text-2xl lg:w-[600px] xl:w-[700px] 2xl:text-2xl 2xl:w-[800px]'>
                                    {item.content}
                                </p>
                            </div>
                            {/* Right section of the banner */}
                            <div className='mt-96 md:mt-48 lg:mt-28'>
                                {/* Image container */}
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            <img src={item.imglink} alt={item.title} className='max-w-full sm:max-w-60 md:max-w-80 max-h-[500px] lg:max-w-96 xl:max-w-auto mx-auto pl-5 mt-10 2xl:max-w-[600px]' />
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

export const List_4 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.key} className='pb-5'>
                        <div className='dark:bg-[#121212] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10'>
                            {/* Heading */}
                            <h2 className='text-[#212121] dark:text-[#EEEEEE] font-bold text-5xl pl-5  sm:mt-10 2xl:text-5xl'>{item.title}</h2>
                            {/* Content Paragraph */}
                            <p className='pl-5 mt-5 text-lg  sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] 2xl:text-lg 2xl:w-[1400px] text-[#757575] dark:text-[#BDBDBD]'>
                                {item.content}
                            </p>
                            {/* Content Paragraph */}
                            <p className='pl-5 mt-5 text-lg dark:text-white text-[#757575]  pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1400px]'>
                                {item.content_1}
                            </p>
                            {/* Content Paragraph */}
                            <p className='pl-5 mt-5 text-lg dark:text-white text-[#757575]  pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1400px]'>
                                {item.content_2}
                            </p>
                            {/* Content Paragraph */}
                            <p className='pl-5 mt-5 text-lg dark:text-white text-[#757575]  pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1400px]'>
                                {item.content_3}
                            </p>
                            {/* Content Paragraph */}
                            <p className='pl-5 mt-5 text-lg dark:text-white text-[#757575]  pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] 2xl:text-lg 2xl:w-[1400px]'>
                                {item.content_4}
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


// Banner_1 Component
const Banner_1 = () => {
    // Define API endpoints
    const api1 = 'http://localhost:1337/api/about-teams';
    const api2 = 'http://localhost:1337/api/about-tools';
    const api3 = 'http://localhost:1337/api/about-banners';
    const api4 = 'http://localhost:1337/api/about-sites';

    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: list2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: list3, loading: loading3, error: error3 } = useFetch(api3);
    const { data: list4, loading: loading4, error: error4 } = useFetch(api4);

    return (
        <>
            {/* Render List_26 component to display team members */}
            {loading3 && <p>Loading...</p>}
            {error3 && <p className="text-red-500">{error3}</p>}
            {!loading3 && !error3 && <List_3 items={list3?.data || []} />}

            {/* Main container for the content */}
            {loading4 && <p>Loading...</p>}
            {error4 && <p className="text-red-500">{error4}</p>}
            {!loading4 && !error4 && <List_4 items={list4?.data || []} />}

            {/* Container for "The Team" section */}
            <div className='mb-8'>
                {/* Container for team information and Chrome for Developers section */}
                <div className='mt-10 bg-[#F0F4F8] pb-10 dark:bg-[#121212] dark:text-white dark:mt-0 dark:border-[#78909C] dark:border-solid dark:border-2 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>

                    {/* Render List_26 component to display team members */}
                    {loading1 && <p>Loading...</p>}
                    {error1 && <p className="text-red-500">{error1}</p>}
                    {!loading1 && !error1 && <List_1 items={list1?.data || []} />}

                    {/* Container for the Chrome for Developers link */}
                    <div className='flex items-center justify-center mt-10 sm:flex sm:items-center sm:justify-center xl:mt-0 xl:w-[1340px] 2xl:w-[1536px]'>
                        {/* Chrome for Developers image */}
                        <div className='pl-5 '>
                            <img src="https://web.dev/static/image/dcc_new.svg" alt="jvnjd" className='pl-20 sm:pl-20' />
                            {/* Chrome for Developers heading */}
                            <h3 className='mt-10 text-[#00796B] dark:text-[#00BCD4] text-3xl pl-20 hover:underline hover:underline-offset-2 sm:text-xl sm:pl-12 2xl:text-2xl 2xl:pl-20'>
                                <a href="#">Making the web
                                    better for tomorrow</a>
                            </h3>
                        </div>
                    </div>
                    {/* Description for Chrome for Developers */}
                    <h3 className='text-[#757575] dark:text-[#BDBDBD] text-lg text-center justify-center pl-3 w-[400px] mt-6 sm:w-[600px] sm:pl-16 md:w-[700px] lg:w-[1000px] lg:pl-3 xl:w-[1280px] 2xl:text-lg 2xl:w-[1400px]'>
                        We hope web.dev helps you to create high quality web experiences today. The Chrome team is also working to make the web better tomorrow. If you want to learn more about what we are doing, and offer feedback on the features we are developing and contributing to, check out
                        {/* Link for Chrome for Developers */}
                        <a href="#" className='hover:underline hover:underline-offset-2 text-[#00796B] dark:text-[#00BCD4]'>
                            Chrome for Developers.
                        </a>
                    </h3>
                    {/* Container for the Chrome for Developers button */}
                    <div className='flex justify-center mt-5'>
                        {/* Chrome for Developers button */}
                        <div className='border-[#42A5F5] hover:bg-[#8BC34A] border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] xl:w-auto h-11 hover:font-bold 2xl:w-[300px] dark:border-[#78909C] dark:text-[#EEEEEE] dark:bg-[#121212] dark:hover:bg-[#353536]'>
                            <button className='text-[#42A5F5] '>Chrome for Developers</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* dev tools section */}
            <div >
                {/* Data loading and error handling for the List_25 component */}
                {loading2 && <p>Loading...</p>}
                {error2 && <p className="text-red-500">{error2}</p>}
                {!loading2 && !error2 && <List_2 items={list2?.data || []} />}
            </div>
        </>
    );
};

export default Banner_1;