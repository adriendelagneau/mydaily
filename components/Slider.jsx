'use client'


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const tps = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cooked dish on gray bowl",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, beatae?"
  },
]

const Slider = () => {
  const [currScroll, setCurrScroll] = useState(0);
  const [initPos, setInitPos] = useState(0);
  const [clicked, setClicked] = useState(false);

  const cardWrapperRef = useRef(null);

  useEffect(() => {
    const cardWrapper = cardWrapperRef.current;
    const arrowPrev = document.querySelector('.arrow.prev');
    const arrowNext = document.querySelector('.arrow.next');
    const cardImageAndLink = cardWrapper.querySelectorAll('img, a');

    cardImageAndLink.forEach(item => {
      item.setAttribute('draggable', false);
    });

    const widthToScroll = cardWrapper.children[0].offsetWidth;

    const handlePrevClick = () => {
      cardWrapper.scrollLeft -= widthToScroll;
    };

    const handleNextClick = () => {
      cardWrapper.scrollLeft += widthToScroll;
    };

    arrowPrev.addEventListener('click', handlePrevClick);
    arrowNext.addEventListener('click', handleNextClick);

    return () => {
      arrowPrev.removeEventListener('click', handlePrevClick);
      arrowNext.removeEventListener('click', handleNextClick);
    };
  }, []);

  const handleMouseDown = e => {
    cardWrapperRef.current.classList.add('grab');
    setInitPos(e.clientX - cardWrapperRef.current.getBoundingClientRect().left);
    setCurrScroll(cardWrapperRef.current.scrollLeft);
    setClicked(true);
  };

  const handleMouseMove = e => {
    if (clicked) {
      const xPos = e.clientX - cardWrapperRef.current.getBoundingClientRect().left;
      cardWrapperRef.current.scrollLeft = currScroll + -(xPos - initPos);
    }
  };

  const handleMouseUpAndLeave = () => {
    cardWrapperRef.current.classList.remove('grab');
    setClicked(false);
  };

  return (
    <div className='w-full my-14'>

      <div className="wrapper">
        <button className="arrow prev"  >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="arrow next" >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div
          className="card-wrapper"
          ref={cardWrapperRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpAndLeave}
          onMouseLeave={handleMouseUpAndLeave}
        >

          {tps.map((a, i) => (

            <div className="card-item" key={i}>
       
                <img src={a.url} alt="" />

        
              <div className="card-info">
                <Link href={"/"} className="card-title">{a.title}</Link>
                <p className="card-description">{a.content}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Slider