
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Heart, LogIn } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, userName }) => {
  return (
    <header className="bg-white shadow-sm border-b border-emerald-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">Sadaka</h1>
              <p className="text-sm text-emerald-600">للخير والعطاء</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#mosques" className="text-gray-700 hover:text-emerald-600 transition-colors">Mosques</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-emerald-600" />
                <span className="text-gray-700">{userName}</span>
              </div>
            ) : (
              <Button onClick={onLoginClick} variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
