import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

        <div>
            <img src={logo} className='mb-5 w-32' alt="" />
            <p className='w-ful md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis debitis doloribus aut tenetur? Quibusdam dignissimos optio sed provident molestiae hic vel reprehenderit facilis, saepe quidem inventore at voluptas, voluptatibus sit accusantium odio repellat laudantium aperiam unde sequi placeat ducimus iure?
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>CLASSYKNOT</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>

        

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 1234567890</li>
                <li>abc@gmail.com</li>

            </ul>
        </div>

      </div>
      <div >
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2025@ classyknot.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
