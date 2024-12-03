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
            <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 bg-[#f5f6f7] pb-10 dark:bg-[#202124] dark:text-white '>
                <div className=' mt-20'>
                    <a href="#" className='hover:underline underline-offset-2'>
                        <h3 className='text-7xl font-bold pl-5 lg:mt-10 xl:text-8xl'>Guidance from Chrome Developer Relations</h3>
                    </a>
                    <p className='text-xl leading-relaxed mt-10 pl-5 sm:text-2xl lg:w-[600px] xl:w-auto'>
                        We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey, written by members of the Chrome team, and external experts.
                    </p>
                </div>
                <div className='mt-96 md:mt-48 lg:mt-28'>
                    <figure className='bg-none'>
                        <a href="#">
                            <picture>
                                <img src="../src/assets/about.png" alt="peroid" className='max-w-full sm:max-w-60 md:max-w-80 max-h-[500px] lg:max-w-96 xl:max-w-auto mx-auto pl-5 mt-10' />
                            </picture>
                        </a>
                    </figure>
                </div>
            </div>

            <div className='dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10'>
                <h2 className='text-black font-bold text-5xl pl-5 dark:text-white sm:mt-10'>On this site</h2>
                <p className='pl-5 mt-5 text-lg  dark:text-white sm:w-[600px]  md:w-[700px] lg:w-[1000px] xl:w-auto'>
                    Explore our archive of content, covering subjects across the web development stack. Find the latest news and content on our <span className='text-[#1a73e8] hover:underline'>blog</span>, see the latest <span className='text-[#1a73e8] hover:underline'>articles</span>, and discover content by groups on the <span className='text-[#1a73e8] hover:underline'>explore</span> page.
                </p>
                <p className='pl-5  mt-5 text-lg  dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto'>
                    For complete courses on key web development topics, check out <span className='text-[#1a73e8] hover:underline'>Learn</span>. Developed by industry experts, these courses take you right through a subject. They are structured to allow you to just dip into one or two modules of interest too.
                </p>
                <p className='pl-5  mt-5 text-lg  dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto'>
                    Want some grab and go code? Our <span className='text-[#1a73e8] hover:underline'>Patterns</span> break down common web development requirements. Whether you want to understand how to approach a certain UI component, or need to know how to copy an image to the <span className='text-[#1a73e8] hover:underline'>clipboard</span>, you’ll find a solution there.
                </p>
                <p className='pl-5  mt-5 text-lg  dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto'>
                    To help you make a case for work on UI or Performance, we have <span className='text-[#1a73e8] hover:underline'>case studies</span>. Find out how other companies have used metrics such as Core Web Vitals to see real results. And, if that’s quite enough reading for one day we also have a great archive of <span className='text-[#1a73e8] hover:underline'>podcasts and shows</span>.
                </p>
                <p className='pl-5  mt-5 text-lg dark:text-white pt-10 sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto'>
                    We believe that a web with multiple browser engines is important, and that web sites and applications should work well no matter which browser your visitors use. We know that you care about that too, and so content on this site should have cross-browser status clearly explained. You’ll see that many articles have a component showing browser support—the data comes from our friends at MDN, via the Browser Compat Data project that powers the data on MDN pages.
                </p>
            </div>

            <div className='mb-8'>
                <div className='mt-10 bg-[#f5f6f7] pb-10 dark:bg-[#202124] dark:text-white dark:mt-0 dark:border-[#5f6368] dark:border-solid dark:border-2 w-[400px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                    <h3 className='text-3xl font-bold flex items-center justify-center pt-10 dark:text-white'>The team</h3>
                    <p className='text-lg flex items-center justify-center mt-5 dark:text-white w-[400px] pl-20 sm:w-[600px] md:w-[768px] lg:w-[1024px] xl:w-auto'>This site is brought to you by the Chrome DevRel team led by:</p>

                    <div className='grid grid-cols-1 p-10 mt-10 sm:m-20 sm:grid sm:grid-cols-2 sm:gap-7 sm:w-[640px] md:w-[768px] lg:w-[1024px] sm:ml-0 xl:grid xl:grid-cols-4 xl:w-auto'>
                        {
                            teamDetails.map((team) => (
                                <div className='border-[#E8E8EA] border-solid border-2 rounded-lg mb-20' key={team.id}>
                                    <Link className='p-5 cursor-pointer'>
                                        <img src={team.img} alt={team.title} className='w-[150px] h-[150px] rounded-full mx-auto ' />
                                        <h3 className='text-center font-bold hover:underline hover:underline-offset-2 cursor-pointer dark:text-white'>{team.title}</h3>
                                        <p className='text-center text-sm text-gray-900 dark:text-white'>{team.post}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex items-center justify-center mt-10 sm:flex sm:items-center sm:justify-center xl:mt-0 xl:w-auto'>
                        <div className='pl-5'>
                            <img src="https://web.dev/static/image/dcc_new.svg" alt="jvnjd" className='pl-20 sm:pl-20' />
                            <h3 className='mt-10 text-[#185abc] text-3xl pl-20 hover:underline hover:underline-offset-2 sm:text-xl sm:pl-12 xl:w-auto'>
                                <a href="#">Making the web
                                    better for tomorrow</a>
                            </h3>
                        </div>
                    </div>

                    <h3 className='text-lg text-center justify-center pl-3 w-[400px] mt-6 sm:w-[600px] sm:pl-16 md:w-[700px] lg:w-[1000px] lg:pl-3 xl:w-auto'>
                        We hope web.dev helps you to create high quality web experiences today. The Chrome team is also working to make the web better tomorrow. If you want to learn more about what we are doing, and offer feedback on the features we are developing and contributing to, check out <a href="#" className='hover:underline hover:underline-offset-2'>Chrome for Developers.</a>
                    </h3>

                    <div className='flex justify-center mt-5'>
                        <div className='border-[#185abc] hover:bg-sky-200 border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] xl:w-auto h-11 hover:font-bold'>
                            <button className='text-[#1a73e8] '>Chrome for Developers</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-10 dark:pb-10 sm:grid sm:grid-cols-2 sm:gap-20'>
                <div>
                    <MdOutlineError className='text-9xl ml-28 sm:ml-20 sm:text-6xl lg:ml-48' />
                    <div className='ml-5 '>
                        <p className='text-2xl font-bold ml-20 sm:ml-0 lg:ml-32'>Spotted an error?</p>
                        <p className='text-lg w-full lg:w-[500px] xl:w-auto ml-0 lg:ml-10'>
                            Please <span className='text-[#1a73e8] hover:underline'>raise an issue</span> with information about the page and what's wrong, and we'll take a look.
                        </p>
                    </div>
                </div>

                <div>
                    <MdEdit className='text-9xl ml-28 sm:text-6xl sm:ml-20 lg:ml-48' />
                    <div>
                        <p className='text-2xl font-bold ml-20 sm:ml-0 lg:ml-32'>Want to contribute?</p>
                        <p className='text-lg w-full xl:w-auto ml-2 lg:ml-5 xl:ml-0'>
                            We feature articles and larger sections of content from external authors. If you would like to pitch an article, <span className='text-[#1a73e8] hover:underline'>contact Rachel Andrew</span> with an outline of your idea.
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 mt-10'>

            </div>
        </>
    )
}

export default Banner_1;
