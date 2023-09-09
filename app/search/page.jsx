'use client'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'


const SearchPage = () => {

  const [articles, setArticles] = useState([])
  const searchParams = useSearchParams()
  const inputRef = useRef(null)
  const router = useRouter()


  useEffect(() => {
    const getArticles = async () => {
      const res = await axios(`/api/articles/search?title=${searchParams.get("title")}`)
      setArticles(res.data)
    }
    if (searchParams.get('title') === "") {
      setArticles([])
    } else (
      getArticles()
    )
  }, [searchParams])


  const onSubmit = async () => {
    try {
      let inputValue = inputRef.current.value
      await axios.get(`/api/articles/search?title=${inputValue}`)
      router.push(`http://localhost:3000/search?title=${inputValue}`)
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='mt-24'>
      <div className='relative my-3'>
        <input onChange={onSubmit} placeholder='Search' className='w-[90%] py-2 pl-1 ml-3 border border-gray-400 pr-8' ref={inputRef} />
        <div className='absolute cursor-pointer right-6 top-3' onClick={onSubmit}>S</div>

        {articles === [] && (<div>No results</div>)}
        {articles?.map((a, i) => (
          <div key={i}>
            {a.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage