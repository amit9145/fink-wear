import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, ShoppingBag, Package, CreditCard } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent font-['Playfair_Display']">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-rose-50 rounded-lg">
              <Shield className="w-6 h-6 text-rose-500" />
              <span className="font-semibold text-gray-800">Your Protection</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-gray-800">Fashion Rights</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Package className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-800">Shipping Terms</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <CreditCard className="w-6 h-6 text-purple-500" />
              <span className="font-semibold text-gray-800">Payment Security</span>
            </div>
          </div>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              By accessing and using FINK's website and services, you accept and agree to be bound by terms and provision of this agreement.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Use License
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Permission is granted to temporarily download one copy of materials on FINK's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Products and Sizing
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              All fashion items are subject to availability. We provide detailed size guides and measurements for each product. Colors may vary slightly due to lighting and monitor settings. We reserve the right to modify prices or discontinue styles without notice.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Payment and Currency
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Payment must be made at the time of placing an order. We accept major credit cards, PayPal, and other fashion industry-standard payment methods. All prices are displayed in USD and are inclusive of applicable taxes unless otherwise stated.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Fashion Shipping and Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Free express shipping is available on orders over $100. Standard fashion delivery times are 3-5 business days for ready-to-wear items and 7-10 business days for custom or made-to-order pieces. FINK is not responsible for delays caused by shipping carriers or customs.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              Fashion Returns and Exchanges
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fashion items can be returned within 14 days of delivery in original condition with tags attached and unworn. Final sale items cannot be returned. Exchanges are available for different sizes of the same style within 7 days of delivery.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
              Fashion Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              All fashion designs, trademarks, and intellectual property on this website belong to FINK and are protected by copyright and other intellectual property laws. Our original designs are proprietary and cannot be reproduced without permission.
            </p>
          </section>

          <div className="mt-12 p-8 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Need Help?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms & Conditions, fashion styling advice, or product inquiries, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Email:</span>
                <span className="text-rose-600">support@fink.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Phone:</span>
                <span className="text-rose-600">1-800-FINK-WEAR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Fashion Hotline:</span>
                <span className="text-rose-600">1-800-FINK-STYLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
