import React from "react";
import "./Guarantee.css";
import high_quality from "../assets/high_quality.png";
import free_shipping from "../assets/free_shipping.png";
import easy_returns from "../assets/easy_returns.png";

const Guarantee = () => {
  return (
    <div className="guarantee-container">
      <div className="guarantee-text">
        <h2>We Stand Behind Our Products</h2>
        <p>
          We stands behind the quality of all of our products. Each item we make
          is meticulously thought out in-house by our team of passionate
          designers. We sell these products because we love them, we use them,
          and we want you to enjoy them too. They are meant to elevate your
          outdoor experience and withstand all normal rugged wear and tear.
          <br />
          <br />
          We also consciously work with manufacturers that exceed our standards
          for excellence and safety. If you are not 100% satisfied with your
          order you are always welcome to use our <u>30 day return</u> policy or
          let us know how we can make them better.
        </p>
      </div>
      <div className="guarantee-icons">
        <div className="high-quality">
          <img src={high_quality} alt="" />
          <p>QUALITY PROMISE</p>
        </div>
        <div className="free-shipping">
          <img src={free_shipping} alt="" />
          <p>FREE SHIPPING AT $100</p>
        </div>
        <div className="easy-returns">
          <img src={easy_returns} alt="" />
          <p>EASY RETURNS</p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
