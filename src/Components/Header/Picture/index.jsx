import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "@fontsource/roboto"; // Defaults to weight 400.

const images = [
  "src/assets/zara.png",
  "src/assets/hermes.png",

  "src/assets/adidas.png",
  "src/assets/image.png",
]; // Add paths to your images

function Picture() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to go to a specific image
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Automatically switch image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[952px]">
      {/* Carousel Image */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-screen">
            <img
              src={src}
              alt={`Carousel ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Card in the middle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 tracking-wider -translate-y-1/2 w-[95%] h-[300px] mt-[15px]  md:max-w-[700px] bg-white bg-opacity-80 p-4 md:p-8 shadow-lg flex flex-col items-center text-center">
        <div className="flex space-x-4">
          <img
            src="src/assets/clothes-game-jersey-svgrepo-com.png"
            alt="Clothes"
            className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-[32px] mb-4"
          />
          <img
            src="src/assets/clothes-jersey-shirt-svgrepo-com.png"
            alt="Clothes"
            className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-[40px] mb-4"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          The Luxury Clothes
        </h2>
        <p className="text-gray-700 mb-4">
          Discover unparalleled elegance with our exclusive collection of luxury
          fashion and accessories, designed to elevate your style and provide a
          unique shopping experience.
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-[#56B280] to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[30%]"
        >
          Discovery
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full md:p-4"
      >
        <FaChevronLeft className="text-xl md:text-2xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full md:p-4"
      >
        <FaChevronRight className="text-xl md:text-2xl" />
      </button>

      {/* Dots */}
      <div className="absolute  md:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

export default Picture;
