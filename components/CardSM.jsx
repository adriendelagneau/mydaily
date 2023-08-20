import Link from 'next/link'
import React from 'react'

const CardSM = ({article}) => {
   
    return (
      <Link href="/" className='hover:cursor-pointer'>
      <div className='w-full px-1 font-sans'>
          <div className='mb-1 text-2xl capitalize bold line-clamp-2'>{article.title}</div>
         
          <div className='w-full text-sm font-light line-clamp-3'>{article.content}</div>
           
         
          <div className='mt-3 text-xs text-gray-800'>{article.author}</div>
    </div>
      </Link>
  )
}

export default CardSM