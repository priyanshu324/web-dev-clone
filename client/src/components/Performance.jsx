import React from 'react'
import useFetch from '../hooks/useFetch';

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


// List_2 component
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

// List_4 component
export const List_4 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    id={`${item.path}`}
                    className='bg-white mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] '
                    key={item.key}
                >
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                        <div className=''>
                            {/* <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5 2xl:text-3xl'>{item.main_title}</h3> */}
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

// list 5
export const List_5 = ({ items }) => {
    return (
        <div className='bg-[#F5F6F7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4'>
            {items.map((item, index) => (
                <div key={index} id={`${item.path}`} className="p-4">
                    <h1 className='text-3xl font-bold mb-4 pl-8 dark:text-black'>
                        {item.title}
                    </h1>
                    <p className='text-xl pl-8 dark:text-black  w-[300px] 2xl:w-[700px]'>
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

// lsit 6
export const List_6 = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
            {items.map((item) => (
                <div key={item.key} className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                    <div className="material-icons text-4xl sm:text-5xl dark:text-white ">{item.icons}</div>
                    <h1 className='text-2xl font-bold mb-2 text-blue-500 hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
                        <a href="#">

                            {item.title}
                        </a>
                    </h1>
                    <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
                        {item.content}
                    </p>

                    <div className='ml-20'>
                        {item.button && (
                            <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[200px]   font-medium'>
                                <a
                                    href='#'
                                >
                                    {item.button}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

// list 7
export const List_7 = ({ items }) => {
    return (
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4'>
            {items.map((item, index) => (
                <div key={index} id={`${item.path}`} className="p-4">
                    <h1 className='text-3xl font-bold mb-4 pl-8 dark:text-black'>
                        {item.title}
                    </h1>
                    <p className='text-xl pl-8 dark:text-black  w-[300px] 2xl:w-[700px]'>
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

// lsit 8
export const List_8 = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
            {items.map((item) => (
                <div key={item.key} className='bg-[#F5F6F7] border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                    {/* Container for the image */}
                    <div className='flex items-center justify-center rounded-full text-7xl 2xl:text-2xl '>
                        {/* Link to the image */}
                        <a href="#">
                            {/* Image of the card */}
                            <img src={item.imglink} alt={item.title} className='p-10 rounded-[50px] sm:p-2 2xl:p-10' />
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

                    <div className='ml-20'>
                        {item.button && (
                            <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[200px]   font-medium'>
                                <a
                                    href='#'
                                >
                                    {item.button}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};


// List_9 component
export const List_9 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    id={`${item.path}`}
                    className='bg-[#F5F6F7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] '
                    key={item.key}
                >
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                        <div className=''>
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

// list 10
export const List_10 = ({ items }) => {
    return (
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4'>
            {items.map((item, index) => (
                <div key={index} id={`${item.path}`} className="p-4">
                    <h1 className='text-3xl font-bold mb-4 pl-8 dark:text-black'>
                        {item.title}
                    </h1>
                    <p className='text-xl pl-8 dark:text-black  w-[300px] 2xl:w-[700px]'>
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

// lsit 11
export const List_11 = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
            {items.map((item) => (
                <div key={item.key} className='bg-[#F5F6F7] border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                    <div className="material-icons text-4xl sm:text-5xl dark:text-white ">{item.icons}</div>

                    <h1 className='text-2xl font-bold mb-2 text-blue-500 hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
                        <a href="#">

                            {item.title}
                        </a>
                    </h1>
                    <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
                        {item.content}
                    </p>

                    <div className='ml-20'>
                        {item.button && (
                            <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[200px]   font-medium'>
                                <a
                                    href='#'
                                >
                                    {item.button}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

// list 12
export const List_12 = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div
                    key={item.key}
                    id={`${item.path}`}
                >
                    <div className='bg-[#f5f6f7] mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] pb-10 dark:bg-[#202124] dark:text-white' >
                        <h3 h3 className='text-2xl font-bold pt-10 flex items-center justify-center sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl' >
                            {item.main_title}
                        </h3>
                        <p className='pt-7 text-2xl sm:pl-5 md:pl-3 2xl:text-lg' >
                            {item.main_content}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

// lsit 13
export const List_13 = ({ items }) => {
    return (
        <div>

            {/* Mapping the items from `items` array */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {items.map((item) => (
                    <div key={item.key} className="flex items-start gap-4">
                        <button className="mt-2 flex items-center justify-center">
                            <div className="bg-[#f5f6f7] rounded-full w-24 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:w-20 sm:h-20 sm:text-[80px] lg:w-24 lg:h-24 lg:text-[100px]">
                                <div className="material-icons text-2xl">{item.icons}</div>
                            </div>
                        </button>

                        <div className="">
                            <button className="text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl block">
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
    )
}

// list 14
export const List_14 = ({ items }) => {
    return (
        <div className='bg-[#F5F6F7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4'>
            {items.map((item, index) => (
                <div key={index} id={`${item.path}`} className="p-4">
                    <h1 className='text-3xl font-bold mb-4 pl-8 dark:text-black'>
                        {item.title}
                    </h1>
                    <p className='text-xl pl-8 dark:text-black  w-[300px] 2xl:w-[700px]'>
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

// lsit 15
export const List_15 = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
            {items.map((item) => (
                <div key={item.key} className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
                    <div className="material-icons ">{item.icons}</div>
                    <h1 className='text-2xl font-bold mb-2 text-blue-500 hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
                        <a href="#">

                            {item.title}
                        </a>
                    </h1>
                    <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
                        {item.content}
                    </p>

                    <div className='ml-20'>
                        {item.button && (
                            <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[200px]   font-medium'>
                                <a
                                    href='#'
                                >
                                    {item.button}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};



const Performance = () => {

    // API endpoint
    const api1 = 'http://localhost:1337/api/performance-banners';
    const api2 = 'http://localhost:1337/api/performance-jumps';
    const api3 = 'http://localhost:1337/api/performance-new-to-performances';
    const api4 = 'http://localhost:1337/api/performance-page-speeds';
    const api5 = 'http://localhost:1337/api/performance-core-web-titles';
    const api6 = 'http://localhost:1337/api/performance-core-webs';
    const api7 = 'http://localhost:1337/api/performance-optimize-titles';
    const api8 = 'http://localhost:1337/api/performance-optimizes';
    const api9 = 'http://localhost:1337/api/performance-dives';
    const api10 = 'http://localhost:1337/api/performance-case-studie-titles';
    const api11 = 'http://localhost:1337/api/performance-case-studies';
    const api12 = 'http://localhost:1337/api/performance-newly-basline-titles';
    const api13 = 'http://localhost:1337/api/performance-newly-baslines';
    const api14 = 'http://localhost:1337/api/performance-debug-titles';
    const api15 = 'http://localhost:1337/api/performance-debugs';


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
    const { data: data10, loading: loading10, error: error10 } = useFetch(api10);
    const { data: data11, loading: loading11, error: error11 } = useFetch(api11);
    const { data: data12, loading: loading12, error: error12 } = useFetch(api12);
    const { data: data13, loading: loading13, error: error13 } = useFetch(api13);
    const { data: data14, loading: loading14, error: error14 } = useFetch(api14);
    const { data: data15, loading: loading15, error: error15 } = useFetch(api15);

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

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading4 && <p>Loading...</p>}
                {error4 && <p className="text-red-500">{error4}</p>}
                {/* List_1 Component to render the data */}
                {!loading4 && !error4 && <List_4 items={data4.data || []} />}
            </div>


            <div className='bg-[#F5F6F7]'>
                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading5 && <p>Loading...</p>}
                    {error5 && <p className="text-red-500">{error5}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading5 && !error5 && <List_5 items={data5.data || []} />}
                </div>

                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading6 && <p>Loading...</p>}
                    {error6 && <p className="text-red-500">{error6}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading6 && !error6 && <List_6 items={data6.data || []} />}
                </div>
            </div>
            <div className='bg-[#F5F6F7]'>
                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading7 && <p>Loading...</p>}
                    {error7 && <p className="text-red-500">{error7}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading7 && !error7 && <List_7 items={data7.data || []} />}
                </div>

                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading8 && <p>Loading...</p>}
                    {error8 && <p className="text-red-500">{error8}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading8 && !error8 && <List_8 items={data8.data || []} />}
                </div>
            </div>

            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading9 && <p>Loading...</p>}
                {error9 && <p className="text-red-500">{error9}</p>}
                {/* List_1 Component to render the data */}
                {!loading9 && !error9 && <List_9 items={data9.data || []} />}
            </div>

            <div className='bg-[#F5F6F7]'>
                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading10 && <p>Loading...</p>}
                    {error10 && <p className="text-red-500">{error10}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading10 && !error10 && <List_10 items={data10.data || []} />}
                </div>

                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading11 && <p>Loading...</p>}
                    {error11 && <p className="text-red-500">{error11}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading11 && !error11 && <List_11 items={data11.data || []} />}
                </div>
            </div>
            <div className='bg-[#F5F6F7]'>
                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading12 && <p>Loading...</p>}
                    {error12 && <p className="text-red-500">{error12}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading12 && !error12 && <List_12 items={data12.data || []} />}
                </div>

                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading13 && <p>Loading...</p>}
                    {error13 && <p className="text-red-500">{error13}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading13 && !error13 && <List_13 items={data13.data || []} />}
                </div>
            </div>

            <div className='bg-[#F5F6F7]'>
                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading14 && <p>Loading...</p>}
                    {error14 && <p className="text-red-500">{error14}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading14 && !error14 && <List_14 items={data14.data || []} />}
                </div>

                {/* Main container for the cards */}
                <div className=' dark:bg-[#202124] dark:text-white'>
                    {/* Data loading and error handling */}
                    {loading15 && <p>Loading...</p>}
                    {error15 && <p className="text-red-500">{error15}</p>}
                    {/* List_1 Component to render the data */}
                    {!loading15 && !error15 && <List_15 items={data15.data || []} />}
                </div>
            </div>
        </>
    )
}

export default Performance