import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Shield, Package, CreditCard, AlertCircle } from 'lucide-react';

const Disclosures = () => {
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
            Disclosures
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-purple-500" />
              <span className="font-semibold text-gray-800">Fashion Commerce</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-800">Authenticity</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Package className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-gray-800">Shipping Terms</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-rose-50 rounded-lg">
              <CreditCard className="w-6 h-6 text-rose-500" />
              <span className="font-semibold text-gray-800">Payment Security</span>
            </div>
          </div>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Fashion Affiliate Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              FINK participates in fashion affiliate marketing programs. We may earn commissions when you purchase fashion products through links on our website. This does not affect the price you pay or our editorial independence in fashion recommendations.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Fashion Product Authenticity
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              All fashion items sold on FINK are guaranteed to be authentic designer pieces. We source directly from authorized fashion distributors, manufacturers, and luxury brands. Counterfeit fashion items are strictly prohibited on our platform.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Fashion Pricing Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fashion prices displayed are in USD and include applicable taxes unless otherwise stated. We reserve the right to modify fashion prices without prior notice. Price matching may be available for identical fashion items under certain conditions.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Fashion Inventory and Availability
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fashion item availability is subject to change without notice. Limited edition and seasonal collections may sell out quickly. While we strive to maintain accurate inventory counts, fashion items may become unavailable between order placement and processing.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Fashion Shipping and Handling
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Free express shipping offer applies to fashion orders over $100 within the continental United States. International fashion shipping rates and delivery times vary by destination. Customs duties and taxes may apply to international fashion orders.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              Fashion Return Policy Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fashion items can be returned within 14 days of delivery in original condition with tags attached. Original fashion shipping costs are non-refundable. Return shipping costs may be deducted from refund amounts. Some fashion items may be subject to restocking fees.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
              Payment Security
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              All payment transactions are processed using secure SSL encryption. We do not store complete credit card information on our servers. Payment processing is handled by PCI-compliant third-party payment processors.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
              Fashion Product Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We make every effort to provide accurate fashion product descriptions, images, and specifications. However, we do not warrant that fashion product descriptions or other content are accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
              Limited Edition Fashion
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Limited edition fashion pieces and collaborations have special terms regarding availability and returns. These items may be final sale and have different warranty terms than regular collections.
            </p>
          </section>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-purple-600" />
              Important Disclosures
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions regarding these disclosures, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Email:</span>
                <span className="text-purple-600">disclosures@fink.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Phone:</span>
                <span className="text-purple-600">1-800-FINK-WEAR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Compliance:</span>
                <span className="text-purple-600">compliance@fink.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclosures;
