import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0D1116] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About Me
                    </p>
                </div>
                <div></div>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className=' sm:text-right text-4xl font-bold'>
                        <p># I am Abdurraouf Etagiuri. Nice to meet you!</p>
                    </div>
                    <div>
                       <p> // I am a passionate computer science student, with a deep
                              love for coding and the ability to turn imaginary ideas
                              into reality through code. This varies from a very complex topics
                              to a very simple website. I am looking forwards for new opportunities
                              to learn and grow as a developer. 
                       </p> 
                    </div>
            </div>
        </div>
    </div>
  );
};

export default About