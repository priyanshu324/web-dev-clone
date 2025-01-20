import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import List from '../components/list/List';

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
                {!loading && !error && <List items={data.data || []} />}
            </div>
        </>
    );
};

export default Case;