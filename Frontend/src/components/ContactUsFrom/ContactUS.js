import React from 'react'

export default function ContactUS() {
  return (
    <div className='p-4'>
    <h1 className='mt-12 mb-6'>Contact Us</h1>
    <form className='flex flex-col'>
    
    <input type='text' placeholder='Your Name' className='m-2 border-solid border-2 border-black p-3 rounded-xl'/>
    <input type='email' placeholder='Your Email'className='m-2 border-solid border-2 border-black p-3 rounded-xl'/>
    <textarea placeholder='Your Message'className='m-2 border-solid border-2 border-black p-3 rounded-xl'/>
    
    <button className='m-3  mx-24 py-4 rounded-full  text-white' style={{backgroundColor:"#FF004F"}}>
        Submit
    </button>
    </form>
    
    
    </div>
  )
}
