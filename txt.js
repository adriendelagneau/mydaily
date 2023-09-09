import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import useSWR from 'swr';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const inputRef = useRef(null);
  const router = useRouter();
  const inputValue = searchParams.get('title');

  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  // Create a dynamic key that changes when searchParams change
  const key = inputValue ? `/api/articles/search?title=${inputValue}` : null;

  const { data: articles, error } = useSWR(key, fetcher);

  const onSubmit = () => {
    const inputValue = inputRef.current.value;
    router.push(`/search?title=${inputValue}`);
  };

  return (
    <div className="mt-24">
      <div className="relative my-3">
        <input
          onChange={onSubmit}
          placeholder="Search"
          className="w-[90%] py-2 pl-1 ml-3 border border-gray-400 pr-8"
          ref={inputRef}
        />
        <div className="absolute cursor-pointer right-6 top-3" onClick={onSubmit}>
          S
        </div>

        {error && <div>Error loading data</div>}
        {!error && !inputValue && <div>No results</div>}
        {inputValue && !articles && <div>Loading...</div>}
        {articles?.map((a, i) => (
          <div key={i}>{a.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
