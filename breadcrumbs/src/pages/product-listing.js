import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constant/url';
import { fetchApi } from '../api/getApi';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchApi(BASE_URL)
    .then(res => setProducts(res))
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {products.map((data) => {
          return (
            <div
              key={data.id}
              style={{ border: "1px solid #d6d4d4", marginBottom: "10px" }}
            >
              <Link to={`/products/${data.id}`}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    style={{ objectFit: "contain", padding: "1rem" }}
                  />
                  <h3 style={{ fontWeight: "bold" }}>{data.title}</h3>
                  <h3>${data.price}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;