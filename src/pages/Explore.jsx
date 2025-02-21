import React from 'react';
import useFetch from '../hooks/useFetch';

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
            {/* Container for padding at top */}
            <div className='bg-white dark:bg-[#202124] dark:text-white'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                    </div>
                )}
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

// List_3 Component
export const List_3 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                    </div>
                )}
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

// List_4 Component
export const List_4 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the background color and padding at top */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]  dark:bg-[#202124] dark:text-white'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                    </div>
                )}
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

// list -4
export const List_5 = ({ items }) => {
    return (
        <div className='bg-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] pb-10 dark:bg-[#202124] dark:text-white'>
            {/* Grid container for explorations and mini-apps info */}
            {
                items.map((item) => (
                    <div key={item.key}>
                        <div className='grid grid-cols-1'>
                            <div className=''>
                                <h3 className='text-2xl font-bold mt-5 2xl:text-2xl'>{item.main_title}</h3>
                                <h3 className='text-2xl font-bold mt-5 2xl:text-2xl'>{item.main_tite_1}</h3>
                                <p className='pt-7 text-2xl sm:pl-5 2xl:text-lg'>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                        <div className=' mt-10 mb-10 2xl:mt-5'>
                            <div className='border-[#185abc] text-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black hover:text-black dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white 2xl:w-[300px]'>
                                <a href='#'>{item.button}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
// Explore Component
const Explore = () => {
    // API endpoints
    const api1 = 'http://localhost:1337/api/explore-banners';
    const api2 = 'http://localhost:1337/api/explores?populate=*';
    const api3 = 'http://localhost:1337/api/explore-excellent-websites?populate=*';
    const api4 = 'http://localhost:1337/api/explore-build-excellents';
    const api5 = 'http://localhost:1337/api/explore-explorations';

    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: list2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: list3, loading: loading3, error: error3 } = useFetch(api3);
    const { data: list4, loading: loading4, error: error4 } = useFetch(api4);
    const { data: list5, loading: loading5, error: error5 } = useFetch(api5);

    return (
        <>
            {/* Main container for the explore page */}
            <div className='mt-10 lg:mt-40 dark:bg-[#202124] dark:text-white'>

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




                {/* Section for "bulid excellent" */}
                {/* Data loading and error handling for the List_5 component */}
                {loading4 && <p>Loading...</p>}
                {error4 && <p className="text-red-500">{error4}</p>}
                {/* List_5 component to display build excellent items */}
                {!loading4 && !error4 && <List_4 items={list4.data || []} />}

                {/* Section for "bulid excellent" */}
                {/* Data loading and error handling for the List_5 component */}
                {loading3 && <p>Loading...</p>}
                {error3 && <p className="text-red-500">{error3}</p>}
                {/* List_5 component to display build excellent items */}
                {!loading3 && !error3 && <List_3 items={list3.data || []} />}

                {/* Section for "bulid excellent" */}
                {/* Data loading and error handling for the List_5 component */}
                {loading5 && <p>Loading...</p>}
                {error5 && <p className="text-red-500">{error5}</p>}
                {/* List_5 component to display build excellent items */}
                {!loading5 && !error5 && <List_5 items={list5.data || []} />}


            </div>
        </>
    );
};


export default Explore;