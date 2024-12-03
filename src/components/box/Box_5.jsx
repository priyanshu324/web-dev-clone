import React from 'react'

const Box_5 = () => {
  return (
    <>
      <div className=' bg-[#f5f6f7] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-auto border-solid border-b-2 dark:bg-[#202124] dark:text-white mb-10'>
        <div className='mb-10'>
          <div className='grid grid-cols-1 '>
            <h1 className='text-3xl font-bold pl-5 mt-10'>Payments and identity</h1>
            <p className='text-lg pl-5 mt-5 w-[375px] sm:w-[640px] md:w-[760px] leading-[30px] font-semibold lg:w-[400px] xl:w-auto'>Find the latest techniques and best practices for payments and helping users safely log into your sites and apps.</p>
            <div className='pl-5 mt-5'>
              <div className='border-[#1a73e8] text-[#1a73e8] font-bold hover:text-black dark:hover:text-white border-2 border-solid rounded-3xl flex items-center justify-center w-[220px] h-11 hover:border-black hover:border-2 hover:border-soild dark:hover:border-white dark:hover:border-solid dark:hover:border-2'>
                <a href='#'>More on identity</a>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2'>
              <div>
                <a href="#" className='text-3xl font-bold pl-4 sm:w-[300px] sm:pl-0 flex mt-10 lg:mt-[-190px] lg:pl-[430px] lg:w-[700px] text-[#1a73e8] hover:underline underline-offset-2 xl:w-auto xl:ml-20'>
                  Create a passkey for passwordless logins
                </a>
                <p className='text-lg pl-4 mt-5 w-[375px] font-semibold sm:w-[300px] sm:pl-0 lg:pl-[430px] lg:w-[700px] xl:ml-20 xl:w-auto'>Passkeys make user accounts safer, simpler, easier to use.</p>
              </div>
              <div>
                <a href="#" className='text-3xl font-bold pl-4 flex mt-10 sm:w-[300px] sm:pl-0 lg:mt-[-190px] lg:pl-52 lg:w-[500px] text-[#1a73e8] hover:underline underline-offset-2 xl:w-auto xl:ml-20'>
                  Sign in with a passkey
                </a>
                <p className='text-lg pl-4 mt-5 w-[375px] font-semibold sm:w-[300px] sm:pl-0  lg:pl-52 lg:w-[500px] xl:ml-20 xl:w-auto'>Create a sign in experience that uses passkeys while still accommodating existing password users.</p>
              </div>

            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2'>
            <div>
              <a href="#">
                <h1 className='text-3xl pl-4 font-bold  mt-10 text-[#1a73e8] sm:w-[300px] lg:pl-[430px] lg:w-[700px] sm:pl-0 hover:underline underline-offset-2 xl:ml-20 xl:w-auto'>Web payments overview</h1>
              </a>
              <p className='text-lg pl-4 mt-5 w-[375px] font-semibold sm:w-[300px] lg:pl-[430px] lg:w-[700px] sm:pl-0 xl:ml-20 xl:w-auto'>Learn more about Web Payments and how they work.</p>
            </div>
            <div>
              <a href="#" className='text-3xl pl-4 flex font-bold mt-10 sm:w-[300px] sm:pl-0 lg:pl-52 lg:w-[500px] text-[#1a73e8] hover:underline underline-offset-2 xl:ml-20 xl:w-auto'>
                Payment and address form best practices
              </a>
              <p className='text-lg mt-5 pl-4 w-[375px] sm:w-[300px] sm:pl-0 font-semibold lg:pl-52 lg:w-[500px] xl:ml-20 xl:w-auto'>Maximize conversions by helping your users complete address and payment forms as quickly and easily as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box_5