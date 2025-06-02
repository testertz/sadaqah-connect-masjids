
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface DonationAmountSelectorProps {
  amount: string;
  onAmountChange: (amount: string) => void;
}

const DonationAmountSelector: React.FC<DonationAmountSelectorProps> = ({ amount, onAmountChange }) => {
  const quickAmounts = [50000, 100000, 250000, 500000, 1000000]; // TZS amounts

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleAmountChange = (value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/\D/g, '');
    onAmountChange(numericValue);
  };

  return (
    <div>
      <Label htmlFor="amount" className="text-gray-700 font-medium">Donation Amount (TZS) *</Label>
      <div className="grid grid-cols-3 gap-2 mt-2 mb-3">
        {quickAmounts.map((quickAmount) => (
          <Button
            key={quickAmount}
            variant={amount === quickAmount.toString() ? "default" : "outline"}
            size="sm"
            onClick={() => onAmountChange(quickAmount.toString())}
            className={amount === quickAmount.toString() ? "bg-emerald-600 hover:bg-emerald-700" : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"}
          >
            {formatCurrency(quickAmount).replace('TZS', '')}
          </Button>
        ))}
      </div>
      <Input
        id="amount"
        type="text"
        placeholder="Enter custom amount"
        value={amount}
        onChange={(e) => handleAmountChange(e.target.value)}
        className="border-emerald-200 focus:border-emerald-500"
      />
      {amount && (
        <p className="text-sm text-emerald-600 mt-1">
          Amount: {formatCurrency(parseInt(amount) || 0)}
        </p>
      )}
    </div>
  );
};

export default DonationAmountSelector;
