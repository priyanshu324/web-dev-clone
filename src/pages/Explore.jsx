import React from 'react';
import useFetch from '../hooks/useFetch';


// List_1 Component
export const List_1 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='bg-white dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-2xl font-bold pt-10 2xl:text-2xl'>Performance</h3>
                {/* Container for all the cards */}
                <div className='mt-10'>
                    {/* Grid container for the items */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white  dark:text-white'>
                        {/* mapping through the item from the `items` array */}
                        {items.map(({ key, title, content, imglink }) => (
                            // Container for each item
                            <div className='pl-5 sm:pl-2' key={key}>
                                {/* Container for the individual card */}
                                <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[380px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='rounded-full m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={imglink} alt={title} />
                                        </a>
                                    </div>
                                    {/* Link for the title */}
                                    <a href="#">
                                        {/* Title of the card */}
                                        <h3 className='text-2xl font-extrabold text-black  dark:text-white pl-2 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg  mt-3 pl-2 2xl:text-lg'>
                                        {content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// List_2 Component
export const List_2 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                {/* Heading for the section */}
                <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5 2xl:text-3xl'>Build excellent websites</h3>
                {/* Container for all the cards */}
                <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the items */}
                    <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid sm:grid-cols-2 xl:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                        {/* Mapping through the items array */}
                        {items.map(({ key, title, content, imglink }) => (
                            // Container for each item
                            <div className='m-5 sm:m-2' key={key}>
                                {/* Container for the individual card */}
                                <div className='bg-white border-[#858686] border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[380px] lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image container  */}
                                    <div className='flex items-center justify-center rounded-full text-7xl pt-10 m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={imglink} alt={key} />
                                        </a>
                                    </div>
                                    {/* Container for the title */}
                                    <a href="#">
                                        {/* Title of the card */}
                                        <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg mt-3 2xl:text-lg'>
                                        {content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// List_3 Component
export const List_3 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the background color and padding at top */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]  dark:bg-[#202124] dark:text-white'>
                {/* Heading for the section */}
                <h3 className='text-7xl mt-20 pl-5 2xl:text-7xl'>Frameworks</h3>
                {/* Container for all the cards */}
                <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the items */}
                    <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white  sm:grid sm:grid-cols-2 pb-10 xl:grid-cols-3'>
                        {/* Mapping through the item from the `items` array */}
                        {items.map(({ key, title, content, imglink }) => (
                            // Container for each item
                            <div className='m-5 sm:m-2 xl:ml-32' key={key}>
                                {/* Container for the individual card */}
                                <div className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[420px] lg:h-[650px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Image Container */}
                                    <div className='rounded-full m-10'>
                                        {/* Link to the image */}
                                        <a href="#">
                                            {/* Image of the card */}
                                            <img src={imglink} alt={key} />
                                        </a>
                                    </div>
                                    {/* Title Container  */}
                                    <a href="#">
                                        {/* title of the card */}
                                        <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg mt-3 2xl:text-lg'>{content}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
// Explore Component
const Explore = () => {
    // API endpoints
    const api1 = 'http://localhost:1337/api/explores?populate=*';
    const api2 = 'http://localhost:1337/api/excellent-websites?populate=*';
    const api3 = 'http://localhost:1337/api/build-excellents';

    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: list2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: list3, loading: loading3, error: error3 } = useFetch(api3);

    return (
        <>
            {/* Main container for the explore page */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Banner section */}
                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] sm:grid sm:grid-cols-2 pb-10'>
                    {/* Left section of the banner */}
                    <div>
                        {/* Heading of the banner */}
                        <a href="#" className='hover:underline underline-offset-2'>
                            <h3 className='text-7xl mt-20 pl-5 2xl:text-7xl'>Explore</h3>
                        </a>
                        {/* Description of the banner */}
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[650px] 2xl:text-2xl 2xl:w-[800px]'>
                            Explore our structured learning paths to discover everything you need to know about building for the web.
                        </p>
                    </div>
                    {/* Right section of the banner */}
                    <div className='mb-12'>
                        {/* Image of the banner */}
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/explore/explore-header.png" alt="peroid" className='max-w-[600px] max-h-[200px] mt-20 pl-0 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36 2xl:max-w-[800px] 2xl:max-h-[300px]' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                {/* Data loading and error handling for the List_3 component */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_3 component to display explored items */}
                {!loading1 && !error1 && <List_1 items={list1.data || []} />}

                {/* Section for "Build excellent websites" */}
                <div>
                    {/* Data loading and error handling for List_4 component */}
                    {loading2 && <p>Loading...</p>}
                    {error2 && <p className="text-red-500">{error2}</p>}
                    {!loading2 && !error2 && <List_2 items={list2.data || []} />}
                </div>

                {/* Section for "Baseline" information */}
                <div className='bg-white mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]  dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for "Baseline" heading and description */}
                    <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white sm:grid sm:grid-cols-2 pb-10'>
                        {/* Left section of the grid */}
                        <div className=''>
                            {/* Baseline heading */}
                            <h3 className='text-7xl mt-20 pl-5 2xl:text-7xl'>Baseline</h3>
                            {/* Baseline description */}
                            <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[650px] 2xl:text-2xl 2xl:w-[800px]'>
                                Baseline brings clarity to information about browser support for web platform features.
                            </p>
                        </div>
                        {/* Right section of the grid */}
                        <div className='mb-12'>
                            {/* Baseline Image */}
                            <figure className='bg-none'>
                                <a href="#">
                                    <picture>
                                        <img src="../src/assets/explore/baseline-wordmark.png" alt="peroid" className='max-w-[600px] sm:max-w-[300px] max-h-[200px] mt-20 pl-0 sm:pl-3 sm:mt-32 md:pl-14 lg:mt-36 lg:pl-36 xl:pl-0 xl:mt-20 xl:max-w-[600px] 2xl:max-w-[600px] 2xl:max-h-[300px]' />
                                    </picture>
                                </a>
                            </figure>
                        </div>
                    </div>
                    {/* Container for "Explore" link */}
                    <div className='flex items-center justify-center mt-[-90px] 2xl:mt-[-120px] ml-[-350px]'>
                        {/* Explore link */}
                        <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[200px]'>
                            <a href='#'>Explore</a>
                        </div>
                    </div>
                </div>
                {/* Section for "bulid excellent" */}
                {/* Data loading and error handling for the List_5 component */}
                {loading3 && <p>Loading...</p>}
                {error3 && <p className="text-red-500">{error3}</p>}
                {/* List_5 component to display build excellent items */}
                {!loading3 && !error3 && <List_3 items={list3.data || []} />}

                {/* Section for "Explorations" and "Mini apps" */}
                <div className='bg-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for explorations and mini-apps info */}
                    <div className='grid grid-cols-1'>
                        {/* Title for explorations */}
                        <div className=''>
                            <h3 className='text-2xl font-bold mt-5 2xl:text-2xl'>Explorations</h3>
                            {/* Title for mini-apps */}
                            <h3 className='text-2xl font-bold mt-5 2xl:text-2xl'>Mini apps</h3>
                            {/* Description of mini-apps */}
                            <p className='pt-7 text-2xl sm:pl-5 2xl:text-lg'>
                                A web developer's exploration into mini apps—apps that are built with web technologies, but that don't run in browsers.
                            </p>
                        </div>
                    </div>
                    {/* Container for the "Explore" link */}
                    <div className=' mt-10 mb-10 2xl:mt-5'>
                        {/* "Explore" link */}
                        <div className='border-[#185abc] text-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black hover:text-black dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[300px]'>
                            <a href='#'>Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Explore;