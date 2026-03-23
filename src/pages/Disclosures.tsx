import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Disclosures = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Disclosures</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Fashion Affiliate Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              FINK participates in fashion affiliate marketing programs. We may earn commissions when you purchase fashion products through links on our website. This does not affect the price you pay or our editorial independence in fashion recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Fashion Product Authenticity</h2>
            <p className="text-gray-700 leading-relaxed">
              All fashion items sold on FINK are guaranteed to be authentic designer pieces. We source directly from authorized fashion distributors, manufacturers, and luxury brands. Counterfeit fashion items are strictly prohibited on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Fashion Pricing Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              Fashion prices displayed are in USD and include applicable taxes unless otherwise stated. We reserve the right to modify fashion prices without prior notice. Price matching may be available for identical fashion items under certain conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Fashion Inventory and Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              Fashion item availability is subject to change without notice. Limited edition and seasonal collections may sell out quickly. While we strive to maintain accurate inventory counts, fashion items may become unavailable between order placement and processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Fashion Shipping and Handling</h2>
            <p className="text-gray-700 leading-relaxed">
              Free express shipping offer applies to fashion orders over $100 within the continental United States. International fashion shipping rates and delivery times vary by destination. Customs duties and taxes may apply to international fashion orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Fashion Return Policy Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              Fashion items can be returned within 14 days of delivery in original condition with tags attached. Original fashion shipping costs are non-refundable. Return shipping costs may be deducted from refund amounts. Some fashion items may be subject to restocking fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Payment Security</h2>
            <p className="text-gray-700 leading-relaxed">
              All payment transactions are processed using secure SSL encryption. We do not store complete credit card information on our servers. Payment processing is handled by PCI-compliant third-party payment processors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Product Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We make every effort to provide accurate product descriptions, images, and specifications. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Copyright and Trademark</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of FINK or its content suppliers and is protected by international copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. Access to third-party sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              FINK provides its services on an "as is" and "as available" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall FINK, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless FINK and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Regulatory Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              FINK complies with applicable federal, state, and local laws and regulations. We are committed to maintaining ethical business practices and transparent operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding these disclosures, please contact us at:
              <br />
              Email: disclosures@fink.com
              <br />
              Phone: 1-800-FINK-WEAR
              <br />
              Compliance Officer: compliance@fink.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclosures;
