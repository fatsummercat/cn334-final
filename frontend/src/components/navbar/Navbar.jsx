import React, { useContext } from "react";
import "./Navbar.css";
import user_icon from "../assets/user_icon.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { menu, setMenu, getTotalItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p
          onClick={() => {
            setMenu("");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            OUTDOOR & CAMPING
          </Link>
        </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={e => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "all" ? "active-menu" : ""}
        >
          <Link to="/all" style={{ textDecoration: "none", color: "inherit" }}>
            All
          </Link>
        </li>
        <li
          onClick={e => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "grill & dine" ? "active-menu" : ""}
        >
          <Link
            to="/grill-dine"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Grill & Dine
          </Link>
        </li>
        <li
          onClick={e => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "lights & lanterns" ? "active-menu" : ""}
        >
          <Link
            to="/lights-lanterns"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Lights & Lanterns
          </Link>
        </li>
        <li
          onClick={e => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "tools" ? "active-menu" : ""}
        >
          <Link
            to="/tools"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Tools
          </Link>
        </li>
        <li
          onClick={e => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "store & carry" ? "active-menu" : ""}
        >
          <Link
            to="/store-carry"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Store & Carry
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <img
            onClick={() => {
              setMenu("");
            }}
            src={user_icon}
            alt="Login"
            className="nav-login-icon"
          />
        </Link>
        <Link to="/cart">
          <img
            onClick={() => {
              setMenu("");
            }}
            src={cart_icon}
            alt="Cart"
            className="nav-cart-icon"
          />
        </Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
