import React from 'react'
import hero_1 from '../assets/patterns/hero-1.png'
import hero_2 from '../assets/patterns/hero-2.png'
import hero_3 from '../assets/patterns/hero-3.png'
import hero_4 from '../assets/patterns/hero-4.png'
import hero_5 from '../assets/patterns/hero-5.png'
import hero_6 from '../assets/patterns/hero-6.png'
import hero_7 from '../assets/patterns/hero-7.png'
import hero_8 from '../assets/patterns/hero-8.png'
import hero_9 from '../assets/patterns/hero-9.png'


const Patterns = () => {

    const blogs = [
        {
            id: 1,
            title: "Animation",
            content: "Animation techniques built using CSS or JavaScript with considerations for accessibility and user preferences.",
            button: "See Patterns",
            img: hero_1,
        },
        {
            id: 2,
            title: "Clipboard",
            content: "Common patterns for dealing with the clipboard.",
            button: "See Patterns",
            img: hero_2,
        },
        {
            id: 3,
            title: "Components",
            content: "Cross-browser UI components for use in accelerating or inspiring your own design systems.",
            button: "See Patterns",
            img: hero_3,
        },
        {
            id: 4,
            title: "Files and directories",
            content: "Common patterns for dealing with files and directories.",
            button: "See Patterns",
            img: hero_4,
        },
        {
            id: 5,
            title: "Layout",
            content: "Layout patterns built using modern CSS APIs that help you build common interfaces such as cards, dynamic grid areas, and full-page layouts.",
            button: "See Patterns",
            img: hero_5,
        },
        {
            id: 6,
            title: "Media",
            content: "Common patterns for working with media.",
            button: "See Patterns",
            img: hero_6,
        },
        {
            id: 7,
            title: "Theming",
            content: "Techniques to assist in managing color throughout your projects.",
            button: "See Patterns",
            img: hero_7,
        },
        {
            id: 8,
            title: "Web apps",
            content: "Common patterns for building web apps.",
            button: "See Patterns",
            img: hero_8,
        },
        {
            id: 9,
            title: "Web Vitals patterns",
            content: "Common patterns optimized for Core Web Vitals, including patterns that are often tricky to implement without hurting your Core Web Vitals scores. You can use the code in these examples to help ensure your projects stay on the right track.",
            button: "See Patterns",
            img: hero_9,
        },

    ]


    return (
        <>
            <div className=' pt-20 lg:pt-48'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-[#202124] dark:text-white '>
                    {
                        blogs.map((blog) => <div className='pl-5 sm:pl-2 '>
                            <div key={blog.id} className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-auto rounded-2xl dark:bg-[#202124] dark:text-white mb-7 '>
                                <div className='rounded-full m-10'>
                                    <a href="#">
                                        <img src={blog.img} alt={blog.id} />
                                    </a>
                                </div>
                                <a href="#" className='hover:underline hover:underline-offset-2 '>
                                    <h3 className=' text-2xl font-extrabold text-black  dark:text-white pl-2'>{blog.title}</h3>
                                </a>
                                <p className='text-lg pl-2  mt-3'>{blog.content}</p>
                                <div className='flex justify-center items-center mt-10'>
                                    <div className='border-[#185abc] text-[#185abc] font-bold border-2 border-solid rounded-3xl flex items-center justify-center w-[250px] h-11 hover:border-black hover:text-black dark:hover:border-soild dark:hover:border-2 dark:hover:border-white dark:hover:text-white'>
                                        <a href='#'>{blog.button}</a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Patterns