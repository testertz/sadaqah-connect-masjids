
import { Mosque, Donation, User, AdminStats } from '@/types';

export const mockMosques: Mosque[] = [
  {
    id: '1',
    name: 'Masjid Al-Noor',
    location: 'Kariakoo, Dar es Salaam',
    region: 'Dar es Salaam',
    image: 'https://images.unsplash.com/photo-1564769625392-651b8db05214?w=500',
    description: 'A central mosque serving the bustling Kariakoo community with daily prayers, Islamic education, and community services.',
    donationGoal: 50000000,
    currentDonations: 32000000,
    category: 'Community Mosque',
    verified: true,
    contact: '+255 22 218 0000',
    imam: 'Sheikh Abdullah Mwalimu',
    foundedYear: 1985
  },
  {
    id: '2',
    name: 'Masjid Bilal',
    location: 'Mwenge, Kinondoni',
    region: 'Dar es Salaam',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=500',
    description: 'Modern mosque with youth programs, Quran memorization classes, and community outreach initiatives.',
    donationGoal: 35000000,
    currentDonations: 18500000,
    category: 'Youth Center',
    verified: true,
    contact: '+255 22 277 1234',
    imam: 'Sheikh Hassan Kimambo',
    foundedYear: 1998
  },
  {
    id: '3',
    name: 'Masjid Umar Ibn Khattab',
    location: 'Moshi, Kilimanjaro',
    region: 'Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    description: 'Historic mosque at the foot of Mount Kilimanjaro, serving the local community with traditional Islamic teachings.',
    donationGoal: 25000000,
    currentDonations: 8750000,
    category: 'Historic Mosque',
    verified: true,
    contact: '+255 27 275 2000',
    imam: 'Sheikh Mohamed Mtasiwa',
    foundedYear: 1962
  },
  {
    id: '4',
    name: 'Masjid As-Salam',
    location: 'Arusha Town',
    region: 'Arusha',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
    description: 'Beautiful mosque serving the diverse Arusha community with multilingual services and interfaith dialogue.',
    donationGoal: 40000000,
    currentDonations: 29200000,
    category: 'Interfaith Center',
    verified: true,
    contact: '+255 27 250 8500',
    imam: 'Sheikh Abdallah Rajabu',
    foundedYear: 1975
  },
  {
    id: '5',
    name: 'Masjid Al-Hidaya',
    location: 'Stone Town, Zanzibar',
    region: 'Zanzibar',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500',
    description: 'Ancient mosque in the heart of Stone Town, preserving Swahili Islamic heritage and culture.',
    donationGoal: 60000000,
    currentDonations: 41500000,
    category: 'Heritage Mosque',
    verified: true,
    contact: '+255 24 223 3000',
    imam: 'Sheikh Khamis Al-Barwani',
    foundedYear: 1834
  },
  {
    id: '6',
    name: 'Masjid At-Taqwa',
    location: 'Mbeya City',
    region: 'Mbeya',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
    description: 'Growing mosque serving the highland community with educational programs and social services.',
    donationGoal: 30000000,
    currentDonations: 12600000,
    category: 'Educational Center',
    verified: true,
    contact: '+255 25 250 3456',
    imam: 'Sheikh Ibrahim Msigwa',
    foundedYear: 1990
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    mosqueId: '1',
    mosqueName: 'Masjid Al-Noor',
    amount: 500000,
    donorName: 'Ahmed Hassan',
    donorEmail: 'ahmed@example.com',
    type: 'zakat',
    message: 'For the renovation project',
    timestamp: new Date('2024-05-15'),
    paymentMethod: 'mobile',
    paymentDetails: '+255 754 123 456',
    status: 'completed'
  },
  {
    id: '2',
    mosqueId: '2',
    mosqueName: 'Masjid Bilal',
    amount: 250000,
    donorName: 'Fatuma Mohamed',
    donorEmail: 'fatuma@example.com',
    type: 'sadaqah',
    timestamp: new Date('2024-05-20'),
    paymentMethod: 'card',
    paymentDetails: '**** **** **** 1234',
    status: 'completed'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    phone: '+255 754 123 456',
    totalDonated: 2500000,
    donationCount: 8,
    isAdmin: false,
    joinedDate: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@sadaka.tz',
    totalDonated: 0,
    donationCount: 0,
    isAdmin: true,
    joinedDate: new Date('2023-12-01')
  }
];

export const mockAdminStats: AdminStats = {
  totalDonations: 142750000,
  totalMosques: 6,
  totalUsers: 1248,
  recentDonations: mockDonations,
  topMosques: mockMosques.slice(0, 3)
};
