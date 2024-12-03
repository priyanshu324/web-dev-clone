import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdNightlight } from 'react-icons/md'
import { WiDaySunny } from 'react-icons/wi'
import { NavLink } from 'react-router-dom'


const NavBar = ({ darkMode, toggleDarkMode }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const navbarItems = [
        { id: 1, path: '/about', link: 'About' },
        { id: 2, path: '/courses/html', link: 'Html' },
        { id: 3, path: '/courses/css', link: 'Css' },
        { id: 4, path: '/courses/javascript', link: 'JavaScript' },
        { id: 5, path: '/blog', link: 'Blog' },
        { id: 6, path: '/learn', link: 'Learn' },
        { id: 7, path: '/explore', link: 'Expolre' },
    ]
    const navbarItem = [
        { id: 1, path: '/about', link: 'About' },
        { id: 2, path: '/courses/html', link: 'Html' },
        { id: 3, path: '/courses/css', link: 'Css' },
        { id: 4, path: '/courses/javascript', link: 'JavaScript' },
        { id: 5, path: '/blog', link: 'Blog' },

    ]

    const dropDownNavBarItems = [
        { id: 8, path: '/more', link: 'More' },
        { id: 9, path: '/patterns', link: 'Patterns' },
        { id: 10, path: '/case', link: 'Case Studies' },
    ]
    return (
        <>
            <header className='bg-slate-100 fixed left-0 right-0 top-0 text-black w-[420px] dark:bg-[#202124] z-50 sm:bg-slate-100 sm:fixed sm:left-0 sm:right-0 sm:text-black sm:w-[640px] sm:dark:bg-[#202124]  md:bg-slate-100 md:fixed md:left-0 md:right-0 md:text-black md:w-[768px] md:dark:bg-[#202124]  lg:bg-slate-100 lg:fixed lg:left-0 lg:right-0 lg:text-black lg:w-[1024px] lg:dark:bg-[#202124] xl:bg-slate-100 xl:fixed xl:left-0 xl:right-0 xl:text-black xl:w-[1520px] xl:dark:bg-[#202124] '>
                <nav className='px-5 py-4 flex justify-between items-center mt-5 mb-[20px] sm:flex sm:justify-between sm:items-center sm:mt-5 sm:mb-[20px] md:flex md:justify-between md:items-center md:mt-5 md:mb-[20px] lg:flex lg:justify-between lg:items-center lg:mt-5 lg:mb-[20px] xl:flex xl:justify-between xl:items-center xl:mt-5 xl:mb-[20px] '>
                    <div className='md:flex md:items-center flex items-center sm:flex sm:items-center lg:hidden'>
                        <button onClick={openModal} className="text-black dark:text-white sm:text-black sm:dark:text-white md:text-black md:dark:text-white lg:text-black lg:dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <div className='sm:w-[350px] md:w-[500px] lg:w-[50px] '>
                        <a href="/" className='text-slate-400 text-xl font-bold '> Web.dev</a>
                    </div>

                    <div className='hidden sm:hidden md:hidden lg:flex lg:items-center lg:justify-center'>
                        <ul className=" divide-gray-300  dark:divide-gray-600 lg:flex ">
                            {navbarItem.map(({ path, id, link }) => (
                                <li
                                    className="text-gray-600 sm:text-gray-600 dark:text-gray-300 sm:dark:text-gray-300 hover:text-black sm:hover:text-black dark:hover:text-gray-500 sm:dark:hover:text-gray-500"
                                    key={id}
                                >
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active font-bold sm:active " : isPending ? "pending sm:pending" : ""
                                        }
                                        to={path}
                                    >
                                        <p className='text-3xl sm:text-lg p-5'>
                                            {link}
                                        </p>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* nav item */}
                    <div className="relative sm:relative ">
                        {/* Modal */}
                        <div
                            className={`fixed sm:fixed top-0 sm:top-0 left-0 sm:left-0 h-full sm:h-full w-64 sm:w-64 bg-white sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 text-gray-800 sm:text-gray-800 dark:text-white sm:dark:text-white shadow-lg sm:shadow-lg transform sm:transform ${isOpen ? "translate-x-0 sm:translate-x-0" : "-translate-x-full sm:-translate-x-full"
                                } transition-transform sm:transition-transform  duration-300 sm:duration-300 sm:z-50 z-50`}
                        >
                            <div className="p-4 sm:p-4">
                                <div className='grid grid-cols-2  pl-[-30px] '>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-600 sm:text-gray-600 dark:text-gray-300 sm:dark:text-gray-300 hover:text-black sm:hover:text-black dark:hover:text-white sm:dark:hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                    <div>
                                        <a href="/" className='text-slate-400 sm:text-slate-400 text-xl sm:text-xl font-bold sm:font-bold'>Web <span className='text-slate-400 sm:text-slate-400'>.dev</span></a>
                                    </div>
                                </div>

                                {/* nav menu */}
                                <ul className="flex sm:flex sm:flex-col flex-col text-lg sm:text-sm mt-6 sm:mt-6 divide-y sm:divide-y divide-gray-300 sm:divide-gray-300   dark:divide-gray-600 sm:dark:divide-gray-600">
                                    {navbarItems.map(({ path, id, link }) => (
                                        <li
                                            className="text-gray-600 sm:text-gray-600 dark:text-gray-300 sm:dark:text-gray-300 hover:text-black sm:hover:text-black dark:hover:text-gray-500 sm:dark:hover:text-gray-500"
                                            key={id}
                                        >
                                            <NavLink
                                                className={({ isActive, isPending }) =>
                                                    isActive ? "active font-bold sm:active " : isPending ? "pending sm:pending" : ""
                                                }
                                                to={path}
                                                onClick={closeModal} // Close modal on navigation
                                            >
                                                <p className='text-3xl sm:text-lg p-5'>
                                                    {link}
                                                </p>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>


                    {/* nav item */}
                    {/* <ul className='flex text-lg'>
                        {
                            dropDownNavBarItems.map(({ path, id, link }) => <li className='text-[#5f6368] hover:text-black dark:text-white dark:hover:text-gray-500' key={id}>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive ? 'active' : isPending ? "pending" : ""
                                    }
                                    to={path}
                                >
                                    {link}
                                </NavLink>
                            </li>)
                        }
                    </ul> */}


                    {/* serach */}
                    <div className={`relative flex items-center justify-center z-0 lg:hidden`}>
                        {/* Open Search Button */}
                        {!isSearchOpen && (
                            <button onClick={openSearch} className={`text-gray-600 sm:text-gray-600 dark:text-gray-300 sm:dark:text-gray-300 hover:text-black sm:hover:text-black dark:hover:text-white sm:dark:hover:text-white md:flex`}>
                                <FaSearch className="w-6 h-6" />
                            </button>
                        )}

                        {/* Search Bar */}
                        {isSearchOpen && (
                            <div className="fixed sm:fixed transform  mt-10  ml-28 -translate-x-1/2  bg-gray-100 sm:bg-gray-100 dark:bg-gray-800 sm:dark:bg-gray-800 p-4 sm:p-4 shadow-lg sm:shadow-lg rounded sm:rounded flex sm:flex items-center sm:items-center justify-center sm:justify-center ">
                                {/* Input Field */}
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="rounded sm:rounded border sm:border p-3 sm:p-3 border-gray-300 sm:border-gray-300 dark:border-gray-700 sm:dark:border-gray-700 focus:outline-none sm:focus:outline-none focus:ring sm:focus:ring focus:ring-blue-500 sm:focus:ring-blue-500 text-gray-800 sm:text-gray-800 dark:text-white sm:dark:text-white bg-white sm:bg-white dark:bg-gray-700 sm:dark:bg-gray-700"
                                />

                                {/* Close Button */}
                                <button
                                    onClick={closeSearch}
                                    className="text-gray-600 sm:text-gray-600 dark:text-gray-300 sm:dark:text-gray-300 hover:text-black sm:hover:text-black dark:hover:text-white sm:dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className=' justify-between  px-6 py-3  hidden sm:hidden lg:flex'>
                        <form>
                            <div className='flex sm:flex items-center sm:items-center relative sm:relative'>
                                <input type="text" placeholder="Search..." name='serach' className="pr-3 sm:pr-3 pl-2 sm:pl-2 py-2 sm:py-2 font-semibold sm:font-semibold placeholder-gray-600 sm:placeholder-gray-600 text-black sm:text-black text-lg sm:text-lg rounded-2xl sm:rounded-2xl border-none sm:border-none ring-2 sm:ring-2 ring-gray-500 sm:ring-gray-500 focus:ring-gray-500 sm:focus:ring-gray-500 focus:ring-2 sm:focus:ring-2" />
                                <FaSearch className='absolute sm:absolute ml-52 sm:ml-52' />
                            </div>
                        </form>
                    </div>
                    {/* Dark Mode Toggle Button */}
                    {!isSearchOpen && (
                        <div>
                            <label className="flex cursor-pointer sm:cursor-pointer select-none sm:select-none items-center ">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={darkMode}
                                        onChange={toggleDarkMode}
                                        className="sr-only "
                                    />
                                    <div className="flex sm:flex h-8 w-14  rounded-full sm:rounded-full bg-[#E5E7EB] sm:bg-[#E5E7EB] items-center  justify-center "></div>
                                    <div className="dot  absolute  left-1  top-1  flex  h-6  w-6  items-center  justify-center  rounded-full sm:rounded-full bg-white sm:bg-white transition sm:transition">
                                        {darkMode ? <MdNightlight /> : <WiDaySunny />}
                                    </div>
                                </div>
                            </label>
                        </div>
                    )}


                    <div className='bg-slate-500 sm:bg-slate-500 rounded-lg w-[60px] pl-2  hover:bg-white sm:hover:bg-white hover:text-black sm:hover:text-black dark:text-white sm:dark:text-white dark:bg-black sm:dark:bg-black dark:hover:text-white sm:dark:hover:text-white'>
                        <button><p>SignIn</p></button>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default NavBar