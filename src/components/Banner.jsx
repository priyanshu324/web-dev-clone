import React from 'react';
import { Link } from 'react-router-dom';

// Define the Banner component
const Banner = () => {
    return (
        <>
            {/* Main container for the banner section */}
            <div className='block dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px] 
                             sm:grid sm:grid-cols-2 
                             xl:grid xl:grid-cols-2 
                             2xl:grid-cols-2'>

                {/* Left side of the banner */}
                <div>
                    {/* Banner Heading */}
                    <a href="#" className='hover:underline underline-offset-2'>
                        <h3 className='text-6xl pl-4 mt-5 w-[420px] 
                                        xl:text-5xl xl:font-bold
                                        2xl:text-6xl'>
                            Building a better web, together
                        </h3>
                    </a>
                    {/* Banner Description */}
                    <p className='text-[25px] w-[350px] leading-relaxed pl-4 mt-10 
                                    lg:w-[600px] 
                                    xl:w-[750px]
                                    2xl:w-[900px]'>
                        We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
                    </p>
                    {/* "About Web.dev" Button (Mobile Only) */}
                    <div className='mt-14 pl-20 lg:hidden'>
                        <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 text-[#1a73e8] font-bold'>
                            <a href='#'>About Web.dev</a>
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
                                <img src="../src/assets/home-blue.png" alt="peroid"
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
        </>
    );
};

export default Banner;