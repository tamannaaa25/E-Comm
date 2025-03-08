import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = () =>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>SUBSCRIBE NOW AND GET 20% OFF</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, consectetur.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white px-3 py-2'>SUBSCRIBE NOW</button>
      </form>
    </div>
  )
}

export default NewsletterBox
