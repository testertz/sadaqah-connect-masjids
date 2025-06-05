
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Heart, Download, Calendar, TrendingUp, User, Phone, Mail, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockDonations, mockUsers } from '@/data/mockData';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const UserDashboard = () => {
  const [user] = useState(mockUsers[0]);
  const [userDonations] = useState(mockDonations.filter(d => d.donorEmail === user.email));

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'zakat': return 'bg-purple-100 text-purple-800';
      case 'sadaqah': return 'bg-blue-100 text-blue-800';
      case 'ramadan': return 'bg-emerald-100 text-emerald-800';
      case 'eid': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard' }
  ];

  return (
    <DashboardLayout 
      userType="user" 
      title={`Welcome back, ${user.name}`}
      subtitle="Track your donations and manage your account"
      breadcrumbs={breadcrumbs}
    >
      {/* Enhanced Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-emerald-100 text-sm font-medium">Total Donated</p>
                <p className="text-3xl font-bold">{formatCurrency(user.totalDonated)}</p>
                <div className="flex items-center space-x-1 text-emerald-100">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-xs">+12% from last month</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <Heart className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-blue-100 text-sm font-medium">Total Donations</p>
                <p className="text-3xl font-bold">{user.donationCount}</p>
                <div className="flex items-center space-x-1 text-blue-100">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-xs">+3 this month</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-purple-100 text-sm font-medium">Member Since</p>
                <p className="text-2xl font-bold">
                  {user.joinedDate.toLocaleDateString('en-GB', { 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </p>
                <div className="flex items-center space-x-1 text-purple-100">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">Active member</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <Calendar className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-orange-100 text-sm font-medium">Average Donation</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(user.donationCount > 0 ? user.totalDonated / user.donationCount : 0)}
                </p>
                <div className="flex items-center space-x-1 text-orange-100">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-xs">Above average</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Enhanced Profile Information */}
        <Card className="lg:col-span-1 border-0 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                <User className="h-5 w-5 text-emerald-600" />
              </div>
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-emerald-100 p-3 rounded-full">
                <User className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Full Name</p>
                <p className="font-semibold text-gray-900">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-900">{user.email}</p>
              </div>
            </div>

            {user.phone && (
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-semibold text-gray-900">{user.phone}</p>
                </div>
              </div>
            )}

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-md">
              Update Profile
            </Button>
          </CardContent>
        </Card>

        {/* Enhanced Recent Donations */}
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg">Recent Donations</CardTitle>
            <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </CardHeader>
          <CardContent>
            {userDonations.length > 0 ? (
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Mosque</TableHead>
                      <TableHead className="font-semibold">Amount</TableHead>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userDonations.map((donation) => (
                      <TableRow key={donation.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{donation.mosqueName}</TableCell>
                        <TableCell className="font-bold text-emerald-600">
                          {formatCurrency(donation.amount)}
                        </TableCell>
                        <TableCell>
                          <Badge className={getTypeColor(donation.type)}>
                            {donation.type.charAt(0).toUpperCase() + donation.type.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {donation.timestamp.toLocaleDateString('en-GB')}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(donation.status)}>
                            {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No donations yet</h3>
                <p className="text-gray-500 mb-6">Start your journey of giving today</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-md">
                  Make Your First Donation
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
