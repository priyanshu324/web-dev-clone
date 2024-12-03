import React from 'react'
import hero_1 from '../assets/learn/card-1.png';
import hero_2 from '../assets/learn/card-2.png';
import hero_3 from '../assets/learn/card-3.png';
import hero_4 from '../assets/learn/card-4.png';
import hero_5 from '../assets/learn/card-5.png';
import hero_6 from '../assets/learn/card-6.png';
import hero_7 from '../assets/learn/card-7.png';
import hero_8 from '../assets/learn/card-8.png';
import hero_9 from '../assets/learn/card-9.png';
import hero_10 from '../assets/learn/card-10.png';
import hero_11 from '../assets/learn/card-11.png';


const Learn = () => {
    const blogs = [
        {
            id: 1,
            title: "Learn HTML",
            content: "A solid overview of HTML for developers, from novice to expert level HTML.",
            item: "Course",
            button: "Start Course",
            img: hero_1,
        },
        {
            id: 2,
            title: "Learn CSS",
            content: "A guide to CSS with modules covering everything from accessibility to z-index.",
            item: "Course",
            button: "Start Course",
            img: hero_2,
        },
        {
            id: 3,
            title: "Learn JavaScript",
            content: "An in-depth course on the basics of JavaScript.",
            item: "Course",
            button: "Start Course",
            img: hero_3,
        },
        {
            id: 4,
            title: "Learn Performance",
            content: "A course for those new to web performance, a vital aspect of the user experience.",
            item: "Course",
            button: "Start Course",
            img: hero_4,
        },
        {
            id: 5,
            title: "Learn Privacy",
            content: "A course to help you build more privacy-preserving websites.",
            item: "Course",
            button: "Start Course",
            img: hero_5,
        },
        {
            id: 6,
            title: "Learn Accessibility",
            content: "Discover how to make your websites and web apps more accessible.",
            item: "Course",
            button: "Start Course",
            img: hero_6,
        },
        {
            id: 7,
            title: "Learn Images",
            content: "A course covering everything from selecting the right formats, to responsive images, and performance.",
            item: "Course",
            button: "Start Course",
            img: hero_7,
        },
        {
            id: 8,
            title: "Learn Design",
            content: "Let's explore all aspects of responsive design, learning how to make sites that look great and work well for everyone.",
            item: "Course",
            button: "Start Course",
            img: hero_8,
        },
        {
            id: 9,
            title: "Learn Forms",
            content: "A course about HTML forms to help you improve your web developer expertise.",
            item: "Course",
            button: "Start Course",
            img: hero_9,
        },
        {
            id: 10,
            title: "Learn PWA",
            content: "A course that breaks down every aspect of modern progressive web app development.",
            item: "Course",
            button: "Start Course",
            img: hero_10,
        },
        {
            id: 11,
            title: "Learn Testing",
            content: "An in-depth course on software testing.",
            item: "Course",
            button: "Start Course",
            img: hero_11,
        },


    ]


    return (
        <>
            <div className='mt-20'>
                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto sm:grid sm:grid-cols-2 pb-10'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-6xl  mt-20 pl-5' >Learn web development</h3></a>
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[690px]'>Explore our growing collection of courses on key web design and development subjects. An industry expert has written each course, helped by members of the Chrome team. Follow the modules sequentially, or dip into the topics you most want to learn about.</p>
                    </div>
                    <div className=''>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/learn/learn-header.png" alt="peroid" className=' max-w-[600px] max-h-[200px] mt-20 pl-5 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className=''>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white   dark:text-white'>
                        {
                            blogs.map((blog) => <div className='pl-5 sm:pl-2 '>
                                <div key={blog.id} className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-auto rounded-2xl dark:bg-[#202124] dark:text-white mb-7 '>
                                    <div className='rounded-full m-10'>
                                        <a href="#">
                                            <img src={blog.img} alt={blog.id} />
                                        </a>
                                    </div>
                                    <div className='mb-4 mt-5'>
                                        <div className='flex items-center justify-center '>
                                            <p className='font-bold text-2xl dark:text-white'>{blog.item}</p>
                                        </div>
                                    </div>
                                    <a href="#" className='hover:underline hover:underline-offset-2'>
                                        <h3 className=' text-2xl font-extrabold text-black flex items-center justify-center dark:text-white'>{blog.title}</h3>
                                    </a>
                                    <p className='text-lg pl-5 mt-3'>{blog.content}</p>

                                    <div className='flex items-center justify-center mt-5'>
                                        <div className='border-[#1a73e8] cursor-pointer text-[#1a73e8] font-bold hover:text-black border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
                                            <a href="#">
                                                {blog.button}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learn