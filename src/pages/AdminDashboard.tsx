import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Building, Users, TrendingUp, DollarSign, Eye, Edit, Trash2, Plus, Search, Filter } from 'lucide-react';
import { mockAdminStats, mockMosques, mockDonations, mockUsers } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [searchTermMosques, setSearchTermMosques] = useState('');
  const [searchTermDonations, setSearchTermDonations] = useState('');
  const [searchTermUsers, setSearchTermUsers] = useState('');
  const [mosqueFilter, setMosqueFilter] = useState('all');
  const [donationFilter, setDonationFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const { toast } = useToast();

  const handleEditMosque = (id: string) => {
    console.log('Edit mosque:', id);
    toast({
      title: "Edit Mosque",
      description: `Editing mosque with ID: ${id}`,
    });
  };

  const handleDeleteMosque = (id: string) => {
    console.log('Delete mosque:', id);
    toast({
      title: "Delete Mosque",
      description: `Deleting mosque with ID: ${id}`,
    });
  };

  const handleViewDonation = (id: string) => {
    console.log('View donation:', id);
     toast({
      title: "View Donation",
      description: `Viewing donation with ID: ${id}`,
    });
  };

  const handleEditDonation = (id: string) => {
    console.log('Edit donation:', id);
     toast({
      title: "Edit Donation",
      description: `Editing donation with ID: ${id}`,
    });
  };

  const handleDeleteDonation = (id: string) => {
    console.log('Delete donation:', id);
     toast({
      title: "Delete Donation",
      description: `Deleting donation with ID: ${id}`,
    });
  };

  const handleViewUser = (id: string) => {
    console.log('View user:', id);
     toast({
      title: "View User",
      description: `Viewing user with ID: ${id}`,
    });
  };

  const handleEditUser = (id: string) => {
    console.log('Edit user:', id);
     toast({
      title: "Edit User",
      description: `Editing user with ID: ${id}`,
    });
  };

  const handleDeleteUser = (id: string) => {
    console.log('Delete user:', id);
     toast({
      title: "Delete User",
      description: `Deleting user with ID: ${id}`,
    });
  };

  const filteredMosques = mockMosques.filter(mosque => {
    const searchTermMatch = mosque.name.toLowerCase().includes(searchTermMosques.toLowerCase()) ||
      mosque.location.toLowerCase().includes(searchTermMosques.toLowerCase());
    const filterMatch = mosqueFilter === 'all' || mosque.category.toLowerCase() === mosqueFilter;
    return searchTermMatch && filterMatch;
  });

  const filteredDonations = mockDonations.filter(donation => {
    const searchTermMatch = donation.donorName.toLowerCase().includes(searchTermDonations.toLowerCase()) ||
      donation.mosqueName.toLowerCase().includes(searchTermDonations.toLowerCase());
    const filterMatch = donationFilter === 'all' || donation.type.toLowerCase() === donationFilter;
    return searchTermMatch && filterMatch;
  });

  const filteredUsers = mockUsers.filter(user => {
    const searchTermMatch = user.name.toLowerCase().includes(searchTermUsers.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTermUsers.toLowerCase());
    const filterMatch = userFilter === 'all' || (userFilter === 'admin' ? user.isAdmin : !user.isAdmin);
    return searchTermMatch && filterMatch;
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const donationData = mockDonations.reduce((acc: { [key: string]: number }, donation) => {
    acc[donation.mosqueName] = (acc[donation.mosqueName] || 0) + donation.amount;
    return acc;
  }, {});

  const pieData = Object.entries(donationData).map(([name, value]) => ({ name, value }));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <Button variant="outline">Logout</Button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Total Donations
              </CardTitle>
              <CardDescription>Overall donations received</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">TZS {mockAdminStats.totalDonations.toLocaleString()}</div>
              <p className="text-sm text-gray-500">
                <span className="text-green-500">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-blue-500" />
                Total Mosques
              </CardTitle>
              <CardDescription>Number of registered mosques</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{mockAdminStats.totalMosques}</div>
              <p className="text-sm text-gray-500">
                <span className="text-green-500">+4</span> new mosques this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Total Users
              </CardTitle>
              <CardDescription>Number of registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{mockAdminStats.totalUsers}</div>
              <p className="text-sm text-gray-500">
                <span className="text-red-500">-2%</span> fewer users than last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mosques">Mosques</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donations Overview</CardTitle>
                <CardDescription>Graphical representation of donations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockDonations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mosqueName" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donations by Mosque</CardTitle>
                <CardDescription>Pie chart of donations per mosque</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mosques" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search mosques..."
                  value={searchTermMosques}
                  onChange={(e) => setSearchTermMosques(e.target.value)}
                />
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  className="border rounded px-3 py-2"
                  value={mosqueFilter}
                  onChange={(e) => setMosqueFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {[...new Set(mockMosques.map(mosque => mosque.category.toLowerCase()))].map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Mosque
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMosques.map((mosque) => (
                  <TableRow key={mosque.id}>
                    <TableCell>{mosque.name}</TableCell>
                    <TableCell>{mosque.location}</TableCell>
                    <TableCell>{mosque.category}</TableCell>
                    <TableCell className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditMosque(mosque.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteMosque(mosque.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search donations..."
                  value={searchTermDonations}
                  onChange={(e) => setSearchTermDonations(e.target.value)}
                />
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  className="border rounded px-3 py-2"
                  value={donationFilter}
                  onChange={(e) => setDonationFilter(e.target.value)}
                >
                  <option value="all">All Types</option>
                  {[...new Set(mockDonations.map(donation => donation.type.toLowerCase()))].map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Donation
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead>Mosque</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDonations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell>{donation.donorName}</TableCell>
                    <TableCell>{donation.mosqueName}</TableCell>
                    <TableCell>TZS {donation.amount.toLocaleString()}</TableCell>
                    <TableCell>{donation.type}</TableCell>
                    <TableCell className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleViewDonation(donation.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEditDonation(donation.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteDonation(donation.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search users..."
                  value={searchTermUsers}
                  onChange={(e) => setSearchTermUsers(e.target.value)}
                />
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  className="border rounded px-3 py-2"
                  value={userFilter}
                  onChange={(e) => setUserFilter(e.target.value)}
                >
                  <option value="all">All Users</option>
                  <option value="admin">Admins</option>
                  <option value="non-admin">Non-Admins</option>
                </select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Admin</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                    <TableCell className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleViewUser(user.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEditUser(user.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
