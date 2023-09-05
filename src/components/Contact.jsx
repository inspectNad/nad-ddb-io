import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#03001C] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/7500a170-386a-406d-83fe-bfe242ba1cb5" className='flex flex-col max-w-[1000px] w-full'>
        <div className='pb-8 text-gray-300 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FFBF00]'>Contact</p>
          <p className='py-4'>Submit the form below or shoot me an email - baldonadodante5@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' autofill/>
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#FFBF00] hover:border-[#FFBF00] hover:text-[#03001C] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
