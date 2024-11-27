import React from 'react'
import { Link } from 'react-router-dom'
import { MdEdit, MdOutlineError } from "react-icons/md";

const Banner_1 = () => {

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

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white'>
                <div className='md:pl-28 mt-20'>
                    <a href="#" className='hover:underline underline-offset-2'>
                        <h3 className='text-3xl md:text-7xl w-full'>Guidance from Chrome Developer Relations</h3>
                    </a>
                    <p className='text-xl md:text-2xl leading-relaxed mt-10 md:w-[850px]'>
                        We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
                    </p>
                </div>
                <div className='mb-12 md:mt-36'>
                    <figure className='bg-none'>
                        <a href="#">
                            <picture>
                                <img src="../src/assets/about.png" alt="peroid" className='max-w-full max-h-[500px] mx-auto' />
                            </picture>
                        </a>
                    </figure>
                </div>
            </div>

            <div className='dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10'>
                <h3 className='text-black font-bold text-3xl md:text-5xl pl-5 md:pl-40 dark:text-white'>On this site</h3>
                <p className='pl-5 md:pl-40 mt-5 text-lg md:text-xl dark:text-white'>
                    Explore our archive of content, covering subjects across the web development stack. Find the latest news and content on our <span className='text-[#1a73e8] hover:underline'>blog</span>, see the latest <span className='text-[#1a73e8] hover:underline'>articles</span>, and discover content by groups on the <span className='text-[#1a73e8] hover:underline'>explore</span> page.
                </p>
                <p className='pl-5 md:pl-40 mt-5 text-lg md:text-xl dark:text-white pt-10'>
                    For complete courses on key web development topics, check out <span className='text-[#1a73e8] hover:underline'>Learn</span>. Developed by industry experts, these courses take you right through a subject. They are structured to allow you to just dip into one or two modules of interest too.
                </p>
                <p className='pl-5 md:pl-40 mt-5 text-lg md:text-xl dark:text-white pt-10'>
                    Want some grab and go code? Our <span className='text-[#1a73e8] hover:underline'>Patterns</span> break down common web development requirements. Whether you want to understand how to approach a certain UI component, or need to know how to copy an image to the <span className='text-[#1a73e8] hover:underline'>clipboard</span>, you’ll find a solution there.
                </p>
                <p className='pl-5 md:pl-40 mt-5 text-lg md:text-xl dark:text-white pt-10'>
                    To help you make a case for work on UI or Performance, we have <span className='text-[#1a73e8] hover:underline'>case studies</span>. Find out how other companies have used metrics such as Core Web Vitals to see real results. And, if that’s quite enough reading for one day we also have a great archive of <span className='text-[#1a73e8] hover:underline'>podcasts and shows</span>.
                </p>
                <p className='pl-5 md:pl-40 mt-5 text-lg md:text-xl dark:text-white pt-10'>
                    We believe that a web with multiple browser engines is important, and that web sites and applications should work well no matter which browser your visitors use. We know that you care about that too, and so content on this site should have cross-browser status clearly explained. You’ll see that many articles have a component showing browser support—the data comes from our friends at MDN, via the Browser Compat Data project that powers the data on MDN pages.
                </p>
            </div>

            <div className='mb-8'>
                <div className='mt-10 bg-[#f5f6f7] pb-10 dark:bg-[#202124] dark:text-white dark:mt-0 dark:border-[#5f6368] dark:border-solid dark:border-2'>
                    <h3 className='text-3xl font-bold flex items-center justify-center pt-10 dark:text-white'>The team</h3>
                    <p className='text-lg flex items-center justify-center mt-5 dark:text-white'>This site is brought to you by the Chrome DevRel team led by:</p>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10'>
                        {
                            teamDetails.map((team) => (
                                <div className='border-[#E8E8EA] border-solid border-2 rounded-lg mb-20' key={team.id}>
                                    <Link className='p-5 cursor-pointer'>
                                        <img src={team.img} alt={team.title} className='w-[150px] h-[150px] rounded-full mx-auto' />
                                        <h3 className='text-center font-bold hover:underline hover:underline-offset-2 cursor-pointer dark:text-white'>{team.title}</h3>
                                        <p className='text-center text-sm text-gray-900 dark:text-white'>{team.post}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex items-center justify-center mt-32'>
                        <div className='pl-5'>
                            <img src="https://web.dev/static/image/dcc_new.svg" alt="jvnjd" className='pl-20' />
                            <h3 className='mt-10 text-[#185abc] font-bold text-2xl ml-[-45px] hover:underline hover:underline-offset-2'>
                                <a href="#">Making the web better for tomorrow</a>
                            </h3>
                        </div>
                    </div>

                    <h3 className='w-full text-lg text-center mt-6'>
                        We hope web.dev helps you to create high quality web experiences today. The Chrome team is also working to make the web better tomorrow. If you want to learn more about what we are doing, and offer feedback on the features we are developing and contributing to, check out <a href="#" className='hover:underline hover:underline-offset-2'>Chrome for Developers.</a>
                    </h3>

                    <div className='flex justify-center mt-5'>
                        <div className='border-[#185abc] hover:bg-sky-200 border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold'>
                            <button className='text-[#1a73e8] '>Chrome for Developers</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10'>
                <div className='flex items-center justify-center'>
                    <MdOutlineError className='text-5xl md:text-7xl' />
                    <div className='ml-5'>
                        <p className='text-2xl font-bold'>Spotted an error?</p>
                        <p className='text-lg w-[90%]'>
                            Please <span className='text-[#1a73e8] hover:underline'>raise an issue</span> with information about the page and what's wrong, and we'll take a look.
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <MdEdit className='text-5xl md:text-7xl' />
                    <div className='ml-5'>
                        <p className='text-2xl font-bold'>Want to contribute?</p>
                        <p className='text-lg w-[90%]'>
                            We feature articles and larger sections of content from external authors. If you would like to pitch an article, <span className='text-[#1a73e8] hover:underline'>contact Rachel Andrew</span> with an outline of your idea.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner_1;
