
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedMosques from '@/components/FeaturedMosques';
import DonationModal from '@/components/DonationModal';
import LoginModal from '@/components/LoginModal';
import { mockMosques } from '@/data/mockData';
import { Mosque } from '@/types';

const Index = () => {
  const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleDonate = (mosque: Mosque) => {
    setSelectedMosque(mosque);
    setIsDonationModalOpen(true);
  };

  const handleViewDetails = (mosque: Mosque) => {
    // For now, just trigger donation modal
    handleDonate(mosque);
  };

  const handleLogin = (name: string, email: string) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleDonateClick = () => {
    // Scroll to mosques section
    document.getElementById('mosques')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onLoginClick={() => setIsLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />
      
      <HeroSection onDonateClick={handleDonateClick} />
      
      <FeaturedMosques 
        mosques={mockMosques}
        onDonate={handleDonate}
        onViewDetails={handleViewDetails}
      />

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-700">Verified Mosques</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">$2.5M+</div>
              <div className="text-gray-700">Donated to Date</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
              <div className="text-gray-700">Happy Donors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sadaka</h3>
              <p className="text-gray-400">Connecting hearts, building communities through the power of giving.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@sadaka.org</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sadaka. All rights reserved. Made with ❤️ for the Ummah.</p>
          </div>
        </div>
      </footer>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        mosque={selectedMosque}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
