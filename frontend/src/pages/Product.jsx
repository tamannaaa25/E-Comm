import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContxt } from '../context/ShopContxt';
import { assets } from '../assets/assets';
import star_icon from '../assets/star_icon.png';
import star_dull from '../assets/star_dull.png';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {

  const {productId} = useParams();
  const {products , currency , addToCart} = useContext(ShopContxt);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(' ');
  const [size, setSize] = useState(' '); 


  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find(item => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]); 
        console.log('Product Data:', product); 
      }
    };

    fetchProductData();
  }, [productId, products]);


  

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opactiy-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
<div className='flex sm:flex-col overflow-x- auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
    {productData.image && 
      productData.image.map((item, index)=>(
        <img onClick={()=>setImage(item)} key={index} src={item} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
         />
      ))
    }
</div>
<div className='w-full sm:w-[80%]'>
    <img className='w-full h-auto ' src={image} alt="" />
</div>
</div>
      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <img src={star_icon} alt="" className="w-3 5" />
          <img src={star_icon} alt="" className="w-3 5" />
          <img src={star_icon} alt="" className="w-3 5" />
          <img src={star_icon} alt="" className="w-3 5" />
          <img src={star_dull} alt="" className="w-3 5"/>
          <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {productData.sizes.map((item, index)=>(
              <button onClick={()=>setSize(item)}
              className={`border py-2 px-4 bg-gray-100' ${item === size ? 'border-orange-400 ': ''} `} key={index}>{item}</button>
            ))}

          </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-70'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Orignal product.</p>
          <p>...</p>
          <p>...</p>
        </div>
      </div>
      </div>
            <div className='mt-20'>
              <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews(22)</p>
              </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloremque, quod totam repudiandae ea ex. Magnam saepe necessitatibus asperiores in.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nisi numquam unde fugit commodi rerum.</p>
            </div>
            </div>
            <div>
          {/*----<RelatedProducts category = {productData.category} subCategory={productData.subCategory} />---*/}
          </div>

    </div>

  ) : 
  <div className='opacity-0'></div>
};

export default Product;
