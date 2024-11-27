import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='block dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px]  '>

                <div>
                    <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-6xl pl-4 mt-5 w-[420px]' >Building a better web, together</h3></a>
                    <p className='text-[25px] w-[350px] leading-relaxed pl-4 mt-10'>We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.</p>
                    <div className='mt-14 pl-20'>
                        <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 text-[#1a73e8] font-bold'>
                            <a href='#'>About Web.dev</a>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <figure className='bg-none'>
                        <a href="#">
                            <picture>
                                <img src="../src/assets/home-blue.png" alt="peroid" className=' w-[375px] h-[300px] pl-4' />
                            </picture>
                        </a>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Banner