import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchApi } from "../api/getApi";
import { BASE_URL } from "../constant/url";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetchApi(BASE_URL)
    .then(data => {
      const sliceData = data.slice(0,6);
      setTrendingProducts(sliceData);
      console.log(data);
    })
    .catch(err => console.log(err));
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
        <h2>Trending Products 🔥</h2>
        {trendingProducts.map((data) => {
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
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Link to="/products">
          <button
            style={{
              width: "100%",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
              cursor: "pointer",
            }}
          >
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
