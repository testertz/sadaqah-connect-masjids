
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Heart, LogIn, LayoutDashboard, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
  isAdmin?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, userName, isAdmin = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const NavLink = ({ href, children, onClick }: { href?: string; children: React.ReactNode; onClick?: () => void }) => (
    <button
      onClick={onClick || (() => href && navigate(href))}
      className={`text-gray-700 hover:text-emerald-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-emerald-50 ${
        href && isActive(href) ? 'text-emerald-600 bg-emerald-50' : ''
      }`}
    >
      {children}
    </button>
  );

  return (
    <header className="bg-white shadow-sm border-b border-emerald-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
              <Heart className="h-7 w-7 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Sadaka
              </h1>
              <p className="text-sm text-emerald-600 font-medium">للخير والعطاء</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/mosques">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Find Mosques
              </div>
            </NavLink>
            <NavLink onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              About
            </NavLink>
            <NavLink onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => navigate('/dashboard')}
                  variant="outline"
                  className={`border-emerald-600 text-emerald-600 hover:bg-emerald-50 ${
                    isActive('/dashboard') ? 'bg-emerald-50' : ''
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                
                {isAdmin && (
                  <Button
                    onClick={() => navigate('/admin')}
                    variant="outline"
                    className={`border-purple-600 text-purple-600 hover:bg-purple-50 ${
                      isActive('/admin') ? 'bg-purple-50' : ''
                    }`}
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                )}
                
                <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg">
                  <User className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">{userName}</span>
                </div>
              </div>
            ) : (
              <Button 
                onClick={onLoginClick} 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/mosques">Mosques</NavLink>
          {isLoggedIn && (
            <>
              <NavLink href="/dashboard">Dashboard</NavLink>
              {isAdmin && <NavLink href="/admin">Admin</NavLink>}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
