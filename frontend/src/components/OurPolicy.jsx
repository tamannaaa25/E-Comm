import React from 'react'
import exchange_icon from '../assets/exchange_icon.jpg.png';
import quality_icon from '../assets/quality_icon.jpg';
import support_icon from '../assets/support_icon.jpg';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12  sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold '>EASY EXCHANGE POLICY</p>
        <p className='text-gray-400'>WE OFFER HASSLE FREE EXCHNAGE POLICY</p>
      </div>


      <div>
        <img src={quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold '>SUPERIOR QUALITY</p>
        <p className='text-gray-400'>BUILD FOR QUALITY, DESIGNED FOR YOU</p>
      </div>


      <div>
        <img src={support_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold '>BEST CUSTOMER SUPPORT</p>
        <p className='text-gray-400'>WE PROVIDE 24/7 CUSTOMER SUPPORT SERVICE.</p>
      </div>
    </div>


    


       
  )
}

export default OurPolicy
