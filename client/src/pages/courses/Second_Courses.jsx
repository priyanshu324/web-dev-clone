import React from 'react';
import useFetch from '../../hooks/useFetch';



// lsit 1
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
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-full px-4 py-8">
            {/* Title and Main Content at the Top */}
            {items.length > 0 && (
                <div className="mb-8">
                    <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {items.map((item) => (
                    <div key={item.key} className="flex items-start gap-4">
                        <button onClick={() => handleScroll(`${item.path}`)} className="mt-2 flex items-center justify-center">
                            <div className="bg-[#f5f6f7] rounded-full w-24 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:w-20 sm:h-20 sm:text-[80px] lg:w-24 lg:h-24 lg:text-[100px]">
                                <div className="material-icons text-2xl">{item.icons}</div>
                            </div>
                        </button>

                        <div className="">
                            <button onClick={() => handleScroll(`${item.path}`)} className="text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl block">
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
    );
};

// List_3 component
export const List_3 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    id={`${item.path}`}
                    className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] '
                    key={item.key}
                >
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                        <div className=''>
                            <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5 2xl:text-3xl'>{item.main_title}</h3>
                            <h3 className='text-2xl font-bold hover:underline hover:underline-offset-2 mt-5 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start md:pl-5 2xl:text-2xl'>{item.title}</h3>
                            <p className='mt-10  text-lg md:pl-5 lg:w-[630px] 2xl:text-lg 2xl:w-[800px]'>
                                {item.content}
                            </p>
                        </div>
                        <div className='mb-12'>
                            <figure className='bg-none'>
                                <a href="#">
                                    <picture>
                                        <img src={item.imglink} alt={item.title} className=' max-w-[600px] max-h-[200px]  mt-16 pl-16 sm:pl-3 md:pl-14 lg:pl-40 2xl:max-w-[600px] 2xl:max-h-[300px]' />
                                    </picture>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='pl-20 mt-[-30px] sm:mt-10 lg:pl-60 2xl:pl-[100px]'>
                        <div className='border-[#185abc] text-[#1a73e8] hover:text-white hover:bg-[#185abc] border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold 2xl:w-[300px]'>
                            <a href='#' className=''>{item.button}</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

// list 4
export const List_4 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for padding at top */}
            <div className='mt-10'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1200px] sm:pl-0'>
                            {items[0].main_content}
                        </p>
                    </div>
                )}

                {/* Container for all the cards */}
                <div className='bg-white mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                    {/* Grid container for the list items */}
                    <div className='bg-white grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                        {/* Mapping through the items array */}
                        {items.map(({ key, title, content, button, icons, path }) => (
                            // Container for each list item
                            <div className='m-5 sm:m-2' key={key} id={`${path}`}>
                                {/* Container for each individual card */}
                                <div className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-[380px] lg:h-[650px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                    {/* Container for the icon */}
                                    <div className='flex items-center justify-center 2xl:text-3xl'>
                                        {/* Icon of the card */}
                                        <div className='material-icons'>{icons}</div>
                                    </div>
                                    {/* Link for the title of the card */}
                                    <a href="#">
                                        {/* Title of the card */}
                                        <h3 className='mt-10 text-xl font-bold  text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center 2xl:text-2xl'>
                                            {title}
                                        </h3>
                                    </a>
                                    {/* Content of the card */}
                                    <p className='text-lg  mt-3 2xl:text-lg 2xl:w-[400px]'>
                                        {content}
                                    </p>
                                    {/* Container for the button */}
                                    <div className='flex items-center justify-center mt-5'>
                                        {/* Button of the card */}
                                        <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white 2xl:w-[200px]'>
                                            <a href="#">
                                                {button}
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

// list 5
export const List_5 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color, width and padding */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1200px] sm:pl-0'>
                            {items[0].main_content}
                        </p>
                    </div>
                )}

            </div>
            {/* Container for the list items */}
            <div className='grid grid-cols-1 mt-10 sm:grid sm:grid-cols-2 2xl:grid-cols-2'>
                {/* Mapping through the items array */}
                {items.map((feature) => (
                    // Container for each item
                    <div key={feature.key} id={`${feature.path}`} className='pl-5 sm:pl-2 2xl:pl-2'>
                        {/* Container for the card content */}
                        <div className='block mt-10 2xl:text-lg'>
                            {/* Icon of the features */}
                            <div className='material-icons 2xl:text-3xl'>
                                {feature.icons}
                            </div>
                            {/* Title of the features */}
                            <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold mt-2 text-2xl 2xl:text-2xl'>
                                {feature.title}
                            </p>
                            {/* Content of the features */}
                            <p className='text-lg 2xl:text-lg'>
                                {feature.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

//list 6
export const List_6 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color and padding */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1200px] sm:pl-0'>
                            {items[0].main_content}
                        </p>
                    </div>
                )}

                {/* Container for the list items */}
                <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                    {/* Mapping through the items array */}
                    {items.map(({ key, title, content, button, imglink, path }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' id={`${path}`} key={key}>
                            {/* Container for the individual card */}
                            <div className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[320px] xl:w-[370px] lg:h-[530px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Container for the image */}
                                <div className='flex items-center justify-center rounded-full text-7xl pt-10 2xl:text-xl'>
                                    {/* Image of the card */}
                                    <img src={imglink} alt={title} className='p-10 rounded-[50px]' />
                                </div>
                                {/* Link for the title of the card */}
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
                                {/* Container for the button */}
                                <div className='flex items-center justify-center mt-5'>
                                    {/* Button link */}
                                    <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white 2xl:w-[200px]'>
                                        <a href="#">
                                            {button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

//list 7
export const List_7 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for width and padding */}
            <div className='w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1200px] sm:pl-0'>
                            {items[0].main_content}
                        </p>
                    </div>
                )}

                {/* Container for the list items */}
                <div className='grid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
                    {/* Mapping the items from `items` array */}
                    {items.map(({ key, title, content, button, icons, path }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' id={`${path}`} key={key}>
                            {/* Container for the individual card */}
                            <div className='bg-[#f5f6f7] border-white border-2 border-solid w-[380px] sm:w-[310px] md:w-[350px] lg:w-[230px] lg:h-[650px] xl:w-[330px] h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Image Container */}
                                <div className='flex items-center justify-center  rounded-full text-7xl pt-10 2xl:text-xl'>
                                    {/* Icon of the card */}
                                    <div className='material-icons'>{icons}</div>
                                </div>
                                {/* Link to the card title */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-2xl'>{title}</h3>
                                </a>
                                {/* Content of the card */}
                                <p className='text-lg mt-3 2xl:text-lg'>
                                    {content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex items-center justify-center mt-5'>
                                    {/* button */}
                                    <div className='bg-white text-[#1a73e8] font-bold border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:bg-[#f5f6f7] 2xl:w-[200px]'>
                                        {/* Button link */}
                                        <a href="#">
                                            {button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// List_8 Component
export const List_8 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for background color and padding */}
            <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Title and Main Content at the Top */}
                {items.length > 0 && (
                    <div className="mb-8">
                        <h1 className="text-[#212121] dark:text-[#EEEEEE] text-5xl font-bold">{items[0].main_title}</h1>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1200px] sm:pl-0'>
                            {items[0].main_content}
                        </p>
                    </div>
                )}

                {/* Container for the list items */}
                <div className='bg-[#f5f6f7] grid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-3 dark:bg-[#202124] dark:text-white'>
                    {/* Mapping through the items array */}
                    {items.map(({ key, title, content, button, icons, path }) => (
                        // Container for each item
                        <div className='m-5 sm:m-2' id={`${path}`} key={key}>
                            {/* Container for the individual card */}
                            <div className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[230px] xl:w-[330px] lg:h-[650px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white 2xl:w-[420px] 2xl:h-[600px]'>
                                {/* Container for the icon */}
                                <div className='flex items-center justify-center  rounded-full text-7xl pt-10 2xl:text-xl'>
                                    {/* icon of the card */}
                                    <div className='material-icons'>{icons}</div>
                                </div>
                                {/* Link for the title */}
                                <a href="#">
                                    {/* Title of the card */}
                                    <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-2xl flex items-center justify-center'>{title}</h3>
                                </a>
                                {/* Content of the card */}
                                <p className='text-lg  mt-3 2xl:text-lg'>
                                    {content}
                                </p>
                                {/* Container for the button */}
                                <div className='flex items-center justify-center mt-5'>
                                    {/* Button */}
                                    <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white 2xl:w-[200px]'>
                                        <a href="#">
                                            {button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// List_9 Component
export const List_9 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <div

                    >
                        <div className='grid grid-cols-1 dark:bg-[#202124] dark:text-white pb-10 lg:grid-cols-2'>
                            {/* Left side of the section */}
                            <div
                                key={item.key}
                                id={`${item.path}`}
                            >
                                {/* Heading of the section */}
                                <h3 className='mt-10 text-4xl font-bold hover:underline hover:underline-offset-2 sm:ml-10 2xl:text-4xl'>{item.title}</h3>
                                {/* Description of the podcast */}
                                <p className='text-lg mt-8 w-[375px] sm:w-[600px] sm:ml-10 md:w-[700px] lg:w-[650px] xl:w-[750px] 2xl:text-lg 2xl:w-[800px]'>
                                    {item.content}
                                </p>
                                {/* Link to the podcast */}
                                <div className='sm:ml-10 lg:ml-96 pt-[50px] 2xl:ml-[100px]'>
                                    {/* Listen Now! link */}
                                    <div className='border-[#1a73e8] cursor-pointer border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 text-[#1a73e8] font-bold hover:text-white hover:bg-[#1a73e8]'>
                                        <a href="#">
                                            {item.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Right side of the section */}
                            <div className='rounded-[24px] '>
                                {/* Podcast image */}
                                <img src={item.imglink} alt={item.title} className=' rounded-[24px] mt-10 w-[290px] h-[290px] sm:ml-56 md:ml-44 sm:w-[490px] sm:h-[350px] md:w-[490px] md:h-[350px] lg:w-[290px] lg:h-[290px] xl:ml-96 2xl:w-[400px] 2xl:h-[400px] 2xl:ml-[100px]' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};
// Second_Courses Component
const Second_Courses = () => {

    // API endpoints

    const api1 = 'http://localhost:1337/api/css-banners';
    const api2 = 'http://localhost:1337/api/css-jupms';
    const api3 = 'http://localhost:1337/api/css-new-to-csses';
    const api4 = 'http://localhost:1337/api/css-ui-designs';
    const api5 = 'http://localhost:1337/api/cssnewfeatures';
    const api6 = 'http://localhost:1337/api/dive-into-css-patterns';
    const api7 = 'http://localhost:1337/api/css-performances';
    const api8 = 'http://localhost:1337/api/css-accessibilties';
    const api9 = 'http://localhost:1337/api/css-podcasts';


    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
    const { data: data3, loading: loading3, error: error3 } = useFetch(api3);
    const { data: data4, loading: loading4, error: error4 } = useFetch(api4);
    const { data: data5, loading: loading5, error: error5 } = useFetch(api5);
    const { data: data6, loading: loading6, error: error6 } = useFetch(api6);
    const { data: data7, loading: loading7, error: error7 } = useFetch(api7);
    const { data: data8, loading: loading8, error: error8 } = useFetch(api8);
    const { data: data9, loading: loading9, error: error9 } = useFetch(api9);

    return (
        <>
            {/* Main container for the CSS course page */}
            <div className='mt-10 lg:mt-20'>
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}
                {/* Main content area */}
                <div className='dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-[80px] md:w-[768px] lg:w-auto xl:w-[1380px] 2xl:w-[1536px]'>
                    {/* Section for "Build excellent websites" */}
                    <div>
                        {/* Data loading and error handling for List_13 component */}
                        {loading2 && <p>Loading...</p>}
                        {error2 && <p className="text-red-500">{error2}</p>}
                        {!loading2 && !error2 && <List_2 items={data2.data || []} />}
                    </div>

                    {/* Section for "New to CSS" course */}
                    <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                        <div>
                            {/* Data loading and error handling for List_13 component */}
                            {loading3 && <p>Loading...</p>}
                            {error3 && <p className="text-red-500">{error3}</p>}
                            {!loading3 && !error3 && <List_3 items={data3.data || []} />}
                        </div>
                    </div>

                    {/* Section for "Build excellent websites" */}
                    <div>
                        {/* Data loading and error handling for List_14 component */}
                        {loading4 && <p>Loading...</p>}
                        {error4 && <p className="text-red-500">{error4}</p>}
                        {!loading4 && !error4 && <List_4 items={data4.data || []} />}
                    </div>

                    {/* Section for "new features" */}
                    <div>
                        {/* Data loading and error handling for List_15 component */}
                        {loading5 && <p>Loading...</p>}
                        {error5 && <p className="text-red-500">{error5}</p>}
                        {!loading5 && !error5 && <List_5 items={data5.data || []} />}
                    </div>

                    {/* Section for "dive into css" */}
                    <div>
                        {/* Data loading and error handling for List_16 component */}
                        {loading6 && <p>Loading...</p>}
                        {error6 && <p className="text-red-500">{error6}</p>}
                        {!loading6 && !error6 && <List_6 items={data6.data || []} />}
                    </div>
                    {/* Section for "css performance" */}
                    <div>
                        {/* Data loading and error handling for List_17 component */}
                        {loading7 && <p>Loading...</p>}
                        {error7 && <p className="text-red-500">{error7}</p>}
                        {!loading7 && !error7 && <List_7 items={data7.data || []} />}
                    </div>
                    {/* Section for "css accessibility" */}
                    <div>
                        {/* Data loading and error handling for List_18 component */}
                        {loading8 && <p>Loading...</p>}
                        {error8 && <p className="text-red-500">{error8}</p>}
                        {!loading8 && !error8 && <List_8 items={data8.data || []} />}
                    </div>
                </div>
                {/* Section for "The CSS Podcast" */}
                {loading9 && <p>Loading...</p>}
                {error9 && <p className="text-red-500">{error9}</p>}
                {!loading9 && !error9 && <List_9 items={data9.data || []} />}
            </div>
        </>
    );
};

export default Second_Courses;