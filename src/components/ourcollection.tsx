import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const allProducts = [
  {
    id: 1,
    name: "Men BLVCK Onyx Hoodie",
    price: "$180",
    image: "/blackoxny.jpg",
    category: "Hoodie",
  },
  {
    id: 2,
    name: "LVR London Explorer Hoodie",
    price: "$230",
    image: "/LVRlondonexplore.jpg",
    category: "Hoodie",
  },
  {
    id: 3,
    name: "Retro Repeat Tiger Hoodie",
    price: "$100",
    image: "/retrorepect.jpg",
    category: "Trending",
  },
  {
    id: 14,
    name: "classic denim jacket",
    price: "$130",
    image: "/classicjacket.jpg",
    category: "tranding",
  },
  {
    id: 13,
    name: "Retro Repeat Tiger Hoodie",
    price: "$105",
    image: "/retrorepect.jpg",
    category: "Hoodie",
  },
  {
    id: 4,
    name: "Hip Hop Street Wear Hoodie",
    price: "$120",
    image: "/hiphop.jpg",
    category: "Hoodie",
  },
  {
    id: 5,
    name: "Classic Leather Bag",
    price: "$90",
    image: "/classicbags.jpg",
    category: "Caps & Bags",
  },
   {
    id: 6,
    name: "Stylish Summer Cap",
    price: "$60",
    image: "/summerstylecap.jpg",
    category: "Caps & Bags",
  },
  {
    id: 7,
    name: "Stylish bags",
    price: "$60",
    image: "/stylesbags.jpg",
    category: "Caps & Bags",
  },
   
    {
    id: 8,
    name: "designer caps",
    price: "$60",
    image: "/designercaps.jpg",
    category: "Caps & Bags",
  },
  { id: 9,
    name: "Abril outwear womens",
    price: "$60",
    image: "/abriloutwearwomens.jpg",
    category: "Out Wear",
  },
   { id: 10,
    name: "Mens Outwear",
    price: "$70",
    image: "/mensoutwear.jpg",
    category: "Out Wear",
  },
   { id: 11,
    name: "Womens crop suede jacket",
    price: "$60",
    image: "/WomensCropSuedeJacket.jpg",
    category: "Out Wear",
  },
   { id: 12,
    name: "leather jackets ",
    price: "$60",
    image: "/outwearmensleather.jpg",
    category: "Out Wear",
  },
  {
    id: 7,
    name: "Minimalist Bracelet",
    price: "$40",
    image: "/womensbraclet.jpg",
    category: "Accessories",
  },
  {
    id: 14,
    name: "Elegant Watch Strap",
    price: "$55",
    image: "/menswatches.jpg",
    category: "Accessories",
  }
];

const categories = ["Hoodie", "Caps & Bags", "Trending", "Out Wear", "Accessories"];

const OurCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hoodie");
  const { addToCart } = useCart();

  // Filtered products (always max 4)
  const filtered = allProducts.filter(
    (product) => product.category === selectedCategory
  );
  const displayedProducts = filtered.slice(0, 4); // Only show filtered products, max 4

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: typeof allProducts[0]) => {
    addToCart(product);
    alert(`Proceeding to checkout with ${product.name}!`);
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 md:mb-16">
          OUR COLLECTION
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 md:mb-20">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 md:px-8 py-3 rounded-full font-medium transition text-lg ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 md:h-96 object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', product.image, e);
                  e.target.style.display = 'none';
                }}
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-lg">{product.price}</p>
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                  {product.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="mb-3 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition font-medium text-lg"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleBuyNow(product)}
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition font-medium text-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
