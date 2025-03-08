
import React, { useContext } from 'react'
import { ShopContxt } from '../context/ShopContxt'
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png.jpg'


const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(ShopContxt);
    const imageUrl = image && image.length > 0 ? image[0] : placeholder;

  return (
    <Link className=' text-gray-700 cursor-pointer' to={`/product/${id}`}>
       <div className='overflow-hidden'>
       <img 
    className='hover:scale-110 transition ease-in-out'
    src={imageUrl} 
    alt={name}
    onError={(e) => e.target.src = placeholder}  
/>
        </div> 
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium '>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;
