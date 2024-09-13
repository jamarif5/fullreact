import React from 'react'
import { Link } from 'react-router-dom'

function Navebar() {
  return (
    <>
    <Link to ="/about">About</Link>
    <Link to ="/">Home</Link>
    <Link to="/filter">Filter</Link>
 <Link to="/contect">contect</Link>

</>
  )
}

export default Navebar