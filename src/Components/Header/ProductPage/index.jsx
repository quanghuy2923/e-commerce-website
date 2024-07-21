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

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4 h-[100vh]" id="#productPage">
      <h2 className="text-3xl font-bold mb-8 text-center mt-10">
        Product Page
      </h2>
      <p className="mb-8 text-center mt-10">Some Description........</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 h-[350px] w-full relative group"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[220px] object-cover mb-2 rounded transition-transform duration-300 ease-in-out transform group-hover:scale-105 cursor-pointer"
            />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-lg font-semibold">{item.price}</p>

            {/* Hover Image */}
            <img
              src={item.hoverImageUrl}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
