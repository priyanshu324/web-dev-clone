import React from 'react'

const Box_1 = () => {
  return (
    <>
      <div className=' bg-[#f5f6f7] w-[381px] border-solid border-b-2 dark:bg-[#202124] dark:text-white dark:border-y-2 dark:border-2 dark:border-[#5f6368]'>
        <div className='mb-10'>
          <div className='grid grid-cols-1 '>
            <div className=''>
              <div>
                <h1 className='text-3xl font-bold pl-5 mt-10'>CSS and UI design</h1>
                <p className='text-lg  mt-5 w-[400px] pl-5 leading-[30px] font-semibold '>Learn the latest tips and techniques to </p>
                <p className='text-lg w-[400px] pl-5 leading-[30px] font-semibold '>use in your work, right now.</p>
                <div className='pl-5 mt-5'>
                  <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2 '>
                    <a href='#'>Explore CSS</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className='text-3xl font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 flex items-center justify-center pl-4'>
                Adapting typography to user preference using CSS
              </a>
              <p className='text-lg w-[375px] pl-4 mt-5 font-semibold '>
                Adapt a font to your users' preferences, so
                they're maximally comfortable reading your content.
              </p>
            </div>
            <div>
              <a href="#" className='text-3xl font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 flex items-center justify-center pl-4'>
                New CSS color spaces and
                functions in all major engines
              </a>
              <p className='text-lg pl-4  mt-5  leading-[30px] font-semibold '>
                All major engines now support the new CSS
                color spaces and functions. Find out how they
                can bring vibrancy to your designs.</p>
            </div>

          </div>
          <div className='grid grid-cols-1'>
            <div className='pl-96'>
            </div>
            <div>
              <div>
                <a href="#" className='text-3xl font-bold mt-10 flex text-[#1a73e8] hover:underline underline-offset-2  pl-4'>
                  What are source maps?
                </a>
                <p className='text-lg pl-4 mt-5 flex  font-semibold '>Improve web debugging experience with source maps.</p>
              </div>
            </div>
            <div>
              <a href="#" className='text-3xl font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 flex pl-4'>
                CSS subgrid
              </a>
              <p className='text-lg mt-5 pl-4 flex font-semibold '>Subgrid is now interoperable across all three major engines. Find out how to use it.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box_1