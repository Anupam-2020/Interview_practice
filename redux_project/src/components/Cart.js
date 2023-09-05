import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './Cart.css';


function Cart() {
  const product = useSelector(state => state.cart);

  return (
    <div className='cart'>
    {product.products.map((data, index) => {
      return (
        <div key={index}>
          <Card product={data} dashboard={false}/>
          </div>
      )
    })}
    </div>
  )
}

export default Cart;