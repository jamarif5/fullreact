import React, { useState,useRef } from 'react'

function Controlled() {
  let [val ,setVal]=useState("enter your text")
  const inputrf = useRef(null)
  function sumbitform(e) {

   console.log("input fild 1st ", inputrf.current.value);
   
    e.preventDefault()
  }
  return (
    <>


<h1 className="">HOC</h1>


<Hoc cm= {Cuonter}/>
    </>
  )
}
function Hoc(props) {
  return<h2 style={{backgroundColor:'red'}}><props.cm/></h2>
}

function Cuonter() {
 const[item ,setItem]=useState(0)
  return <div>
<h2>{item}</h2>
    <h1 onClick={()=>setItem(item+1)}>Update </h1>

  </div>
  
}


export default Controlled