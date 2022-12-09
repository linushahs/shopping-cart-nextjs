import { React, useState } from "react";

function Size({ size, setSizeOfProduct, filterSize }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleSizeButton = (e) => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      setSizeOfProduct(e);
    } else {
      filterSize(e);
    }
  };
  return (
    <li
      className="w-10  cursor-pointer hover:bg-gray-200 rounded-full h-10 bg-gray-100 flex justify-center items-center text-xs"
      style={{
        backgroundColor: isClicked ? "black" : "rgb(229 231 235)",
        color: isClicked ? "white" : "black",
      }}
      onClick={() => handleSizeButton(size)}
    >
      {size}
    </li>
  );
}

export default Size;
