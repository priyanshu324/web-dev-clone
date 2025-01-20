import React from 'react'
import useFetch from '../../hooks/useFetch';
import Learn_navbar from './Learn_navbar';

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

const Privacy = () => {

  // Fetch data using custom hook
  const api1 = 'http://localhost:1337/api/learn-row-banners';

  // Fetch data using custom hook
  const { data: data1, loading: loading1, error: error1 } = useFetch(api1);


  return (
    <>

      <div className='mt-20'>
        <Learn_navbar />

        {/* Data loading and error handling */}
        {loading1 && <p>Loading...</p>}
        {error1 && <p className="text-red-500">{error1}</p>}
        {/* List component to display the courses */}
        {!loading1 && !error1 && <List_1 items={data1.data || []} />}
      </div>
    </>
  )
}

export default Privacy