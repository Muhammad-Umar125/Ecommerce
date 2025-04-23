import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
    return (
        <div className='hero border flex flex-col sm:flex-row border-gray-400 mt-1.5'>
            <div className=' text-[#414141] flex flex-col w-full sm:w-1/2 items-center  justify-center py-10 sm:py-0'>
                <div >
                    <div className='flex items-center gap-2' >
                        <p className='bg-[#414141] w-8 md:w-11 h-[2px]'></p>
                        <p className='font-medium text-sm md:text-base ' >OUR BESTSELLERS</p>
                    </div>

                    <h1 className='text-3xl lg:text-5xl leading-relaxed prata-regular' >Latest Arrivals</h1>

                    <div className='flex items-center gap-2' >
                        <p className='font-semibold text-sm md:text-base '> SHOP NN</p>
                        <p className='bg-[#414141] w-8 md:w-11 h-[2px]'></p>
                    </div>
                </div>

            </div>
            <div className='w-full sm:w-1/2 h-'>
                <img src={assets.hero_img} alt="" />
            </div>

        </div>
    )
}

export default Hero
