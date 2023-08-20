'use client'

import React, { useState, useRef, useEffect } from 'react';
import GSAP from 'gsap';
import { Power2 } from 'gsap'
import { Draggable } from 'gsap/Draggable'; // Import Draggable from the specific
import Link from 'next/link';
const items = [{
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
},];

GSAP.registerPlugin(Draggable); // Register the Draggable plugin
const Slider2 = () => {
  
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  


  const handleNextSlide = () => {
 
    const slideWidth = slideRef.current.offsetWidth + parseInt(getComputedStyle(slideRef.current).marginRight, 10) * 2;

      const computedStyles = getComputedStyle(sliderRef.current);
      const transformMatrix = new WebKitCSSMatrix(computedStyles.transform);
      const currentX = transformMatrix.m41;

      const maxX = -sliderRef.current.offsetWidth + sliderContainerRef.current.offsetWidth - 40// Maximum translation value to fully show the last slide
      const newX = Math.max(maxX, currentX - slideWidth * 2); // Limit the translation to not exceed the maximum

      const translateDiff = Math.min(newX - currentX, slideWidth); // Adjust translateDiff to stop when last slide is fully in view

      GSAP.to(sliderRef.current,  {
        x: `+=${translateDiff}`,
        duration:0.5,
        ease: Power2.easeInOut,

      })  
};

  const handlePrevSlide = () => {

    const slideWidth = slideRef.current.offsetWidth + parseInt(getComputedStyle(slideRef.current).marginRight, 10) * 2;

    const computedStyles = getComputedStyle(sliderRef.current);
    const transformMatrix = new WebKitCSSMatrix(computedStyles.transform); // Parse the transform matrix
    const currentX = transformMatrix.m41; // Get the X translation value

    // Log the current translation value
    console.log('Current Translation X:', currentX);

    // Calculate the new translation value, considering the limits
    const newX = Math.min(0, currentX + slideWidth * 2);

    // Calculate the difference to translate by
    const translateDiff = newX - currentX;

    GSAP.to(sliderRef.current, {
      x: `+=${translateDiff}`,
      duration: 0.5,
      ease: Power2.easeInOut,
    });
  };


  

  useEffect(() => {
    const slider = sliderRef.current;
    const slide = slideRef.current;

    const totalItems = items.length;
    const slideWidth = slide.offsetWidth + parseInt(getComputedStyle(slide).marginRight, 10) * 2;
    const visibleSlides = 4;
    const sliderWidth = slideWidth * totalItems / visibleSlides;
    //slider.style.width = `${sliderWidth}px`;

    // Set up Draggable for the slider
    Draggable.create(slider, {
      type: 'x', // Only allow horizontal dragging
      edgeResistance: 0.5, // Add a resistance at the edges
      onDrag: function () {
        if (this.x > 0) {
          this.x = 0; // Prevent dragging more than 0
          GSAP.to(slider, { x: 0, ease: Power2.easeInOut, duration:0.5 });
        }
        else if (this.x < (-slider.offsetWidth + sliderContainerRef.current.offsetWidth - 40)) {
          this.x = (-slider.offsetWidth + sliderContainerRef.current.offsetWidth - 40); // Prevent dragging more than 0
          GSAP.to(slider, { x: -slider.offsetWidth + sliderContainerRef.current.offsetWidth - 40, ease: Power2.easeInOut, duration:0.5 });
        }
      },
    });

    GSAP.to(slider, { x: 0 });


  

    // Attach event listeners for next and previous buttons
    // You can use your own UI for these buttons
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    nextButton.addEventListener('click', handleNextSlide);
    prevButton.addEventListener('click', handlePrevSlide);

    // Clean up event listeners on unmount
    return () => {
      nextButton.removeEventListener('click', handleNextSlide);
      prevButton.removeEventListener('click', handlePrevSlide);
    };
  }, []);

  return (
    <div className="slider-container w-[800px] xl:w-[1250px] mt-[100px] mx-auto" ref={sliderContainerRef}>
      <div className="slider" ref={sliderRef}>
        {items.map((item, index) => (

          <div className="rounded-full slide" key={index} ref={slideRef}>
            <div className="card-item">
              <img src={item.url} alt="" />
              <div className="card-info">
                <Link href={"/"} className="card-title">{item.title}</Link>
                <p className="text-lg card-description">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute left-0 z-40 flex bottom-8'>

        <button id="prevButton">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button id="nextButton">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slider2