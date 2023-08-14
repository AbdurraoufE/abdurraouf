import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='max-w-[1000px] mx-auto p-4 w-full h-screen bg-[#0D1116] justify-center items-center p-20 px-10 pb-1 mx-auto md:grid-cols-3 content-start group align-baseline m-auto mx:container'>
//       <div>
//         <p className='bg-[#0D1116] text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300 align-baseline'>
//         <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Contact Me</p>
//         <p className='py-4'>/ These are my contact information</p>

//         <div></div>
//           <div classname='bg-[#0D1116] py-3 my-8 mx-auto flex space-x-[75px]'>
//             <a href="https://www.linkedin.com/in/abdurraouf/">
//               <button className='text-white border-2 bg-[#0D1116] hover:bg-blue-600 hover:border-blue-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>LinkedIn </button> 
//             </a>
//             <a href="mailto:Roofa.Etagiuri1@gmail.com"> 
//               <button className='text-white border-2 bg-[#0D1116] hover:bg-green-600 hover:border-green-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>Email</button>
//             </a>
//             <a href="https://drive.google.com/file/d/1aTu-VKaT4mujMH9Bklxffax00yAMrgoN/view?usp=sharing"> 
//               <button className='text-white border-2 bg-[#0D1116] hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>Resume</button>
//             </a>
//             <a href="https://github.com/AbdurraoufE"> 
//               <button className='text-white border-2 bg-[#0D1116] hover:bg-gray-600 hover:border-gray-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-br-lg grid-cols-2 sm:grid-cols-4 gap-4 text-center'>GitHub</button>
//             </a>
//         </div>
//       </p> 
//     </div>
//   </div>
//   )
// }
// export default Contact

const Contact = () => {
  return( 
    <div name= "contact" className='w-full h-screen bg-[#0D1116] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Info for the top part of contact */}
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-purple-700'> Contact Me</p>
          <p className='py-4'>/* These are my contact information */</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-4 gap-8 px-4'>
          <a href="https://www.linkedin.com/in/abdurraouf/">
              <button className='text-white border-2 bg-[#0D1116] hover:bg-blue-600 hover:border-blue-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-full grid-cols-2 sm:grid-cols-4 gap-4 text-center'>LinkedIn </button>
              <p className='text-center text-purple-700'>Reach out to me on LinkedIn!</p> 
           </a>
            <a href="mailto:Roofa.Etagiuri1@gmail.com"> 
               <button className='text-white border-2 bg-[#0D1116] hover:bg-green-600 hover:border-green-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-full grid-cols-2 sm:grid-cols-4 gap-4 text-center'>Email</button>
               <p className='text-center text-purple-700'>Reach out to me on Email!</p> 
             </a>
             <a href="https://drive.google.com/file/d/1Rj5BCgfIgRPbYN6OAIphDeGAwTCBGO6I/view?usp=sharing"> 
               <button className='text-white border-2 bg-[#0D1116] hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-full grid-cols-2 sm:grid-cols-4 gap-4 text-center'>Resume</button>
               <p className='text-center text-purple-700'>View my Resume!</p> 
             </a>
             <a href="https://github.com/AbdurraoufE"> 
               <button className='text-white border-2 bg-[#0D1116] hover:bg-gray-600 hover:border-gray-600 px-8 py-3 my-8 mx-auto flex sm:items-left md:items-center rounded-full grid-cols-2 sm:grid-cols-4 gap-4 text-center'>GitHub</button>
               <p className='text-center text-purple-700'>View my recent activity on GitHub!</p> 
             </a>

        </div>
      </div>
    </div>
  )
}
export default Contact