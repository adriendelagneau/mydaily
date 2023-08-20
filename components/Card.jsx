import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({article}) => {
  return (
    <>
    <div className='lg:w-full lg:max-w-full max-w-[400px] mx-auto  min-h-[350px] flex flex-col lg:flex-row gap-3'>
        <div className='flex-1 h-full '>
          <Link href={'/'}>
            
          <div className='mb-10 text-4xl font-semibold hover:text-blue-950'>{ article.title}</div>
          </Link>
          <div className='mb-5 line-clamp-5'>{article.content }</div>
          <div className='text-gray-800'>{article.author}</div>
          
      </div>
      
      <div className='flex-1 h-full'>
          <div className=''>
            <Link href={"/"}>
          <Image src={article.url} alt={article.title} width={480} height={350}  className='h-auto'/>
            </Link>
        <div className='mt-3 text-sm text-gray-800 '>Lorem ipsum dolor  elit. Dolor dolore quam quia?</div>
        </div>
      </div>

      </div>
      <div className='w-full h-[1px] bg-slate-300 my-8'></div>
    </>
  )
}

export default Card