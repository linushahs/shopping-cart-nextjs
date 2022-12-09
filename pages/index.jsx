import { SetStateAction, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import SizeSection from "../components/SizeSection";
import ProductSection from "../components/ProductSection";
import CartSection from "../components/CartSection";

const Home = () => {
  const [size, setSize] = useState([]);
  const [item, setItem] = useState([]);

  const setSizeOfProduct = (e) => {
    setSize([...size, e]);
  };

  const filterSize = (e) => {
    const filteredSize = size.filter((s) => s != e);
    setSize(filteredSize);
  };

  const addItem = (e) => {
    setItem([...item, e]);
  };

  const removeProduct = (id) => {
    setItem(item.filter((e) => e.pno != id));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-20">
      <Head>
        <title> Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex ">
        <SizeSection
          setSizeOfProduct={setSizeOfProduct}
          filterSize={filterSize}
        />
        <ProductSection arrOfSize={size} addItem={addItem} />
      </div>
      <CartSection item={item} removeProduct={removeProduct} />
    </div>
  );
};

export default Home;
