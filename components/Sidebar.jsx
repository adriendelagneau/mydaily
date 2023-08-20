'use client'

import React, { useContext, useState } from 'react'
import { MenuContext } from '@/context/MenuContext';
import Link from 'next/link';

const navLinks = [
  {
    id: 0,
    name: "Politique",
    url: "/politics"
  },
  {
    id: 1,
    name: "Economie",
    url: "/economie"
  },
  {
    id: 2,
    name: "Tech",
    url: "/tech"
  },
  {
    id: 3,
    name: "Sport",
    url: "/sport",
    subcategories: [
      {
        id: 0,
        name: "Football",
        url: "/sport/football"
      },
      {
        id: 1,
        name: "Tennis",
        url: "/sport/tennis"
      }, {
        id: 2,
        name: "Basketball",
        url: "/sport/basquetball"
      },
    ]
  },
  {
    id: 4,
    name: "Culture",
    url: "/culture",
    subcategories: [
      {
        id: 0,
        name: "Cinema",
        url: "/culture/cinema"
      },
      {
        id: 1,
        name: "Music",
        url: "/culture/music"
      },
    ]
  },
  {
    id: 5,
    name: "LifeStyle",
    url: "/lifeStyle"
  },
]


const Sidebar = () => {

  const { isOpen, closeMenu } = useContext(MenuContext)

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
      <div className={`w-full  h-[calc(100vh-65px)]  opacity-30 fixed top-[65px] left-500   ${isOpen ? 'z-20 bg-gray-900' : '-z-10'}`} onClick={() => closeMenu()}></div>
      {/* Sidebar container */}
      <div className={`w-[220px] h-[calc(100vh-65px)] z-30 bg-white fixed top-[65px] transition-all duration-300 ease-in-out border-r  ${isOpen ? 'left-0' : '-left-[250px]'} `}>
      
      <div className='w-full mt-8 mb-5 text-center'>
            <Link href="/subscribe" className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500" onClick={() => closeMenu()}>Subscribe</Link>
          </div>
        {/* Navigation list */}
        <ul className='w-full h-full py-3 '>
          {
            navLinks.map((link, i) => (
              <li key={i} className="relative">
                {/* Main category link */}
                <Link
                  href={link.url}
                  className="relative flex items-center justify-between hover:bg-blue-100 hover:cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => closeMenu()}
                >
                  {/* Main category name */}
                  <div className='p-3'>{link.name}</div>
                  {/* Show the '>' icon if the category has subcategories */}
                  {link.subcategories && (<div className='pr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>)}
                </Link>
                {/* Show subcategory list if the category is currently hovered */}
                {currentCategory === i && (
                  <div
                    className='absolute right-0 top-[50%] transform translate-x-[100%] translate-y-[-50%] flex flex-col'
                    onMouseEnter={() => handleMouseEnter(link.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.subcategories && link.subcategories.length > 0 && (
                      <ul className='pl-4 bg-white custom-clip-path min-w-[130px]'>
                        {/* Subcategory list */}
                        {
                          link.subcategories.map((subcategory, j) => (
                            <li key={j} className="flex bg-white">
                              {/* Subcategory link */}
                              <Link
                                href={subcategory.url}
                                className="w-full px-4 py-2 hover:bg-blue-100 hover:cursor-pointer"
                                onClick={() => closeMenu()}
                              >{subcategory.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Sidebar