import { ADD_to_CART } from "../Constants";

 export const addTocard=(data)=>{
console.log('action', data);

return{
type:' ADD_to_CART',

data:data

}

}
