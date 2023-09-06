import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const {products} = useSelector(state => state.cart);

  return (
    <nav className='header'>
        <div>
            <Link className='li' to={'/'}>Products</Link>
            <Link className='li' to= {'/cart'}>Cart</Link>
        </div>
        <Link to={'/cart'}>🛒 {products.length}</Link>
    </nav>
  )
}
