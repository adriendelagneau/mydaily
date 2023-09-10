'use client'

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import debounce from '@/utils/debonce';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const inputValue = searchParams.get('title');
  const [searchQuery, setSearchQuery] = useState(inputValue)
  const router = useRouter();

  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
  // Create a dynamic key that changes when searchParams change
  const key = inputValue ? `/api/articles/search?title=${inputValue}` : null;
  const { data: articles, error } = useSWR(key, fetcher);


  useEffect(() => {

    router.push(`/search?title=${searchQuery}`);
  }, [searchQuery])


  const debouncedSetSearchQuery = debounce((value) => {
    router.push(`/search?title=${value}`);
  }, 500);
  


  return (
    <div className="mt-24">
      <div className="relative my-3">
      <label htmlFor="searchInput"></label>
        <input
            onChange={(e) => {
              const newValue = e.target.value;
              setSearchQuery(newValue); // Update the state immediately
              debouncedSetSearchQuery(newValue); // Debounced update of the URL
            }}
          placeholder="Search"
          value={searchQuery}
          className="w-[90%] py-2 pl-1 ml-3 border border-gray-400 pr-8"
          id="searchInput"
        />


        {error && <div>Error loading data</div>}
        {(articles?.length === 0 || !inputValue) && <div>No results</div>}
        {inputValue && !error && articles?.map((a, i) => (
          <div key={i}>{a.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
