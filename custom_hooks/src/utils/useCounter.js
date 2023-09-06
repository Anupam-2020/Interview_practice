import { useState } from 'react';

const useCounter = (val) => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + val);
    }

    const decrement = () => {
        setCount(count - val);
    }

    return {increment, decrement, count}
}

export default useCounter;