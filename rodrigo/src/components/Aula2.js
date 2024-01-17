import React, { useState } from 'react'


let count = 0;

const Aula2 = () => {

    const [count, setCount] = useState(0)

    const add = () =>{
       setCount (count + 1)
    
    }

  return (

        <div>
        <h1>Contador</h1>
        <button onClick={add}>Click</button>
        <h3>{count}</h3>
        </div>
    
    
  )
}

export default Aula2