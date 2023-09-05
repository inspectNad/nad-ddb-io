import React from 'react'
import burger from '../assets/img/projects/burger.jpg'
import RJS from '../assets/img/projects/react.png'

const Projects = () => {
  return (
    <div id='projects' name='projects' className='w-full md:h-screen text-gray-300 bg-[#03001C]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FFBF00]'>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${RJS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
            
          </div>
          <div style={{ backgroundImage: `url(${burger})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Projects
