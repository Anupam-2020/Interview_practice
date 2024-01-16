import React, { forwardRef } from 'react'

// User component is for forward ref demo.
const User = (props, ref) => {
    console.log(ref);
  return (
    <div>
        <input type='text' ref={ref}/>
    </div>
  )
}

export default forwardRef(User);