import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import CartProduct from "./CartProduct";

function CartSection({ item, removeProduct }) {
  const [showCart, setShowCart] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  const addSubTotal = (cost) => {
    const total = (parseFloat(subTotal) + parseFloat(cost)).toFixed(2);
    setSubTotal(total);
  };

  const reduceSubTotal = (cost) => {
    const total = (parseFloat(subTotal) - parseFloat(cost)).toFixed(2);
    setSubTotal(total);
  };

  return (
    <div>
      {/* shopping cart section ------------------->  */}
      {/* ----------------------------->  */}
      <div
        className="fixed top-0 right-0 bg-gray-900 p-4"
        style={{ display: showCart ? "none" : "flex" }}
      >
        <button className="text-white" onClick={() => setShowCart(true)}>
          <FaShoppingCart className="text-2xl" />
        </button>
        <span className="fixed top-8 font-bold right-2 flex justify-center items-center w-4 h-4 text-xs bg-yellow-500  rounded-full">
          {item.length}
        </span>
      </div>

      {/* Cart container -----------------------> */}
      {/* --------------->  */}
      <div
        className="fixed top-0 right-0"
        style={{ display: showCart ? "flex" : "none" }}
      >
        <button className="bg-black p-4 text-white fixed right-[450px]">
          <RxCross2 className="text-2xl" onClick={() => setShowCart(false)} />
        </button>
        {/* Cart section container  */}
        <div className="w-[450px] bg-black min-h-screen">
          <div className="relative flex justify-center h-40 items-center">
            <button className="text-white relative">
              <FaShoppingCart className="text-2xl" />

              <span className="fixed top-[85px] font-bold right-[238px] text-black flex justify-center items-center w-4 h-4 text-xs bg-yellow-500  rounded-full">
                {item.length}
              </span>
            </button>{" "}
            <h3 className="text-white ml-4 text-2xl">Cart</h3>
          </div>

          {/* Cart product container  */}
          {/* ---------------------------->  */}
          <div className="h-[50vh] overflow-scroll">
            {item.map((obj, id) => (
              <CartProduct
                item={obj}
                key={id}
                addSubTotal={addSubTotal}
                reduceSubTotal={reduceSubTotal}
                removeProduct={removeProduct}
              />
            ))}
          </div>

          {/* Footer section ------------------------>  */}
          {/* ------------------------------> */}
          <div className="shadow before:absolute before:block before:w-full before:h-[10px] before:-t-[20px] before:l-0 before:bg-gradient-to-t from-gray-900 to-transparent">
            <div className="flex justify-between pt-10 px-6 text-white">
              <h3 className="text-white tracking-wider">SubTotal</h3>
              <div className="flex flex-col gap-2 items-end">
                <h2 className="text-xl text-yellow-500">${subTotal}</h2>
                <h3 className="text-white ">
                  OR UP TO 9 x <span>$3.89</span>
                </h3>
              </div>
            </div>
            <button className="py-4 my-6 mx-6 bg-gray-900 hover:bg-gray-800 w-[90%] text-white">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
