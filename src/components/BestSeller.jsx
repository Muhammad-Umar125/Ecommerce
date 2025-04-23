import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSellers, setBestSellers] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller); // Filter bestsellers
        setBestSellers(bestProduct.slice(0,5)); // Set state once
    }, [products]); // Depend on 'products' to re-run when it changes    console.log("last")

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos architecto, corrupti beatae suscipit magnam ad maxime.
                </p>
            </div>
            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSellers.map((item, index) => {
                        return (
                            <ProductItem key={index} products={item}></ProductItem>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default BestSeller
