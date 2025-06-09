
export interface Mosque {
  id: string;
  name: string;
  location: string;
  region: string;
  image: string;
  description: string;
  donationGoal: number;
  currentDonations: number;
  category: string;
  verified: boolean;
  contact?: string;
  imam?: string;
  foundedYear?: number;
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
  paymentMethod: 'card' | 'mobile';
  paymentDetails: string; // Card number or phone number
  status: 'pending' | 'completed' | 'failed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalDonated: number;
  donationCount: number;
  isAdmin: boolean;
  joinedDate: Date;
  status: 'active' | 'inactive';
}

export interface AdminStats {
  totalDonations: number;
  totalMosques: number;
  totalUsers: number;
  recentDonations: Donation[];
  topMosques: Mosque[];
}
