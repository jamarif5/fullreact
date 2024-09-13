import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
    const [search,setSearch]=useSearchParams()

    console.log(search.get('age'));
    
  return (
  <>
  
  <h1 className="">Filltex</h1>
  </>
  )
}

export default Filter