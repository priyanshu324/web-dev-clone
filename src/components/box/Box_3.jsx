import React from 'react'

const Box_3 = () => {
  return (
    <>
      <div className=' bg-[#f5f6f7] w-[381px] border-solid border-b-2 dark:bg-[#202124] dark:text-white'>
        <div className='mb-10'>
          <div className='grid grid-cols-1 '>
            <h1 className='text-3xl font-bold pl-5 mt-10'>Progressive Web Apps</h1>
            <p className='text-lg pl-5 mt-5 w-[400px] leading-[30px] font-semibold '>Create capable web experiences.</p>
            <div className='pl-5 mt-5'>
              <div className='border-[#1a73e8] border-2 border-solid rounded-3xl text-[#1a73e8] font-bold hover:text-black dark:hover:text-white  flex items-center justify-center w-[220px] h-11 hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2'>
                <a href='#'>More on PWA</a>
              </div>
            </div>
            <div>
              <a href="#" className='text-3xl font-bold pl-4 flex mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                Learn PWA
              </a>
              <p className='text-lg pl-4 mt-5 w-[375px] font-semibold '>A course that breaks down every aspect of modern progressive web app development.</p>
            </div>
            <div>
              <a href="#" className='text-3xl font-bold pl-4 flex mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                TransformStream is now supported cross browser.
              </a>
              <p className='text-lg pl-4 mt-5 w-[375px]  font-semibold '>Now that transform streams are supported in Safari, Firefox, and Chrome they are finally ready for prime time.</p>
            </div>

          </div>
          <div className='grid grid-cols-1'>
            <div>
              <a href="#" className='text-3xl pl-4 flex w-[375px] font-bold  mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                New patterns for amazing apps
              </a>
              <p className='text-lg pl-4 mt-5 w-[375px] font-semibold '>Dive into a fantastic collection of new patterns for amazing apps, including clipboard patterns, file patterns, and advanced app patterns.</p>
            </div>
            <div>
              <a href="#" className='text-3xl pl-4 flex w-[375px] font-bold mt-10 text-[#1a73e8] hover:underline underline-offset-2'>
                Project Fugu API showcase
              </a>
              <p className='text-lg mt-5 pl-4 w-[375px] flex font-semibold '>On the Chrome Developers site, explore capabilities APIs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box_3