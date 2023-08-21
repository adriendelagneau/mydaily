'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import useSWR from 'swr';
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json());

const Layout = ({ children }) => {

  const pathname = usePathname();
  const category = pathname.split("/")[1];

  const { data: subcategoryData, error: subcategoryError, isLoading: subcategoryIsLoading } = useSWR("/api/subcategory", fetcher);


  if (subcategoryError) return "An error has occurred.";
  if (subcategoryIsLoading) return "Loading...";

  return (
    <div className='pt-[140px] max-w-7xl  mx-auto text-center '>
      <h1 className='text-5xl text-center capitalize'>
        <Link href={`/${category}`}>{category}</Link>
      </h1>
      <ul className='flex justify-center gap-6 mt-8 text-lg'>

        {subcategoryData?.filter((sub) => sub.category.name === category).map((s, i) => (
          <li key={i}>
            <Link href={s.url} className='capitalize hover:text-gray-700'>
              {s.name}

            </Link>
          </li>
        ))}
      </ul>
      <div className='w-full h-[1px] bg-slate-300 my-4'></div>
      {children}
    </div>
  )
}

export default Layout