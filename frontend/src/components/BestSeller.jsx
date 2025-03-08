import React, { useContext, useEffect, useState } from 'react'
import { ShopContxt } from '../context/ShopContxt'
import ProductItem from './ProductItem';
import Title from './Title';


const BestSeller = () => {

    const {products} = useContext(ShopContxt);
    const [bestSeller,setBestSeller]= useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>item.bestseller);
        setBestSeller(bestProduct.slice(0,5));
        console.log(bestProduct);
},[products]);

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1= {'BEST'} text2={'SELLERS'}></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-bas text-gray-600'>
            Find your next favorite outfit from our best sellers, crafted for the modern man's wardrobe.</p>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={`${item.price.toFixed(2)}`}/>
                ))
            }
      </div>
          

    </div>
  )
}

export default BestSeller
