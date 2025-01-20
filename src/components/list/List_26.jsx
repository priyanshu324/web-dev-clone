import React from 'react';
import { Link } from 'react-router-dom';

// List_26 Component
const List_26 = ({ items }) => {
    return (
        // Main container for the list
        <div>
            {/* Container for the padding, margin and flex layout */}
            <div className='grid grid-cols-1 p-10 mt-10 sm:m-20 sm:grid sm:grid-cols-2 sm:gap-7 sm:w-[640px] md:w-[768px] lg:w-[1024px] sm:ml-0 xl:grid xl:grid-cols-4 xl:w-auto 2xl:w-[1536px] 2xl:grid-cols-4'>
                {/* Mapping through the items array */}
                {items.map((team) => (
                    // Container for each list item
                    <div className='border-[#E8E8EA] border-solid border-2 rounded-lg mb-20 2xl:mb-10' key={team.key}>
                        {/* Link to each team member */}
                        <Link className='p-5 cursor-pointer 2xl:p-2'>
                            {/* Profile image of the team member */}
                            <img src={team.imglink} alt={team.title} className='w-[150px] h-[150px] rounded-full mx-auto  2xl:w-[120px] 2xl:h-[120px]' />
                            {/* Name of the team member */}
                            <h3 className='text-center font-bold hover:underline hover:underline-offset-2 cursor-pointer dark:text-white 2xl:text-center 2xl:text-lg'>
                                {team.title}
                            </h3>
                            {/* Job description of the team member */}
                            <p className='text-center text-sm text-gray-900 dark:text-white 2xl:text-center 2xl:text-sm'>
                                {team.content}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List_26;