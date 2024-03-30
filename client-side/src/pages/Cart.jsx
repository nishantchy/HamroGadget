import React from "react";

const Cart = ({ cart, setCart }) => {
  //   console.log("Cart type:", typeof cart);
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.sale_price, 0);
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto py-11 h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center py-4">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <img
                src={`http://127.0.0.1:8000/storage/${item.image}`}
                alt={item.name}
                className="w-20 h-20 object-contain mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Rs. {item.sale_price}</p>
              </div>
              <div className="flex justify-end gap-4 items-center">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-end gap-5 items-center mt-4">
            <p className="text-xl font-semibold bg-yellow-400 py-2 px-4 rounded">
              Total: Rs. {calculateTotalPrice()}
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300">
              CheckOut
            </button>
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
