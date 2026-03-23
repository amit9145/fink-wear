import { useCart } from "../context/CartContext";

const ClothFootwear = () => {
  const { addToCart } = useCart();
  
  const clothFootwearProducts = [
    {
      id: 31,
      name: "Designer Leather Jacket",
      price: "$299.99",
      image: "/WomensCropSuedeJacket.jpg"
    },
    {
      id: 32,
      name: "Stylish Sneakers",
      price: "$149.99",
      image: "/stylish sneakers.jpg"
    },
    {
      id: 33,
      name: "Fashion Boots",
      price: "$179.99",
      image: "/fashion boot.jpg"
    },
    {
      id: 34,
      name: "Elegant Heels",
      price: "$159.99",
      image: "/elegant heels.jpg"
    },
    {
      id: 35,
      name: "Casual Canvas Shoes",
      price: "$89.99",
      image: "/causal canvas shoes.jpg"
    }
  ];

  const handleAddToCart = (product: typeof clothFootwearProducts[0]) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product: typeof clothFootwearProducts[0]) => {
    addToCart(product);
    alert(`Proceeding to checkout with ${product.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">Cloth & Footwear Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {clothFootwearProducts.map((product) => (
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

export default ClothFootwear;
