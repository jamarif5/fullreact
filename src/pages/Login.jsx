import React,{useEffect} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate,  } from 'react-router-dom';



function Login() {
const login=()=>{

  localStorage.setItem('login,',true)
  navegate("/")
}
const navegate =useNavigate()
useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
     navegate("/")
  }
 })
  
  return (
    <>
    <h1>Login</h1>
     <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
        <button onClick={login}>Login</button>
      </FloatingLabel>
    
    
    </>
  )
}

export default Login