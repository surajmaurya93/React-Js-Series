import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
        <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout

// The Outlet component in React Router DOM is a placeholder that renders child routes within a parent route. It's a useful tool for creating complex navigation structures and sharing layouts across multiple routes. 