
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Mosque } from '@/types';

interface MosqueInfoCardProps {
  mosque: Mosque;
}

const MosqueInfoCard: React.FC<MosqueInfoCardProps> = ({ mosque }) => {
  return (
    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
      <h3 className="font-semibold text-emerald-800">{mosque.name}</h3>
      <p className="text-sm text-emerald-600">{mosque.location}</p>
      <div className="flex items-center gap-2 mt-2">
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">{mosque.category}</Badge>
        {mosque.verified && (
          <Badge className="bg-green-100 text-green-700">Verified ✓</Badge>
        )}
      </div>
    </div>
  );
};

export default MosqueInfoCard;
