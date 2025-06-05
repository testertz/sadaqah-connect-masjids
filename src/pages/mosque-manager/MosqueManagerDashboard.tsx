
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building2, Heart, Users, TrendingUp, Calendar, Settings, Plus } from 'lucide-react';
import { mockDonations, mockMosques } from '@/data/mockData';

const MosqueManagerDashboard = () => {
  // Simulate mosque manager data
  const [mosque] = useState(mockMosques[0]);
  const [mosqueDonations] = useState(
    mockDonations.filter(d => d.mosqueName === mosque.name)
  );

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

  const breadcrumbs = [
    { label: 'Mosque Dashboard' }
  ];

  const totalReceived = mosqueDonations.reduce((sum, donation) => sum + donation.amount, 0);
  const completedDonations = mosqueDonations.filter(d => d.status === 'completed').length;
  const uniqueDonors = new Set(mosqueDonations.map(d => d.donorEmail)).size;

  return (
    <DashboardLayout 
      userType="user" 
      title={`${mosque.name} Dashboard`}
      subtitle="Manage your mosque donations and activities"
      breadcrumbs={breadcrumbs}
    >
      {/* Mosque Info Card */}
      <Card className="mb-6 border-0 bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-600 p-3 rounded-xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{mosque.name}</h2>
                <p className="text-gray-600">{mosque.location}</p>
                <p className="text-sm text-gray-500 mt-1">{mosque.description}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Settings className="h-4 w-4 mr-2" />
                Manage Mosque
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm">Total Received</p>
                <p className="text-2xl font-bold">{formatCurrency(totalReceived)}</p>
              </div>
              <Heart className="h-8 w-8 text-emerald-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Donations</p>
                <p className="text-2xl font-bold">{mosqueDonations.length}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Unique Donors</p>
                <p className="text-2xl font-bold">{uniqueDonors}</p>
              </div>
              <Users className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">This Month</p>
                <p className="text-2xl font-bold">{completedDonations}</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Donations */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Recent Donations</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mosqueDonations.slice(0, 5).map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.donorName}</TableCell>
                      <TableCell className="font-bold text-emerald-600">
                        {formatCurrency(donation.amount)}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {donation.type.charAt(0).toUpperCase() + donation.type.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{donation.timestamp.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(donation.status)}>
                          {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
            <Button variant="outline" className="w-full">
              <Building2 className="h-4 w-4 mr-2" />
              Update Mosque Info
            </Button>
            <Button variant="outline" className="w-full">
              <Heart className="h-4 w-4 mr-2" />
              View All Donations
            </Button>
            <Button variant="outline" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Donor Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MosqueManagerDashboard;
