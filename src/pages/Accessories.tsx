const Accessories = () => {
  const accessoriesProducts = [
    {
      id: 1,
      name: "Minimalist Bracelet",
      price: "$40",
      image: "/womensbraclet.jpg"
    },
    {
      id: 2,
      name: "Elegant Watch Strap",
      price: "$55",
      image: "/menswatches.jpg"
    },
    {
      id: 3,
      name: "Classic Leather Bag",
      price: "$90",
      image: "/classicbags.jpg"
    },
    {
      id: 4,
      name: "Stylish Summer Cap",
      price: "$60",
      image: "/summerstylecap.jpg"
    },
    {
      id: 5,
      name: "Designer Caps",
      price: "$65",
      image: "/designercaps.jpg"
    },
    {
      id: 6,
      name: "Stylish Bags",
      price: "$75",
      image: "/stylesbags.jpg"
    }
  ];

  const handleAddToCart = (product) => {
    // Add to cart logic
  };

  const handleBuyNow = (product) => {
    // Buy now logic
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">Accessories Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {accessoriesProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="h-72 sm:h-80 lg:h-80 relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain object-center p-3"
                />
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

export default Accessories;
