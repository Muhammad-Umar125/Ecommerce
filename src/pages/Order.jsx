import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Order = () => {
  const { cartItems, products, currency,cart,getCartAmount } = useContext(ShopContext)
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
    <div className='border-t pt-16 mt-8'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {

          cartData.map((item, index,quantity) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-22 sm:20 ' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-sm sm:text-lg font-medium' >{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>Date: {readableDate}</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <p className='w-3.5 h-3.5 bg-green-400 border rounded-full'></p>
                  <p>ready to ship</p>
                </div>
                <div className='flex items-center gap-2'>
                
                  <p className='border px-3 py-2'>Track Order</p>
                </div>
                

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Order
