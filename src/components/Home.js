import React, { useState } from "react";

function Home(props) {
  console.log(props.data);
  
const[getdata, setGetdata] =useState("jsndn")
  return (
    <>
    
  

      <h1>Home Components </h1>

      <div className="cart-wrapper">
        <div className="img-wraper item">
          <img
            className="logo"
            src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="text-wraper ">
          <span>I-Phone</span>
          <span>price:100$</span>
        </div>
        <div className="bttn-wrapper">
          <button onClick={ 
            
            
            ()=>   { props.addTocardhandler({price:'$100', name:"iphone" , })
            
          setGetdata(props.item)
          } 
          }
            
            
            >add to card </button>
        </div>
      </div>


    <h1 className="">Data:{getdata}</h1>
    </>
  );
}

export default Home;
