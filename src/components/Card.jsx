import React from 'react'

const Card = () => {

    const cardItems = [
        {
            id: 1,
            img: "../src/assets/ai-feature_480.png",
            title: "AI and the web",
            description: "Discover resources created to help you understand and build performant, web-first experiences with AI.",

        }, {
            id: 2,
            img: "../src/assets/baseline-feature.png",
            title: "Baseline",
            description: "Baseline helps you to understand which web platform features are ready to use in your projects today.",

        }, {
            id: 3,
            img: "../src/assets/inp-cwv_480.png",
            title: "Measure interaction responsiveness",
            description: "Start measuring and optimizing your site's Interaction to Next Paint (INP) performance. It officially became a Core Web Vital metric on March 12.",

        },
    ]
    return (
        <>
            <div className='bg-[#f5f6f7] w-[375px] grid grid-cols-1 dark:bg-[#202124] dark:text-white mt-[-50px] pb-20'>
                {
                    cardItems.map(({ id, img, title, description }) => <div className='pl-4 '>
                        <div key={id} className='bg-white border-white border-2 border-solid w-[350px] h-[600px] mt-10 mb-10 rounded-2xl dark:bg-[#202124]'>
                            <img src={img} alt={title} className='p-10 rounded-[50px]' />
                            <h3 className='mt-[-20px] pl-14 text-4xl font-bold'>{title}</h3>
                            <p className='text-lg w-[355px] pl-10 mt-3'>{description}</p>
                            <div className='pl-28 mt-5'>
                                <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:border-black  hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-2 dark:hover:border-solid'>
                                    <button className='text-[#1a73e8] font-bold hover:text-black dark:hover:text-white'>Learn More..</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default Card