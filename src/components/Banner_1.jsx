import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import List_25 from '../components/list/List_25.jsx';
import List_26 from '../components/list/List_26.jsx';

// Banner_1 Component
const Banner_1 = () => {
    // Team details array (currently not used)
    const teamDetails = [
        {
            id: 1,
            img: 'https://web.dev/static/image/authors/paulkinlan_480.jpeg',
            title: 'Paul Kinlan',
            post: 'DevRel Lead',
        },
        {
            id: 2,
            img: 'https://web.dev/static/image/authors/philipwalton_480.jpg',
            title: 'Philip Walton',
            post: 'DevRel Experiences Lead',
        },
        {
            id: 3,
            img: 'https://web.dev/static/image/authors/alispivak_480.png',
            title: 'Ali Spivak',
            post: 'DevRel Platforms Lead',
        },
        {
            id: 4,
            img: 'https://web.dev/static/image/authors/rachelandrew_480.jpg',
            title: 'Rachel Andrew',
            post: 'DevRel Content Lead',
        },
    ];


    // API endpoints
    const api1 = 'http://localhost:1337/api/about-teams';
    const api2 = 'http://localhost:1337/api/about-tools';

    // Fetch data using custom hook
    const { data: list1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: list2, loading: loading2, error: error2 } = useFetch(api2);

    return (
        <>
            {/* Main container for the banner */}
            <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 bg-[#f5f6f7] pb-10 dark:bg-[#202124] dark:text-white'>
                {/* Left section of the banner */}
                <div className='mt-20'>
                    {/* Heading of the banner */}
                    <a href="#" className='hover:underline underline-offset-2'>
                        <h3 className='text-7xl font-bold pl-5 lg:mt-10 xl:text-8xl 2xl:text-7xl'>
                            Guidance from Chrome Developer Relations
                        </h3>
                    </a>
                    {/* Description of the banner */}
                    <p className='text-xl leading-relaxed mt-10 pl-5 sm:text-2xl lg:w-[600px] xl:w-[700px] 2xl:text-2xl 2xl:w-[800px]'>
                        We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
                    </p>
                </div>
                {/* Right section of the banner */}
                <div className='mt-96 md:mt-48 lg:mt-28'>
                    {/* Image container */}
                    <figure className='bg-none'>
                        <a href="#">
                            <picture>
                                <img src="../src/assets/about.png" alt="peroid" className='max-w-full sm:max-w-60 md:max-w-80 max-h-[500px] lg:max-w-96 xl:max-w-auto mx-auto pl-5 mt-10 2xl:max-w-[600px]' />
                            </picture>
                        </a>
                    </figure>
                </div>
            </div>

            {/* Main container for the content */}
            <div className='dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10'>
                {/* Heading */}
                <h2 className='text-black font-bold text-5xl pl-5 dark:text-white sm:mt-10 2xl:text-5xl'>On this site</h2>
                {/* Content Paragraph */}
                <p className='pl-5 mt-5 text-lg dark:text-white sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] 2xl:text-lg 2xl:w-[1400px]'>
                    Explore our archive of content, covering subjects across the web development stack. Find the latest news and content on our <span className='text-[#1a73e8] hover:underline'>blog</span>, see the latest <span className='text-[#1a73e8] hover:underline'>articles</span>, and discover content by groups on the <span className='text-[#1a73e8] hover:underline'>explore</span> page.
                </p>
                {/* Content Paragraph */}
                <p className='pl-5 mt-5 text-lg dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1400px]'>
                    For complete courses on key web development topics, check out <span className='text-[#1a73e8] hover:underline'>Learn</span>. Developed by industry experts, these courses take you right through a subject. They are structured to allow you to just dip into one or two modules of interest too.
                </p>
                {/* Content Paragraph */}
                <p className='pl-5 mt-5 text-lg dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1400px]'>
                    Want some grab and go code? Our <span className='text-[#1a73e8] hover:underline'>Patterns</span> break down common web development requirements. Whether you want to understand how to approach a certain UI component, or need to know how to copy an image to the <span className='text-[#1a73e8] hover:underline'>clipboard</span>, you’ll find a solution there.
                </p>
                {/* Content Paragraph */}
                <p className='pl-5 mt-5 text-lg dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto 2xl:text-lg 2xl:w-[1400px]'>
                    To help you make a case for work on UI or Performance, we have <span className='text-[#1a73e8] hover:underline'>case studies</span>. Find out how other companies have used metrics such as Core Web Vitals to see real results. And, if that’s quite enough reading for one day we also have a great archive of <span className='text-[#1a73e8] hover:underline'>podcasts and shows</span>.
                </p>
                {/* Content Paragraph */}
                <p className='pl-5 mt-5 text-lg dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] 2xl:text-lg 2xl:w-[1400px]'>
                    We believe that a web with multiple browser engines is important, and that web sites and applications should work well no matter which browser your visitors use. We know that you care about that too, and so content on this site should have cross-browser status clearly explained. You’ll see that many articles have a component showing browser support—the data comes from our friends at MDN, via the Browser Compat Data project that powers the data on MDN pages.
                </p>
            </div>

            {/* Container for "The Team" section */}
            <div className='mb-8'>
                {/* Container for team information and Chrome for Developers section */}
                <div className='mt-10 bg-[#f5f6f7] pb-10 dark:bg-[#202124] dark:text-white dark:mt-0 dark:border-[#5f6368] dark:border-solid dark:border-2 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px]'>
                    {/* Heading for the team section */}
                    <h3 className='text-3xl font-bold flex items-center justify-center pt-10 dark:text-white 2xl:text-3xl'>The team</h3>
                    {/* Description for the team section */}
                    <p className='text-lg flex items-center justify-center mt-5 dark:text-white w-[400px] pl-20 sm:w-[600px] md:w-[768px] lg:w-[1024px] xl:w-auto 2xl:w-[1536px]'>
                        This site is brought to you by the Chrome DevRel team led by:
                    </p>
                    {/* Render List_26 component to display team members */}
                    {loading1 && <p>Loading...</p>}
                    {error1 && <p className="text-red-500">{error1}</p>}
                    {!loading1 && !error1 && <List_26 items={list1.data || []} />}

                    {/* Container for the Chrome for Developers link */}
                    <div className='flex items-center justify-center mt-10 sm:flex sm:items-center sm:justify-center xl:mt-0 xl:w-[1340px] 2xl:w-[1536px]'>
                        {/* Container for the Chrome for Developers image and text */}
                        <div className='pl-5 '>
                            {/* Chrome for Developers image */}
                            <img src="https://web.dev/static/image/dcc_new.svg" alt="jvnjd" className='pl-20 sm:pl-20' />
                            {/* Chrome for Developers heading */}
                            <h3 className='mt-10 text-[#185abc] text-3xl pl-20 hover:underline hover:underline-offset-2 sm:text-xl sm:pl-12 2xl:text-2xl 2xl:pl-20'>
                                <a href="#">Making the web
                                    better for tomorrow</a>
                            </h3>
                        </div>
                    </div>
                    {/* Description for Chrome for Developers */}
                    <h3 className='text-lg text-center justify-center pl-3 w-[400px] mt-6 sm:w-[600px] sm:pl-16 md:w-[700px] lg:w-[1000px] lg:pl-3 xl:w-[1280px] 2xl:text-lg 2xl:w-[1400px]'>
                        We hope web.dev helps you to create high quality web experiences today. The Chrome team is also working to make the web better tomorrow. If you want to learn more about what we are doing, and offer feedback on the features we are developing and contributing to, check out
                        {/* Link for Chrome for Developers */}
                        <a href="#" className='hover:underline hover:underline-offset-2'>
                            Chrome for Developers.
                        </a>
                    </h3>
                    {/* Container for the Chrome for Developers button */}
                    <div className='flex justify-center mt-5'>
                        {/* Chrome for Developers button */}
                        <div className='border-[#185abc] hover:bg-sky-200 border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] xl:w-auto h-11 hover:font-bold 2xl:w-[300px]'>
                            <button className='text-[#1a73e8] '>Chrome for Developers</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* dev tools section */}
            <div>
                {/* Data loading and error handling for the List_25 component */}
                {loading2 && <p>Loading...</p>}
                {error2 && <p className="text-red-500">{error2}</p>}
                {!loading2 && !error2 && <List_25 items={list2.data || []} />}
            </div>
        </>
    );
};

export default Banner_1;