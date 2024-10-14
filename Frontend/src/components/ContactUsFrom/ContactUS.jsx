import React from 'react'
import WhatsappIcon from '../../assets/Navbar/icons/WhatsappIcon'
import FacebookIcon from '../../assets/Navbar/icons/FacebookIcon'
import InstagramIcon from '../../assets/Navbar/icons/InstagramIcon'

export default function ContactUS() {
  return (
    <div className='px-5 grid grid-cols-1 sm:grid-cols-2 space-y-10'>
      <div className='space-y-10 flex flex-col items-center'>
        <h1 className='text-3xl'>Contact Us</h1>
        <div className='flex flex-col gap-y-5 w-full justify-center px-0 sm:px-5'>
          <button className='self-center flex items-center gap-x-3 border-[1.5px] border-[#22ff22] px-5 py-2 rounded-md w-full md:w-[70%]'>
            <WhatsappIcon size={40} />
            <h1>Whatsapp</h1>
          </button>
          <button className='self-center flex items-center gap-x-3 border-[1.5px] border-[#5890FF] px-5 py-2 rounded-md w-full md:w-[70%]'>
            <FacebookIcon size={40} />
            <h1>Facebook</h1>
          </button>
          <button className='self-center flex items-center gap-x-3 border-[1.5px] border-[#cd486b] px-5 py-2 rounded-md w-full md:w-[70%]'>
            <InstagramIcon size={40} />
            <h1>Instagram</h1>
          </button>
        </div>
      </div>

      <div>
        <form className='flex flex-col px-0 lg:px-5 space-y-5'>
          <div className='relative flex'>
            <input type='text' placeholder='Your Name' className=' border-solid border-2 border-black p-3 rounded-xl flex-1' />
            <label className='absolute top-[-25%] left-[20px] bg-white px-1' htmlFor="">Name</label>
          </div>
          <div className='relative flex'>
            <input type='email' placeholder='Your Email' className=' border-solid border-2 border-black p-3 rounded-xl flex-1' />
            <label className='absolute top-[-25%] left-[20px] bg-white px-1' htmlFor="">Email id</label>
          </div>
          <div className='relative flex'>
            <textarea placeholder='Your Message' className=' border-solid border-2 border-black p-3 rounded-xl flex-1' />
            <label className='absolute top-[-15%] left-[20px] bg-white px-1' htmlFor="">Message</label>
          </div>
          <button className=' py-4 rounded-xl flex-1 text-white' style={{ backgroundColor: "#FF004F" }}>
            Submit
          </button>
        </form>
      </div >


    </div >
  )
}
