import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function User() {
  const pharam =useParams()
  const {name}=pharam
  console.log(name);
  const user =useLocation()
  console.log(user);
  
  
  return (

    <div> this is {name} Page</div>

  )
}

export default User