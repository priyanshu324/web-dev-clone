import React from 'react'

const Box_2 = () => {
    return (
        <>
            <div className=' bg-white w-[375px] border-solid border-y-2 dark:bg-[#202124] dark:text-white dark:border-y-2 dark:border-2 dark:border-[#5f6368]'>
                <div className='mb-10'>
                    <div className='grid grid-cols-1 '>
                        <div className=''>
                            <div>
                                <h1 className='text-3xl font-bold pl-5 mt-10'>Core Web Vitals</h1>
                                <p className='text-lg pl-5 mt-5 flex items-center justify-center font-semibold '>Build faster websites and apps by understanding Core Web Vitals and other metrics.</p>
                                <div className='pl-5 mt-5'>
                                    <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2'>
                                        <a href='#' className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white '>Explore Core Web Vitals</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#" className='text-3xl font-bold pl-4 flex w-[365px] mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Interaction to Next Paint becomes a Core Web Vital on March 12
                            </a>
                            <p className='text-lg pl-4 flex mt-5 w-[375px] font-semibold '>Interaction to Next Paint will officially become a Core Web Vital and will replace First Input Delay on March 12.</p>
                        </div>
                        <div>
                            <a href="#" className='text-3xl font-bold pl-4 mt-10 flex text-[#1a73e8] hover:underline underline-offset-2'>
                                How to optimize INP
                            </a>
                            <p className='text-lg pl-4 flex mt-5 w-[375px] leading-[30px] font-semibold '>Learn how to optimize for the Interaction to Next Paint metric.</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1'>
                        <div>
                            <a href="#" className='text-3xl pl-4 flex font-bold  mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Our top Core Web Vitals recommendations
                            </a>
                            <p className='text-lg pl-4 flex mt-5 w-[375px] leading-[30px] font-semibold '>A collection of best practices for optimizing websites' Core Web Vitals performance based on the state of the web</p>
                        </div>
                        <div>
                            <a href="#" className='text-3xl pl-4 flex w-[375px] font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Common misconceptions about how to optimize LCP
                            </a>
                            <p className='text-lg mt-5 pl-4 flex w-[375px] leading-[30px] font-semibold '>Explore common misconceptions about optimizing Largest Contentful Paint (LCP) by looking beyond image optimization and considering factors like Time to First Byte (TTFB) and resource load delay.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box_2