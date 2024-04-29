import React, { useContext } from "react";
import "./Hero.css";
import { ShopContext } from "../../context/ShopContext";

import hero_img from "../assets/hero_img1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const { menu, setMenu } = useContext(ShopContext);

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-text">
          <p
            style={{
              color: "#2a412b",
              fontWeight: "600",
              fontSize: "16px",
              marginBottom: "16px",
            }}
          >
            SIZZLING DELIGHTS AWAIT
          </p>
          <h2>Fire Up & Feast</h2>
          <p style={{ fontSize: "14px" }}>
            Arm yourself with indispensable tools to craft delectable meals and
            elevate your outdoor dining experience into a culinary adventure
            you'll relish all season long.
          </p>
        </div>
        <div className="hero-left-btn">
          <Link to="/all" style={{ textDecoration: "none", color: "inherit" }}>
            <button
              onClick={() => {
                setMenu("all");
              }}
            >
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
