
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Building2 as MosqueIcon, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Edit, 
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';
import { mockAdminStats, mockMosques, mockDonations, mockUsers } from '@/data/mockData';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

const AdminDashboard = () => {
  const [stats] = useState(mockAdminStats);
  const [showAddMosque, setShowAddMosque] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const breadcrumbs = [
    { label: 'Admin', href: '/admin' },
    { label: 'Dashboard' }
  ];

  return (
    <DashboardLayout 
      userType="admin" 
      title="Admin Dashboard"
      subtitle="Manage the Sadaka platform and monitor donations"
      breadcrumbs={breadcrumbs}
    >
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="mosques">Mosques</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Enhanced Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-emerald-100 text-sm font-medium">Total Donations</p>
                    <p className="text-3xl font-bold">{formatCurrency(stats.totalDonations)}</p>
                    <div className="flex items-center space-x-1 text-emerald-100">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-xs">+8.2% from last month</span>
                    </div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <DollarSign className="h-8 w-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-blue-100 text-sm font-medium">Total Mosques</p>
                    <p className="text-3xl font-bold">{stats.totalMosques}</p>
                    <div className="flex items-center space-x-1 text-blue-100">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-xs">+2 new this month</span>
                    </div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MosqueIcon className="h-8 w-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-purple-100 text-sm font-medium">Total Users</p>
                    <p className="text-3xl font-bold">{stats.totalUsers}</p>
                    <div className="flex items-center space-x-1 text-purple-100">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-xs">+15 new users</span>
                    </div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-orange-100 text-sm font-medium">Growth Rate</p>
                    <p className="text-3xl font-bold">+12.5%</p>
                    <div className="flex items-center space-x-1 text-orange-100">
                      <Activity className="h-4 w-4" />
                      <span className="text-xs">Platform growth</span>
                    </div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Activity Overview */}
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.recentDonations.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                          {getStatusIcon(donation.status)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{donation.mosqueName}</p>
                          <p className="text-sm text-gray-600">{donation.donorName}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600 text-lg">{formatCurrency(donation.amount)}</p>
                        <p className="text-xs text-gray-500">{donation.timestamp.toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Top Performing Mosques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.topMosques.map((mosque, index) => (
                    <div key={mosque.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                          <span className="font-bold text-emerald-600">#{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{mosque.name}</p>
                          <p className="text-sm text-gray-600">{mosque.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600 text-lg">{formatCurrency(mosque.currentDonations)}</p>
                        <p className="text-xs text-gray-500">
                          {Math.round((mosque.currentDonations / mosque.donationGoal) * 100)}% funded
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mosques" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-lg">Manage Mosques</CardTitle>
              <Button 
                onClick={() => setShowAddMosque(true)}
                className="bg-emerald-600 hover:bg-emerald-700 shadow-md"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Mosque
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Location</TableHead>
                      <TableHead className="font-semibold">Region</TableHead>
                      <TableHead className="font-semibold">Donations</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMosques.map((mosque) => (
                      <TableRow key={mosque.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{mosque.name}</TableCell>
                        <TableCell>{mosque.location}</TableCell>
                        <TableCell>{mosque.region}</TableCell>
                        <TableCell className="font-bold text-emerald-600">
                          {formatCurrency(mosque.currentDonations)}
                        </TableCell>
                        <TableCell>
                          <Badge className={mosque.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {mosque.verified ? 'Verified' : 'Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                              <Edit className="h-4 w-4 text-blue-600" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hover:bg-red-50">
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">All Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Donor</TableHead>
                      <TableHead className="font-semibold">Mosque</TableHead>
                      <TableHead className="font-semibold">Amount</TableHead>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Payment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockDonations.map((donation) => (
                      <TableRow key={donation.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div>
                            <p className="font-medium">{donation.donorName}</p>
                            <p className="text-sm text-gray-600">{donation.donorEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{donation.mosqueName}</TableCell>
                        <TableCell className="font-bold text-emerald-600">
                          {formatCurrency(donation.amount)}
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800">
                            {donation.type.charAt(0).toUpperCase() + donation.type.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{donation.timestamp.toLocaleDateString('en-GB')}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(donation.status)}
                            <span className="capitalize">{donation.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="capitalize">{donation.paymentMethod}</p>
                            <p className="text-sm text-gray-600">{donation.paymentDetails}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold">Phone</TableHead>
                      <TableHead className="font-semibold">Total Donated</TableHead>
                      <TableHead className="font-semibold">Donations</TableHead>
                      <TableHead className="font-semibold">Join Date</TableHead>
                      <TableHead className="font-semibold">Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone || 'N/A'}</TableCell>
                        <TableCell className="font-bold text-emerald-600">
                          {formatCurrency(user.totalDonated)}
                        </TableCell>
                        <TableCell>{user.donationCount}</TableCell>
                        <TableCell>{user.joinedDate.toLocaleDateString('en-GB')}</TableCell>
                        <TableCell>
                          <Badge className={user.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}>
                            {user.isAdmin ? 'Admin' : 'User'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Enhanced Add Mosque Modal */}
      {showAddMosque && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md border-0 shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Add New Mosque</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Mosque Name</Label>
                <Input id="name" placeholder="Enter mosque name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                <Input id="location" placeholder="Enter location" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="region" className="text-sm font-medium">Region</Label>
                <Input id="region" placeholder="Enter region" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                <Textarea id="description" placeholder="Enter description" className="mt-1" />
              </div>
              <div className="flex space-x-3 pt-4">
                <Button 
                  onClick={() => setShowAddMosque(false)}
                  variant="outline" 
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => setShowAddMosque(false)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                >
                  Add Mosque
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminDashboard;
