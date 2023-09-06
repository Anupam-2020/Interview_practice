import React from 'react';
import useCounter from '../../utils/useCounter';


const  Increment = () => {
    const {decrement, count} = useCounter(3);

  return (
    <div>
      <p>Decrement - {count}</p>
      <button onClick={decrement}>Increment</button>
    </div>
    
  )
}

export default Increment;