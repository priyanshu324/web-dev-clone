import React, { useState } from 'react'
import Learn_navbar from './Learn_navbar'
import useFetch from '../../hooks/useFetch';
import AccordionList from './AccordionList';
import Progress from './Progress';


// List_1 Component
export const List_1 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            <div className='bg-[#1a73e8] w-full '>
                {
                    items.map((item) => (
                        <div key={item.key} className='pt-10 mt-0  pb-10'>
                            <div className='flex gap-4 ml-32'>
                                <h1 className='text-7xl font-bold text-white '>
                                    {item.title}
                                </h1>
                                <button>
                                    <div className='material-logo-icon border-2 border-[#5f6368] '>
                                        {item.icons}
                                    </div>
                                </button>
                            </div>

                            <p className='text-xl text-white ml-32 mt-5'>
                                {item.content}
                            </p>
                            <p className='text-xl text-white ml-32 mt-5'>
                                {item.activities}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};



const Accessibility = () => {
    // Fetch data using custom hook
    const api1 = 'http://localhost:1337/api/learn-row-banner-1s';
    const api2 = 'http://localhost:1337/api/learn-accessibility-items';

    // Fetch data using custom hook
    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    const { data: data2, loading: loading2, error: error2 } = useFetch(api2);


    return (
        <div className="mt-20 bg-[#1a73e8] dark:bg-[#1a73e8] text-white">
            <Learn_navbar />
            <div className=" px-4 py-10">
                <div className='flex flex-col md:flex-row items-center  justify-between'>
                    <div className="md:w-1/2">
                        {/* Data loading and error handling */}
                        {loading1 && <p>Loading...</p>}
                        {error1 && <p className="text-red-500">{error1}</p>}
                        {/* List component to display the courses */}
                        {!loading1 && !error1 && <List_1 items={data1?.data || []} />}
                    </div>
                    <Progress />
                </div>
            </div>
            {/* Data loading and error handling */}
            {loading2 && <p>Loading...</p>}
            {error2 && <p className="text-red-500">{error2}</p>}
            {/* List component to display the courses */}
            {!loading2 && !error2 && <AccordionList items={data2?.data || []} />}
        </div>
    );
};

export default Accessibility