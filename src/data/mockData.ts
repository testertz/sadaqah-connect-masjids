
import { Mosque, Donation, User, AdminStats } from '@/types';

export const mockMosques: Mosque[] = [
  // Dar es Salaam Region
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
    name: 'Masjid An-Nur',
    location: 'Temeke, Dar es Salaam',
    region: 'Dar es Salaam',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    description: 'Family-oriented mosque with extensive children programs and women activities.',
    donationGoal: 28000000,
    currentDonations: 15200000,
    category: 'Family Center',
    verified: true,
    contact: '+255 22 285 5678',
    imam: 'Sheikh Omari Juma',
    foundedYear: 2001
  },
  
  // Kilimanjaro Region
  {
    id: '4',
    name: 'Masjid Umar Ibn Khattab',
    location: 'Moshi, Kilimanjaro',
    region: 'Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
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
    id: '5',
    name: 'Masjid At-Tawbah',
    location: 'Hai, Kilimanjaro',
    region: 'Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500',
    description: 'Mountain community mosque offering spiritual guidance and agricultural development programs.',
    donationGoal: 20000000,
    currentDonations: 12400000,
    category: 'Rural Development',
    verified: true,
    contact: '+255 27 275 3456',
    imam: 'Sheikh Bakari Moshi',
    foundedYear: 1978
  },

  // Arusha Region
  {
    id: '6',
    name: 'Masjid As-Salam',
    location: 'Arusha Town',
    region: 'Arusha',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
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
    id: '7',
    name: 'Masjid Al-Ikhlas',
    location: 'Tengeru, Arusha',
    region: 'Arusha',
    image: 'https://images.unsplash.com/photo-1564769625392-651b8db05214?w=500',
    description: 'Agricultural community mosque supporting farming families with Islamic banking and cooperative programs.',
    donationGoal: 22000000,
    currentDonations: 9800000,
    category: 'Agricultural Support',
    verified: true,
    contact: '+255 27 250 9876',
    imam: 'Sheikh Yahya Masoud',
    foundedYear: 1988
  },

  // Zanzibar Region
  {
    id: '8',
    name: 'Masjid Al-Hidaya',
    location: 'Stone Town, Zanzibar',
    region: 'Zanzibar',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=500',
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
    id: '9',
    name: 'Masjid Mwalimu Nyerere',
    location: 'Michenzani, Zanzibar',
    region: 'Zanzibar',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    description: 'Modern mosque named after the founding father, focusing on education and youth development.',
    donationGoal: 35000000,
    currentDonations: 21700000,
    category: 'Educational Center',
    verified: true,
    contact: '+255 24 223 4567',
    imam: 'Sheikh Ali Kikwete',
    foundedYear: 1999
  },

  // Mbeya Region
  {
    id: '10',
    name: 'Masjid At-Taqwa',
    location: 'Mbeya City',
    region: 'Mbeya',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
    description: 'Growing mosque serving the highland community with educational programs and social services.',
    donationGoal: 30000000,
    currentDonations: 12600000,
    category: 'Educational Center',
    verified: true,
    contact: '+255 25 250 3456',
    imam: 'Sheikh Ibrahim Msigwa',
    foundedYear: 1990
  },
  {
    id: '11',
    name: 'Masjid Al-Furqan',
    location: 'Uyole, Mbeya',
    region: 'Mbeya',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500',
    description: 'University area mosque serving students and academics with study circles and research programs.',
    donationGoal: 18000000,
    currentDonations: 7200000,
    category: 'Academic Center',
    verified: true,
    contact: '+255 25 250 7890',
    imam: 'Sheikh Hamza Mwamba',
    foundedYear: 1995
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
  },
  {
    id: '3',
    mosqueId: '8',
    mosqueName: 'Masjid Al-Hidaya',
    amount: 750000,
    donorName: 'Ibrahim Mwalimu',
    donorEmail: 'ibrahim@example.com',
    type: 'ramadan',
    message: 'Ramadan support for the community',
    timestamp: new Date('2024-05-18'),
    paymentMethod: 'mobile',
    paymentDetails: '+255 713 456 789',
    status: 'completed'
  },
  {
    id: '4',
    mosqueId: '6',
    mosqueName: 'Masjid As-Salam',
    amount: 300000,
    donorName: 'Aisha Ally',
    donorEmail: 'aisha@example.com',
    type: 'general',
    timestamp: new Date('2024-05-22'),
    paymentMethod: 'card',
    paymentDetails: '**** **** **** 5678',
    status: 'pending'
  },
  {
    id: '5',
    mosqueId: '4',
    mosqueName: 'Masjid Umar Ibn Khattab',
    amount: 425000,
    donorName: 'Omar Said',
    donorEmail: 'omar@example.com',
    type: 'eid',
    message: 'Eid celebration contribution',
    timestamp: new Date('2024-05-19'),
    paymentMethod: 'mobile',
    paymentDetails: '+255 768 901 234',
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
    joinedDate: new Date('2024-01-15'),
    status: 'active'
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@sadaka.tz',
    totalDonated: 0,
    donationCount: 0,
    isAdmin: true,
    joinedDate: new Date('2023-12-01'),
    status: 'active'
  },
  {
    id: '3',
    name: 'Fatuma Mohamed',
    email: 'fatuma@example.com',
    phone: '+255 756 789 012',
    totalDonated: 1800000,
    donationCount: 12,
    isAdmin: false,
    joinedDate: new Date('2024-02-10'),
    status: 'active'
  },
  {
    id: '4',
    name: 'Ibrahim Mwalimu',
    email: 'ibrahim@example.com',
    phone: '+255 713 456 789',
    totalDonated: 950000,
    donationCount: 5,
    isAdmin: false,
    joinedDate: new Date('2024-03-05'),
    status: 'inactive'
  },
  {
    id: '5',
    name: 'Aisha Ally',
    email: 'aisha@example.com',
    phone: '+255 765 432 108',
    totalDonated: 3200000,
    donationCount: 15,
    isAdmin: false,
    joinedDate: new Date('2024-01-28'),
    status: 'active'
  },
  {
    id: '6',
    name: 'Omar Said',
    email: 'omar@example.com',
    phone: '+255 768 901 234',
    totalDonated: 1250000,
    donationCount: 7,
    isAdmin: false,
    joinedDate: new Date('2024-02-28'),
    status: 'active'
  },
  {
    id: '7',
    name: 'Maryam Ali',
    email: 'maryam@example.com',
    phone: '+255 722 345 678',
    totalDonated: 875000,
    donationCount: 4,
    isAdmin: false,
    joinedDate: new Date('2024-03-15'),
    status: 'active'
  }
];

export const mockAdminStats: AdminStats = {
  totalDonations: 220750000,
  totalMosques: 11,
  totalUsers: 1847,
  recentDonations: mockDonations.slice(0, 5),
  topMosques: mockMosques.slice(0, 5)
};
