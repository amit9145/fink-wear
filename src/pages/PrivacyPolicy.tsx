import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-gray-800">Data Protection</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Lock className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-800">Secure Storage</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <Eye className="w-6 h-6 text-purple-500" />
              <span className="font-semibold text-gray-800">Transparency</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-rose-50 rounded-lg">
              <UserCheck className="w-6 h-6 text-rose-500" />
              <span className="font-semibold text-gray-800">Your Control</span>
            </div>
          </div>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Fashion Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3 text-lg">
              We collect information to provide better fashion services and personalized styling recommendations. The types of information we collect include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-lg">
              <li>Personal information (name, email, phone number for fashion consultations)</li>
              <li>Shipping and billing information for fashion deliveries</li>
              <li>Payment information (processed securely through fashion payment providers)</li>
              <li>Fashion preferences, style history, and browsing behavior</li>
              <li>Body measurements and size preferences (optional, for better fit recommendations)</li>
              <li>Device and usage information for personalized fashion experiences</li>
            </ul>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              How We Use Your Fashion Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3 text-lg">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-lg">
              <li>Process and fulfill your fashion orders and styling requests</li>
              <li>Provide personalized fashion recommendations and style advice</li>
              <li>Send fashion newsletters, trend updates, and exclusive offers</li>
              <li>Improve our fashion collections and customer experience</li>
              <li>Create personalized shopping experiences and style profiles</li>
              <li>Prevent fraud and ensure secure fashion transactions</li>
            </ul>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Fashion Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We do not sell, trade, or otherwise transfer your personal fashion information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3 text-lg">
              <li>Fashion industry partners and trusted service providers</li>
              <li>Payment processors for secure fashion transactions</li>
              <li>Fashion shipping partners for order fulfillment</li>
              <li>Style recommendation services (with your consent)</li>
              <li>When required by law or to protect our fashion brand</li>
            </ul>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Fashion Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We implement appropriate technical and organizational measures to protect your personal fashion information against unauthorized access, alteration, disclosure, or destruction. All fashion transactions and style profiles are encrypted using industry-standard SSL technology.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Fashion Cookies and Personalization
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We use cookies and similar tracking technologies to enhance your fashion shopping experience. Cookies help us remember your style preferences, analyze fashion trends, and personalize clothing recommendations. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              Your Fashion Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3 text-lg">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-lg">
              <li>Access your personal fashion profile and style history</li>
              <li>Correct inaccurate fashion preferences or measurements</li>
              <li>Request deletion of your fashion account and data</li>
              <li>Opt-out of fashion marketing communications</li>
              <li>Restrict processing of your style information</li>
              <li>Request a copy of your fashion data</li>
            </ul>
          </section>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Privacy Questions?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or need to exercise your rights, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Email:</span>
                <span className="text-blue-600">privacy@fink.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Phone:</span>
                <span className="text-blue-600">1-800-FINK-WEAR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Privacy Officer:</span>
                <span className="text-blue-600">dpo@fink.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
