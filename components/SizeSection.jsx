import { React, useState } from "react";
import Size from "./Size";

function SizeSection({ setSizeOfProduct, filterSize }) {
  const sizes = ["XS", "S", "M", "L", "ML", "XL", "XXL"];

  return (
    <div className="w-60  h-screen p-5">
      <h2 className="mb-4 font-bold">Sizes</h2>
      <ul className="flex gap-3 flex-wrap">
        {sizes.map((size, id) => (
          <Size
            key={id}
            size={size}
            setSizeOfProduct={setSizeOfProduct}
            filterSize={filterSize}
          />
        ))}
      </ul>
    </div>
  );
}

export default SizeSection;
