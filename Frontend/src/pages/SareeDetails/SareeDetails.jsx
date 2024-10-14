import React from 'react'
import Img from "../../assets/Navbar/image.png"
import ContactUS from '../../components/ContactUsFrom/ContactUS'
import Navbar from '../../components/Navbar/Navbar'
import { TopCollections } from '../HomePage/HomePage'
function SareeDetails() {
  return (
    <div className='space-y-10 md:space-y-20 pt-20 md:pt-0 pb-10'>
      <Navbar />
      <ProductDetails />
      <TopCollections title={"You May also like"} />
      <ContactUS />
    </div>
  )
}

export default SareeDetails


const ProductDetails = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-5 gap-5 md:gap-0 '>
      <ImageSection />
      <DetailsSection />
    </div>
  )
}




const ImageSection = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full aspect-square  gap-2'>
      <div className='flex flex-row md:flex-col gap-3 overflow-auto w-[100%] md:w-[17%] md:h-[95%] lg:h-[85%] md:items-center'>
        {
          new Array(10).fill("https://i.pinimg.com/474x/b5/d9/28/b5d928b9743e104ec7e62c81addb5cf0.jpg")
            .map((item, index) => (
              <button key={String(index)}>
                <img className='min-w-16 md:w-16 aspect-square object-cover rounded-md' src={item} alt="" />
              </button>
            ))
        }
      </div>
      <div className=' w-[100%] aspect-square md:w-[80%] md:h-[95%] lg:h-[85%] relative'>
        <img className='w-[100%] h-[100%] object-cover absolute rounded-md' src={"https://i.pinimg.com/474x/b5/d9/28/b5d928b9743e104ec7e62c81addb5cf0.jpg"} alt="" />
      </div>
    </div>
  )
}

const DetailsSection = () => {
  return (
    <div className='md:px-10 space-y-5'>
      <div>
        <h1>PRODUCT NAME</h1>
        <p>Product Details</p>
      </div>
      <div>
        <h1>PRICE : 1299.00</h1>
        <p>Price Details</p>
      </div>
      <div>
        <h1>Descriptions</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque amet officiis esse repellendus, ipsam dolore delectus, ea quidem assumenda molestias quas iure maiores repellat, illum quisquam magnam! Nulla, esse voluptatum!</p>
      </div>
    </div>
  )
}
