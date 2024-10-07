import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactUS from '../../components/ContactUsFrom/ContactUS'
import Image from '../../assets/Navbar/image.png'
import Poster from '../../assets/Navbar/imgg.png'

function HomePage() {
  return (
    <div>
  <Navbar/>



{/* slider part */}
<div className='my-4'>
<SliderPoster/>
</div>

{/* Catagory list  */}
<div className='m-4 p-2'>
<CatagoryCard title={"Bangalore Silk"} img={Image}/>
<CatagoryCard title={"Bangalore Silk"} img={Image}/>
<CatagoryCard title={"Bangalore Silk"} img={Image}/>
<CatagoryCard title={"Bangalore Silk"} img={Image}/>
</div>


{/* see more button */}
<div className='flex align-middle justify-center	'>
    <button className='m-3 py-5 px-14 border-2 border-solid border-black rounded-full'>
        See More
    </button>
</div>


{/* Horizontal slider for top collection  */}

<h1 className='mx-6 mt-14 mb-7'>Top Collection </h1>
<div className='flex overflow-x-auto space-x-2'>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
<HorizontalSlider/>
</div>







<ContactUS/>
    </div>
  )
}

export default HomePage


function HorizontalSlider(){
  return <>
  
<div className='flex-none'>
  <img  src={Image} alt='img.png' className='h-96 w-80 object-contain ' />
</div>

  </>
}

function CatagoryCard({title,img}){
  return <>
  <div className='mt-4'>
  <h1>
      {title}
  </h1>

  <img src={img} alt='img.png' className='mt-2'/>
  </div>
  </>
}


function SliderPoster(){
  return <>
  <div>

<img src={Poster} alt='img.png'/>

  </div>
  
  </>
}
