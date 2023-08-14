import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import GitLab from "../assets/gitlab.png"
import GitHub from "../assets/github.png"
import Java from "../assets/java.png"
import Python from "../assets/python.png"
import ReactJS from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"

const Experience = () => {
  return (
    <div name='experience' className=' w-full h-screen bg-[#0D1116] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-700'>Experience</p>
                <p className='py-4'>// These are some of the technologies I have worked with</p>
            </div>
        <div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Java} alt="HTML icon"/>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Python} alt="HTML icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitLab} alt="HTML icon"/>
                    <p className='my-4'>GitLab</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon"/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={ReactJS} alt="HTML icon"/>
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon"/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md hover:shadow-[rgb(126,34,206)] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
                    <p className='my-4'>CSS</p>
                </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default Experience