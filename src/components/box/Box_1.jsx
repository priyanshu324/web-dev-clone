import React from 'react'

const Box_1 = () => {
  return (
    <>
      <div className=' bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto border-solid border-b-2 dark:bg-[#202124] dark:text-white dark:border-y-2 dark:border-2 dark:border-[#5f6368]'>
        <div className='mb-10'>
          <div className='grid grid-cols-1 lg:grid lg:grid-cols-3'>
            <div>
              <div>
                <h1 className='text-3xl font-bold pl-5 mt-10'>CSS and UI design</h1>
                <p className='text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5 xl:w-auto leading-[30px] font-semibold '>Learn the latest tips and techniques to use in your work, right now.</p>
                <div className='pl-5 mt-5'>
                  <div className='border-[#1a73e8] border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 text-[#1a73e8] font-bold hover:text-black dark:hover:text-white hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2 '>
                    <a href='#'>Explore CSS</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
            <div className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2'>
              <div>
                <a href="#" className='text-3xl lg:text-xl font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 flex items-center justify-center pl-4 sm:pl-0 lg:pl-10 lg:w-[400px] xl:pl-20'>
                  Adapting typography to user preference using CSS
                </a>
                <p className='text-lg w-[375px] sm:w-[300px] xl:w-auto pl-4 mt-5 font-semibold md:pl-0 lg:pl-10 lg:w-[350px] xl:pl-20'>
                  Adapt a font to your users preferences, so
                  they're maximally comfortable reading your content.
                </p>
              </div>
              <div>
                <a href="#" className='text-3xl lg:w-[500px] lg:pl-48 lg:text-xl xl:w-auto md:pl-0 font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 flex items-center justify-center pl-4 sm:pl-2 xl:ml-20'>
                  New CSS color spaces and
                  functions in all major engines
                </a>
                <p className='text-lg pl-4 sm:pl-2 mt-5 md:pl-0 lg:pl-48 lg:w-[500px] leading-[30px] font-semibold xl:ml-20 xl:w-auto'>
                  All major engines now support the new CSS
                  color spaces and functions. Find out how they
                  can bring vibrancy to your designs.</p>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2'>
            <div>
              <div>
                <a href="#" className='text-3xl lg:text-xl lg:pl-96 lg:w-[600px] xl:w-auto xl:pl-[480px]  font-bold mt-10 flex md:pl-0 text-[#1a73e8] hover:underline underline-offset-2  pl-4 xl:ml-28'>
                  What are source maps?
                </a>
                <p className='text-lg pl-4 mt-5 flex lg:text-lg lg:pl-96 lg:w-[630px] xl:w-auto xl:pl-[480px] font-semibold md:pl-0 xl:ml-28'>Improve web debugging experience with source maps.</p>
              </div>
            </div>
            <div>
              <a href="#" className='text-3xl lg:text-xl lg:pl-48 xl:w-auto font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2 flex pl-4 md:pl-0 xl:ml-20'>
                CSS subgrid
              </a>
              <p className='text-lg mt-5 pl-4 flex font-semibold lg:pl-48 md:pl-0 lg:w-[500px] xl:ml-20 xl:w-auto'>Subgrid is now interoperable across all three major engines. Find out how to use it.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box_1