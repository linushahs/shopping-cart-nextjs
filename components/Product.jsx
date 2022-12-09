import React from "react";
import Image from "next/image";

function Product({ src, addItem, item }) {
  let cost = (item.quantity * item.price).toFixed(2);
  cost = cost.toString();

  const handleItem = () => {
    addItem(item);
  };

  return (
    <div className="w-52 text-center mb-8">
      <div className="w-full relative">
        <img
          src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt="Product 1"
          className="h-auto bg-left mb-2"
          height="200px"
        />
        <span className="absolute top-0 right-0 bg-gray-900 text-white text-xs py-1 px-2">
          Free shipping
        </span>
      </div>
      <h3 className="h-12">{item.title}</h3>
      <hr className="w-6 h-0.5 my-1 rounded mx-auto  bg-yellow-500" />
      <p className="text-sm text-gray-600">
        $<span className="text-xl text-black ml-1">{cost.substring(0, 2)}</span>
        .{cost.substring(3)}
      </p>
      <p className="text-sm text-gray-600 tracking-wide">
        or {item.quantity} x
        <span className="text-gray-500 font-bold">${item.price}</span>
      </p>
      <button
        onClick={() => handleItem()}
        className="w-full bg-black hover:bg-yellow-500 mt-4 text-white py-3"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
