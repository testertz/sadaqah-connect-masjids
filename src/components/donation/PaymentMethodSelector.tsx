
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone } from 'lucide-react';

interface PaymentMethodSelectorProps {
  paymentMethod: 'mobile' | 'card';
  paymentDetails: string;
  onPaymentMethodChange: (method: 'mobile' | 'card') => void;
  onPaymentDetailsChange: (details: string) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  paymentMethod,
  paymentDetails,
  onPaymentMethodChange,
  onPaymentDetailsChange
}) => {
  const formatPaymentInput = (value: string) => {
    if (paymentMethod === 'card') {
      // Format card number with spaces every 4 digits
      return value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    return value;
  };

  return (
    <>
      {/* Payment Method */}
      <div>
        <Label className="text-gray-700 font-medium">Payment Method *</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Button
            variant={paymentMethod === 'mobile' ? "default" : "outline"}
            onClick={() => {
              onPaymentMethodChange('mobile');
              onPaymentDetailsChange('');
            }}
            className={`flex items-center justify-center gap-2 ${
              paymentMethod === 'mobile' 
                ? "bg-emerald-600 hover:bg-emerald-700" 
                : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            <Smartphone className="h-4 w-4" />
            Mobile Money
          </Button>
          <Button
            variant={paymentMethod === 'card' ? "default" : "outline"}
            onClick={() => {
              onPaymentMethodChange('card');
              onPaymentDetailsChange('');
            }}
            className={`flex items-center justify-center gap-2 ${
              paymentMethod === 'card' 
                ? "bg-emerald-600 hover:bg-emerald-700" 
                : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            <CreditCard className="h-4 w-4" />
            Card
          </Button>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <Label htmlFor="paymentDetails" className="text-gray-700 font-medium">
          {paymentMethod === 'mobile' ? 'Mobile Number *' : 'Card Number *'}
        </Label>
        <Input
          id="paymentDetails"
          type="text"
          placeholder={
            paymentMethod === 'mobile' 
              ? "+255754123456" 
              : "1234 5678 9012 3456"
          }
          value={formatPaymentInput(paymentDetails)}
          onChange={(e) => onPaymentDetailsChange(e.target.value)}
          className="mt-2 border-emerald-200 focus:border-emerald-500"
          maxLength={paymentMethod === 'mobile' ? 13 : 19}
        />
        <p className="text-xs text-gray-500 mt-1">
          {paymentMethod === 'mobile' 
            ? 'Enter your M-Pesa, Tigo Pesa, or Airtel Money number'
            : 'Enter your 16-digit card number'
          }
        </p>
      </div>
    </>
  );
};

export default PaymentMethodSelector;
