import React from 'react'
import PIC from '../assets/img/media/BG1.JPG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#03001C] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:text-right pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FFBF00]'>About</p>
        </div>
          <div className='max-w-[1000px] w-full grid grid-cols-2'>
              </div>
              <div className='max-w-[800px] w-full grid sm:grid-cols-2 px-4'>
                <img src={PIC} alt="" className='rounded-xl w-[300px] mb-4'/>
                <div>
                  <p className='top-50%'>My interest in technology started back in 2010 when I thought about how certain social media app works.</p>
                </div>
              </div>

      </div>
    </div>
  )
}

export default About
