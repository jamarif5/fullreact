import React from 'react'




class User extends React.Component{
 constructor()
 {

  
  
super()
this.state = {
  count:0



}

 }
 shouldComponentUpdate(){

console.warn("should component Update", this.state.count);
if (this.state.count>5 && this.state.count<11) {
  return true 
}


 }
  
 
render()


{

console.log("render", this.state.emil);



return(
<>
<h1>user component {this.state.count} </h1>
<button onClick={()=>this.setState({count:this.state.count+1})}>update emil</button>


</>
)


}
}






export default User;
// function User({data}) {
//   return (
//    <>
//    <div className='click'>
    
//     <h1>user (Jam Arif) </h1>

//     <button onClick={data}>click </button>
    
//     </div>
 
   
   
//    </>
//   )
// }


