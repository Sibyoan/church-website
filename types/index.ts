export type DonationType = 'tithes' | 'offering' | 'charity' | 'building';

export interface Donation {
  amount: number;
  purpose: DonationType;
  donorName?: string;
  email?: string;
  anonymous: boolean;
  paymentId: string;
  createdAt: Date;
}

export interface PrayerRequest {
  name: string;
  email?: string;
  request: string;
  createdAt: Date;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
}
