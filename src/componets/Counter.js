import React, {useState, useEffect} from 'react';

const Counter = ({value = 10}) => {
  const [count, setCount] = useState(0);

  const suma = () => {setCount((numero) => numero +1)}
  
  useEffect()=>{console.log(count)}, [count])

  return(
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={suma}>+1</button>
    </>
  )
}

  export default Counter;
