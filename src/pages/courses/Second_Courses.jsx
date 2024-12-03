import React from 'react'
import { FaBolt } from 'react-icons/fa';
import { IoMdCode } from "react-icons/io";
import { MdAccessibility, MdArticle, MdOutlineNewspaper, MdPodcasts } from 'react-icons/md';
import hero_1 from '../../assets/hero_1.png'
import hero_2 from '../../assets/hero_2.png'
import hero_3 from '../../assets/hero_3.png'

const Second_Courses = () => {

    const docs = [
        {
            id: 1,
            title: "Adapting typography to user preference using CSS",
            content: "Adapt a font to your users' preferences, so they're maximally comfortable reading your content.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "New CSS color spaces and functions in all major engines",
            content: "All major engines now support the new CSS color spaces and functions. Find out how they can bring vibrancy to your designs.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "What are source maps?",
            content: "Improve web debugging experience with source maps.",
            button: "Learn More",
        },
        {
            id: 4,
            title: "CSS subgrid",
            content: "Subgrid is now interoperable across all three major engines. Find out how to use it.",
            button: "Learn More",
        },

    ]

    const docs_2 = [
        {
            id: 1,
            img: hero_1,
            title: "Layout",
            content: "Layout patterns built using modern CSS APIs that help you build common interfaces such as cards, dynamic grid areas, and full-page layouts",
            button: "See Patterns",
        },
        {
            id: 2,
            img: hero_2,
            title: "Animation",
            content: "Animation techniques built using CSS or JavaScript with considerations for accessibility and user preferences.",
            button: "See Patterns",
        },
        {
            id: 3,
            img: hero_3,
            title: "Theming",
            content: "Techniques to assist in managing color throughout your projects.",
            button: "See Patterns",
        },

    ]

    const docs_3 = [
        {
            id: 1,
            title: "Reduce the scope and complexity of style calculations",
            content: "Style recalculation is a process where CSS rules are applied to the DOM, and overly complex selectors can cause performance issues. Read this guide to figure out how you can optimize your selectors for performance.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "content-visibility: A CSS property that boosts rendering performance",
            content: "The content-visibility property can be used to defer the rendering of parts of a page until they're needed. This guide shows how you can use this property to boost the rendering performance of your web application.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "CSS for Web Vitals",
            content: "The way you write your styles can have a significant impact on Core Web Vitals. Read this guide to find out how you can tune your web application's CSS for better performance.",
            button: "Learn More",
        },
        {
            id: 4,
            title: "How large DOM sizes affect interactivity, and what you can do about it",
            content: "Large DOM sizes can trigger long rendering operations, and this can affect how responsive your web application is to user input. Check out this guide to see how you can keep DOM sizes smaller for better performance.",
            button: "Learn More",
        },
    ]

    const docs_4 = [
        {
            id: 1,
            title: "Accessible tap targets",
            content: "Styling interactive elements on pages in an accessible way requires you to consider the size and spacing of elements so that they're easier to use. Read up on these guidelines to build web applications that are easier for users to navigate.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "Color and contrast accessibility",
            content: "Color contrast is an important aspect of design that enables users to more easily read your content. This guide can help you build beautiful web applications that emphasize readability and usability.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "Accessible responsive design",
            content: "We know that it's a good idea to design responsively to provide the best multi-device experience, but responsive design also yields a win for accessibility.",
            button: "Learn More",
        },
        {
            id: 4,
            title: "Content reordering",
            content: "The order of content in your document is important for the accessibility of your site, and it's possible that the CSS you use can affect accessibility. This guide will tell you all you need to know when using CSS to reorder the visual order of your pages' contents.",
            button: "Learn More",
        },
    ]

    return (
        <>
            <div className='mt-10 lg:mt-20'>

                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto sm:grid sm:grid-cols-2 pb-10'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl  mt-20 pl-5' >CSS</h3></a>
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[640px]'>CSS is the presentation layer of the web. It allows you to style HTML to help you achieve the design goals you have in mind for your website. Here, you can find a variety of collections of content, courses, patterns, and links to other helpful articles to guide you in your journey to learn and use CSS to make your web pages look just like you envisioned them!</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/hero-css.png" alt="peroid" className=' max-w-[600px] max-h-[200px] mt-20 pl-5 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36 ' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className='dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-[80px] md:w-[768px] lg:w-auto xl:w-auto'>
                    <h3 className='text-3xl font-bold pl-3'>Jump ahead on this page:</h3>
                    {/* first */}
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                        <div className='row-span-2'>
                            <div className='block sm:block'>
                                <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                    <div className='mt-10 bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                        <div className='hover:underline '>
                                            <IoMdCode className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Learn CSS</p>
                                <span className='text-lg w-[420px] lg:w-[600px] '>If you're new to CSS, we've got you covered. Our Learn CSS course guides you through the fundamentals of how CSS works.</span>
                            </div>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='block sm:block'>
                                <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                    <div className='mt-10 bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                        <div className='hover:underline '>
                                            <FaBolt className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>CSS and performance</p>
                                <span className='mt-20 text-lg w-[420px] '>When it comes to page speed, CSS is one of the things you should be thinking about. These guides can help you tackle common performance problems when it comes to using CSS.</span>
                            </div>
                        </div>
                        {/* third */}
                        <div className='row-span-3'>
                            <div className='block sm:block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <MdOutlineNewspaper className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>The latest in CSS and UI design</p>
                                <span className='mt-20 text-lg w-[420px]'>Learn the latest tips and techniques to use in your work, right now.</span>
                            </div>
                        </div>
                        {/* four */}
                        <div className='row-span-3'>
                            <div className='block sm:block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <MdAccessibility className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>CSS and  accessibility</p>
                                <span className='mt-20 w-[420px] text-lg '>How you use CSS has the potential to affect the accessibility of your web applications. These guides can help you make sure you're using CSS in a way that makes your web applications easier to use for more people.</span>
                            </div>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='block sm:block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Baseline Newly available features in CSS</p>
                                <p className='mt-24  text-xl w-[420px]'>Learn about the latest CSS features that are Baseline Newly available in all major browser engines.</p>
                            </div>
                        </div>
                        {/* six */}
                        <div className='row-span-2'>
                            <div className='block sm:block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className=' hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-320 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] sm:mt-5 '>
                                            <div className='hover:underline'>
                                                <MdPodcasts className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl sm:pl-10'>The CSS Podcast</p>
                                <span className=' text-xl w-[420px] sm:w-[300px] sm:text-lg sm:pl-10 lg:w-[500px]'>From accessibility to z-index, the CSS Podcast is a great way to learn more about CSS from some of the foremost experts in the industry.</span>
                            </div>
                        </div>
                        {/* seven */}
                        <div className='row-span-2'>
                            <div className='block sm:block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className=' hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-320 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] sm:mt-5 '>
                                            <div className='hover:underline'>
                                                <IoMdCode className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl sm:pl-10'>Dive into CSS patterns</p>
                                <span className=' text-xl w-[420px] sm:w-[300px] sm:text-lg sm:pl-10 lg:w-[500px]'>Check out some of our CSS patterns you can use to quickly build layouts, animations, and theming for your web pages.</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                            <div className=''>
                                <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5 '>COURSE</h3>
                                <h3 className='text-2xl font-bold hover:underline hover:underline-offset-2 mt-5 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start md:pl-5'>New to CSS?</h3>
                                <p className='mt-10  text-lg md:pl-5 lg:w-[630px]'>If you're new to CSS, we've got you covered. Our <span className='hover:underline hover:underline-offset-2'> Learn CSS </span>course guides you through the funbdamentals of how CSS works, starting with selectors, properties, values, basic layout principles, and how you can apply them to your web pages</p>

                            </div>
                            <div className='mb-12'>
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            <img src="../src/assets/card_2.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-16 pl-16 sm:pl-3 md:pl-14 lg:pl-40 ' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>
                            <div className='pl-20 mt-[-30px] sm:mt-10 lg:pl-60'>
                                <div className='border-[#185abc] hover:bg-[#185abc]  border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold'>
                                    <a href="#" className='text-[#1a73e8] hover:text-white'>
                                        Learn CSS!
                                    </a>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='mt-10'>
                        <h3 className='text-2xl font-bold flex items-center justify-center sm:flex-none sm:items-start sm:justify-start'>The latest in CSS and UI design</h3>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto sm:pl-0'>Learn the latest tips and techniques to use in your work, right now.</p>
                        <div className='bg-white mt-10 pb-10 dark:bg-[#202124] dark:text-white'>

                            <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
                                {
                                    docs.map(({ id, title, content, button }) => <div>
                                        <div key={id} className='bg-white w-[420px] sm:w-[320px]  border-white border-2 border-solid mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                            <div className='rounded-[50px] p-10 sm:p-2 flex items-center justify-center'>
                                                <MdArticle className='text-7xl fill-[#1a73e8]' />
                                            </div>
                                            <a href="#">
                                                <h3 className='mt-5 flex items-center justify-center text-xl font-bold '>{title}</h3>
                                            </a>
                                            <p className='text-lg w-[420px] sm:w-[320px] flex items-center justify-center mt-3 '>{content}</p>
                                            <div className='flex items-center justify-center mt-5'>
                                                <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                                    <a href="#">
                                                        {button}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#f5f6f7] mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 '>Baseline Newly available CSS features</h3>
                        <p className='pt-7 font-semibold text-xl sm:pl-5 md:pl-3 '><span className='underline'>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some CSS features that are now Baseline Newly available.</p>
                    </div>
                    {/* first */}
                    <div className='grid grid-cols-1 mt-10  sm:grid sm:grid-cols-2 '>
                        <div className='row-span-2'>
                            <div className='blockx'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>@starting-style</p>
                            </div>
                            <p className='text-lg'>@starting-style became Baseline Newly available in August 2024.</p>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>light-dark()</p>
                            </div>
                            <p className=' text-lg'>light-dark() became Baseline Newly available in May 2024.</p>
                        </div>
                        {/* third */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>font-size-adjust</p>
                            </div>
                            <p className=' text-lg'>font-size-adjust became Baseline Newly available in July 2024.</p>
                        </div>
                        {/* four */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>align-content on block layout</p>
                            </div>
                            <p className=' text-lg'>align-content on block layout became Baseline Newly available in April 2024.</p>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>@property</p>
                            </div>
                            <p className='text-lg'>@property became Baseline Newly available in July 2024.</p>
                        </div>
                        {/* six */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>CSS offset-position and offset-path properties</p>
                            </div>
                            <p className=' text-lg'>The offset-position and offset-path values became Baseline Newly available in January 2024.</p>
                        </div>
                    </div>
                    <div className='bg-[#f5f6f7] w-[420px] mt-10 pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>Dive into CSS patterns</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>Check out some of our CSS patterns you can use to quickly build layouts, animations, and theming for your web pages.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_2.map(({ id, title, content, button, img }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[330px] xl:w-auto lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center rounded-full text-7xl pt-10 '>
                                            <img src={img} alt={title} className='p-10 rounded-[50px]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start'>{title}</h3>
                                        </a>
                                        <p className='text-lg mt-3'>{content}</p>
                                        <div className='flex items-center justify-center mt-5'>
                                            <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                                <a href="#" >
                                                    {button}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className='w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto mt-10 pb-10'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>CSS and performance</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>CSS is responsible for much of the rendering work that happens on a page, which is a factor in how fast a page appears and responds to user interactions. These guides can help you write CSS with page speed in mind.</p>

                        <div className='grid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-[#f5f6f7] border-white border-2 border-solid w-[380px] sm:w-[310px] md:w-[350px] lg:w-[230px] lg:h-[650px] xl:w-auto h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 '>{title}</h3>
                                        </a>
                                        <p className='text-lg  mt-3'>{content}</p>
                                        <div className='flex items-center justify-center mt-5'>
                                            <div className='bg-white text-[#1a73e8] font-bold border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:bg-[#f5f6f7]'>
                                                <a href="#">
                                                    {button}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>CSS and accessibility</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>From color contrast to responsive design, CSS has a definite impact on how usable your web applications are for all users. Read these guides to level up your CSS knowledge so you can build web applications that are usable for more people.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[230px] xl:w-auto  h-[600px] lg:h-[690px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>{title}</h3>
                                        </a>
                                        <p className='text-lg  mt-3'>{content}</p>
                                        <div className='flex items-center justify-center mt-5'>
                                            <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                                <a href='#'>
                                                    {button}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 dark:bg-[#202124] dark:text-white pb-10 lg:grid-cols-2'>
                    <div className=''>
                        <h3 className='mt-10 text-4xl font-bold hover:underline hover:underline-offset-2 sm:ml-10'>The CSS Podcast</h3>
                        <p className='text-lg mt-8 w-[375px] sm:w-[600px] sm:ml-10 md:w-[700px] lg:w-[650px] xl:w-auto'>CSS is the web's core styling language. For web developers, it's one of the quickest technologies to get started with, but one of the hardest to master. Follow Una Kravets and Adam Argyle, Developer Advocates from Google, who gleefully break down complex aspects of CSS into digestible episodes covering everything from accessibility to z-index.</p>
                        <div className='sm:ml-10 lg:ml-96 pt-[50px]'>
                            <div className='border-[#1a73e8] cursor-pointer border-2 border-solid rounded-3xl  flex items-center justify-center w-[150px] h-11 text-[#1a73e8] font-bold hover:text-white hover:bg-[#1a73e8]'>
                                <a href="#">
                                    Litesn Now!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-[24px] '>
                        <img src="../../src/assets/css-podcast.png" alt="css" className=' rounded-[24px] mt-10 w-[290px]  h-[290px] sm:ml-56 md:ml-44 sm:w-[490px] sm:h-[350px] md:w-[490px] md:h-[350px] lg:w-[290px] lg:h-[290px] xl:ml-96' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Second_Courses