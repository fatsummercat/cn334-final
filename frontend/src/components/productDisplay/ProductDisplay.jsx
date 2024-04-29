import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = props => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-dis-left">
        <div className="product-dis-img-list">
          <img src={product.image_1 || product.image} alt="" />
          <img src={product.image_2 || product.image} alt="" />
          <img src={product.image_3 || product.image} alt="" />
          <img src={product.image_4 || product.image} alt="" />
        </div>
        <div className="product-dis-img">
          <img src={product.image} alt="" className="product-dis-img-main" />
        </div>
      </div>
      <div className="product-dis-right">
        <h1>{product.name}</h1>
        <div className="product-dis-right--prices">
          <div className="product-dis-right--discounted-price">
            ${product.discounted_price}
          </div>
          <div className="product-dis-right--price">${product.price}</div>
        </div>
        <div className="product-dis-right--description">
          {product.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </div>
        <button onClick={() => addToCart(product.id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
