import React from 'react'

const Box_3 = () => {
  return (
    <>
      <div className=' bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto border-solid border-b-2 dark:bg-[#202124] dark:text-white'>
        <div className='mb-10'>
          <div className='grid grid-cols-1 '>
            <h1 className='text-3xl font-bold pl-5 mt-10'>Progressive Web Apps</h1>
            <p className='text-lg pl-5 mt-5 w-[400px] leading-[30px] font-semibold '>Create capable web experiences.</p>
            <div className='pl-5 mt-5'>
              <div className='border-[#1a73e8] border-2 border-solid rounded-3xl text-[#1a73e8] font-bold hover:text-black dark:hover:text-white  flex items-center justify-center w-[220px] h-11 hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2'>
                <a href='#'>More on PWA</a>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 '>
              <div>
                <a href="#" className='text-3xl font-bold pl-4 sm:w-[300px] lg:mt-[-150px] lg:pl-96 lg:w-[600px] xl:w-auto sm:pl-0 flex mt-10 text-[#1a73e8] hover:underline underline-offset-2 xl:ml-20'>
                  Learn PWA
                </a>
                <p className='text-lg pl-4 mt-5 w-[375px] font-semibold sm:w-[300px] sm:pl-0 lg:pl-96 lg:w-[650px] xl:w-auto xl:ml-20'>A course that breaks down every aspect of modern progressive web app development.</p>
              </div>
              <div>
                <a href="#" className='text-3xl font-bold pl-4 lg:mt-[-150px] lg:pl-80 lg:w-[600px] flex mt-10 sm:w-[300px] xl:w-auto sm:pl-0 text-[#1a73e8] hover:underline underline-offset-2 xl:ml-28'>
                  TransformStream is now supported cross browser.
                </a>
                <p className='text-lg pl-4 mt-5 w-[375px] sm:w-[300px] sm:pl-0 font-semibold lg:pl-80 lg:w-[600px] xl:ml-28 xl:w-auto'>Now that transform streams are supported in Safari, Firefox, and Chrome they are finally ready for prime time.</p>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'>
            <div>
              <a href="#" className='text-3xl pl-4 flex w-[375px] sm:w-[300px] sm:pl-0 font-bold lg:pl-96 lg:w-[600px]  mt-10 text-[#1a73e8] hover:underline underline-offset-2 xl:ml-20 xl:w-auto'>
                New patterns for amazing apps
              </a>
              <p className='text-lg pl-4 mt-5 w-[375px] font-semibold sm:w-[300px] sm:pl-0 lg:pl-96 lg:w-[600px] xl:ml-20 xl:w-auto'>Dive into a fantastic collection of new patterns for amazing apps, including clipboard patterns, file patterns, and advanced app patterns.</p>
            </div>
            <div>
              <a href="#" className='text-3xl pl-4 flex w-[375px] font-bold sm:w-[300px] sm:pl-0 mt-10 lg:pl-96 lg:w-[600px] text-[#1a73e8] hover:underline underline-offset-2 xl:ml-12 xl:w-auto'>
                Project Fugu API showcase
              </a>
              <p className='text-lg mt-5 pl-4 w-[375px] flex font-semibold sm:w-[300px] lg:pl-96 lg:w-[600px] sm:pl-0 xl:ml-12 xl:w-auto'>On the Chrome Developers site, explore capabilities APIs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box_3