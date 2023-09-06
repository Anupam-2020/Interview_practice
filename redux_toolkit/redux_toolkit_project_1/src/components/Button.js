import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/cartSlice';

function Button({product, content}) {
    const dispatch = useDispatch();

    const cartOperation = (prod) => {
        if(content === 'Add To Cart') {
            dispatch(actions.addProducts(prod))
        } else {
            dispatch(actions.removeItems(product.id))
        }
    }

  return (
    <div>
        <button onClick={() => cartOperation(product)} className='cartButton'>{content}</button>
    </div>
  )
}

export default Button;