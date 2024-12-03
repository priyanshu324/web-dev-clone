import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Box from '../components/Box'
import Box_1 from '../components/box/Box_1'
import Box_2 from '../components/box/Box_2'
import Box_3 from '../components/box/Box_3'
import Box_4 from '../components/box/Box_4'
import Box_5 from '../components/box/Box_5'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <>
            <div className='bg-[#1a73e8] mt-24 w-[420px] h-[72px] flex items-center justify-center pl-1 sm:w-[640px] md:w-[768px] lg:w-[1045px] lg:mt-36 xl:w-auto'>
                <p className='text-white sm:text-lg md:text-xl lg:ml-[-270px] xl:ml-[-320px] lg:text-2xl xl:text-3xl '>Guidance to build modern web experiences that work on any browser.</p>
            </div>
            <div className='w-[420px] sm:w-[640px] xl:w-auto'>
                <Banner />
                <Card />
                <Box />
                <Box_1 />
                <Box_2 />
                <Box_3 />
                <Box_4 />
                <Box_5 />
                <Contact />
            </div>
        </>
    )
}

export default Home