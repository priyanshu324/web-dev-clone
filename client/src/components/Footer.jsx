import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

// Footer Component
const Footer = () => {
    return (
        <>
            {/* Main container for the footer */}
            <div className='border-y-2 border-0 border-solid mb-10 border-[#dadce0] dark:bg-[#202124]  w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                {/* Navigation container */}
                <nav>
                    {/* Unordered list for nav items */}
                    <ul className='grid grid-cols-1 xl:grid xl:grid-cols-6'>
                        {/* First list item */}
                        <ul className='list-none'>
                            <li>
                                {/* Web.dev title */}
                                <h3 className='text-slate-400 text-xl font-bold mt-5 pl-5 2xl:text-2xl'>WEB <span className='text-slate-400'>.dev</span></h3>
                                {/* Description of web.dev */}
                                <div className='mt-7 pl-5 text-lg dark:text-[#9aa0a6] w-[375px] sm:w-[540px] lg:w-[1024px] xl:w-[600px] 2xl:text-lg 2xl:w-[700px]'>
                                    We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
                                </div>
                            </li>
                        </ul>
                        {/* Empty placeholder */}
                        <p></p>
                        {/* Second list item (Contribute section) */}
                        <ul className='w-[375px] pl-5 xl:ml-40'>
                            {/* Container for contribute links */}
                            <div className='px-4 pt-16 mx-auto sm:max-w-xl  '>
                                {/* Contribute title */}
                                <p className='font-medium tracking-wide text-black dark:text-white 2xl:text-lg'>Contribute</p>
                                {/* Unordered list for contribute links */}
                                <ul className='mt-2 space-y-2'>
                                    <li>
                                        {/* File a bug link */}
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>File a bug</a>
                                    </li>
                                    {/* See open issues link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>See open issues</a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                        {/* Third list item (Related content section) */}
                        <ul className='pl-5 w-[375px] xl:ml-28'>
                            {/* Container for related content links */}
                            <div className='px-4 pt-16 mx-auto sm:max-w-xl  '>
                                {/* Related Content title */}
                                <p className='font-medium tracking-wide text-black dark:text-white 2xl:text-lg'>Related Content</p>
                                {/* Unordered list for related content links */}
                                <ul className='mt-2 space-y-2'>
                                    {/* Chrome for Developers link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>Chrome for Developers</a>
                                    </li>
                                    {/* Chromium updates link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>Chromium updates</a>
                                    </li>
                                    {/* Case studies link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>Case studies</a>
                                    </li>
                                    {/* Podcasts & shows link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 dark:text-white dark:hover:text-[#1a73e8] hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>Podcasts & shows</a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                        {/* Fourth list item (Follow section) */}
                        <ul className='pl-5 w-[375px] xl:ml-28'>
                            {/* Container for follow links */}
                            <div className='px-4 pt-16 mx-auto sm:max-w-xl  '>
                                {/* Follow title */}
                                <p className='font-medium tracking-wide text-black dark:text-white 2xl:text-lg'>Follow</p>
                                {/* Unordered list for social media links */}
                                <ul className='mt-2 space-y-2'>
                                    {/* Twitter link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>@ChromiumDev on X</a>
                                    </li>
                                    {/* YouTube link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>YouTube</a>
                                    </li>
                                    {/* LinkedIn link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>Chrome for Developers on LinkedIn</a>
                                    </li>
                                    {/* RSS link */}
                                    <li>
                                        <a href="#" className='text-gray-900 transition-colors duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] hover:underline hover:underline-offset-2 2xl:text-lg'>RSS</a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </ul>
                    {/* Container for terms, privacy, copywrite and social icons */}
                    <div className='flex flex-col justify-between pt-10 pb-10 sm:pb-3 sm:flex lg:grid lg:grid-cols-2'>
                        {/* Terms and privacy links */}
                        <div className="grid grid-cols-2 divide-x w-24 divide-black gap-14 2xl:w-32">
                            {/* Terms link */}
                            <a href="#" className='font-bold text-black pl-5 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 dark:text-white dark:hover:text-[#1a73e8] 2xl:text-lg'>Terms</a>
                            {/* Privacy link */}
                            <a href="#" className='font-bold text-black pl-2 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 dark:text-white dark:hover:text-[#1a73e8] 2xl:text-lg'>Privacy</a>
                        </div>

                        {/* Copywrite text(Mobile view) */}
                        <p className='text-sm text-gray-900 flex pl-5 dark:text-white mt-5 sm:hidden md:hidden 2xl:text-sm'>© copyright 2024 | All right reserved.</p>
                        {/* Social media icons(Mobile view) */}
                        <div className=' flex pl-5 mt-5 space-x-4 sm:hidden md:hidden lg:flex lg:items-center lg:justify-center lg:pl-96 xl:flex xl:items-center xl:justify-center 2xl:justify-end 2xl:pr-10'>
                            {/* Twitter Icon */}
                            <a href="/" className='text-gray-900 transition-all duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] 2xl:h-7 2xl:w-7'><FaTwitter className='h-6 w-6' /></a>
                            {/* Instagram Icon */}
                            <a href="/" className='text-gray-900 transition-all duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] 2xl:h-7 2xl:w-7'><FaInstagram className='h-6 w-6' /></a>
                            {/* Facebook Icon */}
                            <a href="/" className='text-gray-900 transition-all duration-300 hover:text-[#1a73e8] dark:text-white dark:hover:text-[#1a73e8] 2xl:h-7 2xl:w-7'><FaFacebook className='h-6 w-6' /></a>
                        </div>
                        {/* copywrite text(desktop view) */}
                        <p className='text-sm text-gray-900  dark:text-white mt-5 hidden sm:block md:block lg:hidden xl:hidden'>© copyright 2024 | All right reserved.</p>
                    </div>
                </nav>
            </div >
        </>
    );
};

export default Footer;