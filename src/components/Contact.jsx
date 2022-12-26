import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0D1116] justify-center items-center p-20 px-10 pb-1 mx-auto md:grid-cols-3 content-start group align-baseline m-auto mx:container'>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300 align-baseline'>Contact me
                  <div classname='py-3 my-8 mx-auto flex space-x-[75px]'>
                    <a href="https://www.linkedin.com/in/abdurraouf/">
                      <button className='text-white border-2 bg-[#0D1116] hover:bg-blue-600 hover:border-blue-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>LinkedIn </button> 
                    </a>
                    <a href="mailto:Roofa.Etagiuri1@gmail.com"> 
                      <button className='text-white border-2 bg-[#0D1116] hover:bg-green-600 hover:border-green-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>Email</button>
                    </a>
                    <a href="https://drive.google.com/file/d/1qX4iB4JqZejm6P2G-lQjoq9DKXq8LOBR/view?usp=sharing"> 
                      <button className='text-white border-2 bg-[#0D1116] hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>Resume</button>
                    </a>
                    <a href="https://github.com/AbdurraoufE"> 
                      <button className='text-white border-2 bg-[#0D1116] hover:bg-gray-600 hover:border-gray-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>GitHub</button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Contact