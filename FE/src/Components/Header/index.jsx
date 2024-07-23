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
      <section id="pictureSection">
        <Picture />
      </section>
      <section id="productSection">
        <ProductPage />
      </section>
      <section>
        <Feature />
      </section>
      <section id="aboutUsSection">
        <AboutUs />
      </section>
      <section id="footerSection">
        <Footer />
      </section>
    </>
  );
}

export default Header;
