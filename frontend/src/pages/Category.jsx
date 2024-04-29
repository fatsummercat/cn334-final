import React, { useContext } from "react";
import "./css/Category.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";

const Category = props => {
  const { products } = useContext(ShopContext);

  return (
    <div className="category">
      <h1 className="category-hero-text">{props.hero_text}</h1>
      <img className="category-banner" src={props.banner} alt="" />
      <div className="category-index-sort">
        <p>
          <span>Showing 1-9</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src="" alt="" />
        </div>
      </div>
      <div className="category-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                discounted_price={item.discounted_price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Category;
