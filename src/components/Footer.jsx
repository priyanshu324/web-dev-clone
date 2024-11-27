import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <div className='border-y-2 border-0 border-solid mb-10 border-[#dadce0] dark:bg-[#202124] w-[420px]'>
                <nav>
                    <ul className='grid grid-cols-1 '>
                        <ul>
                            <li>
                                <h3 className='text-slate-400 text-xl font-bold mt-5 pl-5'>WEB <span className='text-slate-400'>.dev </span></h3>
                                <div className='mt-7 pl-5 font-bold text-lg dark:text-[#9aa0a6] w-[375px]'>
                                    We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
                                </div>
                            </li>
                        </ul>
                        <p></p>
                        <ul className=' w-[375px] pl-5'>
                            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                                <div>
                                    <p className='font-medium tracking-wide text-black dark:text-white'>Contribute</p>
                                    <ul className='mt-2 space-y-2 '>
                                        <li>
                                            <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>File a bug</a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>See open issues</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>

                        {/* catergoty 2 */}
                        <ul className='pl-5 w-[375px]'>
                            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                                <p className='font-medium tracking-wide text-black dark:text-white'>Related Content</p>
                                <ul className='mt-2 space-y-2'>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>Chrome for Developers</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>Chromium updates</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>Case studies</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>Podcasts & shows</a>
                                    </li>
                                </ul>
                            </div>

                        </ul>
                        {/* catergoty 3 */}
                        <ul className='pl-5 w-[375px]'>
                            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                                <p className='font-medium tracking-wide text-black dark:text-white'>Follow</p>
                                <ul className='mt-2 space-y-2'>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>@ChromiumDev on X</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>YouTube</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>Chrome for Developers on LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2'>RSS</a>
                                    </li>

                                </ul>
                            </div>
                        </ul>
                    </ul>
                    <div className='flex flex-col justify-between pt-10 pb-10 sm:flex-row' >
                        <div className="grid grid-cols-2 divide-x w-24 divide-black gap-14">
                            <a href="#" className='font-bold text-black pl-5 hover:text-[#1a73e8] hover:underline hover:underline-offset-2  dark:text-white dark:hover:text-[#1a73e8]'>Terms</a>
                            <a href="#" className='font-bold text-black pl-2 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 dark:text-white dark:hover:text-[#1a73e8]'>Privacy</a>
                        </div>

                        <p className='text-sm text-gray-900 flex pl-5 dark:text-white mt-5'>© copyright 2024 | All right reserved.</p>

                        <div className=' flex pl-5 mt-5 space-x-4 sm:mt-0'>
                            <a href="/" className=' text-gray-900 transition-all duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8]'><FaTwitter className='h-6 w-6' /></a>
                            <a href="/" className=' text-gray-900 transition-all duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8]'><FaInstagram className='h-6 w-6' /></a>
                            <a href="/" className=' text-gray-900 transition-all duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8]'><FaFacebook className='h-6 w-6' /></a>
                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Footer