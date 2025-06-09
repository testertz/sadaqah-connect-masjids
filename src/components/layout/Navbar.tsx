
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Heart, User, LogOut, Menu, Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', active: location.pathname === '/' },
    { name: 'Mosques', path: '/mosques', active: location.pathname === '/mosques' },
    { name: 'Dashboard', path: '/dashboard', active: location.pathname.includes('/dashboard') || location.pathname.includes('/admin') || location.pathname.includes('/user') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-xl shadow-lg group-hover:shadow-emerald-200 transition-all duration-300">
              <Heart className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                Sadaka
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Donation Platform</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              <Input
                placeholder="Search mosques..."
                className="pl-10 border-gray-200 focus:border-emerald-300 focus:ring-emerald-100 transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group ${
                  link.active
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  link.active ? 'scale-x-100 opacity-10' : 'opacity-20'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
                    <Input
                      placeholder="Search mosques..."
                      className="pl-10 border-gray-200 focus:border-emerald-300 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                          link.active
                            ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-500'
                            : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile User Actions */}
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200"
                    >
                      <Bell className="h-4 w-4 mr-3" />
                      Notifications
                      <span className="ml-auto h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200"
                    >
                      <User className="h-4 w-4 mr-3" />
                      Profile
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
