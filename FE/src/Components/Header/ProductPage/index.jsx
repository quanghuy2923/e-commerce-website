import { useState } from "react";
import Star from "../../../assets/Star";
export const items = [
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

function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto p-4 text-gray-800">
      <h2 className="text-3xl text-center text-[#56B280] font-semibold text-[48px] tracking-widest mt-4 mb-10">
        Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
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
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-1 h-5 w-5"
                ></svg>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-[#56B280] to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[80%] ml-[30px]"
                >
                  Add to Cart
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
