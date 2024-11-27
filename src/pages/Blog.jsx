import React from 'react'
import hero_1 from '../assets/blog/hero-1.png'
import hero_2 from '../assets/blog/hero-2.png'
import hero_3 from '../assets/blog/hero-3.png'
import hero_4 from '../assets/blog/hero-4.png'
import hero_5 from '../assets/blog/hero-5.png'
import hero_6 from '../assets/blog/hero-6.png'
import hero_7 from '../assets/blog/hero-7.png'
import hero_8 from '../assets/blog/hero-8.png'
import hero_9 from '../assets/blog/hero-9.png'
import hero_10 from '../assets/blog/hero-10.png'
import hero_11 from '../assets/blog/hero-11.png'
import hero_12 from '../assets/blog/hero-12.png'
import hero_13 from '../assets/blog/hero-13.png'
import hero_14 from '../assets/blog/hero-14.png'
import hero_15 from '../assets/blog/hero-15.png'
import hero_16 from '../assets/blog/hero-16.png'
import hero_17 from '../assets/blog/hero-17.png'
import hero_18 from '../assets/blog/hero-18.png'
import hero_19 from '../assets/blog/hero-19.png'
import hero_20 from '../assets/blog/hero-20.png'
import hero_21 from '../assets/blog/hero-21.png'
import hero_22 from '../assets/blog/hero-22.png'
import hero_23 from '../assets/blog/hero-23.png'
import hero_24 from '../assets/blog/hero-24.png'
import hero_25 from '../assets/blog/hero-25.png'
import hero_26 from '../assets/blog/hero-26.png'
import hero_27 from '../assets/blog/hero-27.png'
import hero_28 from '../assets/blog/hero-28.png'
import hero_29 from '../assets/blog/hero-29.png'
import hero_30 from '../assets/blog/hero-30.png'


