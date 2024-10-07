import React from 'react'
import Img from "../../assets/Navbar/image.png"
import ContactUS from '../../components/ContactUsFrom/ContactUS'
import Navbar from '../../components/Navbar/Navbar'
function SareeDetails() {
  return (
    <>
      

<Navbar/>

      <div
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "370px",
          width: "100%", 
          borderRadius: "8px", 
          marginTop:"20px"
        }}
      ></div>

<div className='h-16 w-full m-3 flex overflow-x-auto space-x-2'>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
    <img src={Img} alt='Img.png'/>
</div>
   

<div className='m-5'>
    <h1>
    Bangalore Silk Saree
    </h1>

    <div className="flex mt-2" style={{textSize:"10px"}}>
        <p className="text-red-600 text-lg font-bold mr-2">₹6,999.00</p>
        <p className="text-gray-500 text-base line-through">₹8,999.00</p>
      </div>

<button className='bg-black text-white w-full h-10 rounded-xl mt-6'>
    Buy it on 
</button>

<div className='m-3 p-2'> 
    <h1 className='font-semibold text-3xl my-3'>
        Description
    </h1>
<ul className='list-disc mx-7'>
    <li>
        Description
    </li>
    <li>
        Description
    </li>
    <li>
        Description
    </li>
    <li>
        Description
    </li>
</ul>
</div>

</div>

<div>
    <h1>
        You May also like
    </h1>

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



</div>


<ContactUS/>


    </>
  )
}

export default SareeDetails


function HorizontalSlider(){
    return <>
    
  <div className='flex-none'>
    <img  src={Img} alt='img.png' className='h-72 w-60 object-contain ' />
  </div>
  





    </>
  }