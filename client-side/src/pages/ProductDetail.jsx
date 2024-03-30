import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalMenu from "../components/Modal";

const ProductDetail = ({ cart, setCart }) => {
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const id = params.productId;

  const getProductList = async () => {
    const url = `http://127.0.0.1:8000/api/product/${id}`;
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      console.log(responseJson);
      setProduct(responseJson.message);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  const addToCart = (product) => {
    // Check if user is logged in
    const isLoggedIn = true; // Replace with your authentication logic
    if (isLoggedIn) {
      setCart((cart) => [...cart, product]);
      toast.success(`${product.name} is added to cart`);
    } else {
      // If user is not logged in, open the modal
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="h-screen flex justify-center items-center max-w-[1240px] w-full mx-auto gap-11 flex-wrap">
        <div className="h-[300px] w-[300px]  border border-gray-300 rounded-md overflow-hidden">
          <img
            src={`http://127.0.0.1:8000/storage/${product.image}`}
            alt={product.name}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-semibold py-3">{product.name}</p>
          <p className="text-2xl font-semibold py-2">Rs.{product.sale_price}</p>
          <p className="text-lg py-3 max-w-[500px]">{product.details}</p>
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ModalMenu
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductDetail;
