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
            <div className='mt-10'>

                <div className='grid grid-cols-2 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl pl-28 mt-20 w-[800px]' >CSS</h3></a>
                        <p className='text-[25px] leading-relaxed pl-28 mt-10 w-[1250px]'>CSS is the presentation layer of the web. It allows you to style HTML to help you achieve the design goals you have in mind for your website. Here, you can find a variety of collections of content, courses, patterns, and links to other helpful articles to guide you in your journey to learn and use CSS to make your web pages look just like you envisioned them!</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/hero-css.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-36 ml-[450px]' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className='dark:bg-[#202124] dark:text-white dark:mt-[-40px] dark:pt-[80px]'>
                    <h3 className='text-3xl pl-28 font-bold '>Jump ahead on this page:</h3>
                    {/* first */}
                    <div className='grid grid-cols-2'>
                        <div className='row-span-2'>
                            <div className='flex'>
                                <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                    <div className='mt-10  bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                        <div className='hover:underline '>
                                            <IoMdCode className='stroke-2 fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className='flex items-center justify-center pl-10 mt-[-41px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[300px]'>Learn CSS</p>
                                <span className='mt-20 ml-[-170px] w-[600px] text-lg '>If you're new to CSS, we've got you covered. Our Learn CSS course guides you through the fundamentals of how CSS works.</span>
                            </div>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='flex'>
                                <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                    <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                        <div className='hover:underline '>
                                            <FaBolt className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className='flex items-center justify-center pl-10 mt-[-10px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[300px]'>CSS and performance</p>
                                <span className='mt-20 ml-[-222px] w-[600px] text-lg '>When it comes to page speed, CSS is one of the things you should be thinking about. These guides can help you tackle common performance problems when it comes to using CSS.</span>
                            </div>
                        </div>
                        {/* third */}
                        <div className='row-span-3'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                            <div className='hover:underline'>
                                                <MdOutlineNewspaper className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex items-center justify-center pl-10 mt-[-10px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[300px]'>The latest in CSS and UI design</p>
                                <span className='mt-20 ml-[-180px] w-[600px] text-lg '>Learn the latest tips and techniques to use in your work, right now.</span>
                            </div>
                        </div>
                        {/* four */}
                        <div className='row-span-3'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] '>
                                            <div className='hover:underline'>
                                                <MdAccessibility className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex items-center justify-center  mt-[-10px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[300px]'>CSS and  accessibility</p>
                                <span className='mt-20 ml-[-250px] w-[600px] text-lg '>How you use CSS has the potential to affect the accessibility of your web applications. These guides can help you make sure you're using CSS in a way that makes your web applications easier to use for more people.</span>
                            </div>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] '>
                                            <div className='hover:underline'>
                                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex items-center justify-center ml-5 mt-[-10px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[500px]'>Baseline Newly available features in CSS</p>
                                <p className='mt-24 ml-[-450px] text-xl w-[500px]'>Learn about the latest CSS features that are Baseline Newly available in all major browser engines.</p>
                            </div>
                        </div>
                        {/* six */}
                        <div className='row-span-2'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] '>
                                            <div className='hover:underline'>
                                                <MdPodcasts className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex items-center justify-center pl-10 mt-[-20px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[370px]'>The CSS Podcast</p>
                                <span className='mt-28 ml-[-290px] text-xl w-[650px]'>From accessibility to z-index, the CSS Podcast is a great way to learn more about CSS from some of the foremost experts in the industry.</span>
                            </div>
                        </div>
                        {/* seven */}
                        <div className='row-span-2'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] '>
                                            <div className='hover:underline'>
                                                <IoMdCode className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex items-center justify-center pl-10 mt-[-20px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[370px]'>Dive into CSS patterns</p>
                                <span className='mt-28 ml-[-290px] text-xl w-[650px]'>Check out some of our CSS patterns you can use to quickly build layouts, animations, and theming for your web pages.</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#f5f6f7] mt-10 w-full pb-10 dark:bg-[#202124] dark:text-white'>
                        <div className='grid grid-cols-2'>
                            <div className='pl-28 pt-10'>
                                <h3 className='text-lg font-bold '>COURSE</h3>
                                <h3 className='text-2xl font-bold hover:underline hover:underline-offset-2 mt-5'>New to CSS?</h3>
                                <p className='mt-10 w-[1000px] text-lg'>If you're new to CSS, we've got you covered. Our <span className='hover:underline hover:underline-offset-2'> Learn CSS </span>course guides you through the funbdamentals of how CSS works, starting with selectors, properties, values, basic layout principles, and how you can apply them to your web pages</p>
                                <div className='pl-[450px] mt-[-30px]'>
                                    <div className='mt-28'>
                                        <div className='border-[#185abc] cursor-pointer text-[#1a73e8] hover:text-white hover:bg-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold'>
                                            <a href="#">
                                                Learn CSS!
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-12'>
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            <img src="../src/assets/card_2.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-16 ml-[400px]' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>
                        </div>

                    </div>
                    <div className='pl-28 mt-10'>
                        <h3 className='text-2xl font-bold'>The latest in CSS and UI design</h3>
                        <p className='mt-5 text-lg font-semibold'>Learn the latest tips and techniques to use in your work, right now.</p>
                        <div className='bg-white mt-10 pb-10 dark:bg-[#202124] dark:text-white'>

                            <div className='bg-white grid grid-cols-4 mt-16 dark:bg-[#202124] dark:text-white'>
                                {
                                    docs.map(({ id, title, content, button }) => <div>
                                        <div key={id} className='bg-[#f5f6f7] border-white border-2 border-solid w-[350px] h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                            <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                                <MdArticle className='fill-[#1a73e8]' />
                                            </div>
                                            <a href="#">
                                                <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 pl-24 w-[300px]'>{title}</h3>
                                            </a>
                                            <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>
                                            <div className='pl-28 mt-5'>
                                                <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2 dark:hover:text-white'>
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


                    <div className='bg-[#f5f6f7] mt-10 w-full pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>Baseline Newly available CSS features</h3>
                        <p className='pt-7 font-semibold '><span className='underline pl-28'>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some CSS features that are now Baseline Newly available.</p>
                    </div>
                    {/* first */}
                    <div className='grid grid-cols-2 mt-10'>
                        <div className='row-span-2'>
                            <div className='pl-28 flex'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>@starting-style</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>@starting-style became Baseline Newly available in August 2024.</p>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>light-dark()</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>light-dark() became Baseline Newly available in May 2024.</p>
                        </div>
                        {/* third */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>font-size-adjust</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>font-size-adjust became Baseline Newly available in July 2024.</p>
                        </div>
                        {/* four */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>align-content on block layout</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>align-content on block layout became Baseline Newly available in April 2024.</p>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>@property</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>@property became Baseline Newly available in July 2024.</p>
                        </div>
                        {/* six */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>CSS offset-position and offset-path properties</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>The offset-position and offset-path values became Baseline Newly available in January 2024.</p>
                        </div>
                    </div>
                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>Dive into CSS patterns</h3>
                        <p className='pt-7 text-2xl pl-28'>Check out some of our CSS patterns you can use to quickly build layouts, animations, and theming for your web pages.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-4 mt-16  dark:bg-[#202124] dark:text-white'>
                            {
                                docs_2.map(({ id, title, content, button, img }) => <div className='ml-72'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[350px] h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <img src={img} alt={title} className='p-10 rounded-[50px]' />
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-black hover:underline hover:underline-offset-2 pl-24 w-[300px] dark:text-white'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>
                                        <div className='pl-28 mt-5'>
                                            <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
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

                    <div className=' mt-10 pb-10'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>CSS and performance</h3>
                        <p className='pt-7 pl-28 text-2xl'>CSS is responsible for much of the rendering work that happens on a page, which is a factor in how fast a page appears and responds to user interactions. These guides can help you write CSS with page speed in mind.</p>

                        <div className='grid grid-cols-4 mt-16  '>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className='ml-10'>
                                    <div key={id} className='bg-[#f5f6f7] border-white border-2 border-solid w-[350px] h-[670px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 pl-24 w-[300px]'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>
                                        <div className='pl-28 mt-5'>
                                            <div className='bg-white border-[#1a73e8] cursor-pointer border-2 border-solid rounded-3xl text-[#1a73e8] font-bold  flex items-center justify-center w-[150px] h-11 hover:bg-[#f5f6f7]'>
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

                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>CSS and accessibility</h3>
                        <p className='pt-7 text-2xl pl-28'>From color contrast to responsive design, CSS has a definite impact on how usable your web applications are for all users. Read these guides to level up your CSS knowledge so you can build web applications that are usable for more people.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-4 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className=''>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px] h-[690px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 w-[420px] flex p-12'>{title}</h3>
                                        </a>
                                        <p className='text-lg pt-5 w-[400px] p-5 '>{content}</p>
                                        <div className='pl-28 mt-5'>
                                            <div className='border-[#1a73e8] cursor-pointer border-2 border-solid rounded-3xl flex items-center justify-center text-[#1a73e8] font-bold hover:text-black w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
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
                <div className='grid grid-cols-2 dark:bg-[#202124] dark:text-white pb-10'>
                    <div className='pl-10'>
                        <h3 className='mt-10 text-4xl font-bold hover:underline hover:underline-offset-2'>The CSS Podcast</h3>
                        <p className='text-lg mt-8 w-[1050px]'>CSS is the web's core styling language. For web developers, it's one of the quickest technologies to get started with, but one of the hardest to master. Follow Una Kravets and Adam Argyle, Developer Advocates from Google, who gleefully break down complex aspects of CSS into digestible episodes covering everything from accessibility to z-index.</p>
                        <div className='pl-96 pt-[50px]'>
                            <div className='border-[#1a73e8] cursor-pointer border-2 border-solid rounded-3xl  flex items-center justify-center w-[150px] h-11 text-[#1a73e8] font-bold hover:text-white hover:bg-[#1a73e8]'>
                                <a href="#">
                                    Litesn Now!

                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-[24px]'>
                        <img src="../../src/assets/css-podcast.png" alt="css" className=' rounded-[24px] mt-10 w-[290px] ml-96  h-[290px]' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Second_Courses