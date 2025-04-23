import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (


    <div className='border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19%] w-full' >
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] flex sm:w-full sm:mb-3  cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* project information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-5 my-8'>
            <p>select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map(((item, index) => (
                <button onClick={() => setSize(item)} className={`cursor-pointer border border-gray-200 py-2 px-4 bg-gray-100 ${item === size ? ' border-orange-500' : ''}`} key={index}>{item}</button>
              )))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:4/5 text-gray-200' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-200 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col text-sm text-gray-500 gap-4 border border-gray-200 px-6 py-6'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nobis, quia aut enim, assumenda perspiciatis fugit ipsa illo aspernatur nostrum similique eligendi et quae laboriosam aliquam qui, iste dignissimos!quibusdam, nesciunt at atque error? Dicta deserunt ab praesentium. Labore totam esse exercitationem repellat, Dolore quo cum itaque temporibus exercitationem repellat, similique non. Sint illum vero odio doloribus iure odit optio ipsa, natus quia nisi deserunt accusamus quod! Corrupti itaque enim consequuntur, ratione dolorem fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo delectus, libero assumenda sint ut consectetur, odio nobis reprehenderit soluta quibusdam, nesciunt at atque error? Dicta deserunt ab praesentium. Labore totam esse exercitationem repellat, hic cupiditate earum ipsam error ullam voluptatum necessitatibus repellendus aut est porro suscipit debitis accusamus quidem corporis voluptatibus voluptatem quo ab odio?</p>
        </div>
      </div>
       {/* related product */}
       <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
