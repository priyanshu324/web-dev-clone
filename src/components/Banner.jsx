import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='block dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px]  sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-2'>

                <div>
                    <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-6xl pl-4 mt-5 w-[420px] xl:text-5xl xl:font-bold xl:w-auto' >Building a better web, together</h3></a>
                    <p className='text-[25px] w-[350px]  leading-relaxed pl-4 mt-10 lg:w-[600px] xl:w-auto'>We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.</p>
                    <div className='mt-14 pl-20 lg:hidden'>
                        <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] xl:w-auto h-11 text-[#1a73e8] font-bold'>
                            <a href='#'>About Web.dev</a>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <figure className='bg-none'>
                        <a href="#">
                            <picture>
                                <img src="../src/assets/home-blue.png" alt="peroid" className=' w-[375px] h-[300px] pl-4 sm:w-[300px] sm:h-[200px] sm:mt-52 sm:ml-5 sm:mr-20 md:ml-28 lg:ml-80 xl:mt-10 xl:ml-[400px] xl:w-[150%] xl:h-[150%]  xl:max-w-auto' />
                            </picture>
                        </a>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Banner