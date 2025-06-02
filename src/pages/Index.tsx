import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedMosques from '@/components/FeaturedMosques';
import DonationModal from '@/components/DonationModal';
import LoginModal from '@/components/LoginModal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Users, Building, Shield, Globe } from 'lucide-react';
import { mockMosques } from '@/data/mockData';
import { Mosque } from '@/types';

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header 
        onLoginClick={() => setIsLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={isLoggedIn ? "Ahmed Hassan" : undefined}
        isAdmin={false}
      />
      
      <HeroSection />
      
      <FeaturedMosques 
        mosques={mockMosques.slice(0, 4)}
        onDonate={(mosque) => {
          setSelectedMosque(mosque);
          setIsDonationModalOpen(true);
        }}
        onViewDetails={(mosque) => {
          console.log('View details for:', mosque.name);
        }}
      />

      {/* Why Choose Sadaka Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Sadaka?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted platform connecting donors with verified mosques across Tanzania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-emerald-100">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">100% Verified</h3>
              <p className="text-gray-600">All mosques are verified and registered with proper documentation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-emerald-100">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Direct Impact</h3>
              <p className="text-gray-600">Your donations go directly to mosques for immediate community benefit</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-emerald-100">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Barakah Guaranteed</h3>
              <p className="text-gray-600">Supporting Islamic education and community development with transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">142M+</div>
              <p className="text-gray-600">Total Donations (TZS)</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">1,248</div>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">56</div>
              <p className="text-gray-600">Verified Mosques</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">26</div>
              <p className="text-gray-600">Regions Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Sadaka Platform</h2>
              <p className="text-xl mb-6 opacity-90">
                Sadaka is Tanzania's first dedicated platform for mosque donations, built with Islamic values 
                and modern technology to serve our ummah.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6" />
                  <span>Sharia-compliant donation processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  <span>Community-driven platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  <span>Serving all regions of Tanzania</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg opacity-90">
                  "To strengthen the Islamic community in Tanzania by making mosque support 
                  accessible, transparent, and impactful for every Muslim."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about donations or want to register your mosque? We're here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-emerald-600">support@sadaka.tz</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-emerald-600">+255 (0) 123 456 789</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-800 mb-2">Office</h3>
              <p className="text-emerald-600">Dar es Salaam, Tanzania</p>
            </div>
          </div>

          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
            Register Your Mosque
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" fill="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sadaka</h3>
                  <p className="text-sm text-gray-400">للخير والعطاء</p>
                </div>
              </div>
              <p className="text-gray-400">
                Supporting Tanzania's mosques through technology and faith.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/mosques" className="hover:text-emerald-400">Find Mosques</a></li>
                <li><a href="/dashboard" className="hover:text-emerald-400">Dashboard</a></li>
                <li><a href="#about" className="hover:text-emerald-400">About Us</a></li>
                <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-emerald-600 text-white">Facebook</Badge>
                <Badge variant="secondary" className="bg-emerald-600 text-white">WhatsApp</Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sadaka Platform. All rights reserved. | Built with ❤️ for the Ummah</p>
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

      <Toaster />
    </div>
  );
};

export default Index;
