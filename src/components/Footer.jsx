import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
 
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 gap-14'>
                <div>
                    <img className='w-32 mb-5' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus provident mollitia rem, illo aperiam impedit culpa maxime iusto ratione facilis adipisci numquam officiis molestiae quo, deserunt, laboriosam totam possimus?</p>

                </div>
                <div>
                    <p className='text-2xl font-medium mb-5' >COMPANY</p>
                    <ul className='text-gray-600' >
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-2xl font-medium mb-5' >GET IN TOUCH</p>
                    <ul className='text-gray-600' >
                        <li>+92-3313652280</li>
                        <li>contact@foreveryou.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className='text-gray-400' />
                <p className='py-5 text-sm text-center' >Copyrigh 2025@ forever.com -All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
