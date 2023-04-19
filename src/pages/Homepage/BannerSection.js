import React from 'react'

const BannerSection = () => {
  return (
    <div className="lg:py-7 flex justify-between px-4 items-center bg-gray-1003 ">
      <div className='w-[45%] sm:hidden'>
        <p className='w-[65%]   mx-auto'>
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop autoplay ></lottie-player>
        </p>

      </div>
      <div className="w-[53%] pr-10 md:pr-2 sm:w-[100%] ">
        <h1 className='text-3xl font-semibold pb-2 sm:text-center'>Hi, I am Raj</h1>
        <p className='text-red-500 pb-3 mb-3 sm:text-center'>Some Dev, Freelancer, Rounder</p>
        <p className='text-justify '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam! Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente seddelectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam! </p>
      </div>
    </div>
  )
}

export default BannerSection