import { useCart } from "../context/CartContext";

const Boys = () => {
  const { addToCart } = useCart();

  const boysProducts = [
    {
      id: 21,
      name: "Classic Hoodie",
      price: "$89.99",
      image: "/classichoodies.jpg"
    },
    {
      id: 22,
      name: "Street Style Hoodie",
      price: "$99.99",
      image: "/hiphop.jpg"
    },
    {
      id: 23,
      name: "Boy's T-Shirt Collection",
      price: "$49.99",
      image: "/boytshirt.jpg"
    },
    {
      id: 24,
      name: "Denim Jeans",
      price: "$79.99",
      image: "/denimjeans.jpg"
    },
    {
      id: 25,
      name: "Sport Jersey",
      price: "$69.99",
      image: "/sportjersey.jpg"
    },
    {
      id: 26,
      name: "Summer Shorts",
      price: "$39.99",
      image: "/summershorts.jpg"
    }
  ];

  const handleAddToCart = (product: typeof boysProducts[0]) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: typeof boysProducts[0]) => {
    addToCart(product);
    alert(`Proceeding to checkout with ${product.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">Boys' Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {boysProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="h-72 sm:h-80 lg:h-80 relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain object-center p-3"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="mb-2 bg-white text-black px-3 py-1.5 rounded-full hover:bg-gray-200 transition font-medium text-sm"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="bg-transparent border border-white text-white px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition font-medium text-sm"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boys;
