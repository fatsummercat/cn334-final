import React from "react";
import "./Topsellers.css";
import top_sellers from "../assets/topsellers";
import Item from "../item/Item";

const Topsellers = () => {
  return (
    <div className="top-sellers-container">
      <h1>TOP SELLERS</h1>
      <div className="top-sellers">
        {top_sellers.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Topsellers;
