import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const BaseRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseRoute