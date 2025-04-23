import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {

  const {showSearch,setShowSearch,getCartTotal} = useContext(ShopContext)
  const [visible, setVisible] = useState(false)

  return (
    <div className='navbar flex justify-between items-center font-medium '>
      <Link to='/'>
        <img src={assets.logo} className='w-44' alt="" />
      </Link>
      <ul className=' hidden md:flex gap-8  text-gray-700'>
        <NavLink to="/"> <li>HOME</li> </NavLink>
        <NavLink to="/collection"> <li>COLLECTION</li></NavLink>
        <NavLink to="/about"> <li>ABOUT</li></NavLink>
        <NavLink to="/contact"> <li>CONTACT</li></NavLink>
      </ul>
      <div className="flex gap-6">
        <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
        <div className="group relative">
         < Link to={'/login'}> <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className="flex flex-col w-36 bg-slate-100 py-3 px-5 rounded text-gray-500">
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative w-5'>
          <img src={assets.cart_icon} alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] rounded-full aspect-square text-center w-4 bg-black text-white text-[10px]'>{getCartTotal()}</p>
        </Link>
        <img onClick={() => { setVisible(true) }} className='w-5 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />

        {/* slidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'}`}>

          <div className='flex flex-col text-gray-600'>
            <div onClick={() => { setVisible(false) }} className='flex items-center gap-4 p-4 cursor-pointer'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6  border ' to='/'>Home</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6  border ' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6  border ' to='about'>About</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6  border ' to='/contact'>Contact</NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
