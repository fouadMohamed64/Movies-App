import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
      About Us
      <div>
      {/* <Link style={{marginLeft: '50px', textDecoration: 'none'}} className='btn btn-primary' to='/aboutUs/values'>Values</Link> */}
      <Link style={{marginLeft: '50px', textDecoration: 'none'}} className='btn btn-primary' to='/aboutUs'>Values</Link>
      <Link style={{marginLeft: '50px', textDecoration: 'none'}} className='btn btn-success' to='/aboutUs/vision'>Vision</Link>
      </div>
      <Outlet />
    </div>
  )
}