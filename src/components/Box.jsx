import React from 'react'

const Box = () => {
    return (
        <>
            <div className='bg-white md:w-[768px] lg:w-[1024px] xl:w-auto border-2 mt-8 border-y-2 dark:bg-[#202124] dark:text-white dark:mt-[-10px] dark:border-y-2 dark:border-2 dark:border-[#5f6368]'>
                <div className='mt-10 mb-10 '>
                    <h1 className='text-5xl font-bold pl-4'>What's new?</h1>
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'>
                        <div className='pl-4 mt-5 lg:pl-0'>
                            <img src="../src/assets/new-avaiable.png" alt="nre" className='rounded-3xl w-[350px] xl:w-auto' />
                            <a href="#" className='hover:underline underline-offset-2'>
                                <h3 className=' text-3xl mt-4 flex items-center justify-center'>Baseline Newly</h3>
                                <h3 className=' text-3xl flex items-center justify-center'>available</h3>
                            </a>
                            <p className='text-sm mt-8 flex items-center justify-center '>Learn about the features that are newly </p>
                            <p className='text-sm flex items-center justify-center '>available in Baseline. </p>

                            <div className='pl-16 mt-5'>
                                <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11  hover:border-2 hover:border-soild hover:border-black dark:hover:border-white dark:hover:border-solid dark:hover:border-2 '>
                                    <button className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>Discover new features</button>
                                </div>
                            </div>
                        </div>
                        <div className='pl-4 mt-5 lg:pl-2'>
                            <img src="../src/assets/new-to-the-web.jpg" alt="nre" className='rounded-3xl w-[350px]' />
                            <a href="#" className='hover:underline underline-offset-2'>
                                <h3 className='text-3xl mt-4 flex items-center justify-center'>New to the</h3>
                                <h3 className='text-3xl flex items-center justify-center'>web platform</h3>
                            </a>
                            <p className='flex items-center justify-center text-sm  mt-8 '>Discover some of the interesting features that </p>
                            <p className='flex items-center justify-center text-sm '>landed in stable and beta web browsers.</p>

                            <div className='pl-16 mt-5'>
                                <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11  hover:border-2 hover:border-soild hover:border-black dark:hover:border-white dark:hover:border-solid dark:hover:border-2 '>
                                    <button className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white '>Discover What's new</button>
                                </div>
                            </div>
                        </div>
                        <div className='pl-4 mt-5 lg:pl-2'>
                            <img src="../src/assets/css-podcast.png" alt="nre" className='rounded-3xl w-[350px]' />
                            <a href="#" className='hover:underline underline-offset-2'>
                                <h3 className='flex items-center justify-center text-3xl mt-4 '>The CSS Podcast</h3>
                            </a>
                            <p className='flex items-center justify-center text-sm mt-8'>Follow Una Kravets and Adam Argyle, developer</p>
                            <p className='flex items-center justify-center text-sm'>advocates from Google, who gleefully break</p>
                            <p className='flex items-center justify-center text-sm'>down complex aspects from CSS into </p>
                            <p className='flex items-center justify-center text-sm'>disgestible episodes of this podcast.</p>

                            <div className='pl-16 mt-5'>
                                <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2'>
                                    <button className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white '>Listen now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box