'use client'
import { Audio } from  'react-loader-spinner'

import React from 'react'

const Loading = () => {
  return (
      <div className='absolute z-50 bottom-10 right-20'>
          <div class="loading">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
    </div>
  )
}

export default Loading