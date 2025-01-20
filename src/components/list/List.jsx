import React from 'react';

const List = ({ items }) => {
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

export default List;
