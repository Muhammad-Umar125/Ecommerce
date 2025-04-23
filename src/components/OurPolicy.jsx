import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 items-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='flex  flex-col items-center'>
        <img className='mb-5 w-12' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Easy Exchange policy</p>
        <p className='text-gray-400' >We offer hassle free exchange policy</p>
      </div>
      <div className='flex  flex-col items-center'>
        <img className='mb-5 w-12' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>7 day Return Policy</p>
        <p className='text-gray-400' >We offer hassle free exchange policy</p>
      </div>
      <div className='flex  flex-col items-center'>
        <img className='mb-5 w-12' src={assets.search_icon} alt="" />
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400' >We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
