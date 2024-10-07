import React from 'react'
import Sidebar from '../../assets/Navbar/Sidebar.png'
import MainLogo from '../../assets/Navbar/MainLogo.png'
import WishList from '../../assets/Navbar/WishList.png'
import Search from '../../assets/Navbar/search.png'
import Mike from '../../assets/Navbar/mike.png'

function Navbar() {
  return (
    <div>
        
    <div className='flex justify-between items-center	'>
<img src={Sidebar} alt='sidebar.png' className='w-10 h-10 m-2'/>
<img src={MainLogo} alt='logo.png'className='w-20 h-20'/>
<img src={WishList} alt='wishlist.png' className='w-10 h-10 m-2'/>
     </div>

<div className='flex border-2 border-black rounded-2xl justify-between mx-4 p-2' >
<SearchBar/>
</div>

     </div>
  )
}

export default Navbar



function SearchBar(){
    return <>

    <img src={Search} alt='img.png' className='h-7 w-7'/>
    <input type='text' className='focus:outline-none focus:border-none' />
    <img src={Mike} alt='img.png' className='h-7 w-7'/>

    </>
}




