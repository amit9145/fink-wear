import { X, Truck } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white py-2 px-4 text-center relative">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <Truck className="w-4 h-4" />
        <span className="font-medium">
          Free Shipping on Orders Over $100
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-rose-400 font-semibold">
          Use Code: FIN15 for 15% Off
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
