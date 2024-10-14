import React from 'react'
import Sidebar from '../../assets/Navbar/Sidebar.png'
import MainLogo from '../../assets/Navbar/MainLogo.png'
import WishList from '../../assets/Navbar/WishList.png'
import Search from '../../assets/Navbar/search.png'
import Mike from '../../assets/Navbar/mike.png'
import MenuIcon from '../../assets/Navbar/icons/MenuIcon'
import HeartIcon from '../../assets/Navbar/icons/HeartIcon'
import HomeIcon from '../../assets/Navbar/icons/HomeIcon'
import SearchIcon from '../../assets/Navbar/icons/SearchIcon'
import Mic_Icon from '../../assets/Navbar/icons/Mic_Icon'

function Navbar() {
  return (
    <nav className='flex justify-between items-center gap-x-2 px-3 sm:px-10 fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-2 sm:py-0 flex-wrap sm:flex-nowrap'>
      <div className='block sm:hidden'>
        <MenuIcon />
      </div>


      <div className='py-1'>
        <img className='w-20 aspect-[1/0.6] object-cover' src={MainLogo} alt="" />
      </div>


      <div className='hidden lg:block'>
        <ul className='lg:flex gap-x-5 '>
          {
            [1, 2, 3, 4].map(item => (
              <li key={String(item)}>
                <a className='flex items-center gap-x-1' href="#">
                  <HomeIcon size={16} />
                  <span className='text-sm'>HOME</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>


      <div className='hidden sm:flex bg-[#00000015] py-1 px-2 items-center rounded-full md:w-[80%] lg:w-[40%]  gap-x-1 -bottom-[100%]  w-full left-0'>
        <SearchIcon color='gray' />
        <input className='bg-transparent py-0.5 flex-1 outline-none border-none' type="text" placeholder='Serach' />
        <button className='bg-black rounded-full p-2'>
          <Mic_Icon color='#FFF' size={17} />
        </button>
      </div>


      <div className=''>
        <HeartIcon />
      </div>


      <div className='w-full bg-[#00000015] flex items-center px-1.5 rounded-full py-1 sm:hidden'>
        <SearchIcon color='gray' />
        <input className='bg-transparent py-0.5 flex-1 outline-none border-none' type="text" placeholder='Serach' />
        <button className='bg-black rounded-full p-2'>
          <Mic_Icon color='#FFF' size={17} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar



function SearchBar() {
  return <>

    <img src={Search} alt='img.png' className='h-7 w-7' />
    <input type='text' className='focus:outline-none focus:border-none' />
    <img src={Mike} alt='img.png' className='h-7 w-7' />

  </>
}




