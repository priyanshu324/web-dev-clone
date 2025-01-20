import React from 'react'
import useFetch from '../../hooks/useFetch';

export const List_1 = ({ items }) => {
  return (
    <>
      {
        items.map((item) => (
          <>

            {/* Main container for the ai page */}
            <div className='block bg-[#f5f6f7] dark:bg-[#202124] dark:text-white pb-20 dark:mt-[-20px]  sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-2 mt-40'>
              {/* Left section of the banner */}
              <div>
                {/* Heading of the section */}
                <a href="#" className='hover:underline underline-offset-2'>
                  <h3 className='text-6xl pl-4 mt-5 w-[800px] xl:text-5xl xl:font-bold 2xl:text-6xl'>
                    {item.title}
                  </h3>
                </a>
                {/* Description of the section */}
                <p className='text-[25px] w-[350px]  leading-relaxed pl-4 mt-10 lg:w-[600px] xl:w-[750px] 2xl:w-[900px]'>
                  {item.content}
                </p>
              </div>
              {/* Right section of the banner */}
              <div className='mt-5'>
                {/* Image container */}
                <figure className='bg-none'>
                  <a href="#">
                    <picture>
                      {/* Image */}
                      <img src={item.imglink} alt={item.title} className=' w-[375px] h-[300px] pl-4 sm:w-[300px] sm:h-[200px] sm:mt-52 sm:ml-5 sm:mr-20 md:ml-28 lg:ml-80 xl:mt-10 xl:ml-[300px] xl:w-[50%] xl:h-[50%]  xl:max-w-auto 2xl:ml-[270px] 2xl:mt-10 2xl:w-[60%] 2xl:h-[60%] ' />
                    </picture>
                  </a>
                </figure>
              </div>


            </div>

          </>
        ))
      }
    </>
  )
}


// list 2
export const List_2 = ({ items }) => {
  return (
    <>
      <div>
        {/* Map through the items array */}
        {
          items.map((item) => (
            // Main container for each list item
            <div key={item.key}>
              {/* Title of the list item */}
              <h1 className='text-3xl font-bold pl-5  2xl:text-6xl'>
                {item.title}
              </h1>
              {/* Content of the list item */}
              <p className='text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5  leading-[30px] font-semibold 2xl:text-lg 2xl:w-[450px]'>
                {item.content}
              </p>

            </div>
          ))
        }
      </div>
    </>


  );
};

// list 3

export const List_3 = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5 px-4">
      {items.map((item, index) => (
        <div key={index} className="mb-5">
          <h1 className="text-4xl font-semibold mb-4 dark:text-white pl-4">
            {item.title}
          </h1>
          <div className="flex flex-col mt-2 pl-4">
            {item.link_1 && (
              <a
                href="#"
                className="text-lg mt-2 hover:underline hover:underline-offset-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_1}
              </a>
            )}
            {item.link_2 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_2}
              </a>
            )}
            {item.link_3 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_3}
              </a>
            )}
            {item.link_4 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_4}
              </a>
            )}
            {item.link_5 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_5}
              </a>
            )}
            {item.link_6 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_6}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


// list 4
export const List_4 = ({ items }) => {
  return (
    <>
      <div>
        {/* Map through the items array */}
        {
          items.map((item) => (
            // Main container for each list item
            <div key={item.key}>
              {/* Title of the list item */}
              <h1 className='text-3xl font-bold pl-5  2xl:text-6xl mt-[-270px]'>
                {item.title}
              </h1>
              {/* Content of the list item */}
              <p className='text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5  leading-[30px] font-semibold 2xl:text-lg 2xl:w-[450px]'>
                {item.content}
              </p>

            </div>
          ))
        }
      </div>
    </>


  );
};

// list 5

export const List_5 = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5 px-4">
      {items.map((item, index) => (
        <div key={index} className="mb-5">
          <h1 className="text-4xl font-semibold mb-4 dark:text-white pl-4">
            {item.title}
          </h1>
          <div className="flex flex-col mt-2 pl-4">
            {item.link_1 && (
              <a
                href="#"
                className="text-lg mt-2 hover:underline hover:underline-offset-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_1}
              </a>
            )}
            {item.link_2 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_2}
              </a>
            )}
            {item.link_3 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_3}
              </a>
            )}
            {item.link_4 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_4}
              </a>
            )}
            {item.link_5 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_5}
              </a>
            )}
            {item.link_6 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_6}
              </a>
            )}
            {item.link_7 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_7}
              </a>
            )}


          </div>
        </div>
      ))}
    </div>
  );
};

