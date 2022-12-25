import React from 'react'

const Contact = () => {
  return (
    // <div name='contact' className='w-full h-screen bg-[#0D1116] flex justify-center items-center p-4'>
    //     <form method='POST' action='https://getform.io/f/cb8dbb6f-18b9-4b30-9a1b-206f30254ac6' className='flex flex-col max-w-[600px] w-full'>
    //         <div className='pb-100'>
    //             <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300 '>Contact me</p>
    //             <p className='text-gray-300 py-4'>Please fill out the form or contact me via email:</p>
    //             <p className='text-blue-400 p-3'>Roofa.Etagiuri1@gmail.com</p>
    //         </div>
    //         <input classname='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
    //         <input classname= 'my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
    //         <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
    //         <button className='text-white border-2 bg-[#0D1116] hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
    //     </form>
    // </div>

    <div name='contact' className='w-full h-screen bg-[#0D1116] flex justify-center items-center p-20 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4 content-start'>
      <p className='text-4xl font-bold inline border-b-4 py-3 border-blue-600 text-gray-300'>Contact me</p>
      <div className='py-3 my-8 mx-auto flex space-x-[75px]'>
        <a href="https://www.linkedin.com/in/abdurraouf/"> 
          <button className='text-white border-2 bg-[#0D1116] hover:bg-blue-600 hover:border-blue-600 px-8 py-3 my-8 mx-auto flex items-center rounded-br-lg'>LinkedIn </button> 
        </a>
        <a href="mailto:Roofa.Etagiuri1@gmail.com"> 
          <button className='text-white border-2 bg-[#0D1116] hover:bg-green-600 hover:border-green-600 px-8 py-3 my-8 mx-auto flex items-center rounded-br-lg'>Email</button>
        </a>
        <a href="/"> 
          <button className='text-white border-2 bg-[#0D1116] hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 my-8 mx-auto flex items-center rounded-br-lg'>Resume</button>
        </a>
        <a href="https://github.com/AbdurraoufE"> 
          <button className='text-white border-2 bg-[#0D1116] hover:bg-gray-600 hover:border-gray-600 px-8 py-3 my-8 mx-auto flex items-center rounded-br-lg'>GitHub</button>
        </a>
      </div>
    </div>
  )
}

export default Contact