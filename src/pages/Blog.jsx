import React from 'react';
import useFetch from '../hooks/useFetch';
import BlogPosts from '../components/learn_article/html/BlogPosts';


// lsit 1
export const List_1 = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <>

                        {/* Main container for the ai page */}
                        <div className='block bg-[#f5f6f7] dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px]  sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-2 mt-40'>
                            {/* Left section of the banner */}
                            <div>
                                {/* Heading of the section */}
                                <a href="#" className='hover:underline underline-offset-2'>
                                    <h3 className='text-6xl pl-4 mt-5 w-[800px] xl:text-5xl xl:font-bold 2xl:text-6xl'>
                                        {item.title}
                                    </h3>
                                </a>
                                {/* Description of the section */}
                                <p className='text-[25px] w-[350px]  leading-relaxed pl-4 mt-10 lg:w-[600px] xl:w-[750px] 2xl:w-[900px]'>
                                    {item.content}
                                </p>
                            </div>
                            {/* Right section of the banner */}
                            <div className='mt-5'>
                                {/* Image container */}
                                <figure className='bg-none'>
                                    <a href="#">
                                        <picture>
                                            {/* Image */}
                                            <img src={item.imglink} alt={item.title} className=' w-[375px] h-[300px] pl-4 sm:w-[300px] sm:h-[200px] sm:mt-52 sm:ml-5 sm:mr-20 md:ml-28 lg:ml-80 xl:mt-10 xl:ml-[300px] xl:w-[50%] xl:h-[50%]  xl:max-w-auto 2xl:ml-[270px] 2xl:mt-10 2xl:w-[60%] 2xl:h-[60%] ' />
                                        </picture>
                                    </a>
                                </figure>
                            </div>


                        </div>

                    </>
                ))
            }
        </>
    )
}

// list_2
// export const List_2 = ({ items }) => {
//     return (
//         <div>
//             <div>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-[#202124] dark:text-white'>
//                     {items.map((blog) => (
//                         <div key={blog.key} className='pl-5 sm:pl-2 xl:pl-10'>
//                             <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[450px] xl:h-[600px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7'>
//                                 <div className='rounded-full m-10'>
//                                     <a href={blog.url || "#"}>
//                                         <img src={blog.imgurl} alt={blog.title || "No Title Available"} />
//                                     </a>
//                                 </div>
//                                 <a href={blog.url || "#"} className='hover:underline hover:underline-offset-2'>
//                                     <h3 className='text-2xl font-extrabold text-black dark:text-white pl-2'>{blog.title || "Untitled"}</h3>
//                                 </a>
//                                 <p className='text-lg pl-2 mt-3'>{blog.content?.substring(0, 100) || "No content available."}</p>
//                                 <div className='mb-4 mt-5'>
//                                     <div className='flex items-center justify-center gap-11'>
//                                         <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.item}</p>
//                                         <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.category}</p>
//                                         <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.category_1}</p>
//                                         <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.category_2}</p>
//                                     </div>
//                                 </div>

//                                 <div className='border-t-2 border-solid border-[#f5f6f7] dark:border-[#9aa0a6]'></div>
//                                 <div className='font-bold'>
//                                     {blog.author || "Unknown Author"}
//                                     <br />
//                                     {blog.timestamp || "Unknown Date"}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// Blog Component
const Blog = () => {
    // API endpoints
    const api1 = 'http://localhost:1337/api/blog-banners';


    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);


    return (
        <>
            {/* Main container for the blog page */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List component to display blog posts */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}

                <BlogPosts />
            </div>
        </>
    );
};

export default Blog;