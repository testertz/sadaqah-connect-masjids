
export interface Mosque {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  donationGoal: number;
  currentDonations: number;
  category: string;
  verified: boolean;
}

export interface Donation {
  id: string;
  mosqueId: string;
  mosqueName: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  type: 'general' | 'zakat' | 'sadaqah' | 'ramadan' | 'eid';
  message?: string;
  timestamp: Date;
  paymentMethod: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  totalDonated: number;
  donationCount: number;
}
