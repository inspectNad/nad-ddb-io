import React from 'react'

// SKILLS ICONS
import HTML from '../assets/img/skills-acquired/html.png'
import NET from '../assets/img/skills-acquired/.net.png'
import REACTJS from '../assets/img/skills-acquired/reactJS.ico'
import CSS from '../assets/img/skills-acquired/CSS.png'
import JSL from '../assets/img/skills-acquired/JS.png'
import TW from '../assets/img/skills-acquired/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#03001C] text-gray-300 h-screen w-full'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FFBF00]'>Skills</p>
          <p className='py-4'>These are the technologies that I've worked with</p>
        </div>
      
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={NET} alt='HTML icon'/>
            <p className='my-4'>VB .Net</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={REACTJS} alt='HTML icon'/>
            <p className='my-4'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JSL} alt='HTML icon'/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TW} alt='HTML icon'/>
            <p className='my-4'>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
