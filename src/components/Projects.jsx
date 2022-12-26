import React from 'react'
import portfolio from '../assets/portfolio.png'
import LMS from '../assets/LMS.png'
import comingSoon from '../assets/Soon.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0D1116]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Projects</p>
                <p className='py-6'>These are some of my projects I have created</p>
            </div>
    
        {/* Container */}
        <div className='sm:grid-cols-2 md:grid-cols-3 gap-4 'src={portfolio}>

            {/* Card container */}
            <div style={{backgroundImage: `url(${portfolio})`}} className='shadow-lg shadow-[rgb(101,184,252)] group container rounded-md flex justify-center items-cener mx-auto content-div'>

                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        My Portfolio
                    </span>
                    <div className='pt-8 text-center items-center'>
                        <a href="https://abdurraoufe.github.io/abdurraouf/"> 
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AbdurraoufE/abdurraouf"> 
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${LMS})`}} className='shadow-lg shadow-[rgb(101,184,252)] group container rounded-md flex justify-center items-cener mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                Library Management System Group Project
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://docs.google.com/document/d/1wiCpxy3gPqjDNPYPfT0pRI3YbbiWDi8MJZs-Ot-8-5Y/edit?usp=sharing"> 
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/"> 
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${comingSoon})`}} className='shadow-lg shadow-[rgb(101,184,252)] group container rounded-md flex justify-center items-cener mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Coming Soon...
                </span>
                <div className='pt-8 text-center'>
                    <a href="/"> 
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/"> 
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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