import React ,{useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Protected(props) {
    const{b}=props
    const  navegate=useNavigate()

useEffect(() => {
 const login = localStorage.getItem('login')
 if (!login) {
    navegate("/login")
 }
})


  return (
    <>
   
   
 
  
    </>
  )
}

export default Protected