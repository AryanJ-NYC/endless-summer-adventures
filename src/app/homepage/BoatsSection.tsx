import { Section } from './Section';
import { BoatCard } from './BoatCard';
import { fetchBoats } from '../../../sanity/lib/queries';

export const BoatsSection = async () => {
  const boats = await fetchBoats();

  if (!boats || boats.length === 0) {
    return null;
  }

  return (
    <Section className="bg-gradient-to-b from-blue-50 to-sky-50 py-16 md:py-24">
      <div className="flex flex-col items-center gap-16 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Vessels & Rates</h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            All-inclusive packages with professional equipment and expert guidance
          </p>
        </div>

        <div className="w-full space-y-16">
          {boats.map((boat, index) => (
            <BoatCard key={boat._id} boat={boat} featured={index === 0} />
          ))}
        </div>

        {/* Charter Information */}
        <div className="w-full mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* What's Included */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">What&apos;s Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-orange-500 text-xl flex-shrink-0">✓</span>
                  <span>All fishing licenses</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-orange-500 text-xl flex-shrink-0">✓</span>
                  <span>Rods, reels, tackle, and bait</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-orange-500 text-xl flex-shrink-0">✓</span>
                  <span>Fish cleaning service</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-orange-500 text-xl flex-shrink-0">✓</span>
                  <span>Cooler with ice</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-orange-500 text-xl flex-shrink-0">✓</span>
                  <span>Bottled water</span>
                </li>
              </ul>
            </div>

            {/* What to Bring */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">What to Bring</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500 text-xl flex-shrink-0">•</span>
                  <span>Sunscreen, hat, and sunglasses</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500 text-xl flex-shrink-0">•</span>
                  <span>Food and drinks (no glass containers, please)</span>
                </li>
              </ul>
            </div>

            {/* Departure & Parking */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Departure & Parking</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Charters depart from{' '}
                  <a
                    href="https://maps.app.goo.gl/483fYgxKXLfohe2Y8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-2 underline-offset-2 hover:text-orange-300 transition-colors"
                  >
                    Pelican Bend Restaurant and Marina
                  </a>{' '}
                  on Isles of Capri.
                </p>
                <p className="leading-relaxed">
                  Free parking is available across the street from Pelican Bend Restaurant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
