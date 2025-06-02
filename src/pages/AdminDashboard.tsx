
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Mosque as MosqueIcon, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Edit, 
  Trash2,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import { mockAdminStats, mockMosques, mockDonations, mockUsers } from '@/data/mockData';

const AdminDashboard = () => {
  const [stats] = useState(mockAdminStats);
  const [activeTab, setActiveTab] = useState('overview');
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

  const TabButton = ({ id, label, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-emerald-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage the Sadaka platform and monitor donations</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 bg-white p-1 rounded-lg shadow-sm w-fit">
          <TabButton id="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="mosques" label="Mosques" isActive={activeTab === 'mosques'} onClick={setActiveTab} />
          <TabButton id="donations" label="Donations" isActive={activeTab === 'donations'} onClick={setActiveTab} />
          <TabButton id="users" label="Users" isActive={activeTab === 'users'} onClick={setActiveTab} />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-emerald-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Donations</p>
                      <p className="text-2xl font-bold text-emerald-600">{formatCurrency(stats.totalDonations)}</p>
                    </div>
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Mosques</p>
                      <p className="text-2xl font-bold text-blue-600">{stats.totalMosques}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MosqueIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Users</p>
                      <p className="text-2xl font-bold text-purple-600">{stats.totalUsers}</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Growth Rate</p>
                      <p className="text-2xl font-bold text-orange-600">+12.5%</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.recentDonations.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(donation.status)}
                          <div>
                            <p className="font-medium">{donation.mosqueName}</p>
                            <p className="text-sm text-gray-600">{donation.donorName}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-emerald-600">{formatCurrency(donation.amount)}</p>
                          <p className="text-xs text-gray-500">{donation.timestamp.toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Mosques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.topMosques.map((mosque, index) => (
                      <div key={mosque.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="font-bold text-emerald-600">#{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium">{mosque.name}</p>
                            <p className="text-sm text-gray-600">{mosque.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-emerald-600">{formatCurrency(mosque.currentDonations)}</p>
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
          </>
        )}

        {/* Mosques Tab */}
        {activeTab === 'mosques' && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Manage Mosques</CardTitle>
              <Button 
                onClick={() => setShowAddMosque(true)}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Mosque
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Donations</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockMosques.map((mosque) => (
                    <TableRow key={mosque.id}>
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
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <Card>
            <CardHeader>
              <CardTitle>All Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor</TableHead>
                    <TableHead>Mosque</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDonations.map((donation) => (
                    <TableRow key={donation.id}>
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
            </CardContent>
          </Card>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Total Donated</TableHead>
                    <TableHead>Donations</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
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
            </CardContent>
          </Card>
        )}

        {/* Add Mosque Modal (simplified) */}
        {showAddMosque && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Add New Mosque</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Mosque Name</Label>
                  <Input id="name" placeholder="Enter mosque name" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter location" />
                </div>
                <div>
                  <Label htmlFor="region">Region</Label>
                  <Input id="region" placeholder="Enter region" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter description" />
                </div>
                <div className="flex space-x-3">
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
      </div>
    </div>
  );
};

export default AdminDashboard;
