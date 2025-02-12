import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Box from '../components/Box';
import Box_1 from '../components/box/Box_1';
import Box_2 from '../components/box/Box_2';
import Box_3 from '../components/box/Box_3';
import Box_4 from '../components/box/Box_4';
import Box_5 from '../components/box/Box_5';
import Contact from '../components/Contact';


// Define the Home component
const Home = () => {
    return (
        <>
            {/* Container for the Guidance Text */}
            <div className='bg-[#001F3F] dark:bg-[#1a73e8] mt-36 dark:mt-32 w-[420px] h-[72px] flex items-center justify-center pl-1
                             sm:w-[640px]
                             md:w-[768px]
                             lg:w-[1045px] 
                             xl:w-[1340px]
                             2xl:w-[1536px]  2xl:justify-items-end '>
                {/* Guidance Text */}
                <p className='text-[#EEEEEE] dark:text-[#FFFFFF] sm:text-lg md:text-xl
                                lg:ml-[-270px] lg:text-2xl
                                xl:ml-[-400px] xl:text-3xl
                                2xl:text-2xl 2xl:justify-items-end'>
                    Guidance to build modern web experiences that work on any browser.
                </p>
            </div>

            {/* Container for All Main Content */}
            <div className='w-[420px] sm:w-[640px] xl:w-[1340px] 2xl:w-[1536px] 2xl:justify-items-start'>
                {/* Render the Banner Component */}
                <Banner />
                {/* Render the Card Component */}
                <Card />
                {/* Render the Box Component */}
                <Box />
                {/* Render the Box_1 Component */}
                <Box_1 />
                {/* Render the Box_2 Component */}
                <Box_2 />
                {/* Render the Box_3 Component */}
                <Box_3 />
                {/* Render the Box_4 Component */}
                <Box_4 />
                {/* Render the Box_5 Component */}
                <Box_5 />
                {/* Render the Contact Component */}
                <Contact />
            </div>
        </>
    );
};

export default Home;