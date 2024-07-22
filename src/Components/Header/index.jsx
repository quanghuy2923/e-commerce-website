// src/Components/Header.js
import AboutUs from "./AbouUs";
import Feature from "./Feature";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Picture from "./Picture";
import ProductPage from "./ProductPage";

function Header() {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <div id="pictureSection">
        <Picture />
      </div>
      <div id="productSection">
        <ProductPage />
      </div>
      <Feature />
      <div id="aboutUsSection">
        <AboutUs />
      </div>
      <div id="footerSection">
        <Footer />
      </div>
    </>
  );
}

export default Header;
