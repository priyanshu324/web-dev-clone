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
            <div className='mt-10 dark:bg-[#202124] dark:text-white'>

                <div className='grid grid-cols-2 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl pl-28 mt-20 w-[800px]' >JavaScript</h3></a>
                        <p className='text-[25px] leading-relaxed pl-28 mt-10 w-[1250px]'>JavaScript is the scripting language of the web. It provides rich interactivity and dynamic content for web applications. With it, you can build user experiences that can help users accomplish complex tasks, store user data, and more. Here, you can peruse our collection of JavaScript content and learn a variety of concepts and techniques to help you improve your JavaScript skills.</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/hero-javascript.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-36 ml-[450px]' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                <div >
                    <h3 className='text-3xl pl-28 font-bold'>Jump ahead on this page:</h3>
                    {/* first */}
                    <div className='grid grid-cols-2'>
                        <div className='row-span-2'>
                            <div className='flex'>
                                <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                    <div className='mt-10  bg-[#f5f6f7] rounded-full w-28 h-20 flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                        <div className='hover:underline '>
                                            <MdJavascript className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className='flex items-center justify-center pl-10 mt-[-41px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[300px]'>Learn JavaScript</p>
                                <span className='mt-20 ml-[-200px] w-[600px] text-lg '>If you're new to JavaScript, we've got you covered. Our Learn JavaScript course teaches the ins and outs of JavaScript, helping you to get up to speed.</span>
                            </div>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='flex'>
                                <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                    <div className='mt-10  bg-[#f5f6f7] rounded-full flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                        <div className='hover:underline '>
                                            <MdTimer className=' fill-[#1a73e8] ' />
                                        </div>
                                    </div>
                                </a>
                                <p className='flex pl-10 mt-[40px]  text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[300px]'>Optimize poor INP caused by JavaScript</p>
                                <span className='mt-20 ml-[-255px] pt-10 w-[600px] text-lg '><span className='text-[#1a73e8] hover:underline hover:underline-offset-2'>Interaction to Next Paint (INP)</span> is an important responsiveness metric that measures page responsiveness. These guides contain JavaScript tips to help you keep your pages responsive to users.</span>
                            </div>
                        </div>
                        {/* third */}
                        <div className='row-span-3'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                            <div className='hover:underline'>
                                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex  pl-10 mt-[70px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[500px]'> Baseline Newly available JavaScript features</p>
                                <span className='mt-20 ml-[-480px] p-5 pt-16 w-[600px] text-lg '>Learn about the latest JavaScript features that are newly available in all major browser engines.</span>
                            </div>
                        </div>
                        {/* four */}
                        <div className='row-span-3'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                            <div className='hover:underline'>
                                                <FaBolt className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex mt-[40px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[500px]'>Optimize third-party JavaScript resources</p>
                                <span className='mt-20 ml-[-500px] pt-10 w-[600px] text-lg '>Third-party JavaScript can be a cause of performance issues in web applications. Learn how to manage third-party scripts to keep your web applications fast.</span>
                            </div>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='flex'>
                                <div className='hover:underline hover:underline-offset-2 '>
                                    <a href="#" className='pl-28 hover:text-[#1a73e8] hover:underline hover:underline-offset-2 block'>
                                        <div className='mt-10  bg-[#f5f6f7] rounded-full w-32 h-24 flex items-center justify-center text-[100px] dark:bg-[#202124]'>
                                            <div className='hover:underline'>
                                                <MdDataObject className=' fill-[#1a73e8] ' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <p className='flex ml-5 mt-[40px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[500px]'>Get familiar with common and useful JavaScript features</p>
                                <p className='mt-24 ml-[-500px] text-xl w-[500px]'>JavaScript provides many features to help you build applications that respond to the needs of your users.</p>
                            </div>
                        </div>
                        {/* six */}
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
                                <p className='flex pl-10 mt-[75px] text-[#1a73e8] hover:underline hover:underline-offset-2 cursor-pointer font-bold text-xl w-[370px]'>Dive into JavaScript patterns</p>
                                <span className='mt-28 ml-[-290px] text-xl w-[650px]'>Check out these JavaScript patterns you can use to quickly accomplish common tasks in your web applications.</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#f5f6f7] mt-10 w-full pb-10 dark:bg-[#202124] dark:text-white'>
                        <div className='grid grid-cols-2'>
                            <div className='pl-28 pt-10'>
                                <h3 className='text-lg font-bold '>COURSE</h3>
                                <h3 className='text-2xl font-bold hover:underline hover:underline-offset-2 mt-5'>New to JavaScript?</h3>
                                <p className='mt-10 w-[1000px] text-lg'>If you're new to JavaScript, we've got you covered. Our <span className='hover:underline hover:underline-offset-2'>Learn JavaScript</span> course guides you through how JavaScript works, beginning with the basics such as variables, functions, and conditional statements. From there, you'll tackle more complex topics such as prototypal inheritance, classes, and other topics to help you hone your JavaScript skills so that you can build rich web applications.</p>
                                <div className='pl-[450px] mt-[-30px]'>
                                    <div className='mt-28'>
                                        <div className='border-[#185abc] cursor-pointer text-[#1a73e8] hover:text-white hover:bg-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:font-bold'>
                                            <a href="#">
                                                Learn JavaScript!
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-12'>
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            <img src="../src/assets/card_3.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-16 ml-[400px]' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>
                        </div>

                    </div>


                    <div className='bg-white mt-10 w-full pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>Baseline Newly available JavaScript features</h3>
                        <p className='pt-7 font-semibold '><span className='underline pl-28'>Baseline</span> signals to web developers when web platform features can be safely used in all major browser engines. Here are some JavaScript features that are now Baseline Newly available.</p>
                    </div>
                    {/* first */}
                    <div className='grid grid-cols-2 mt-10'>
                        <div className='row-span-2'>
                            <div className='pl-28 flex'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>Array fromAsync() static method</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>Array.fromAsync() became Baseline Newly available in 2024.</p>
                        </div>
                        {/* second */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>Promise.withResolvers()</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>promise.withResolvers() became Baseline Newly available in 2024.</p>
                        </div>
                        {/* third */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>
                                    ArrayBuffer transfer() and transferToFixedLength()</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>The ArrayBuffer transfer() and transferToFixedLength() methods became Baseline Newly available in 2024.</p>
                        </div>
                        {/* four */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>
                                    intl.Segmenter</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>intl.Segmenter became Baseline Newly available in 2024.</p>
                        </div>
                        {/* five */}
                        <div className='row-span-2'>
                            <div className='pl-28 flex mt-10'>
                                <img src="https://web.dev/static/baseline/image/newly-available.svg" alt="arrow" />
                                <p className='text-[#1a73e8] hover:underline hover:underline-offset-2 font-bold pl-10 mt-2 text-2xl'>groupBy() functions</p>
                            </div>
                            <p className=' pl-64 w-[800px] text-lg'>groupBy() functions became Baseline Newly available in 2024.</p>
                        </div>

                    </div>
                    <div className='bg-[#f5f6f7] pl-28 mt-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='text-2xl font-bold pt-10'>Get familiar with common and useful JavaScript features</h3>
                        <p className='mt-5 text-lg font-semibold'>JavaScript gives you a lot of tools to help you build applications that respond to the needs of your users. Here are some common features might want to use in your web applications that are worth knowing about!</p>
                        <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>

                            <div className='bg-[#f5f6f7] grid grid-cols-4 mt-16  dark:bg-[#202124] dark:text-white'>
                                {
                                    docs.map(({ id, title, content, button }) => <div className='ml-56'>
                                        <div key={id} className='bg-white border-white border-2 border-solid w-[350px] h-[570px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                            <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                                <MdArticle className='fill-[#1a73e8]' />
                                            </div>
                                            <a href="#">
                                                <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8]  hover:underline hover:underline-offset-2 pl-24 w-[300px]'>{title}</h3>
                                            </a>
                                            <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>
                                            <div className='pl-28 mt-5'>
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


                    <div className='bg-white mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>Optimize poor INP caused by JavaScript</h3>
                        <p className='pt-7 text-2xl pl-28'>How you use JavaScript can have an effect on your web application's <span className='underline underline-offset-2'>Interaction to Next Paint (INP)</span>. These guides will help you to get a handle on page repsonsiveness issues caused by JavaScript.</p>

                        <div className='bg-white grid grid-cols-4 mt-16  dark:bg-[#202124] dark:text-white'>
                            {
                                docs_2.map(({ id, title, content, button, img }) => <div className='ml-10'>
                                    <div key={id} className='bg-[#f5f6f7] border-white border-2 border-solid w-[350px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 '>
                                            <MdArticle className='fill-[#1a73e8]' />
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-black dark:text-[#1a73e8]  hover:underline hover:underline-offset-2 pl-24 w-[300px]'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>
                                        <div className='pl-28 mt-5'>
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

                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <h3 className='pl-28 text-2xl font-bold pt-10'>Optimize third-party JavaScript resources</h3>
                        <p className='pt-7 pl-28 text-2xl'>A common performance problem on the web involves the use of third-party JavaScript, which can cause pages to load more slowly and even cause problems with page responsiveness. Check out these guides to get a handle on some common third-party JavaScript performance problems.</p>

                        <div className='grid grid-cols-4 mt-16  '>
                            {
                                docs_3.map(({ id, title, content, button }) => <div className='ml-10'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[350px] h-[670px] mt-10 mb-10 rounded-2xl dark:bg-[#202124] dark:text-white'>
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
                        <h3 className='pl-28 text-2xl font-bold pt-10'>Dive into JavaScript patterns</h3>
                        <p className='pt-7 text-2xl pl-28'>Check out these patterns you can use to quickly accomplish common tasks in your web applications using JavaScript.</p>

                        <div className='bg-[#f5f6f7] grid grid-cols-4 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_4.map(({ id, title, content, button, img }) => <div className='ml-72'>
                                    <div key={id} className=' w-[350px] h-[570px] mt-10 mb-10 rounded-2xl border-2 border-solid border-white'>
                                        <img src={img} alt={title} className='p-10 rounded-[50px]' />
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-black hover:underline hover:underline-offset-2 pl-24 w-[300px] dark:text-white'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>
                                        <div className='pl-28 mt-5'>
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
            </div>

        </>
    )
}

export default Third_Courses