// list 6
export const List_6 = ({ items }) => {
  return (
    <div className='bg-[#F5F6F7] grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4'>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <h1 className='text-3xl font-bold mb-4 pl-8 dark:text-black'>
            {item.title}
          </h1>
          <p className='text-xl pl-8 dark:text-black leading-relaxed'>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

// lsit 7
export const List_7 = ({ items }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
      {items.map((item, index) => (
        <div key={index} className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
          <h1 className='text-2xl font-bold mb-2 text-blue-500 hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
            <a href="#">

              {item.title}
            </a>
          </h1>
          <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
            {item.content}
          </p>

          <div className='ml-20'>
            {item.button && (
              <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[200px]   font-medium'>
                <a
                  href='#'
                >
                  {item.button}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
// list 8
export const List_8 = ({ items }) => {
  return (
    <div className='bg-[#F5F6F7] grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4'>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <h1 className='text-3xl font-bold mb-4 pl-8 dark:text-black'>
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

// list 9
export const List_9 = ({ items }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
      {items.map((item, index) => (
        <div key={index} className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
          <h1 className='text-2xl font-bold mb-2 text-blue-500 hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center'>
            <a href="#">

              {item.title}
            </a>
          </h1>
          <p className='text-base leading-relaxed mb-4 dark:text-gray-300'>
            {item.content}
          </p>

          <div className='ml-20'>
            {item.button && (
              <div className='mt-4 flex items-center justify-center rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4 w-[200px]   font-medium'>
                <a
                  href='#'
                >
                  {item.button}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


// list 10
export const List_10 = ({ items }) => {
  return (
    <>
      <div>
        {/* Map through the items array */}
        {
          items.map((item) => (
            // Main container for each list item
            <div key={item.key}>
              {/* Title of the list item */}
              <h1 className='text-3xl font-bold pl-5  2xl:text-6xl'>
                {item.title}
              </h1>
              {/* Content of the list item */}
              <p className='text-lg  mt-5 w-[400px] sm:w-[640px] lg:w-[220px] pl-5  leading-[30px] font-semibold 2xl:text-lg 2xl:w-[450px]'>
                {item.content}
              </p>

            </div>
          ))
        }
      </div>
    </>


  );
};

// list 11

export const List_11 = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5 px-4">
      {items.map((item, index) => (
        <div key={index} className="mb-5">
          <h1 className="text-4xl font-semibold mb-4 dark:text-white pl-4">
            {item.title}
          </h1>
          <div className="flex flex-col mt-2 pl-4">
            {item.link_1 && (
              <a
                href="#"
                className="text-lg mt-2 hover:underline hover:underline-offset-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_1}
              </a>
            )}
            {item.link_2 && (
              <a
                href="#"
                className="text-lg hover:underline hover:underline-offset-2 mt-2 dark:text-gray-300 hover:text-blue-500"
              >
                {item.link_2}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// list 12

export const List_12 = ({ items }) => {
  return (
    <>
      <h3 className='text-2xl font-bold pt-10 flex items-center justify-center  sm:flex-none sm:items-start sm:justify-start sm:pl-5 2xl:text-3xl'>
        Case studies
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8'>
        {items.map((item) => (
          <div key={item.key} className='bg-white border-[#c0c2c4] border-2 border-solid rounded-lg shadow-md p-6 flex flex-col dark:bg-[#202124] dark:text-white'>
            <h1 className='text-2xl font-bold mb-2 text-blue-500 hover:underline hover:underline-offset-2 dark:text-white flex items-center justify-center max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[500px]'>
              <a href="#" className='block'>
                {item.title}
              </a>
            </h1>
            <p className='text-base leading-relaxed mb-4 dark:text-gray-300 max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px]'>
              {item.content}
            </p>
            {item.button && (
              <div className='mt-4 flex justify-center'>
                <div className='rounded-[70px] border-blue-500 border-2 border-solid text-blue-500 hover:border-black hover:text-black py-2 px-4  font-medium'>
                  <a href='#' className='text-center block w-full'>
                    {item.button}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>

  );
};


const Security_1 = () => {

  // API endpoint
  const api1 = 'http://localhost:1337/api/security-banners';
  const api2 = 'http://localhost:1337/api/security-overviews';
  const api3 = 'http://localhost:1337/api/security-links';
  const api4 = 'http://localhost:1337/api/security-overview-1s';
  const api5 = 'http://localhost:1337/api/security-link-2s';
  const api6 = 'http://localhost:1337/api/security-title-1s';
  const api7 = 'http://localhost:1337/api/security-card-1s';
  const api8 = 'http://localhost:1337/api/security-title-2s';
  const api9 = 'http://localhost:1337/api/security-card-2s';
  const api10 = 'http://localhost:1337/api/security-overview-2s';
  const api11 = 'http://localhost:1337/api/security-link-3s';
  const api12 = 'http://localhost:1337/api/security-card-3s';



  // Fetch data using custom hook
  const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
  const { data: data2, loading: loading2, error: error2 } = useFetch(api2);
  const { data: data3, loading: loading3, error: error3 } = useFetch(api3);
  const { data: data4, loading: loading4, error: error4 } = useFetch(api4);
  const { data: data5, loading: loading5, error: error5 } = useFetch(api5);
  const { data: data6, loading: loading6, error: error6 } = useFetch(api6);
  const { data: data7, loading: loading7, error: error7 } = useFetch(api7);
  const { data: data8, loading: loading8, error: error8 } = useFetch(api8);
  const { data: data9, loading: loading9, error: error9 } = useFetch(api9);
  const { data: data10, loading: loading10, error: error10 } = useFetch(api10);
  const { data: data11, loading: loading11, error: error11 } = useFetch(api11);
  const { data: data12, loading: loading12, error: error12 } = useFetch(api12);

  return (
    <>
      <div className='bg-white dark:bg-black text-black dark:text-white'>
        {/* Main container for the cards */}
        <div className='mt-10 lg:mt-20 dark:bg-[#202124] dark:text-white'>
          {/* Data loading and error handling */}
          {loading1 && <p>Loading...</p>}
          {error1 && <p className="text-red-500">{error1}</p>}
          {/* List_1 Component to render the data */}
          {!loading1 && !error1 && <List_1 items={data1.data || []} />}
        </div>

        <div className='flex items-center justify-center'>
          {/* Main container for the cards */}
          <div className='mt-0 dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading2 && <p>Loading...</p>}
            {error2 && <p className="text-red-500">{error2}</p>}
            {/* List_1 Component to render the data */}
            {!loading2 && !error2 && <List_2 items={data2.data || []} />}
          </div>

          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading3 && <p>Loading...</p>}
            {error3 && <p className="text-red-500">{error3}</p>}
            {/* List_1 Component to render the data */}
            {!loading3 && !error3 && <List_3 items={data3.data || []} />}
          </div>

        </div>

        <div className='flex items-center justify-center mt-28'>
          {/* Main container for the cards */}
          <div className='mt-0 dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading4 && <p>Loading...</p>}
            {error4 && <p className="text-red-500">{error4}</p>}
            {/* List_1 Component to render the data */}
            {!loading4 && !error4 && <List_4 items={data4.data || []} />}
          </div>

          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading5 && <p>Loading...</p>}
            {error5 && <p className="text-red-500">{error5}</p>}
            {/* List_1 Component to render the data */}
            {!loading5 && !error5 && <List_5 items={data5.data || []} />}
          </div>

        </div>

        <div className='bg-[#F5F6F7]'>
          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading6 && <p>Loading...</p>}
            {error6 && <p className="text-red-500">{error6}</p>}
            {/* List_1 Component to render the data */}
            {!loading6 && !error6 && <List_6 items={data6.data || []} />}
          </div>

          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading7 && <p>Loading...</p>}
            {error7 && <p className="text-red-500">{error7}</p>}
            {/* List_1 Component to render the data */}
            {!loading7 && !error7 && <List_7 items={data7.data || []} />}
          </div>

          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading8 && <p>Loading...</p>}
            {error8 && <p className="text-red-500">{error8}</p>}
            {/* List_1 Component to render the data */}
            {!loading8 && !error8 && <List_8 items={data8.data || []} />}
          </div>

          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading9 && <p>Loading...</p>}
            {error9 && <p className="text-red-500">{error9}</p>}
            {/* List_1 Component to render the data */}
            {!loading9 && !error9 && <List_9 items={data9.data || []} />}
          </div>


        </div>
        <div className='flex items-center justify-center'>
          {/* Main container for the cards */}
          <div className='mt-0 dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading10 && <p>Loading...</p>}
            {error10 && <p className="text-red-500">{error10}</p>}
            {/* List_1 Component to render the data */}
            {!loading10 && !error10 && <List_10 items={data10.data || []} />}
          </div>

          {/* Main container for the cards */}
          <div className=' dark:bg-[#202124] dark:text-white'>
            {/* Data loading and error handling */}
            {loading11 && <p>Loading...</p>}
            {error11 && <p className="text-red-500">{error11}</p>}
            {/* List_1 Component to render the data */}
            {!loading11 && !error11 && <List_11 items={data11.data || []} />}
          </div>

        </div>
        {/* Main container for the cards */}
        <div className=' dark:bg-[#202124] dark:text-white'>
          {/* Data loading and error handling */}
          {loading12 && <p>Loading...</p>}
          {error12 && <p className="text-red-500">{error12}</p>}
          {/* List_1 Component to render the data */}
          {!loading12 && !error12 && <List_12 items={data12.data || []} />}
        </div>
      </div>
    </>
  )
}

export default Security_1;