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

    const dropDownNavBarItems = [
        { id: 8, path: '/more', link: 'More' },
        { id: 2, path: '/patterns', link: 'Patterns' },
        { id: 3, path: '/case', link: 'Case Studies' },
    ]
    return (
        <>
            <header className='bg-slate-100 fixed left-0 right-0 top-0 text-black w-[375px] dark:bg-[#202124] '>
                <nav className='px-5 py-4 flex justify-between items-center'>
                    <div className='md:hidden flex items-center'>
                        <button onClick={openModal} className='text-black dark:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <div className='pl-5'>
                        <a href="/" className='text-slate-400 text-xl font-bold '> Web.dev</a>
                    </div>

                    {/* nav item */}
                    <div className="relative">
                        {/* Modal */}
                        <div
                            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                                } transition-transform duration-300`}
                        >
                            <div className="p-4">
                                <div className='grid grid-cols-2 pl-[-30px]'>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                    <div>
                                        <a href="/" className='text-slate-400 text-xl font-bold'>Web <span className='text-slate-400'>.dev</span></a>
                                    </div>
                                </div>

                                {/* nav menu */}
                                <ul className="flex flex-col text-lg mt-6 divide-y divide-gray-300 dark:divide-gray-600">
                                    {navbarItems.map(({ path, id, link }) => (
                                        <li
                                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-500"
                                            key={id}
                                        >
                                            <NavLink
                                                className={({ isActive, isPending }) =>
                                                    isActive ? "active font-bold" : isPending ? "pending" : ""
                                                }
                                                to={path}
                                                onClick={closeModal} // Close modal on navigation
                                            >
                                                <p className='text-3xl p-5'>
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
                    <div className={`${darkMode ? "dark" : ""} relative flex items-center justify-center`}>
                        {/* Open Search Button */}
                        {!isSearchOpen && (
                            <button onClick={openSearch} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                                <FaSearch className="w-6 h-6" />
                            </button>
                        )}

                        {/* Search Bar */}
                        {isSearchOpen && (
                            <div className="fixed  transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 p-4 shadow-lg rounded flex items-center justify-center ">
                                {/* Input Field */}
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-500 text-gray-800 dark:text-white bg-white dark:bg-gray-700"
                                />

                                {/* Close Button */}
                                <button
                                    onClick={closeSearch}
                                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
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
                    {/* Dark Mode Toggle Button */}
                    {!isSearchOpen && (
                        <div className="mt-4">
                            <label className="flex cursor-pointer select-none items-center ">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={darkMode}
                                        onChange={toggleDarkMode}
                                        className="sr-only"
                                    />
                                    <div className="flex h-8 w-14 rounded-full bg-[#E5E7EB] items-center justify-center"></div>
                                    <div className="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition">
                                        {darkMode ? <MdNightlight /> : <WiDaySunny />}
                                    </div>
                                </div>
                            </label>
                        </div>
                    )}

                    <div className='sm:flex justify-between px-6 py-3 hidden '>
                        <form>
                            <div className='flex items-center relative'>
                                <input type="text" placeholder="Search..." name='serach' className="pr-3 pl-2 py-2 font-semibold placeholder-gray-600 text-black text-lg rounded-2xl border-none ring-2 ring-gray-500 focus:ring-gray-500 focus:ring-2" />
                                <FaSearch className='absolute ml-52' />
                            </div>
                        </form>
                    </div>
                    <div className='bg-slate-500 rounded-lg w-[60px] pl-2 hover:bg-white hover:text-black dark:text-white dark:bg-black dark:hover:text-white'>
                        <button><p>SignIn</p></button>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default NavBar