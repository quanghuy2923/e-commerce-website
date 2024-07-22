import { useState } from "react";

function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    {
      id: 1,
      title: "Shirt",
      description: "Men's Shirt",
      price: "$20",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-polo-cool-touch-07-0022752/84d074df-1e90-8c00-5efe-001aebcf5b4f.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/ao-so-mi-vai-kaki-nhung-mem-min-mien-gio-cat-0022737/bb7cef26-40ed-0500-bf57-001aff3df7b3.jpg?w=540&h=756",
    },
    {
      id: 2,
      title: "Pants",
      description: "Men's Pants",
      price: "$30",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-so-mi-tay-dai-soi-ca-phe-di-san-m4-0022370/b6099427-c2ea-1300-cb60-001a75ba5e19.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/ao-so-mi-vai-kaki-nhung-mem-min-mien-gio-cat-0022737/bb7cef26-40ed-0500-bf57-001aff3df7b3.jpg?w=540&h=756",
    },
    {
      id: 3,
      title: "Jacket",
      description: "Men's Jacket",
      price: "$50",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-so-mi-vai-kaki-nhung-mem-min-mien-gio-cat-0022737/bb7cef26-40ed-0500-bf57-001aff3df7b3.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/so-mi-tay-dai-on-gian-y-nguyen-ban-ver48-0021404/24e46962-9ac6-2800-8859-0019d0b8d36f.jpg?w=800",
    },
    {
      id: 4,
      title: "Shoes",
      description: "Men's Shoes",
      price: "$40",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-khoac-la-co-speed-37-0022395/76e20d99-6b28-8901-c091-001aee1e8d8d.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/so-mi-tay-dai-on-gian-y-nguyen-ban-ver48-0021404/24e46962-9ac6-2800-8859-0019d0b8d36f.jpg?w=800",
    },
    {
      id: 5,
      title: "Hat",
      description: "Men's Hat",
      price: "$15",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-so-mi-cuban-soi-poly-wrinkle-free-04-0022633/082bf23e-e668-3f00-7793-001aeaf9ef04.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/so-mi-tay-dai-on-gian-y-nguyen-ban-ver48-0021404/24e46962-9ac6-2800-8859-0019d0b8d36f.jpg?w=800",
    },
    {
      id: 6,
      title: "Scarf",
      description: "Men's Scarf",
      price: "$10",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-khoac-khong-non-vai-denim-thoang-mat-tron-dang-rong-on-gian-premium-73-0023118/cea6b21c-fa50-5f01-5060-001af9b69828.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/so-mi-tay-dai-on-gian-y-nguyen-ban-ver48-0021404/24e46962-9ac6-2800-8859-0019d0b8d36f.jpg?w=800",
    },
    {
      id: 7,
      title: "Gloves",
      description: "Men's Gloves",
      price: "$8",
      imageUrl:
        "https://cdn2.yame.vn/pimg/so-mi-tay-dai-on-gian-y-nguyen-ban-ver48-0021404/24e46962-9ac6-2800-8859-0019d0b8d36f.jpg?w=800",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/ao-polo-cool-touch-07-0022752/84d074df-1e90-8c00-5efe-001aebcf5b4f.jpg?w=540&h=756",
    },
    {
      id: 8,
      title: "Belt",
      description: "Men's Belt",
      price: "$12",
      imageUrl:
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-co-gian-bieu-tuong-dang-vua-gia-tot-seventy-seven-46-0023555/3ddea1db-78cf-9900-909c-001b8110d455.jpg?w=540&h=756",
      hoverImageUrl:
        "https://cdn2.yame.vn/pimg/ao-polo-cool-touch-07-0022752/84d074df-1e90-8c00-5efe-001aebcf5b4f.jpg?w=540&h=756",
    },
  ];

  return (
    <div
      className="container mx-auto p-4 h-[100vh] w-[80%] text-gray-800"
      id="#productPage"
    >
      <h2 className="text-3xl font-bold text-center ">Product Page</h2>
      <p className="mb-8 text-center mt-10">Some Description........</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative  flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <div
              className="relative mx-3 mt-3 flex h-[200px] overflow-hidden rounded-xl"
              onMouseEnter={() => setSelectedImage(item.id)}
              onMouseLeave={() => setSelectedImage(null)}
            >
              <img
                src={
                  selectedImage === item.id ? item.hoverImageUrl : item.imageUrl
                }
                alt={item.title}
                className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-full"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                39% OFF
              </span>
            </div>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {item.title}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    {item.price}
                  </span>
                  <span className="text-sm text-slate-900 line-through">
                    $699
                  </span>
                </p>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-[#56B280] via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Add to Cart
                </button>
                <a
                  href="#"
                  className="rounded-lg border border-gray-300 py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
