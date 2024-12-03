import React from 'react'
import cover_1 from '../assets/explore/cover.png'
import cover_2 from '../assets/explore/cover-1.png'
import cover_3 from '../assets/explore/cover-2.png'
import cover_4 from '../assets/explore/cover-3.png'
import cover_5 from '../assets/explore/cover-4.png'
import cover_6 from '../assets/explore/cover-5.png'
import cover_7 from '../assets/explore/cover-6.png'
import cover_8 from '../assets/explore/cover-7.png'
import cover_9 from '../assets/explore/cover-8.png'
import cover_10 from '../assets/explore/cover-9.png'
import cover_11 from '../assets/explore/cover-10.png'
import cover_12 from '../assets/explore/cover-11.png'
import cover_13 from '../assets/explore/cover-12.png'
import cover_14 from '../assets/explore/cover-13.png'
import cover_15 from '../assets/explore/cover-14.png'
import cover_16 from '../assets/explore/cover-15.png'
import cover_17 from '../assets/explore/cover-16.png'
import cover_18 from '../assets/explore/cover-wide-2.svg'
import cover_19 from '../assets/explore/cover-wide.svg'


const Explore = () => {

    const docs = [
        {
            id: 1,
            title: "Core Web Vitals",
            content: "Essential metrics for a healthy site.",
            img: cover_1,
        },
        {
            id: 2,
            title: "Metrics",
            content: "Measuring performance and user experience.",
            img: cover_2,
        },
        {
            id: 3,
            title: "Fast load times",
            content: "Techniques for improving site performance.",
            img: cover_3,
        },
        {
            id: 4,
            title: "How to Optimize Interaction to Next Paint (INP)",
            content: "Learn how to optimize for the Interaction to Next Paint metric.",
            img: cover_4,
        },
    ]

    const docs_1 = [
        {
            id: 1,
            title: "Progressive Web App",
            content: "Capabilities that enable app experiences, built and deployed on the web.",
            img: cover_5,
        },
        {
            id: 2,
            title: "Accessible to all",
            content: "Build a site that works for all of your users.",
            img: cover_6,
        },
        {
            id: 3,
            title: "Artificial Intelligence",
            content: "Build the next generation of web apps with AI.",
            img: cover_7,
        },
        {
            id: 4,
            title: "Network reliability",
            content: "See consistent, reliable performance regardless of network quality.",
            img: cover_8,
        },
        {
            id: 5,
            title: "Safe and secure",
            content: "Ensure your site and your users' data is secure.",
            img: cover_9,
        },
        {
            id: 6,
            title: "Easily discoverable",
            content: "Ensure users can find your site easily through search.",
            img: cover_10,
        },
        {
            id: 7,
            title: "Web Payments",
            content: "Build the next generation of payments on the web.",
            img: cover_11,
        },
        {
            id: 8,
            title: "Media",
            content: "Add audio and video to your web sites",
            img: cover_12,
        },
        {
            id: 9,
            title: "Devices",
            content: "Connecting hardware devices to the web",
            img: cover_13,
        },
        {
            id: 10,
            title: "Animations",
            content: "Techniques for developing high-performance animations.",
            img: cover_14,
        },
        {
            id: 11,
            title: "Identity",
            content: "Understand and build advanced authentication systems.",
            img: cover_15,
        },
        {
            id: 12,
            title: "WebAssembly",
            content: "Enable high-performance applications on web pages.",
            img: cover_16,
        },
        {
            id: 13,
            title: "Test automation",
            content: "Learn best practices for writing effective and maintainable tests.    ",
            img: cover_17,
        },
    ]
    const docs_3 = [
        {
            id: 1,
            title: "React",
            content: "Learn how to protect your web applications from common web attacks.",
            img: cover_19,
        },
        {
            id: 2,
            title: "Angular",
            content: "Build performant and progressive Angular applications.",
            img: cover_18,
        },

    ]
    return (
        <>
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto sm:grid sm:grid-cols-2 pb-10'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl  mt-20 pl-5' >Explore</h3></a>
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[650px] xl:w-auto '>Explore our structured learning paths to discover everything you need to know about building for the web.</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/explore/explore-header.png" alt="peroid" className=' max-w-[600px] max-h-[200px] mt-20 pl-0 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>

                <div className='bg-white dark:bg-[#202124] dark:text-white'>
                    <h3 className='text-2xl font-bold pt-10'>Performance</h3>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white  dark:text-white'>
                            {
                                docs.map(({ id, title, content, img }) => <div className='pl-5 sm:pl-2'>
                                    <div key={id} className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-auto rounded-2xl dark:bg-[#202124] dark:text-white mb-7'>
                                        <div className='rounded-full m-10'>
                                            <a href="#">
                                                <img src={img} alt={id} />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3 className='text-2xl font-extrabold text-black  dark:text-white pl-2'>{title}</h3>
                                        </a>
                                        <p className='text-lg  mt-3 pl-2'>{content}</p>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-[#f5f6f7] mt-10 w-[420px] pb-10 dark:bg-[#202124] dark:text-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto'>
                    <h3 className='text-3xl font-bold flex items-center justify-center mt-10  sm:flex-none sm:items-start sm:justify-start md:pl-5'>Build excellent websites</h3>
                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <div className='bg-[#f5f6f7] grid grid-cols-1 sm:grid sm:grid-cols-2 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_1.map(({ id, title, content, img }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-[#858686] border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-auto lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='flex items-center justify-center  rounded-full text-7xl pt-10 m-10'>
                                            <a href="#">
                                                <img src={img} alt={id} />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center'>{title}</h3>
                                        </a>
                                        <p className='text-lg mt-3'>{content}</p>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-white mt-10 w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto pb-10 dark:bg-[#202124] dark:text-white'>
                    <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white sm:grid sm:grid-cols-2 pb-10'>
                        <div className=''>
                            <h3 className='text-7xl  mt-20 pl-5'>Baseline</h3>
                            <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[650px] xl:w-auto'>Baseline brings clarity to information about browser support for web platform features.</p>
                        </div>
                        <div className='mb-12'>
                            <figure className='bg-none'>
                                <a href="#">
                                    <picture>
                                        <img src="../src/assets/explore/baseline-wordmark.png" alt="peroid" className='max-w-[600px] sm:max-w-[300px] max-h-[200px] mt-20 pl-0 sm:pl-3 sm:mt-32 md:pl-14 lg:mt-36 lg:pl-36' />
                                    </picture>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center mt-[-90px]'>
                        <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
                            <a href='#' >Explore</a>
                        </div>
                    </div>
                </div>

                <div className='bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto  mt-10 dark:bg-[#202124] dark:text-white'>
                    <h3 className='text-7xl mt-20 pl-5'>Build excellent websites</h3>
                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white  sm:grid sm:grid-cols-2 pb-10'>
                            {
                                docs_3.map(({ id, title, content, img }) => <div className='m-5 sm:m-2'>
                                    <div key={id} className='bg-white border-white border-2 border-solid w-[380px] h-[540px]  sm:w-[310px] md:w-[350px] lg:w-[300px] xl:w-auto lg:h-[650px] mt-10 mb-10  rounded-2xl dark:bg-[#202124] dark:text-white'>
                                        <div className='rounded-full m-10'>
                                            <a href="#">
                                                <img src={img} alt={id} />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-[#1a73e8] hover:underline hover:underline-offset-2 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start lg:flex lg:items-center lg:justify-center'>{title}</h3>
                                        </a>
                                        <p className='text-lg mt-3'>{content}</p>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto pb-10 dark:bg-[#202124] dark:text-white'>
                    <div className='grid grid-cols-1'>
                        <div className=''>
                            <h3 className='text-2xl font-bold mt-5 '>Explorations</h3>
                            <h3 className='text-2xl font-bold mt-5 '>Mini apps</h3>
                            <p className='pt-7 text-2xl sm:pl-5'>A web developer's exploration into mini apps—apps that are built with web technologies, but that don't run in browsers.</p>
                        </div>
                    </div>
                    <div className=' mt-10 mb-10'>
                        <div className='border-[#185abc] text-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black hover:text-black dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
                            <a href='#'>Explore</a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Explore;