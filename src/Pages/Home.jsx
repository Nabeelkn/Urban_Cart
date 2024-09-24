import React from 'react'
import Header from '../Components/Header'
import man from '../assets/images/image.png'
import { FiSearch } from "react-icons/fi";
import { FaArrowCircleRight } from "react-icons/fa";
import cloth from '../assets/images/cloth.jpg'
import jewellary from '../assets/images/jewellary.jpg'
import electronics from '../assets/images/electronics.jpg'
import {Link} from "react-router-dom";
import Footer from '../Components/Footer';
function Home() {
  return (
    <>
      <section className='section1 px-4 py-2 overflow-y-hidden'>

        {/* home contents */}
        <div className=' homeBg relative container h-screen mx-auto rounded-[60px]'>
          <Header />

          {/* image */}
          <img src={man} alt="" className='h-[450px] z-10 mt-[-80px] ml-[-100px]' />

          {/* homepage descriptions */}
          <div className='z-10 flex justify-between'>

            <div className='text-center w-[800px] ml-36'>
              <h1 className='text-[70px] ml-24 mt-[-350px] font-semibold leading-none'>Let's Shop <br />All-In-One</h1>
              <p className='text-[30px] font-thin  ml-24'>Visit collections and follow your passions</p>
            </div>
            <div className='items-center text-center mt-[-330px] px-5'>
              <p className='bg-[#006600] text-white p-2 w-[90px] ml-8 rounded-2xl text-[10px]'>BEST SERVICES</p>
              <h4 className='mb-2' >Why Make Our Products <br /> Makes You Happy</h4>
              <p className='bg-[#ffffff]  p-2 w-[100px] mb-2 ml-8 rounded-xl text-[10px]'>BEST VALUE</p>
              <p className='bg-[#ffffff]  p-2 w-[100px] mb-2 ml-8 rounded-xl text-[10px]'>BEST OFFERS</p>
              <p className='bg-[#ffffff]  p-2 w-[100px]  ml-8 rounded-xl text-[10px]'>QUICK RESPONSE</p>
            </div>
          </div>

          {/* serach-bar */}
          <div className='absolute  bg-[#ffffff] p-5 w-[900px] ml-[180px] mt-[-100px] rounded-2xl drop-shadow-md'>
            <div className='flex ml-40 mt-5'>
              <input type="text" placeholder='Search' className='w-[500px] h-[70px] p-2 rounded-l-md text-black bg-[#e2dcd7]' />
              <button className='btn bg-[#e2dcd7] h-[70px] w-[50px] rounded-r-md'> <FiSearch className='text-[30px]' /></button>
            </div>

            <div className='flex justify-evenly mt-7'>
              <div className='text-pretty font-semibold w-[100px] bg-[#fcf9f6] p-3 rounded-md drop-shadow-md'>
                <h4>
                  Popular <br /> Items
                </h4>
                <FaArrowCircleRight />
              </div>
              <div className='text-pretty font-semibold w-[200px] bg-[#fcf9f6] p-3 rounded-md drop-shadow-md'>
                <h4>
                  Special Offers <br /> For You
                </h4>
                <FaArrowCircleRight />
              </div>
              <div className='text-white text-pretty font-semibold w-[100px] bg-[#7fabef] p-3 rounded-md drop-shadow-md'>
                <Link to={'/products'}>
                  Show <br /> All
                </Link>
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        </div>

        {/* below landing screen */}
        <div className='mt-24'>
          <h1 className='ml-[200px] font-bold text-[30px]'>Explore Popular Categories</h1>

          <div className='px-10 ml-[200px] mt-10 flex justify-between'>
            <Link  className='flex gap-4 h-[150px] w-[180px] drop-shadow-2xl rounded-xl bg-[#f5eade] '>
              <h3 className='mt-14 ml-4 font-bold'>Clothes</h3>
              <img src={cloth} className='rounded-lg ' />
            </Link>
           
            <Link className='flex gap-4 h-[150px] w-[180px] drop-shadow-2xl rounded-xl bg-[#f5eade] '>
              <h3 className='mt-14 ml-4 font-bold'>Jewellary</h3>
              <img src={jewellary} className='rounded-lg ' />
            </Link>

            <Link className='flex gap-4 h-[150px] w-[180px] drop-shadow-2xl rounded-xl bg-[#f5eade] '>
              <h3 className='mt-14 ml-4 font-bold'>Electronics</h3>
              <img src={electronics} className='rounded-lg ' />
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home