import React from 'react'
import useFetch from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';

// List_1 component: Handles the navigation list
export const List_1 = ({ items }) => {
    return (
        <>
            <div className="bg-gray-100 pt-24 pb-10 relative ">
                <nav className=" mx-auto  flex justify-between items-center absolute ">
                    {items.map((item) => (
                        <div key={item.key} className="mx-4">
                            <h3 className="text-lg font-medium">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive ? "active font-bold" : isPending ? "pending" : ""
                                    }
                                    to={item.path}
                                >
                                    <p className='text-gray-700'>
                                        {item.data}
                                    </p>
                                </NavLink>
                            </h3>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};

const Learn_navbar = () => {

    const api1 = 'http://localhost:1337/api/learn-nav-items';

    const { data: data1, loading: loading1, error: error1 } = useFetch(api1);
    return (
        <>
            <div className=''>
                {/* Data loading and error handling */}
                {loading1 && <p>Loading...</p>}
                {error1 && <p className="text-red-500">{error1}</p>}
                {/* List component to display the courses */}
                {!loading1 && !error1 && <List_1 items={data1.data || []} />}
            </div>
        </>
    )
}

export default Learn_navbar