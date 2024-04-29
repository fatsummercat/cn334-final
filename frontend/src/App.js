import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import all_products_banner from "./components/assets/all_products_banner.png";
import grill_dine_banner from "./components/assets/grill_dine_banner.png";
import lights_lanterns_banner from "./components/assets/lights_lanterns_banner.png";
import tools_banner from "./components/assets/tools_banner.png";
import store_carry_banner from "./components/assets/store_carry_banner.png";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/all"
            element={
              <AllProducts
                category="all"
                banner={all_products_banner}
                hero_text="All Products"
              />
            }
          />
          <Route
            path="/grill-dine"
            element={
              <Category
                category="grill-dine"
                banner={grill_dine_banner}
                hero_text="Grill & Dine"
              />
            }
          />
          <Route
            path="/lights-lanterns"
            element={
              <Category
                category="lights-lanterns"
                banner={lights_lanterns_banner}
                hero_text="Lights & Lanterns"
              />
            }
          />
          <Route
            path="/tools"
            element={
              <Category
                category="tools"
                banner={tools_banner}
                hero_text="Tools"
              />
            }
          />
          <Route
            path="/store-carry"
            element={
              <Category
                category="store-carry"
                banner={store_carry_banner}
                hero_text="Store & Carry"
              />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
