import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactUS from '../../components/ContactUsFrom/ContactUS'
import Image from '../../assets/Navbar/image.png'
import Poster from '../../assets/Navbar/imgg.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const topCollections = [
  {
    id: 1,
    url: "https://i.pinimg.com/564x/c9/a8/d1/c9a8d1adf8213e151a30f8a955994027.jpg",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/474x/b5/d9/28/b5d928b9743e104ec7e62c81addb5cf0.jpg",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/474x/05/71/33/057133826d2aa4213f225d8f97375b47.jpg",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/474x/ca/7c/9a/ca7c9a4d18a262dfb7727858815853fd.jpg",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/474x/f6/8e/37/f68e37efd3924a71cf1707def062a547.jpg",
  },
  {
    id: 6,
    url: "https://i.pinimg.com/474x/68/15/1e/68151e9ee4575e216bc2582e74da83bd.jpg",
  },
  {
    id: 7,
    url: "https://i.pinimg.com/474x/41/82/d2/4182d20a6bbdf6747190a2664a1825b4.jpg",
  },
  {
    id: 8,
    url: "https://i.pinimg.com/474x/fc/48/95/fc48950c087c764ee2d4bc2899b5c079.jpg",
  },
  {
    id: 9,
    url: "https://i.pinimg.com/474x/20/53/f1/2053f147e9c569c248bb8796dbdde900.jpg",
  },
  {
    id: 10,
    url: "https://i.pinimg.com/474x/cb/a2/31/cba231234ebdf2d371ccc72ee809100b.jpg",
  },
]

const categories = [
  {
    id: 1,
    name: "Assam Silk Sarees",
    url: "https://www.mysoresareeudyog.com/media/wysiwyg/assam_silk_saree.PNG"
  },
  {
    id: 2,
    name: "Chanderi Silk Sarees",
    url: "https://www.mysoresareeudyog.com/media/wysiwyg/chanderi_silk.PNG"
  },
  {
    id: 3,
    name: "Cotton Silk Sarees",
    url: "https://www.mysoresareeudyog.com/media/wysiwyg/cotton_silk.PNG"
  },
  {
    id: 4,
    name: "Banarsi Silk Sarees",
    url: "https://www.mysoresareeudyog.com/media/wysiwyg/banarasi_silk_sarees.PNG"
  },
]

function HomePage() {
  return (
    <div className=' space-y-20 pt-10 sm:pt-0'>
      <Navbar />


      {/* slider part */}
      <div className='my-4'>
        <SliderPoster />
      </div>

      {/* Catagory list  */}
      <div className='space-y-5'>
        <div>
          <h1 className='ml-5 text-3xl'>Categories</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-5'>
          {
            categories.map(item => <CatagoryCard title={item.name} img={item.url} />)
          }
        </div>


        {/* see more button */}
        <div className='flex align-middle justify-center	'>
          <button className='m-3 py-3 px-10 border-2 border-solid border-black rounded-full'>
            See More
          </button>
        </div>
      </div>


      {/* Horizontal slider for top collection  */}

      <TopCollections />






      <ContactUS />
      <div className='bg-black py-5'>
        <h1 className='text-white text-center'>©isksamirul</h1>
      </div>
    </div>
  )
}

export default HomePage


function CatagoryCard({ title, img }) {
  return <>
    <div className=' space-y-0'>
      <h1 className='bg-gradient-to-b from-gray-200 via-white to-white shadow-md text-center py-2 font-semibold'>
        {title}
      </h1>
      <button className='bg-white p-2 shadow-md'>
        <img className=" object-cover aspect-[1/1.3]" src={img} alt='img.png' />
      </button>
    </div>
  </>
}


function SliderPoster() {
  return <>
    <AwesomeSlider className='aspect-video lg:aspect-[1/0.3] bg-white'>
      <div className='flex justify-around w-full bg-white h-full'>
        <img className='object-cover' src="https://i.pinimg.com/564x/54/33/f9/5433f93445a294a40be72296ffa4ba05.jpg" alt="" />
        {/* <img src="https://i.pinimg.com/564x/1e/13/18/1e1318097399445c304c38e35661f1e8.jpg" alt="" /> */}
      </div>
      <div className='flex justify-around w-full bg-white h-full'>
        <img className='object-cover' src="https://i.pinimg.com/564x/54/33/f9/5433f93445a294a40be72296ffa4ba05.jpg" alt="" />
        {/* <img src="https://i.pinimg.com/564x/1e/13/18/1e1318097399445c304c38e35661f1e8.jpg" alt="" /> */}
      </div>
      <div className='flex justify-around w-full bg-white h-full'>
        <img className='object-cover' src="https://i.pinimg.com/564x/54/33/f9/5433f93445a294a40be72296ffa4ba05.jpg" alt="" />
        {/* <img src="https://i.pinimg.com/564x/1e/13/18/1e1318097399445c304c38e35661f1e8.jpg" alt="" /> */}
      </div>
    </AwesomeSlider>

  </>
}


export const TopCollections = ({title = "Top Collection"}) => {
  return (
    <div className='space-y-5'>
      <h1 className='ml-5 text-3xl'>{title}</h1>
      <div className='flex overflow-x-auto space-x-2 pb-5 px-5'>
        {
          topCollections.map(item => (
            <button key={String(item.id)} className='min-w-[45%] md:min-w-[30%] lg:min-w-[20%] aspect-[1/1.3] bg-white p-1.5 shadow-md'>
              <img className='h-full w-full object-cover' src={item.url} alt="" />
            </button>
          ))
        }
      </div>
    </div>

  )
}