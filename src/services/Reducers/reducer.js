
import { ADD_to_CART } from "../Constants";


const initialstate={

cartdData:[]

}

export  default function carditem(state=[],action) {

switch (action.type) {
    case  ADD_to_CART:
        
    return[
...state,
   {cartdData:action.data}


    ]
        
       

    default:
        return state
        
}
    
}