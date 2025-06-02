
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DonorInformationFormProps {
  donorName: string;
  donorEmail: string;
  donationType: string;
  message: string;
  onDonorNameChange: (name: string) => void;
  onDonorEmailChange: (email: string) => void;
  onDonationTypeChange: (type: string) => void;
  onMessageChange: (message: string) => void;
}

const DonorInformationForm: React.FC<DonorInformationFormProps> = ({
  donorName,
  donorEmail,
  donationType,
  message,
  onDonorNameChange,
  onDonorEmailChange,
  onDonationTypeChange,
  onMessageChange
}) => {
  return (
    <>
      {/* Donation Type */}
      <div>
        <Label className="text-gray-700 font-medium">Donation Type</Label>
        <Select value={donationType} onValueChange={onDonationTypeChange}>
          <SelectTrigger className="mt-2 border-emerald-200 focus:border-emerald-500">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Donation</SelectItem>
            <SelectItem value="zakat">Zakat</SelectItem>
            <SelectItem value="sadaqah">Sadaqah</SelectItem>
            <SelectItem value="ramadan">Ramadan Fund</SelectItem>
            <SelectItem value="eid">Eid Celebration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Donor Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="donorName" className="text-gray-700 font-medium">Full Name *</Label>
          <Input
            id="donorName"
            placeholder="Your full name"
            value={donorName}
            onChange={(e) => onDonorNameChange(e.target.value)}
            className="mt-2 border-emerald-200 focus:border-emerald-500"
          />
        </div>
        <div>
          <Label htmlFor="donorEmail" className="text-gray-700 font-medium">Email *</Label>
          <Input
            id="donorEmail"
            type="email"
            placeholder="your@email.com"
            value={donorEmail}
            onChange={(e) => onDonorEmailChange(e.target.value)}
            className="mt-2 border-emerald-200 focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-gray-700 font-medium">Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Leave a message or prayer... (Optional)"
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          className="mt-2 border-emerald-200 focus:border-emerald-500"
          rows={3}
        />
      </div>
    </>
  );
};

export default DonorInformationForm;
