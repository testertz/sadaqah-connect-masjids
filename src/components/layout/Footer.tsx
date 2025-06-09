
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mosques', href: '/mosques' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community Guidelines', href: '/guidelines' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300 transform group-hover:scale-110">
                <Heart className="h-7 w-7 text-white group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Sadaka
                </h3>
                <p className="text-gray-400 text-sm">Donation Platform</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Connecting hearts through giving. Sadaka makes it easy to donate to mosques 
              and support your community with transparency and trust across Tanzania.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-emerald-300">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                />
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200 group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>info@sadaka.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200 group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200 group">
                <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-300 transition-all duration-200 relative inline-block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-300 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-300">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-300 transition-all duration-200 relative inline-block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-300 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm mr-4">Follow us:</p>
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800/50 p-2 rounded-lg hover:bg-emerald-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 Sadaka. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Built with ❤️ in Tanzania for the Ummah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 animate-pulse"></div>
    </footer>
  );
}
