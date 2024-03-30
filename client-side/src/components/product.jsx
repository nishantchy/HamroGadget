import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Product = () => {
  const [limit, setLimit] = useState(4);
  const [products, setProducts] = useState([]);
  const getProductList = async () => {
    const url = "http://127.0.0.1:8000/api/product";
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      console.log(responseJson);
      setProducts(responseJson.message);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="max-w-[1240px] w-full mx-auto py-11">
      <p className="text-center text-5xl font-bold uppercase tracking-tighter">
        Recent Products
      </p>
      <div className="flex justify-evenly items-center gap-6 flex-wrap py-11">
        {products &&
          products.slice(0, limit).map((product) => (
            <div className="w-72 h-96 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img
                  className="w-full h-full object-cover"
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.name}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  Rs. {product.sale_price}
                </p>
                <Link
                  className="flex justify-center bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
                  to={`/productdetail/${product.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="p-1 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
          to="/products"
        >
          View-More
        </Link>
      </div>
    </div>
  );
};

export default Product;
