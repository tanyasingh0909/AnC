import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  useEffect(() => {
    const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);

    
    return () => clearInterval(interval);
}, []);

  return (
    <>
    <h1>Count is {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increament-Button</button>

      <div><button  onClick={()=>{setCount(count-1)}}>Decreament-Button</button></div>
    </>
  )
}

export default App
