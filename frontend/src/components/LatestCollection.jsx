import React, { useContext, useEffect, useState } from 'react';
import { ShopContxt } from '../context/ShopContxt';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContxt);
    const [latestProducts, setLatestProducts] =useState([ ]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products]);

  return (  
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-ms sm:text-sm md:text-base text-gray-600 '>
            "Step into a wardrobe that reflects your ambition, confidence, and drive to stand out effortlessly."</p>
        </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item)=>(
                <ProductItem 
                key={item._id} 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price}/>
            ))
        }
    </div>

    </div>
  );
};

export default LatestCollection
