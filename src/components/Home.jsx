import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Link from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#03001C]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FFBF00]'>Hi, my name </p>
        <h1 className='text-4xl md:text-7xl text-[#ccd6f6] pb-1'>Dante Baldonado</h1>
        <h2 className='text-2xl md:text-4xl text-[#8892b0] py-4'>Aspiring Fullstack Developer</h2>
        <p className='text-white max-w-[600px] pb-2'>
          Greetings! I'm an aspiring Full Stack Developer. Welcome to my portfolio, where code transforms into captivating experiences. As a passionate developer, I bridge the gap between server and client, crafting solutions with purpose. Explore my projects and join me in shaping the digital world, one line of code at a time. Let's connect and collaborate!
        </p>
        <div>
            <button className='group transition ease-in-out hover:-translate-y-1 hover:scale-110 text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFBF00] hover:border-[#FFBF00] hover:text-[#03001C] duration-300 rounded-2xl' disabled title='Disabled button'>
              <span className='tracking-wider	' >View Work</span>
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
