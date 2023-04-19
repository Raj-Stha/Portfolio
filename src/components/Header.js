import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [nav, displayNav] = useState(false);
  return (
    <>
      <div className='header flex justify-between items-center p-3 bg-black text-white sticky top-0 z-10 sm:'>
        <div>
          <NavLink to={'/'} className='text-2xl px-4 hover:text-pink-500' >Demo</NavLink>

        </div>
        <div className="px-3">
          <div className="space-x-4  text-base  sm:hidden tracking-wide">
            <NavLink to={'about'} className='hover:text-pink-500'  >About</NavLink>
            <NavLink to={'contact'} className='hover:text-pink-500'>Contact</NavLink>
          </div>
          <div className="sm:flex hidden" onClick={() => { displayNav(nav === true ? false : true) }}>
            {nav === true ? <i class="fa-solid fa-xmark fa-xl p-2"></i> : <i className="fa-solid fa-bars fa-xl p-2"></i>}

          </div>
        </div>
      </div>

      {nav === true ?

        <div className="absolute right-0  w-[89px]  z-20 ">
          <div className="fixed p-3 items-center sm:flex sm:flex-col  text-white bg-black ">
            <NavLink to={'about'} className='hover:text-pink-500'  >About</NavLink>
            <NavLink to={'contact'} className='hover:text-pink-500'>Contact</NavLink>

          </div>
        </div>

        : null}


    </>
  )
}

export default Header