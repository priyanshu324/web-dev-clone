import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
import { NavLink } from 'react-router-dom';

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

    const navbarItems = [
        { id: 1, path: '/about', link: 'ABOUT' },
        { id: 2, path: '/courses', link: 'COURSES' },
        { id: 3, path: '/basline', link: 'BASLINE' },
    ];

    const dropdownItems = [
        { id: 4, path: '/courses/html', link: 'HTML', category: 'Web Platform' },
        { id: 5, path: '/courses/css', link: 'CSS', category: 'Web Platform' },
        { id: 6, path: '/courses/javascript', link: 'JAVASCRIPT', category: 'Web Platform' },
        { id: 7, path: '/performance', link: 'Performance', category: 'User experience' },
        { id: 8, path: '/accessibility', link: 'Accessibility', category: 'User experience' },
        { id: 9, path: '/identity', link: 'Identity', category: 'User experience' },
        { id: 10, path: '/learn/html', link: 'Learn HTML', category: 'Learn' },
        { id: 11, path: '/learn/css', link: 'Learn CSS', category: 'Learn' },
        { id: 12, path: '/learn/javascript', link: 'Learn JAVASCRIPT', category: 'Learn' },
        { id: 13, path: '/learn/performance', link: 'Learn PERFORMANCE', category: 'Learn' },
        { id: 14, path: '/learn/accessibility', link: 'Learn ACCESIBILITY', category: 'Learn' },
        { id: 15, path: '/more-courses', link: 'More courses', category: 'Learn' },
        { id: 16, path: '/blogs', link: 'Blog', category: 'Additional resources' },
        { id: 17, path: '/learn', link: 'Learn', category: 'Additional resources' },
        { id: 18, path: '/ai', link: 'AI and the web', category: 'Additional resources' },
        { id: 19, path: '/explore', link: 'Explore', category: 'Additional resources' },
        { id: 20, path: '/patterns', link: 'Patterns', category: 'Additional resources' },
        { id: 21, path: '/case', link: 'Case Studies', category: 'Additional resources' },
        { id: 22, path: '/progressive-web-apps', link: 'Progressive web apps', category: 'Additional resources' },
        { id: 23, path: '/shows', link: 'podcast & Shows', category: 'Additional resources' },
        { id: 24, path: '/develpoer-newsletter', link: 'Developer Newsletter', category: 'Additional resources' },

    ];

    // 
    // 
    const groupedDropdownItems = dropdownItems.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <header className='bg-slate-100 fixed left-0 right-0 top-0 text-black w-full dark:bg-[#202124] z-50'>
            <nav className='px-5 py-4 flex justify-between items-center mt-5 mb-[20px]'>
                <div className='md:flex md:items-center flex items-center lg:hidden'>
                    <button onClick={openModal} className="text-black dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className='md:w-auto lg:w-[100px] 2xl:w-[70px]'>
                    <a href="/" className='text-slate-400 text-xl font-bold'>Web.dev</a>
                </div>
                <div className='hidden lg:flex lg:items-center lg:justify-center'>
                    <ul className="divide-gray-300 dark:divide-gray-600 lg:flex">
                        <li className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-500">
                            <button onClick={toggleResources} className="flex items-center p-5 text-lg">
                                RESOURCES
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {isResourcesOpen && (
                                <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 z-50 w-[800px] p-2 flex">
                                    {Object.entries(groupedDropdownItems).map(([category, items]) => (
                                        <ul key={category} className='flex flex-col w-1/4 first:ml-3'>
                                            <li className='p-2 font-bold text-gray-700 dark:text-gray-300 text-base'>
                                                {category}
                                            </li>
                                            {items.map(({ path, id, link }) => (
                                                <li key={id} className='hover:bg-slate-200 dark:hover:bg-gray-700 rounded-sm'>
                                                    <NavLink
                                                        to={path}
                                                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white block px-4 py-1 text-sm font-medium"
                                                    >
                                                        {link}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </li>
                        {navbarItems.map(({ path, id, link }) => (
                            <li
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-500 "
                                key={id}
                            >
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive ? "active font-bold" : isPending ? "pending" : ""
                                    }
                                    to={path}
                                >
                                    <p className='text-lg p-5'>
                                        {link}
                                    </p>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative lg:hidden">
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg transform z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
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
                                    <a href="#" className='text-slate-400 text-xl font-bold'>Web <span className='text-slate-400'>.dev</span></a>
                                </div>
                            </div>
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
                                            onClick={closeModal}
                                        >
                                            <p className='text-lg p-5'>
                                                {link}
                                            </p>
                                        </NavLink>
                                    </li>
                                ))}
                                {dropdownItems.map(({ path, id, link, category }) => (
                                    <li
                                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-500"
                                        key={id}
                                    >
                                        <NavLink
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active font-bold" : isPending ? "pending" : ""
                                            }
                                            to={path}
                                            onClick={closeModal}
                                        >
                                            <p className='text-lg p-5'>
                                                {link}
                                            </p>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={`relative flex items-center justify-center lg:hidden`}>
                    {!isSearchOpen && (
                        <button onClick={openSearch} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                            <FaSearch className="w-6 h-6" />
                        </button>
                    )}
                    {isSearchOpen && (
                        <div className="fixed  mt-10  ml-28 -translate-x-1/2  bg-gray-100 dark:bg-gray-800 p-4 shadow-lg rounded flex items-center justify-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="rounded border p-3 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-500 text-gray-800 dark:text-white bg-white dark:bg-gray-700"
                            />
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
                <div className=' justify-between px-6 py-3 hidden lg:flex'>
                    <form>
                        <div className='flex items-center relative'>
                            <input type="text" placeholder="Search..." name='serach' className="pr-3 pl-2 py-2 font-semibold placeholder-gray-600 text-black text-lg rounded-2xl border-none ring-2 ring-gray-500 focus:ring-gray-500 focus:ring-2" />
                            <FaSearch className='absolute ml-52' />
                        </div>
                    </form>
                </div>
                {!isSearchOpen && (
                    <div className='flex items-center'>
                        <label className="flex cursor-pointer select-none items-center  ">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                    className="sr-only"
                                />
                                <div className="flex h-8 w-14 rounded-full bg-[#E5E7EB] items-center  justify-center "></div>
                                <div className="dot absolute  left-1  top-1  flex  h-6  w-6  items-center  justify-center  rounded-full  bg-white  transition ">
                                    {darkMode ? <MdNightlight className='text-xl' /> : <WiDaySunny className='text-xl' />}
                                </div>
                            </div>
                        </label>
                    </div>
                )}
                <div className='bg-slate-500 rounded-lg w-[60px] pl-2 hover:bg-white hover:text-black dark:text-white dark:bg-black dark:hover:text-white'>
                    <button> <a href="/Signup"><p>SignIn</p></a></button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;