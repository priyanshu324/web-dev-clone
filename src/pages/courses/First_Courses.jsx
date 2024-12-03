import React from 'react'
import { FaBolt } from 'react-icons/fa';
import { IoMdCode } from "react-icons/io";
import { IoSchool } from 'react-icons/io5';
import { MdAccessibility, MdArticle, MdBuild } from 'react-icons/md';


const First_Courses = () => {

    const moreCourses = [
        {
            id: 1,
            img: "https://web.dev/static/learn/forms/card_480.png",
            title: "Forms",
            content: "HTML forms give users the ability to provide input for your web applications—and this course will teach you all you need to know about using them effectively.",
            button: "Learn Forms"
        },

        {
            id: 2,
            img: "https://web.dev/static/learn/images/card_480.png",
            title: "Images",
            content: "While images are commonly used on the web, there's more to it than using the img element. This course teaches you all you need to know about how to use images on the web.",
            button: "Learn Images"
        },

        {
            id: 3,
            img: "https://web.dev/static/learn/accessibility/card_480.png",
            title: "Accessibility",
            content: "While accessibility spans all parts of the web platform, writing accessible HTML is the cornerstone of building accessible web applications. This course teaches you everything you need to know to write accessible markup.",
            button: "Learn Accessibility"
        },
    ]

    const docs = [
        {
            id: 1,
            title: "Headings and landmarks",
            content: "By using the correct elements for headings and landmarks, you can dramatically improve the navigation experience for users of assitive technology.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "Use semantic HTML for easy keyboard wins",
            content: "By using the correct semantic HTML elements you may be able to meet most or all of your keyboard access needs. That means less time fiddling with tabindex, and more happy users!",
            button: "Learn More",
        },
        {
            id: 3,
            title: "Keyboard access fundamentals",
            content: "Many users with temporary and permanent motor impairments rely on keyboard shortcuts to navigate applications more efficiently. Having a good keyboard navigation strategy for your application creates a better experience for everyone.",
            button: "Learn More",
        },
        {
            id: 4,
            title: "Labels and text alternatives",
            content: "In order for a screen reader to present a spoken UI to the user, meaningful elements must have proper labels or text alternatives. A label or text alternative gives an element its accessible name, one of the key properties for expressing element semantics in the accessibility tree.",
            button: "Learn More",
        },

    ]

    const docs_2 = [
        {
            id: 1,
            title: "Don't fight the browser preload scanner",
            content: "The browser preload scanner is a specialized HTML parser that the browser uses to discover resources earlier than it otherwise would. Find out how it helps the performance of web applications, and how you can stay out of its way.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "Optimize resource loading with the Fetch Priority API",
            content: "The Fetch Priority API uses the fetchpriority HTML attribute to indicate the relative priority of resources to the browser. It can enable optimal loading and improve Core Web Vitals.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "Preload critical assets to improve loading speed",
            content: "Resource preloading a technique that uses the HTML link element to tell the browser to fetch a resource before it is needed. Learn how to use it to improve the performance of your web applications in this guide.",
            button: "Learn More",
        },
        {
            id: 4,
            title: "Browser-level image lazy loading for the web",
            content: "Lazy loading images is an effective technique for conserving bandwidth during the initial loading of a page. In this guide, can learn how to use the HTML loading to lazy load images.",
            button: "Learn More",
        },

    ]

    const docs_3 = [
        {
            id: 1,
            title: "Get started with viewing and changing the DOM",
            content: "DevTools offers the Elements panel, which lets you view, edit, and debug your web application's DOM. Read this guide to get started with using the Elements panel.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "Listen for DOM changes",
            content: "The Elements panel in DevTools lets you listen for changes to the DOM triggered by JavaScript. Learn how to use this useful feature to debug changes to your web application's DOM.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "Find unused code loaded by your web application's HTML",
            content: "The Coverage panel is a useful tool for finding unused CSS and JavaScript code loaded by your web application's HTML. This guide shows you how to use it, and how it can improve the performance of your web applications.",
            button: "Learn More",
        },
    ]

    return (
        <>
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>

                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto sm:grid sm:grid-cols-2 pb-10'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl  mt-20 pl-5' >HTML</h3></a>
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[690px]'>HTML is the document layer of the web, providing the structure and content necessary for web pages to be meaningful. Here, you can find content for HTML such as courses, articles, collections, and other useful bits of information to help you build your knowledge of this crucial part of the web.</p>
                    </div>

                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/hero-html.png" alt="peroid" className=' max-w-[600px] max-h-[200px] mt-20 pl-5 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className='md:w-[768px] lg:w-auto xl:w-auto'>
                    <h3 className='text-3xl font-bold pl-3'>Jump ahead on this page:</h3>
                    {/* first */}
                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                        <div className='row-span-2'>
                            <div className='block sm:block'>
                                <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center '>
                                    <div className='mt-10 bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                        <div className='hover:underline '>
                                            <IoMdCode className='fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Learn Html</p>
                                <span className='text-lg w-[420px] lg:w-[600px]'>New to HTML? We've got you covered with a comprehensive course to help you get started.</span>
                            </div>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                    <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                        <div className='hover:underline '>
                                            <MdAccessibility className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Html and accessibility</p>
                                <span className='mt-20 text-lg w-[420px]'>Learn HTML patterns and concepts to help you build more accessible web applications.</span>
                            </div>
                        </div>
                        {/* third */}
                        <div className='row-span-3'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <IoSchool className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>More Courses</p>
                                <span className='mt-20 text-lg w-[420px]'>Check out these other courses to dig deeper into specific topics in HTML.</span>
                            </div>
                        </div>
                        {/* four */}
                        <div className='row-span-3'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className=' hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-320 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5' >
                                            <div className='hover:underline'>
                                                <FaBolt className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Hmtl and performance</p>
                                <span className='text-lg w-[420px]'>Learn HTML-based concepts and patterns for making your your web applications faster.</span>
                            </div>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className=' hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-320 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Baseline Newly available features in HTML</p>
                                <p className=' text-xl w-[420px] sm:w-[350px] sm:text-lg lg:w-[550px]'>Learn about the latest HTML features that are newly available in all major browser engines.</p>
                            </div>
                        </div>
                        {/* six */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className=' hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-320 dark:bg-[#202124] h-24 flex items-center justify-center text-[100px] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <MdBuild className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl sm:pl-10'>Debug HTML and the DOM with Chrome DevTools</p>
                                <p className=' text-xl w-[420px] sm:w-[300px] sm:text-lg sm:pl-10 lg:w-[500px]'>Learn how to use Chrome DevTools to debug HTML and the DOM in your web applications.</p>
                            </div>
                        </div>
                    </div>



                    <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                            <div className=''>
                                <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5'>COURSE</h3>
                                <h3 className='text-2xl font-bold hover:underline hover:underline-offset-2 mt-5 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start md:pl-5'>New to HTML?</h3>
                                <p className='mt-10  text-lg md:pl-5 lg:w-[630px]'>If you're new to HTML, we've got you covered. Our <span className='hover:underline hover:underline-offset-2'> Learn HTML </span>course guides you through the fundamentals of how HTML works, such as structural concerns, metadata, semantics, and further topics to help you sharpen your skills.</p>
                            </div>
                            <div className='mb-12'>
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            <img src="../src/assets/card.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-16 pl-16 sm:pl-3 md:pl-14 lg:pl-40 ' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className='pl-20 mt-[-30px] sm:mt-10 lg:pl-60'>
                            <div className='border-[#185abc] hover:bg-[#185abc]  border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold'>
                                <a href='#' className='text-[#1a73e8] hover:text-white'>Learn HTML!</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-2xl font-bold flex items-center justify-center sm:flex-none sm:items-start sm:justify-start'>Check out more courses.</h3>
                        <p className='mt-5 text-lg font-semibold pl-5 sm:w-[600px] md:w-[768px] lg:w-[1000px] xl:w-auto sm:pl-0'>If you're interested in learning more about HTML, these other courses will teach you about more advanced topics use can use to improve your web applications.</p>

                        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-3'>

                            {
                                moreCourses.map((course) => <div className=''>
                                    <div key={course.id} className='bg-white w-[420px] sm:w-[320px] xl:w-auto border-white border-2 border-solid mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <img src={course.img} alt={course.title} className='rounded-[50px] p-10 sm:p-2' />
                                        <h3 className='mt-5 flex items-center justify-center text-xl font-bold '>{course.title}</h3>
                                        <p className='text-lg w-[420px] sm:w-[320px] sm:pl-10 pl-12 mt-3 xl:w-auto'>{course.content}</p>
                                        <div className='flex items-center justify-center mt-5'>
                                            <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
                                                <a href='#'>{course.button}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className='bg-[#f5f6f7] mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 '>Baseline Newly available HTML features</h3>
                        <p className='pt-7 font-semibold text-xl sm:pl-5 md:pl-3'><span className='underline '>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some HTML features that are now Baseline Newly available.</p>
                    </div>
                    {/* first */}
                    <div className='grid grid-cols-1 mt-10  sm:grid sm:grid-cols-2 '>
                        <div className='row-span-2'>
                            <div className='block'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>Declarative Shadow DOM</p>
                            </div>
                            <p className='  text-lg'>Declarative Shadow DOM became Baseline Newly available in 2024.</p>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>The inert attribute</p>
                            </div>
                            <p className='  text-lg'>The inert attribute became Baseline Newly available in 2023.</p>
                        </div>
                        {/* third */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>The Popover API</p>
                            </div>
                            <p className='  text-lg'>The Popover API became Baseline Newly available in 2024.</p>
                        </div>
                        {/* four */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>Lazy-load offscreen iframes</p>
                            </div>
                            <p className=' text-lg'>Lazy-loading of iframes became Baseline Newly available in 2023.</p>
                        </div>


                    </div>
                    <div className='bg-[#f5f6f7] w-[420px] mt-10 pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>HTML and accessibility</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>HTML is a fundamental part of building accessible web applications. In this section, you'll find articles and resources to help you learn more about how to use HTML to build accessible web applications.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 dark:bg-[#202124] dark:text-white'>
                            {
                                docs.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[230px] xl:w-auto lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start'>{title}</h3>
                                        </a>
                                        <p className='text-lg mt-3'>{content}</p>
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

                    <div className='w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto mt-10 pb-10'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>HTML and performance</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>How you use HTML can affect the performance of your web applications. In this section, you'll find articles and resources to help you learn more about how to use HTML to make your web applications faster.</p>

                        <div className='grid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                            {
                                docs_2.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
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

                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>HTML and accessibility</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>HTML is a fundamental part of building accessible web applications. In this section, you'll find articles and resources to help you learn more about how to use HTML to build accessible web applications.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[320px] xl:w-auto lg:h-[530px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <IoMdCode className='fill-[#1a73e8]' />
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
            </div>

        </>
    )

}

export default First_Courses