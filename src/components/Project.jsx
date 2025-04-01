import React from 'react'
import Proj1 from '../projects/Proj1'

const Project = () => {
  return (
    <div  id="project" className=' bgg primary-color min-w-full  scroll-smooth max-w-[1200px] mx-auto pl-8 ' >

      {/* Project Title */}
      <div  className='pb-8 ml-20 '>
        <p data-aos='fade-right' className='text-4xl mb-3 font-bold bg-gradient-to-r bg-pink-500 text-transparent bg-clip-text from-blue-500 to-teal-400  inline-block'>Project</p>
        <p data-aos='fade-left' className='text-gray-400'>Check out some of my recent project</p>
      </div>

      {/* Project Grid */}
      <div data-aos='fade-up' className='ml-20 mr-20 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Projects */}
        <Proj1 />
        
        {/* Add more projects here */}

      </div>
    </div>
  )
}

export default Project