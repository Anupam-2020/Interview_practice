import React, { useEffect, useState } from 'react'
import './Products.css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../store/productSlice';
import { StatusCode } from '../util/statusCode';

function Products() {
    // const [products, setData] = useState([]);
    const {data, loading} = useSelector(state => state.products);
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();


    // const getApiData = async (url) =>{
    //     const response = await fetch(url);
    //     const data = await response.json()
        // setData(data);
    // }

    // console.log(products)

    useEffect(() => {
        // getApiData('https://fakestoreapi.com/products');
        dispatch(getProducts());
    },[]);

    if(loading === StatusCode.LOADING) {
        return <p>Loading...</p>
    }

    if(loading === StatusCode.ERROR) {
        return <p>Something went wrong</p>
    }

  return (
    <div className='parentDiv'>
        {data && data.slice(page*10, 10+10*page).map((product, index) => {
                return(
                    <div key={index}>
                        <Card  product={product} dashboard={true}/>
                    </div>
                )
            })}
    </div>
  )
}

export default Products;