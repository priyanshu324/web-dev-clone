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
            <div className='mt-20'>
                <div className='grid grid-cols-2 bg-white pb-10 dark:bg-[#202124] dark:text-white'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl pl-28 mt-20 w-[800px]' >Explore</h3></a>
                        <p className='text-[25px] leading-relaxed pl-28 mt-10 w-[1250px]'>Explore our structured learning paths to discover everything you need to know about building for the web.</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/explore/explore-header.png" alt="peroid" className='max-w-[600px] max-h-[200px]  mt-36 ml-[450px]' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>

                <div className='bg-white pl-28  dark:bg-[#202124] dark:text-white'>
                    <h3 className='text-2xl font-bold pt-10 ml-10'>Performance</h3>
                    <div className='bg-white  dark:bg-[#202124] dark:text-white'>
                        <div className='bg-white grid grid-cols-4   dark:bg-[#202124] dark:text-white'>
                            {
                                docs.map(({ id, title, content, img }) => <div className='ml-10'>
                                    <div key={id} className='bg-white dark:bg-[#202124] dark:text-white border-[#f5f6f7] border-2 border-solid w-[350px] h-[570px] mt-10 mb-10 rounded-2xl '>
                                        <div className='rounded-full m-10'>
                                            <a href="#">
                                                <img src={img} alt={id} />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-black hover:underline hover:underline-offset-2 pl-24 w-[300px] dark:text-white'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-[#f5f6f7] pl-28 dark:bg-[#202124] dark:text-white'>
                    <h3 className='text-2xl font-bold pt-10 ml-10'>Build excellent websites</h3>
                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <div className='bg-[#f5f6f7] grid grid-cols-3 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_1.map(({ id, title, content, img }) => <div className='ml-2'>
                                    <div key={id} className='bg-white dark:bg-[#202124] dark:text-white border-[#f5f6f7] border-2 border-solid w-[350px] h-[500px] mt-10 mb-10 rounded-2xl'>
                                        <div className='rounded-full m-10'>
                                            <a href="#">
                                                <img src={img} alt={id} />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-black hover:underline hover:underline-offset-2 pl-24 w-[300px] dark:text-white'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-white  w-full pb-10 dark:bg-[#202124] dark:text-white'>
                    <div className='grid grid-cols-2'>
                        <div className='pl-28 pt-10'>
                            <h3 className='text-2xl font-boldmt-5'>Baseline</h3>
                            <p className='mt-10 w-[1000px] text-lg'>Baseline brings clarity to information about browser support for web platform features.</p>
                        </div>
                        <div className='mb-12'>
                            <figure className='bg-none'>
                                <a href="#">
                                    <picture>
                                        <img src="../src/assets/explore/baseline-wordmark.png" alt="peroid" className='rounded-3xl' />
                                    </picture>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className='pl-[450px] mt-[-150px] mb-10'>
                        <div className='border-[#185abc] text-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11'>
                            <a href='#' >Explore</a>
                        </div>
                    </div>
                </div>

                <div className='bg-[#f5f6f7] pl-28 mt-10 dark:bg-[#202124] dark:text-white'>
                    <h3 className='text-2xl font-bold pt-10 ml-10'>Build excellent websites</h3>
                    <div className='bg-[#f5f6f7] mt-10 pb-10 dark:bg-[#202124] dark:text-white'>
                        <div className='bg-[#f5f6f7] grid grid-cols-4 mt-16 dark:bg-[#202124] dark:text-white'>
                            {
                                docs_3.map(({ id, title, content, img }) => <div className='ml-96'>
                                    <div key={id} className='bg-white dark:bg-[#202124] dark:text-white border-[#f5f6f7] border-2 border-solid w-[350px] h-[400px] mt-10 mb-10 rounded-2xl'>
                                        <div className='rounded-full m-10'>
                                            <a href="#">
                                                <img src={img} alt={id} />
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3 className='mt-10 text-2xl font-extrabold text-black hover:underline hover:underline-offset-2 pl-24 w-[300px] dark:text-white'>{title}</h3>
                                        </a>
                                        <p className='text-lg w-[280px] ml-14 mt-3'>{content}</p>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-white  w-full pb-10 dark:bg-[#202124] dark:text-white'>
                    <div className='grid grid-cols-2'>
                        <div className='pl-28 pt-10'>
                            <h3 className='text-2xl font-bold mt-5 ml-10'>Explorations</h3>
                            <h3 className='text-2xl font-bold mt-5 ml-10'>Mini apps</h3>
                            <p className='mt-10 w-[1000px] text-lg ml-10'>A web developer's exploration into mini apps—apps that are built with web technologies, but that don't run in browsers.</p>
                        </div>
                    </div>
                    <div className='pl-[450px] mt-10 mb-10'>
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