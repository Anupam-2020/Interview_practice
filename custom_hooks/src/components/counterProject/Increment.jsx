import React from 'react';
import useCounter from '../../utils/useCounter';


const  Increment = () => {
    const {increment, count} = useCounter(4);

  return (
    <div>
      <p>Increment - {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
    
  )
}

export default Increment;