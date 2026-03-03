// backend/src/models/Booking.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  dateOfBirth?: Date;
  eventType: string;
  otherEventType?: string;
  preferredDate: Date;
  preferredTime?: string;
  numberOfGuests: number;
  eventLocation: string;
  indoorOutdoor: 'Indoor' | 'Outdoor' | 'Both';
  style: 'Modern' | 'Traditional' | 'Mixed';
  services: string[];
  cakeDetails?: string;
  specialRequests?: string;
  budgetRange?: string;
  howHeard?: string;
  additionalNotes?: string;
  createdAt: Date;
}

const bookingSchema: Schema = new Schema<IBooking>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  dateOfBirth: { type: Date, required: false },
  eventType: { type: String, required: true },
  otherEventType: { type: String, required: false },
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String, required: false },
  numberOfGuests: { type: Number, required: true, min: 1 },
  eventLocation: { type: String, required: true },
  indoorOutdoor: {
    type: String,
    enum: ['Indoor', 'Outdoor', 'Both'],
    required: true,
  },
  style: {
    type: String,
    enum: ['Modern', 'Traditional', 'Mixed'],
    required: true,
  },
  services: { type: [String], required: true, minlength: 1 },
  cakeDetails: { type: String, required: false },
  specialRequests: { type: String, required: false },
  budgetRange: { type: String, required: false },
  howHeard: { type: String, required: false },
  additionalNotes: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const Booking: Model<IBooking> = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;