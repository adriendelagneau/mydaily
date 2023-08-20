import Link from 'next/link'
import React from 'react'
const sbcat = [
    {
        id: 0,
        name: "national",
        url: "/politic/national"
    },
    {
        id: 1,
      name: "international",
        url: "/politic/international"
    },
]


const Layout = ({children}) => {
  return (
    <div className='pt-[140px] max-w-7xl  mx-auto text-center '>
      <h1 className='text-5xl text-center'>
        <Link href={"/politic"}>Politics</Link>
      </h1>
          <ul className='flex justify-center gap-6 mt-8 text-lg'>
              
          {sbcat.map((s, i) => (
              <li key={i}>
                  <Link href={s.url} className='hover:text-gray-700'>
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