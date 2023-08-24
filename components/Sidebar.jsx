'use client'

import React, { useContext, useState } from 'react';
import { MenuContext } from '@/context/MenuContext';
import Link from 'next/link';

import { categoryData } from '@/constants';


const Sidebar = () => {
  const { isOpen, closeMenu } = useContext(MenuContext);


  // State to keep track of the currently hovered category
  const [currentCategory, setCurrentCategory] = useState(null);

  // Function to handle mouse enter event for a category
  const handleMouseEnter = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  // Function to handle mouse leave event for a category
  const handleMouseLeave = () => {
    setCurrentCategory(null);
  };



  return (
    <>
      {/* Overlay to capture clicks and close the sidebar */}
      <div className={`w-full h-[calc(100vh-65px)] opacity-30 fixed top-[65px] left-500 text-lg font-medium capitalize ${isOpen ? 'z-20 bg-gray-900' : '-z-10'}`} onClick={closeMenu}></div>
      {/* Sidebar container */}
      <div className={`w-[220px] h-[calc(100vh-65px)] z-30 bg-white fixed top-[65px] transition-all duration-300 ease-in-out border-r ${isOpen ? 'left-0' : '-left-[250px]'}`}>
        <div className='w-full mt-8 mb-5 text-center'>
          <Link href="/subscribe" className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500" onClick={closeMenu}>Subscribe</Link>
        </div>
        {/* Navigation list */}
        <ul className='w-full h-full py-3'>
          {categoryData?.map((link, i) => (
            <li key={i} className="relative">
              {/* Main category link */}
              <Link
                href={link.url}
                className="relative flex items-center justify-between hover:bg-blue-100 hover:cursor-pointer"
                onMouseEnter={() => handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  closeMenu()
                  setCurrentCategory(null)
                }}
              >
                {/* Main category name */}
                <div className='p-3 capitalize'>{link.name}</div>
                {/* Show the '>' svg, if the category has subcategories */}

              </Link>

              {/* Show subcategory list if the category is currently hovered */}
              {currentCategory === link.id && (
                <div className='absolute right-0 top-[50%] transform translate-x-[100%] translate-y-[-50%] flex flex-col capitalize'
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className='pl-4 bg-white custom-clip-path min-w-[130px]'>
                    {link.subcategory

                      .map((subcategory, subIndex) => (
                        <li key={subIndex} className="flex bg-white">
                          <Link
                            href={subcategory.url}
                            onClick={() => {
                              closeMenu()
                              setCurrentCategory(null)
                            }}
                            className="w-full px-4 py-2 hover:bg-blue-100 hover:cursor-pointer"
                          >
                            {subcategory.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