const Blog = () => {

    const blogs = [
        {
            id: 1,
            title: "New to the web platform in October",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during October 2024.",
            item: "New to the web platform",
            category: "Blog",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_1,
        },
        {
            id: 2,
            title: "The CSS content-visibility property is now Baseline Newly available",
            content: "The CSS content-visibility property is now Baseline Newly available.",
            item: "Baseline 2024",
            category: "Blog",
            category_1: "CSS",
            author: "Jeremy Wagner",
            time_stamp: "October 30, 2024",
            img: hero_2,
        },
        {
            id: 3,
            title: "Show Baseline status on your blog posts and presentations",
            content: "Learn how to use the Baseline Status web component or logos to show the Baseline status of features.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "HTML",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_3,
        },
        {
            id: 4,
            title: "CSS nesting improves with CSSNestedDeclarations",
            content: "CSS nesting is getting a whole lot better!",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            category_2: "JavaScript",
            author: "Bramus",
            time_stamp: "October 30, 2024",
            img: hero_4,
        },
        {
            id: 5,
            title: "Benchmarking the performance of CSS @property",
            content: "What impact does @property have on the performance of your CSS?",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            category_2: "JavaScript",
            author: "Bramus",
            time_stamp: "October 30, 2024",
            img: hero_5,
        },
        {
            id: 6,
            title: "New to the web platform in September",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during September 2024.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_6,
        },
        {
            id: 7,
            title: "Submit your proposals for Interop 2025",
            content: "It's time to share your proposals for features to consider for inclusion in Interop 2025.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_7,
        },
        {
            id: 8,
            title: "Build responsible web experiences with generative AI",
            content: "Best practices to create responsibly with generative AI.",
            item: "New to the web platform",
            category: "Blog",
            author: "alexandrawhite",
            time_stamp: "October 30, 2024",
            img: hero_8,
        },
        {
            id: 9,
            title: "Chrome ends support for First Input Delay",
            content: "The Chrome team officially ends support for First Input Delay",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rick Viscomi",
            time_stamp: "October 30, 2024",
            img: hero_9,
        },
        {
            id: 10,
            title: "Passkeys hackathon in Tokyo: Passkeys on IoT devices and more",
            content: "Published: September 9, 2024 In June 2024, Google teamed up with the FIDO Alliance to host a passkey hackathon in Tokyo. The aim was to give participants...",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "mihajlija",
            time_stamp: "October 30, 2024",
            img: hero_10,
        },
        {
            id: 11,
            title: "Tell us how you use CSS with the State of CSS survey",
            content: "The State of CSS 2024 survey is now live! We'd love you to take the survey, and this post explains how we use the results and why we think it's important that as many...",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "rachelandrew",
            time_stamp: "October 30, 2024",
            img: hero_11,
        },
        {
            id: 12,
            title: "New to the web platform in August",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during August 2024.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_12,
        },
        {
            id: 13,
            title: "Common misconceptions about how to optimize LCP",
            content: "Explore common misconceptions about optimizing Largest Contentful Paint (LCP) by looking beyond image optimization and considering factors like Time to First Byte..",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Brendan Kenny",
            time_stamp: "October 30, 2024",
            img: hero_13,
        },
        {
            id: 14,
            title: "Now in Baseline: animating entry effects",
            content: "Improve the legibility of text when using fallback fonts.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Una Kravets",
            time_stamp: "October 30, 2024",
            img: hero_14,
        },
        {
            id: 15,
            title: "Interop 2024: Chrome at 100% for the accessibility focus area",
            content: "Chrome now passes 100% of tests for the accessibility focus area. This post explains the improvements made.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_15,
        },

        {
            id: 16,
            title: "New to the web platform in July",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during July 2024.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Philip Walton",
            time_stamp: "October 30, 2024",
            img: hero_16,
        },
        {
            id: 17,
            title: "How to use container queries now",
            content: "A step-by-step guide showing how to use container queries with cross-browser fallbacks.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_17,
        },
        {
            id: 18,
            title: "CSS font-size-adjust is now in Baseline",
            content: "Improve the legibility of text when using fallback fonts.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Una Kravets",
            time_stamp: "October 30, 2024",
            img: hero_18,
        },
        {
            id: 19,
            title: "@property: Next-gen CSS variables now with universal browser support",
            content: "Semantic custom properties with @property just reached Baseline newly available.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_19,
        },
        {
            id: 20,
            title: "Interop 2024 mid-year update",
            content: "An update on the progress of Interop 2024, as browser vendors work together to make the web more interoperable.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Adriana Jara",
            time_stamp: "October 30, 2024",
            img: hero_20,
        },
        {
            id: 21,
            title: "The JavaScript Set methods are now part of Baseline",
            content: "JavaScript set methods like union and intersection are now interoperable, making set operations easier.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_21,
        },
        {
            id: 22,
            title: "New to the web platform in June",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during June 2024.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_22,
        },
        {
            id: 23,
            title: "New to the web platform in May",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during May 2024.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_23,
        },
        {
            id: 24,
            title: "What's new in the web",
            content: "What's new in Baseline this year, and about the new tools to help you make better use of Baseline.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_24,
        },
        {
            id: 25,
            title: "The CSS stepped value math functions are now in Baseline 2024",
            content: "The CSS math functions rem(), mod(), and round() are now interoperable.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_25,
        },
        {
            id: 26,
            title: "The Screen Wake Lock API is now supported in all browsers",
            content: "The Screen Wake Lock API has officially landed in all major browsers—Chrome, Safari, and Firefox.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_26,
        },
        {
            id: 27,
            title: "Baseline integration with RUM Archive and RUMvision",
            content: "Learn how many of your users have browser versions included in your selected version of Baseline.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_27,
        },
        {
            id: 28,
            title: "Helping you select a passkey library ",
            content: "Helping you select a passkey library",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_28,
        },
        {
            id: 29,
            title: "Announcing the Web Platform Dashboard",
            content: "Discover a new way to view the web platform.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_29,
        },
        {
            id: 30,
            title: "New to the web platform in April",
            content: "Discover some of the interesting features that have landed in stable and beta web browsers during April 2024.",
            item: "New to the web platform",
            category: "Blog",
            category_1: "CSS",
            author: "Rachel Andrew",
            time_stamp: "October 30, 2024",
            img: hero_30,
        },

    ]



    return (
        <>
            <div className='mt-10'>

                <div className='grid grid-cols-2 bg-[#f5f6f7] pb-10 dark:bg-[#202124] dark:text-white'>
                    <div>
                        <a href="#" className='hover:underline underline-offset-2'> <h3 className='text-7xl pl-28 mt-20 w-[800px]' >Blog</h3></a>
                        <p className='text-[25px] leading-relaxed pl-28 mt-10 w-[1250px]'>Our latest news, updates, and stories for developers</p>
                    </div>
                    <div className='mb-12'>
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/blog-header.png" alt="peroid" className=' max-w-[600px] max-h-[200px]  mt-36 ml-[450px]' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-3  bg-white dark:bg-[#202124] dark:text-white '>
                        {
                            blogs.map((blog) => <div>
                                <div key={blog.id} className=' border-[#f5f6f7] border-2 border-solid w-[550px] h-[670px] mb-7 rounded-2xl dark:bg-[#202124] dark:text-white '>
                                    <div className='rounded-full m-10'>
                                        <a href="#">
                                            <img src={blog.img} alt={blog.id} />
                                        </a>
                                    </div>
                                    <a href="#" className='hover:underline hover:underline-offset-2'>
                                        <h3 className=' text-2xl font-extrabold text-black w-[540px] pl-16 dark:text-white'>{blog.title}</h3>
                                    </a>
                                    <p className='text-lg w-[500px] ml-14 mt-3'>{blog.content}</p>
                                    <div className='mb-4 mt-5'>
                                        <div className='flex items-center justify-center gap-11'>
                                            <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6] max-w-[850px]'>{blog.item}</p>
                                            <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6] max-w-[850px]'>{blog.category}</p>
                                            <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6] max-w-[850px]'>{blog.category_1}</p>
                                            <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6] max-w-[850px]'>{blog.category_2}</p>
                                        </div>
                                    </div>

                                    <div className='border-t-2 border-solid border-[#f5f6f7] dark:border-[#9aa0a6] w-[440px] ml-10'> </div>
                                    <div className='pl-96 font-bold'>
                                        {blog.author}
                                        <br />
                                        {blog.time_stamp}
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

export default Blog