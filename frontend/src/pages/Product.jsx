import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/productDisplay/ProductDisplay";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find(e => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
