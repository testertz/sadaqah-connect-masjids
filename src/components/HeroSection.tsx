
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Users } from 'lucide-react';

interface HeroSectionProps {
  onDonateClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDonateClick }) => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Give with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500"> Purpose</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect directly with your local mosques and make a difference in your community. 
              Every donation helps build stronger Islamic communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onDonateClick}
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Start Donating
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Donations</h3>
              <p className="text-gray-600">Simple, secure, and instant donations to verified mosques in your community.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Secure</h3>
              <p className="text-gray-600">Your donations are protected with bank-level security and transparency.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Direct Impact</h3>
              <p className="text-gray-600">See exactly how your donations help build and support Islamic communities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
