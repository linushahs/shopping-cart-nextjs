import { useState } from "react";
import Product from "./Product";

function ProductSection({ arrOfSize, addItem }) {
  const allProducts = [
    {
      pno: 1,
      title: "Basic Cactus white T-shirt",
      quantity: 9,
      price: 1.21,
      size: "XS",
    },
    {
      pno: 2,
      title: "Skater black sweatshirt",
      quantity: 3,
      price: 4.42,
      size: "S",
    },
    {
      pno: 3,
      title: "Cropped Stay Groovy Off white",
      quantity: 3,
      price: 4.42,
      size: "M",
    },
    {
      pno: 4,
      title: "Black Tule Oversized",
      quantity: 5,
      price: 5.89,
      size: "L",
    },
    {
      pno: 5,
      title: "Black Batman T-shirt",
      quantity: 9,
      price: 1.21,
      size: "ML",
    },
    { pno: 6, title: "Blue T-shirt", quantity: 3, price: 3.0, size: "XL" },
    {
      pno: 7,
      title: "Loose Black T-shirt",
      quantity: 5,
      price: 2.8,
      size: "XXL",
    },
    { pno: 8, title: "Ringer Hall Pass", quantity: 9, price: 1.21, size: "XS" },
  ];

  const [items, setItems] = useState(allProducts);

  return (
    <div className="w-[1024px] p-5 ">
      <h3 className="mb-4">
        <span>15</span> Product(s) found
      </h3>
      <div className="container flex flex-wrap gap-4">
        {!arrOfSize[0]
          ? items.map((item, id) => (
              <Product key={id} addItem={addItem} item={item} />
            ))
          : items
              .filter((item) => arrOfSize.includes(item.size))
              .map((item, id) => (
                <Product key={id} addItem={addItem} item={item} />
              ))}
      </div>
    </div>
  );
}

export default ProductSection;
