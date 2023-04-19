import React from 'react'

const WhoIamSection = () => {
  return (
    <div >
      <h1 className='font-semibold text-3xl text-center p-4 mb-3'>Who am I</h1>
      <div className="relative mx-auto h-[350px] w-[350px]  sm:w-[220px] sm:h-[220px] text-white">
        <div className=" bg-black absolute w-[100%] h-[100%]     border-green-500  border-4 rounded-full ">
        </div>
        <div className=" w-[70%]   absolute left-[70%] top-[50%] translate-x-[-70%] translate-y-[-50%] space-y-1 text-sm  sm:text-xs sm:w-[92%] sm:left-[90%] sm:top-[50%] sm:translate-x-[-90%]  sm:translate-y-[-50%]">
          <p>Name : Raj Shrestha</p>
          <p>Email : rajcrestha00@gmail.com</p>
          <p>Tel: 98456****</p>
          <p>Experience : Java, JS, Flutter</p>

        </div>
      </div>
    </div>
  )
}

export default WhoIamSection