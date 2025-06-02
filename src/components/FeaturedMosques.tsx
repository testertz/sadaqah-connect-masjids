
import React from 'react';
import MosqueCard from './MosqueCard';
import { Mosque } from '@/types';

interface FeaturedMosquesProps {
  mosques: Mosque[];
  onDonate: (mosque: Mosque) => void;
  onViewDetails: (mosque: Mosque) => void;
}

const FeaturedMosques: React.FC<FeaturedMosquesProps> = ({ mosques, onDonate, onViewDetails }) => {
  return (
    <section id="mosques" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Mosques</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support verified mosques in your community and make a direct impact on Islamic education, 
            community services, and spiritual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mosques.map((mosque) => (
            <MosqueCard
              key={mosque.id}
              mosque={mosque}
              onDonate={onDonate}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-emerald-600 hover:text-emerald-700 font-medium">
            View All Mosques →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMosques;
