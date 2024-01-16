import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constant/url';
import { individualProduct } from '../api/getApi';

const ProductDetails = () => {
  const {id} = useParams();
  const [prodDetails, setProdDetails] = useState();

  useEffect(() => {
    const url = BASE_URL + "/" +id;
    individualProduct(url)
    .then(res => {
      setProdDetails(res);
      console.log(res);
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <div>
      {prodDetails ? (
        <div>
          <h2>{prodDetails.title}</h2>
          <img src={prodDetails.images[0]} alt={prodDetails.brand}/>
          <p>{prodDetails.description}</p>
          <h3>${prodDetails.price}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      ) }
    </div>
  )
}

export default ProductDetails;