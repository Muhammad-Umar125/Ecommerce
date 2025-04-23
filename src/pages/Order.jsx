import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Order = () => {
  const { cartItems, products, currency } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const today = new Date();
  const readableDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='border-t pt-8 md:pt-16 mt-4 md:mt-8'>
      <div className='text-xl md:text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id)
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:grid md:grid-cols-[4fr_2fr_1fr] items-start md:items-center gap-4 md:gap-6'>
              {/* Product Info */}
              <div className='flex items-start gap-4 md:gap-6 w-full'>
                <img className='w-16 md:w-24 flex-shrink-0' src={productData.image[0]} alt={productData.name} />
                <div className='flex-grow'>
                  <p className='text-sm md:text-lg font-medium'>{productData.name}</p>
                  <div className='flex flex-wrap items-center gap-2 md:gap-4 mt-2'>
                    <p className='text-sm md:text-base'>{currency}{productData.price}</p>
                    <p className='text-sm md:text-base'>Quantity: {item.quantity}</p>
                    <p className='text-sm md:text-base'>Size: {item.size}</p>
                  </div>
                  <div className='mt-2'>
                    <p className='text-xs md:text-sm text-gray-500'>Date: {readableDate}</p>
                  </div>
                </div>
              </div>

              {/* Status and Tracking */}
              <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-auto gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='w-3 h-3 bg-green-400 rounded-full flex-shrink-0'></span>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-3 py-2 text-sm md:text-base hover:bg-gray-50 transition-colors'>
                  Track Order
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Order