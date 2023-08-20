import Link from 'next/link';
import React from 'react'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

const Slider3 = () => {
  return (
      <div className='sl-container'>
          <div className='sl'>
          {items.map((item, index) => (
          <div className="s" key={index} >
            <Link href={'/'} className="w-full h-full">
            {item}
            </Link>
          </div>
        ))}
          </div>
    </div>
  )
}

export default Slider3