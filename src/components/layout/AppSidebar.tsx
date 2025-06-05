
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Heart, 
  User, 
  Settings,
  LogOut,
  Home,
  UserPlus
} from 'lucide-react';

interface AppSidebarProps {
  userType: 'user' | 'admin';
}

export function AppSidebar({ userType }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const userMenuItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Mosques",
      url: "/mosques",
      icon: Building2,
    },
    {
      title: "My Donations",
      url: "/user/donations",
      icon: Heart,
    },
  ];

  const adminMenuItems = [
    {
      title: "Overview",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: Users,
    },
    {
      title: "Mosques",
      url: "/mosques",
      icon: Building2,
    },
    {
      title: "Donations",
      url: "/admin/donations",
      icon: Heart,
    },
  ];

  const menuItems = userType === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <Sidebar className="border-r border-gray-200 w-64 lg:w-72">
      <SidebarHeader className="p-4 lg:p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg lg:text-xl font-bold text-gray-800 truncate">Sadaka</h1>
            <p className="text-xs lg:text-sm text-gray-600 truncate">
              {userType === 'admin' ? 'Admin Panel' : 'Donation Platform'}
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 lg:px-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase text-gray-500 font-semibold px-3 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="w-full justify-start"
                  >
                    <Button
                      variant="ghost"
                      onClick={() => navigate(item.url)}
                      className={`w-full justify-start space-x-3 h-10 lg:h-12 px-3 text-sm lg:text-base ${
                        location.pathname === item.url 
                          ? 'bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {userType === 'user' && (
          <SidebarGroup className="mt-6 lg:mt-8">
            <SidebarGroupLabel className="text-xs uppercase text-gray-500 font-semibold px-3 py-2">
              Quick Stats
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-3">
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-0">
                <CardContent className="p-3 lg:p-4">
                  <div className="text-center">
                    <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-xs lg:text-sm text-gray-600 mb-1">Total Donated</p>
                    <p className="text-base lg:text-lg font-bold text-emerald-600">TZS 85,000</p>
                  </div>
                </CardContent>
              </Card>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-3 lg:p-6">
        <SidebarMenu className="space-y-1">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant="ghost" className="w-full justify-start space-x-3 text-sm">
                <User className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Profile</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant="ghost" className="w-full justify-start space-x-3 text-sm">
                <Settings className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Settings</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant="ghost" className="w-full justify-start space-x-3 text-sm text-red-600 hover:text-red-700">
                <LogOut className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Logout</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
