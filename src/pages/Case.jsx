import React from 'react';
import useFetch from '../hooks/useFetch';


export const List_1 = ({ items }) => {
    return (
        <div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-[#202124] dark:text-white'>
                    {items.map((blog) => (
                        <div key={blog.key} className='pl-5 sm:pl-2 xl:pl-10'>
                            <div className='bg-[#f5f6f7] border-[#858686] border-2 border-solid w-[375px] h-[550px] sm:w-[300px] md:w-[375px] lg:w-[300px] xl:w-[450px] xl:h-[600px] rounded-2xl dark:bg-[#202124] dark:text-white mb-7'>
                                <div className='rounded-full m-10'>
                                    <a href={blog.url || "#"}>
                                        <img src={blog.imgurl} alt={blog.title || "No Title Available"} />
                                    </a>
                                </div>
                                <a href={blog.url || "#"} className='hover:underline hover:underline-offset-2'>
                                    <h3 className='text-2xl font-extrabold text-black dark:text-white pl-2'>{blog.title || "Untitled"}</h3>
                                </a>
                                <p className='text-lg pl-2 mt-3'>{blog.content?.substring(0, 100) || "No content available."}</p>
                                <div className='mb-4 mt-5'>
                                    <div className='flex items-center justify-center gap-11'>
                                        <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.item}</p>
                                        <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.category}</p>
                                        <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.category_1}</p>
                                        <p className='bg-[#f5f6f7] dark:bg-[#202124] dark:text-[#9aa0a6]'>{blog.category_2}</p>
                                    </div>
                                </div>

                                <div className='border-t-2 border-solid border-[#f5f6f7] dark:border-[#9aa0a6]'></div>
                                <div className='font-bold'>
                                    {blog.author || "Unknown Author"}
                                    <br />
                                    {blog.timestamp || "Unknown Date"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
// Case Component
const Case = () => {
    // Fetch data using custom hook
    const { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*');

    return (
        <>
            {/* Main container for the Case studies page */}
            <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
                {/* Banner section */}
                <div className='grid grid-cols-1 bg-[#f5f6f7] mb-10 dark:bg-[#202124] dark:text-white w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1380px] 2xl:w-[1536px] sm:grid sm:grid-cols-2 pb-10'>
                    {/* Left section of the banner */}
                    <div>
                        {/* Heading of the banner */}
                        <a href="#" className='hover:underline underline-offset-2'>
                            <h3 className='text-7xl mt-20 pl-5 2xl:text-7xl'>Case studies</h3>
                        </a>
                        {/* Description of the banner */}
                        <p className='text-2xl leading-relaxed mt-10 pl-5 lg:w-[650px] xl:w-auto 2xl:text-2xl 2xl:w-[800px]'>
                            Learn why and how other developers have used the web to create amazing web experiences for their users.
                        </p>
                    </div>
                    {/* Right section of the banner */}
                    <div className='mb-12'>
                        {/* Image of the banner */}
                        <figure className='bg-none'>
                            <a href="#">
                                <picture>
                                    <img src="../src/assets/case/case-studies-header.png" alt="peroid" className='max-w-[600px] max-h-[200px] mt-20 pl-0 sm:pl-3 sm:mt-56 md:pl-14 lg:mt-36 lg:pl-36 2xl:max-w-[800px] 2xl:max-h-[300px]' />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
                {/* Data loading and error handling */}
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {/* List component to display blog posts */}
                {!loading && !error && <List_1 items={data.data || []} />}
            </div>
        </>
    );
};

export default Case;