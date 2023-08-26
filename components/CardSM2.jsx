import Link from 'next/link'
import React from 'react'

const CardSM2 = ({article}) => {
   
    return (
      <Link href="/" className='hover:cursor-pointer'>
      <div className='w-full px-1 pb-2 font-sans'>
         
          <div className='w-full text-sm font-light line-clamp-3'>
            <img src={article.imgXS} alt={article.title} width={200} />
          </div>
           
          <div className='mb-1 text-2xl capitalize bold line-clamp-1'>{article.title}</div>
         
    </div>
      </Link>
  )
}

export default CardSM2