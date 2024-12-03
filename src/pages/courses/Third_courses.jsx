import React from 'react'
import { FaBolt } from 'react-icons/fa';
import { IoMdCode } from "react-icons/io";
import { MdArticle, MdDataObject, MdJavascript, MdTimer } from 'react-icons/md';
import hero_4 from '../../assets/hero_4.png'
import hero_5 from '../../assets/hero_5.png'
import hero_6 from '../../assets/hero_6.png'

const Third_Courses = () => {

    const docs = [
        {
            id: 1,
            title: "Promises",
            content: "Promises allow you asynchronously execute code after a certain event occurs.",
            button: "Learn More",
        },
        {
            id: 2,
            title: "The fetch API",
            content: "The fetch API allows you to make HTTP requests to fetch data from the web on the front end.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "IndexedDB",
            content: "The IndexedDB API offers client-side storage of structured data, including files and blobs.",
            button: "Learn More",
        },


    ]

    const docs_2 = [
        {
            id: 1,
            title: "Optimize long tasks",
            content: "Long tasks on the main thread can cause your web application to be unresponsive. Learn how to optimize long tasks to improve your web application's INP.",
            button: "Learn More",

        },
        {
            id: 2,
            title: "Optimize input delay",
            content: "Long input delays occur when users interact with a page and the browser takes too long respond—and JavaScript can be a common culprit. Read this guide and learn how you can keep input delays shorter and your web application snappier.",
            button: "Learn More",

        },
        {
            id: 3,
            title: "Script evaluation and long tasks",
            content: "When scripts are downloaded during page load, they can cause long tasks that can affect your web application's INP. Learn how to optimize for long script evaluation tasks to keep your INP low.",
            button: "Learn More",

        },
        {
            id: 4,
            title: "Use web workers to run JavaScript off the browser's main thread",
            content: "Not everything needs to run on the main thread. If you have large batches of work that take a long time to run, you can offload them to web worker threads to keep your web application as responsive as it can be.",
            button: "Learn More",

        },

    ]

    const docs_3 = [
        {
            id: 1,
            title: "Third-party JavaScript performance",
            content: "Find out how third- party JavaScript can affect performance and what you can do to keep it from slowing down your sites. ",
            button: "Learn More",
        },
        {
            id: 2,
            title: "Identify slow third-party JavaScript",
            content: "Supercharge your performance detective skills with Lighthouse and Chrome DevTools.",
            button: "Learn More",
        },
        {
            id: 3,
            title: "Efficiently load third-party JavaScript",
            content: "Learn how to load third-party JavaScript efficiently so you can improve the performance of your web applications.",
            button: "Learn More",
        },
        {
            id: 4,
            title: "Best practices for tags and tag managers",
            content: "Learn how to optimize tags and tag managers for Core Web Vitals, so that these useful tools have the least impact on your web application's performance.",
            button: "Learn More",
        },
    ]

    const docs_4 = [
        {
            id: 1,
            img: hero_4,
            title: "Web applications",
            content: "Check out these patterns to accomplish common tasks in your web applications.",
            button: "See Patterns",
        },
        {
            id: 2,
            img: hero_5,
            title: "Files and directories",
            content: "Learn patterns for working with files and directories in JavaScript.",
            button: "See Patterns",
        },
        {
            id: 3,
            img: hero_6,
            title: "Clipboard",
            content: "Learn how to use Clipboard APIs in JavaScript to provide copy and paste functionality in your web applications.",
            button: "See Patterns",
        },

    ]

    return (
        <>
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>

                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto sm:grid sm:grid-cols-2 pb-10'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl  mt-20 pl-5' >JavaScript</h3></a>
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[650px] xl:w-auto'>JavaScript is the scripting language of the web. It provides rich interactivity and dynamic content for web applications. With it, you can build user experiences that can help users accomplish complex tasks, store user data, and more. Here, you can peruse our collection of JavaScript content and learn a variety of concepts and techniques to help you improve your JavaScript skills.</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/hero-javascript.png" alt="peroid" className=' max-w-[600px] max-h-[200px] mt-20 pl-5 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36' />
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
                                            <MdJavascript className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Learn JavaScript</p>
                                <span className='text-lg w-[420px] lg:w-[600px]'>If you're new to JavaScript, we've got you covered. Our Learn JavaScript course teaches the ins and outs of JavaScript, helping you to get up to speed.</span>
                            </div>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                    <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                        <div className='hover:underline '>
                                            <MdTimer className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Optimize poor INP caused by JavaScript</p>
                                <span className='mt-20 text-lg w-[420px]'><span className='text-[#1a73e8] hover:underline hover:underline-offset-2'>Interaction to Next Paint (INP)</span> is an important responsiveness metric that measures page responsiveness. These guides contain JavaScript tips to help you keep your pages responsive to users.</span>
                            </div>
                        </div>
                        {/* third */}
                        <div className='row-span-3'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'> Baseline Newly available JavaScript features</p>
                                <span className='mt-20 text-lg w-[420px]'>Learn about the latest JavaScript features that are newly available in all major browser engines.</span>
                            </div>
                        </div>
                        {/* four */}
                        <div className='row-span-3'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <FaBolt className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Optimize third-party JavaScript resources</p>
                                <span className='mt-20 text-lg w-[420px]'>Third-party JavaScript can be a cause of performance issues in web applications. Learn how to manage third-party scripts to keep your web applications fast.</span>
                            </div>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <MdDataObject className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Get familiar with common and useful JavaScript features</p>
                                <p className='mt-20 text-lg w-[420px]'>JavaScript provides many features to help you build applications that respond to the needs of your users.</p>
                            </div>
                        </div>
                        {/* six */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='hover:text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124] sm:mt-5'>
                                            <div className='hover:underline'>
                                                <IoMdCode className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className=' text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-2xl flex items-center justify-center'>Dive into JavaScript patterns</p>
                                <span className='mt-20 text-lg w-[420px]'>Check out these JavaScript patterns you can use to quickly accomplish common tasks in your web applications.</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2'>
                            <div >
                                <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5 '>COURSE</h3>
                                <h3 className='text-2xl font-bold hover:underline hover:underline-offset-2 mt-5 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start md:pl-5'>New to JavaScript?</h3>
                                <p className='mt-10  text-lg md:pl-5 lg:w-[630px]'>If you're new to JavaScript, we've got you covered. Our <span className='hover:underline hover:underline-offset-2'>Learn JavaScript</span> course guides you through how JavaScript works, beginning with the basics such as variables, functions, and conditional statements. From there, you'll tackle more complex topics such as prototypal inheritance, classes, and other topics to help you hone your JavaScript skills so that you can build rich web applications.</p>
                            </div>
                            <div className='mb-12'>
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            <img src="../src/assets/card_3.png" alt="peroid" className='max-w-[600px] max-h-[200px]  mt-16 pl-16 sm:pl-3 md:pl-14 lg:pl-40 ' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className='pl-20 mt-[-30px] sm:mt-10 lg:pl-60'>
                            <div className='border-[#185abc] hover:bg-[#185abc]  border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold'>
                                <a href="#" className='text-[#1a73e8] hover:text-white'>
                                    Learn JavaScript!
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className='bg-white mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>Baseline Newly available JavaScript features</h3>
                        <p className='pt-7 font-semibold text-xl sm:pl-5 md:pl-3'><span className='underline'>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some JavaScript features that are now Baseline Newly available.</p>
                    </div>
                    {/* first */}
                    <div className='grid grid-cols-1 mt-10  sm:grid sm:grid-cols-2 '>
                        <div className='row-span-2'>
                            <div className='block'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>Array fromAsync() static method</p>
                            </div>
                            <p className='text-lg'>Array.fromAsync() became Baseline Newly available in 2024.</p>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='block'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>Promise.withResolvers()</p>
                            </div>
                            <p className='text-lg'>promise.withResolvers() became Baseline Newly available in 2024.</p>
                        </div>
                        {/* third */}
                        <div className='row-span-2'>
                            <div className='block  mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>
                                    ArrayBuffer transfer() and transferToFixedLength()</p>
                            </div>
                            <p className='text-lg'>The ArrayBuffer transfer() and transferToFixedLength() methods became Baseline Newly available in 2024.</p>
                        </div>
                        {/* four */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>
                                    intl.Segmenter</p>
                            </div>
                            <p className='text-lg'>intl.Segmenter became Baseline Newly available in 2024.</p>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='block mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold  mt-2 text-2xl'>groupBy() functions</p>
                            </div>
                            <p className='text-lg'>groupBy() functions became Baseline Newly available in 2024.</p>
                        </div>

                    </div>
                    <div className='bg-[#f5f6f7] w-[420px] mt-10 pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>Get familiar with common and useful JavaScript features</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>JavaScript gives you a lot of tools to help you build applications that respond to the needs of your users. Here are some common features might want to use in your web applications that are worth knowing about!</p>
                        <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>

                            <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dark:bg-[#202124] dark:text-white'>
                                {
                                    docs.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
                                        <div key={id} className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-auto lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white'>
                                            <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                                <MdArticle className='fill-[#1a73e8]' />
                                            </div>
                                            <a href="#">
                                                <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center'>{title}</h3>
                                            </a>
                                            <p className='text-lg mt-3'>{content}</p>
                                            <div className='flex items-center justify-center mt-5'>
                                                <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
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


                    <div className='w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto mt-10 pb-10'>
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>Optimize poor INP caused by JavaScript</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>How you use JavaScript can have an effect on your web application's <span className='underline underline-offset-2'>Interaction to Next Paint (INP)</span>. These guides will help you to get a handle on page repsonsiveness issues caused by JavaScript.</p>

                        <div className='rid grid-cols-1 mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                            {
                                docs_2.map(({ id, title, content, button, img }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-[#f5f6f7] border-white border-2 border-solid w-[380px] sm:w-[310px] md:w-[350px] lg:w-[230px] lg:h-[650px] xl:w-auto h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 '>{title}</h3>
                                        </a>
                                        <p className='text-lg  mt-3'>{content}</p>
                                        <div className='flex items-center justify-center  mt-5'>
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
                        <h3 className=' text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>Optimize third-party JavaScript resources</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>A common performance problem on the web involves the use of third-party JavaScript, which can cause pages to load more slowly and even cause problems with page responsiveness. Check out these guides to get a handle on some common third-party JavaScript performance problems.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white '>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[320px] xl:w-auto lg:h-[530px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>{title}</h3>
                                        </a>
                                        <p className='text-lg  mt-3'>{content}</p>
                                        <div className='flex items-center justify-center  mt-5'>
                                            <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
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

                    <div className='bg-white mt-10 pb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                        <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5'>Dive into JavaScript patterns</h3>
                        <p className='pt-7 text-2xl sm:pl-5'>Check out these patterns you can use to quickly accomplish common tasks in your web applications using JavaScript.</p>

                        <div className='bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_4.map(({ id, title, content, button, img }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-[#f5f6f7] border-white border-2 border-solid w-[380px]  sm:w-[310px] md:w-[350px] lg:w-[320px] xl:w-auto lg:h-[530px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <img src={img} alt={title} className='p-10 rounded-[50px]' />
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center'>{title}</h3>
                                        </a>
                                        <p className='text-lg mt-3'>{content}</p>
                                        <div className='flex items-center justify-center mt-5'>
                                            <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>
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
            </div>

        </>
    )
}

export default Third_Courses