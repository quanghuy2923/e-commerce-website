// src/Components/Header.js

import Navbar from "./Navbar";
import Picture from "./Picture";
import ProductPage from "./ProductPage";

function Header() {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <Picture />
      <ProductPage />
    </>
  );
}

export default Header;
