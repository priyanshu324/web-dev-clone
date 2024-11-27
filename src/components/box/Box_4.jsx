import React from 'react'

const Box_4 = () => {
    return (
        <>
            <div className=' bg-white w-[375px] border-solid border-b-2 dark:bg-[#202124] dark:text-white '>
                <div className='mb-10'>
                    <div className='grid grid-cols-1 '>
                        <h1 className='text-3xl font-bold pl-5 mt-10'>Accessible for all</h1>
                        <p className='text-lg pl-5 mt-5 w-[375px] font-semibold '>Learn how to make your sites more accessible for people with disabilities, whether permanent, temporary, or situational.</p>
                        <div className='pl-5 mt-5'>
                            <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center text-[#1a73e8] font-bold hover:text-black dark:hover:text-white justify-center w-[220px] h-11 hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2'>
                                <a href='#'>More on accessibility</a>
                            </div>
                        </div>
                        <div>
                            <a href="#" className='text-3xl font-bold pl-4 flex mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Learn Accessibility
                            </a>
                            <p className='text-lg pl-4 mt-5 w-[375px] leading-[30px] font-semibold '>Our new course is a great entry point and reference for accessibility topics.</p>
                        </div>
                        <div>
                            <a href="#" className='text-3xl font-bold pl-4 flex mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Testing web design color contrast
                            </a>
                            <p className='text-lg pl-4 mt-5 w-[375px] leading-[30px] font-semibold '>An overview of three tools and techniques for testing and verifying accessible color contrast of your design.</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1'>
                        <div>
                            <a href="#" className='text-3xl pl-4 flex font-bold  mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Building the main navigation for a website
                            </a>
                            <p className='text-lg pl-4 mt-5 w-[375px] font-semibold '>This tutorial describes how to build an accessible main navigation of a website. You learn about semantic HTML, accessibility, and how using ARIA attributes can sometimes do more harm than good.</p>
                        </div>
                        <div>
                            <a href="#" className='text-3xl pl-4 flex font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                                Community highlight: Melanie Sumner
                            </a>
                            <p className='text-lg mt-5 pl-4  w-[375px] font-semibold '>Read our interview with Melanie, a software engineer who specializes in digital accessibility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box_4