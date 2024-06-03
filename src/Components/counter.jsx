import React from 'react'

import { useState } from 'react'

const [count, setCount] = useState(second)

const counter = () => {
  return (
    <div>
         <p>Count is {count}</p>
      <button onClick={()=>{setCount(count+1)}} >Increament-Button</button>

<div><button onClick={()=>{setCount(count-1)}}>Decreament-Button</button></div>
    </div>
  )
}

export default counter
