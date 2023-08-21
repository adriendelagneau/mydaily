import React from 'react'


async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles/search?category=culture&subcategory=international`, {
      cache: "no-store",
    });

    if (!res.ok) {
  
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
 
  
const Series = async () => {
  const data = await getData();

  
  return (
    <>
    <div>Series</div>
    {
      data?.map((a, i) => (
        <div key={i}>{a.tit}</div>
        ))}
        </>
  )
}

export default Series