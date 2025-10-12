export type Booking = {
  id: string;
  userId: string;
  trainingSessionId: string;
  status: string;
  coinsUsed: number;
  bookedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};