
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin } from 'lucide-react';
import { mockMosques } from '@/data/mockData';
import { Mosque } from '@/types';
import MosqueCard from '@/components/MosqueCard';
import DonationModal from '@/components/DonationModal';

const Mosques = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const regions = [...new Set(mockMosques.map(mosque => mosque.region))];
  const categories = [...new Set(mockMosques.map(mosque => mosque.category))];

  const filteredMosques = useMemo(() => {
    return mockMosques.filter(mosque => {
      const matchesSearch = mosque.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mosque.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || mosque.region === selectedRegion;
      const matchesCategory = selectedCategory === 'all' || mosque.category === selectedCategory;
      
      return matchesSearch && matchesRegion && matchesCategory;
    });
  }, [searchTerm, selectedRegion, selectedCategory]);

  const handleDonate = (mosque: Mosque) => {
    setSelectedMosque(mosque);
    setIsDonationModalOpen(true);
  };

  const handleViewDetails = (mosque: Mosque) => {
    handleDonate(mosque);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Mosques in Tanzania</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and support verified mosques across all regions of Tanzania
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search mosques by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-emerald-200 focus:border-emerald-500"
              />
            </div>

            {/* Region Filter */}
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                  <SelectValue placeholder="Select Region" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map(region => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-emerald-600" />
                  <SelectValue placeholder="Select Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-emerald-50 rounded-lg px-4 py-2">
              <span className="text-emerald-700 font-medium">
                {filteredMosques.length} mosque{filteredMosques.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Mosques Grid */}
        {filteredMosques.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMosques.map(mosque => (
              <MosqueCard
                key={mosque.id}
                mosque={mosque}
                onDonate={handleDonate}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No mosques found</h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or browse all mosques
            </p>
          </div>
        )}
      </div>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        mosque={selectedMosque}
      />
    </div>
  );
};

export default Mosques;
