
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedMosques from '@/components/FeaturedMosques';
import DonationModal from '@/components/DonationModal';
import LoginModal from '@/components/LoginModal';
import { mockMosques } from '@/data/mockData';
import { Mosque } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart, Building2, Users, Globe } from 'lucide-react';

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
    handleDonate(mosque);
  };

  const handleLogin = (name: string, email: string) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleDonateClick = () => {
    document.getElementById('mosques')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header 
        onLoginClick={() => setIsLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />
      
      <HeroSection onDonateClick={handleDonateClick} />
      
      <FeaturedMosques 
        mosques={mockMosques.slice(0, 4)}
        onDonate={handleDonate}
        onViewDetails={handleViewDetails}
      />

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Sadaka Tanzania</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connecting the hearts of Tanzanian Muslims with their local masajid through the blessing of giving. 
              Our platform ensures transparent, secure donations reach verified mosques across Tanzania.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200">
                <Heart className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sadaka Made Simple</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy, secure donations to verified mosques across Tanzania with multiple payment options including mobile money.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200">
                <Building2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Verified Masajid</h3>
              <p className="text-gray-600 leading-relaxed">
                All mosques are thoroughly verified to ensure your donations reach legitimate Islamic institutions.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting Islamic education, community services, and spiritual growth across Tanzania.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => document.getElementById('mosques')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 text-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Start Donating Today
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact Across Tanzania</h2>
            <p className="text-emerald-100 text-lg">Building stronger Muslim communities through your generous contributions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-emerald-100 text-lg">Verified Mosques</div>
              <div className="text-emerald-200 text-sm mt-1">Across all regions</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">TZS 2.5B+</div>
              <div className="text-emerald-100 text-lg">Total Donations</div>
              <div className="text-emerald-200 text-sm mt-1">Since platform launch</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-emerald-100 text-lg">Active Donors</div>
              <div className="text-emerald-200 text-sm mt-1">Growing daily</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">26</div>
              <div className="text-emerald-100 text-lg">Regions Covered</div>
              <div className="text-emerald-200 text-sm mt-1">Nationwide reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <p className="text-xl text-gray-600">
                Have questions? We're here to help you make a difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-emerald-600 mr-3" />
                    <span>support@sadaka.tz</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-emerald-600 mr-3" />
                    <span>+255 (0) 700 123 456</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-emerald-600 mr-3" />
                    <span>Dar es Salaam, Tanzania</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Support Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p>Friday: 2:00 PM - 6:00 PM (After Jumu'ah)</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" fill="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Sadaka</h3>
                  <p className="text-sm text-emerald-400">للخير والعطاء</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting hearts, building communities through the blessed act of giving across Tanzania.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#mosques" className="hover:text-emerald-400 transition-colors">Mosques</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">How to Donate</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p>support@sadaka.tz</p>
                <p>+255 (0) 700 123 456</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Sadaka Tanzania. All rights reserved. 
              <span className="text-emerald-400"> Made with ❤️ for the Ummah</span>
            </p>
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
