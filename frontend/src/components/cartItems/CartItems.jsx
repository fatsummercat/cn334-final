import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import cross_icon from "../assets/cross_icon.png";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalAmount } =
    useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="cart-items-cell">
                <img src={e.image} alt="" className="cart-items-product-img" />
                <p>{e.name}</p>
                <p>${e.discounted_price}</p>
                <button className="cart-items-qty">{cartItems[e.id]}</button>
                <p>${e.discounted_price * cartItems[e.id]}</p>
                <img
                  className="cart-items-remove-icon"
                  src={cross_icon}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-bottom">
        <div className="cart-items-total">
          <h1>Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
