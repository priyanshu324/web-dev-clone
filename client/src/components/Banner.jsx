import React from 'react';
import useFetch from '../hooks/useFetch';

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

// Define the Banner component
const Banner = () => {

    // API endpoints
    const api1 = 'http://localhost:1337/api/home-banners';

    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);


    return (
        <>
            {/* Main container for the banner section */}
            <div className=' dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List_1 Component to render the data */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}
            </div>
        </>
    );
};

export default Banner;