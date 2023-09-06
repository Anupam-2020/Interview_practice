import React from 'react';
import './Card.css';
import Button from './Button';


function Card({product ,dashboard}) {
  return (
    <div className='parentClass'>
        <img src={`${product.image}`} alt='' />
        <div className='prod_details'>
          <p>{product.title}</p>
          <p style={{fontWeight: 'bold'}}>Rs. {product.price}</p>
        </div>
        <Button product={product} content= {dashboard === true ? 'Add To Cart' : 'Remove Item'}/>
    </div>
  )
}

export default Card;