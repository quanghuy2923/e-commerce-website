import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const discoveryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        discoveryRef.current &&
        !discoveryRef.current.contains(event.target)
      ) {
        setIsDiscoveryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="md:w-[calc(100vw-300px)] h-[75px] flex md:mx-[150px] w-[calc(100vw-100px)] mx-[50px] items-center justify-between">
        <div className="flex items-center">
          <img
            src="src/assets/logo.svg"
            alt="Shop Logo"
            className="h-8 w-8 mr-2"
          />
          <img
            src="src/assets/textLogo.svg"
            alt="Shop Logo"
            className="h-24 w-24 mr-2"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative" ref={discoveryRef}>
            <button
              onClick={() => setIsDiscoveryOpen(!isDiscoveryOpen)}
              className="py-4 px-2 text-gray-700 font-semibold hover:text-[#56B280] transition duration-300 flex items-center"
            >
              Discovery
              <MdOutlineArrowDropDown className="mt-1" />
            </button>
            {isDiscoveryOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <ScrollLink
                  to="product-page" // ID của phần trong ProductPage
                  smooth={true}
                  duration={500}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B280] hover:text-white text-[14px]"
                >
                  Men Clothes
                </ScrollLink>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B280] hover:text-white text-[14px]"
                >
                  Women Clothes
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B280] hover:text-white text-[14px]"
                >
                  Accessory
                </a>
              </div>
            )}
          </div>
          <ScrollLink
            to="product-page"
            href="#"
            smooth={true}
            duration={500}
            className="py-4 px-2 text-gray-700 font-semibold hover:text-[#56B280] transition duration-300"
          >
            Products
          </ScrollLink>
          <a
            href="#"
            className="py-4 px-2 text-gray-700 font-semibold hover:text-[#56B280] transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="py-4 px-2 text-gray-700 font-semibold hover:text-[#56B280] transition duration-300"
          >
            Contact Us
          </a>

          <>
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-800 rounded hover:bg-[#56B280] hover:text-white transition duration-300"
            >
              <FaUser className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-800 rounded hover:bg-[#56B280] hover:text-white transition duration-300"
            >
              <FaShoppingCart className="h-6 w-6" />
            </a>
          </>

          {/* <Link to="/login-register" className="items-center flex mt-2">
            <button
              type="button"
              className="text-white font-semibold bg-gradient-to-r from-[#56B280] via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Log In
            </button>
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-500 hover:text-[#56B280]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="mt-12 flex flex-col items-start space-y-4 p-4">
              <ScrollLink
                to="product-page"
                smooth={true}
                href="#"
                duration={500}
                className="text-gray-700 font-semibold hover:text-[#56B280] pl-15px"
              >
                Discovery
              </ScrollLink>
              <ScrollLink
                to="product-page"
                smooth={true}
                href="#"
                duration={500}
                className="text-gray-700 font-semibold hover:text-[#56B280]"
              >
                Products
              </ScrollLink>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-[#56B280]"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-[#56B280]"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-[#56B280]"
              >
                <FaUser className="inline h-6 w-6" />
                Profile
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-[#56B280]"
              >
                <FaShoppingCart className="inline h-6 w-6" />
                Cart
              </a>

              {/* <Link to="/login-register">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-[#56B280] via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Log In
                  </button>
                </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navbar;
