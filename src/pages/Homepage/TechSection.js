import React from 'react'
import { FaCss3, FaJava, FaPython, FaReact, FaSwift, FaVuejs } from 'react-icons/fa'

const TechSection = () => {
  return (
    <div className='p-4 py-2'>
      <h1 className='text-3xl font-semibold py-4 px-2  text-center'>Technologies I use</h1>

      <div className="text-9xl grid grid-cols-4 justify-items-center  gap-y-8 p-4 sm:grid-cols-2 sm:text-8xl">
        <FaReact className='hover:scale-125 duration-200 ease-in-out' />
        <FaJava className='hover:scale-125 duration-200 ease-in-out' />
        <FaVuejs className='hover:scale-125 duration-200 ease-in-out' />
        <FaCss3 className='animate-bounce' />
        <FaPython className='hover:scale-125 duration-200 ease-in-out' />
        <FaSwift className='hover:scale-125 duration-200 ease-in-out' />


      </div>

    </div>
  )
}

export default TechSection