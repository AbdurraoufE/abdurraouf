import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0D1116]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-blue-500'>/* Hello! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Abdurraouf Etagiuri</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Software Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am currently in my 3rd year Computer Scinece major, enrolled in 
                University of Saskatchewan. I love developing and creating new projects 
                in either a group setting or alone. */</p>
            <div>
                <a href="https://drive.google.com/file/d/1aTu-VKaT4mujMH9Bklxffax00yAMrgoN/view?usp=sharing">
                  <button id="downloadBtn" value="download" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>My work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'> </HiArrowNarrowRight>
                </span>
                </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home