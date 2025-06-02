
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, CheckCircle, Heart } from 'lucide-react';
import { Mosque } from '@/types';

interface MosqueCardProps {
  mosque: Mosque;
  onDonate: (mosque: Mosque) => void;
  onViewDetails: (mosque: Mosque) => void;
}

const MosqueCard: React.FC<MosqueCardProps> = ({ mosque, onDonate, onViewDetails }) => {
  const progressPercentage = (mosque.currentDonations / mosque.donationGoal) * 100;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-emerald-100">
      <div className="relative">
        <img 
          src={mosque.image} 
          alt={mosque.name}
          className="w-full h-48 object-cover"
        />
        {mosque.verified && (
          <div className="absolute top-4 right-4 bg-emerald-500 rounded-full p-1">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-emerald-700">
            {mosque.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{mosque.name}</h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{mosque.location}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{mosque.description}</p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium text-emerald-600">
              ${mosque.currentDonations.toLocaleString()} / ${mosque.donationGoal.toLocaleString()}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <p className="text-xs text-gray-500 mt-1">{Math.round(progressPercentage)}% funded</p>
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={() => onDonate(mosque)}
            className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600"
          >
            <Heart className="h-4 w-4 mr-2" />
            Donate
          </Button>
          <Button 
            onClick={() => onViewDetails(mosque)}
            variant="outline" 
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MosqueCard;
