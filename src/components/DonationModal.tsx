
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Heart, CreditCard, Smartphone } from 'lucide-react';
import { Mosque } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  mosque: Mosque | null;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, mosque }) => {
  const [amount, setAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { toast } = useToast();

  const quickAmounts = [25, 50, 100, 250, 500];

  const handleDonate = () => {
    if (!amount || !donorName || !donorEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Donation Successful! 🤲",
      description: `Thank you for donating $${amount} to ${mosque?.name}. May Allah accept your donation.`,
    });

    // Reset form
    setAmount('');
    setDonorName('');
    setDonorEmail('');
    setMessage('');
    onClose();
  };

  if (!mosque) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-emerald-800">
            <Heart className="h-5 w-5" />
            Donate to {mosque.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Mosque Info */}
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-semibold text-emerald-800">{mosque.name}</h3>
            <p className="text-sm text-emerald-600">{mosque.location}</p>
            <Badge variant="secondary" className="mt-2">{mosque.category}</Badge>
          </div>

          {/* Amount Selection */}
          <div>
            <Label htmlFor="amount" className="text-gray-700 font-medium">Donation Amount ($) *</Label>
            <div className="grid grid-cols-3 gap-2 mt-2 mb-3">
              {quickAmounts.map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant={amount === quickAmount.toString() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAmount(quickAmount.toString())}
                  className={amount === quickAmount.toString() ? "bg-emerald-600 hover:bg-emerald-700" : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"}
                >
                  ${quickAmount}
                </Button>
              ))}
            </div>
            <Input
              id="amount"
              type="number"
              placeholder="Enter custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-emerald-200 focus:border-emerald-500"
            />
          </div>

          {/* Donation Type */}
          <div>
            <Label className="text-gray-700 font-medium">Donation Type</Label>
            <Select value={donationType} onValueChange={setDonationType}>
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
                onChange={(e) => setDonorName(e.target.value)}
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
                onChange={(e) => setDonorEmail(e.target.value)}
                className="mt-2 border-emerald-200 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Leave a message or prayer..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 border-emerald-200 focus:border-emerald-500"
              rows={3}
            />
          </div>

          {/* Payment Method */}
          <div>
            <Label className="text-gray-700 font-medium">Payment Method</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Button
                variant={paymentMethod === 'card' ? "default" : "outline"}
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-2 ${
                  paymentMethod === 'card' 
                    ? "bg-emerald-600 hover:bg-emerald-700" 
                    : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                <CreditCard className="h-4 w-4" />
                Card
              </Button>
              <Button
                variant={paymentMethod === 'mobile' ? "default" : "outline"}
                onClick={() => setPaymentMethod('mobile')}
                className={`flex items-center justify-center gap-2 ${
                  paymentMethod === 'mobile' 
                    ? "bg-emerald-600 hover:bg-emerald-700" 
                    : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                <Smartphone className="h-4 w-4" />
                Mobile Money
              </Button>
            </div>
          </div>

          {/* Donate Button */}
          <Button 
            onClick={handleDonate}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-3"
            size="lg"
          >
            <Heart className="mr-2 h-5 w-5" />
            Complete Donation (${amount || '0'})
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Your donation is secure and will be processed immediately. You will receive a confirmation email.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
