import React, {useState} from 'react'
import {Link} from "react-router-dom";

function CounterHook(){
  const [count, setCount] = useState(0)

  return (
    <div>

      <h1>
        {count}
      </h1>
      <h1 onClick={() => setCount(count+1)}>
        Increase
      </h1>
      <h1 onClick={() => setCount(count-1)}>
        Decrement
      </h1>
    </div>
  )
}


export default CounterHook
