import React from 'react'
import VERSION from '../../package.json';
const footer = () => {
  return (
    <div className='w-full h-full bg-[#03001C] p-4 text-gray-300'>
      <p className='text-center'>Design and Built by Dante Baldonado &nbsp;Version {VERSION.version}</p>
    </div>
  )
}

export default footer
