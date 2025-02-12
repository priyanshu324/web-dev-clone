import React from 'react'
import useFetch from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';


export const List_1 = ({ items }) => {
  return (
    <div className="bg-gray-100 pt-16 pb-0 relative ">
      <nav>
        <ul className='flex justify-between items-center'>
          {items.map((item) => (
            <li
              className=" text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-500 transition-colors duration-200 "
              key={item.key}
            >
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active font-bold" : isPending ? "pending" : ""}
                to={item.path}
              >
                <p className='text-lg p-5'>
                  {item.data}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Learn_navbar = () => {

  // API endpoint
  const api1 = 'http://localhost:1337/api/learn-nav-items';

  // Fetch data using custom hook
  const { data: data1, loading: loading1, error: error1 } = useFetch(api1);


  return (
    <>
      {/* Data loading and error handling */}
      {loading1 && <p>Loading...</p>}
      {error1 && <p className="text-red-500">{error1}</p>}
      {/* List_1 Component to render the data */}
      {!loading1 && !error1 && <List_1 items={data1.data || []} />}
    </>

  )
}

export default Learn_navbar