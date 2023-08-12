import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(2);

  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.products);
      setProduct(data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts(`https://dummyjson.com/products?limit=100`);
  }, []);

  const previousPage = () => {
    if (pages > 0) {
      setPages((pages) => pages - 1);
    } else {
      setPages(0);
    }
  };

  const nextPage = () => {
    if (pages < product.length / 10 - 1) {
      setPages((page) => page + 1);
    } else {
      setPages(product.length / 10 - 1);
    }
  };

  return (
    <>
      <div className="products__box">
        {product.slice(pages * 10, pages * 10 + 10).map((data) => {
          return (
            <div className="products">
              <div key={data.id}>{data.title}</div>
              <span>
                <img src={data.thumbnail} alt={data.id} />
              </span>
            </div>
          );
        })}
      </div>
      <div className="pagination__div">
        <span className="pagination" onClick={previousPage}>
          ◀
        </span>
        <span>{pages+1}</span>
        <span className="pagination" onClick={nextPage}>
          ▶
        </span>
      </div>
    </>
  );
}
