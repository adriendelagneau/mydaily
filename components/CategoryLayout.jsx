

import React from 'react'

import Link from 'next/link'



const CategoryLayout = ({category, subcategory}) => {


console.log(subcategory)
  return (
      <div className='pt-[140px] max-w-7xl  mx-auto text-center h-[510px]'>
      <h1 className='text-5xl text-center capitalize'>
        <Link href={`/${category}`}>{category}</Link>
      </h1>
      <ul className='flex justify-center gap-6 mt-8 text-lg'>

      {subcategory.map((subcat, index) => (
          <li key={index} className="capitalize">
              <Link href={`/${category}/${subcat}`}>
                  
              {subcat}
          </Link>
          </li>
        ))}
      </ul>
      <div className='w-full h-[1px] bg-slate-300 my-4'></div>
    </div>
  )
}

export default CategoryLayout