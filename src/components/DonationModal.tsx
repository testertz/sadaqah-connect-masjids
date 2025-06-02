
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Mosque } from '@/types';
import { useToast } from '@/hooks/use-toast';
import MosqueInfoCard from './donation/MosqueInfoCard';
import DonationAmountSelector from './donation/DonationAmountSelector';
import DonorInformationForm from './donation/DonorInformationForm';
import PaymentMethodSelector from './donation/PaymentMethodSelector';

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
  const [paymentMethod, setPaymentMethod] = useState<'mobile' | 'card'>('mobile');
  const [paymentDetails, setPaymentDetails] = useState('');
  const { toast } = useToast();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleDonate = () => {
    if (!amount || !donorName || !donorEmail || !paymentDetails) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including payment details.",
        variant: "destructive",
      });
      return;
    }

    // Validate payment details
    if (paymentMethod === 'mobile') {
      const phonePattern = /^\+255[67]\d{8}$/;
      if (!phonePattern.test(paymentDetails)) {
        toast({
          title: "Invalid Phone Number",
          description: "Please enter a valid Tanzanian mobile number (e.g., +255754123456).",
          variant: "destructive",
        });
        return;
      }
    } else if (paymentMethod === 'card') {
      const cardPattern = /^\d{16}$/;
      if (!cardPattern.test(paymentDetails.replace(/\s/g, ''))) {
        toast({
          title: "Invalid Card Number",
          description: "Please enter a valid 16-digit card number.",
          variant: "destructive",
        });
        return;
      }
    }

    toast({
      title: "Donation Successful! 🤲",
      description: `Asante sana! Your donation of ${formatCurrency(parseInt(amount))} to ${mosque?.name} has been processed. May Allah accept your donation.`,
    });

    // Reset form
    setAmount('');
    setDonorName('');
    setDonorEmail('');
    setMessage('');
    setPaymentDetails('');
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
          <MosqueInfoCard mosque={mosque} />
          
          <DonationAmountSelector
            amount={amount}
            onAmountChange={setAmount}
          />

          <DonorInformationForm
            donorName={donorName}
            donorEmail={donorEmail}
            donationType={donationType}
            message={message}
            onDonorNameChange={setDonorName}
            onDonorEmailChange={setDonorEmail}
            onDonationTypeChange={setDonationType}
            onMessageChange={setMessage}
          />

          <PaymentMethodSelector
            paymentMethod={paymentMethod}
            paymentDetails={paymentDetails}
            onPaymentMethodChange={setPaymentMethod}
            onPaymentDetailsChange={setPaymentDetails}
          />

          {/* Donate Button */}
          <Button 
            onClick={handleDonate}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-3"
            size="lg"
          >
            <Heart className="mr-2 h-5 w-5" />
            Complete Donation ({amount ? formatCurrency(parseInt(amount)) : 'TZS 0'})
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Your donation is secure and will be processed immediately. You will receive a confirmation SMS/email.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
