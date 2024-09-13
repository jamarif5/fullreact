import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contect() {
  return (
    <>
    
    <h3>Contect us</h3>
    
    <p className="">Lorem ipsum dolor sit amet.
    </p>
    <p className="">Lorem ipsum dolor sit amet.
    </p><p className="">Lorem ipsum dolor sit amet.
    </p>
    <Link to='company' >Company</Link>
    <Link to='chanal' >chanal</Link>
    <Outlet/>
    </>
  )
}

export default Contect