import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

function CartProduct({ item, addSubTotal, reduceSubTotal, removeProduct }) {
  const [cartProduct, setCartProduct] = useState(item);
  const { price, size, quantity, title } = cartProduct;
  const cost = (quantity * price).toFixed(2);

  useEffect(() => {
    addSubTotal(cost);
  }, []);

  const addQuantity = () => {
    setCartProduct({
      ...cartProduct,
      quantity: quantity + 1,
    });
    addSubTotal(price);
  };

  const reduceQuantity = () => {
    if (quantity > 0) {
      setCartProduct({
        ...cartProduct,
        quantity: quantity - 1,
      });
      reduceSubTotal(price);
    }
  };

  const handleDelete = () => {
    removeProduct(item.pno);
    reduceSubTotal(cost);
  };
  return (
    <div className="relative text-white flex justify-between p-6 w-full border-t-[1.5px] border-t-gray-800">
      {/* left side container -------------------> */}
      {/* --------------------------->  */}
      <div className="flex gap-2 items-center">
        <img
          src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80s"
          alt="product image"
          className="w-16 h-22"
        />
        <div>
          <h3>{title}</h3>
          <h3 className="text-gray-400 ">Size: {size}</h3>
          <h3 className="text-gray-400 ">Quantity: {quantity}</h3>
        </div>
      </div>

      {/* right side container -----------------------> */}
      {/* -----------------------------------> */}
      <div className="flex flex-col justify-center">
        <h3 className="text-yellow-500 mt-2 text-right">${cost}</h3>
        <div className="flex mt-3">
          <button
            onClick={() => addQuantity()}
            className="w-7 h-7 hover:bg-yellow-500 border-r-[1px] border-r-gray-700 flex justify-center items-center text-white text-xl bg-gray-800"
          >
            +
          </button>
          <button
            onClick={() => reduceQuantity()}
            className="w-7 h-7  hover:bg-gray-900 flex justify-center items-center text-white text-xl bg-gray-800"
          >
            -
          </button>
        </div>
      </div>

      <div className="absolute top-3 text-xl right-4 cursor-pointer">
        <RxCross2 onClick={() => handleDelete()} />
      </div>
    </div>
  );
}

export default CartProduct;
