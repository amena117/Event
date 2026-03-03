// backend/src/index.ts
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import Booking from './models/booking';
import { bookingSchema } from './schemas/bookingSchema';

dotenv.config();

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// GET /api/event-types (dynamic from backend)
const EVENT_TYPES = [
  { value: 'Proposal', label: 'ፕሮፖዛል' },
  { value: 'Anniversary', label: 'የትዳር አመት' },
  // ... add others
  { value: 'Other', label: 'ሌላ' },
];

app.get('/api/event-types', (req: Request, res: Response) => {
  res.json({ success: true, data: EVENT_TYPES });
});

// POST /api/bookings – Save to MongoDB
app.post('/api/bookings', async (req: Request, res: Response) => {
  try {
    // Validate with Zod first
    const validatedData = bookingSchema.parse(req.body);

    // Create & save to MongoDB
    const newBooking = new Booking(validatedData);
    const saved = await newBooking.save();

    res.status(201).json({
      success: true,
      message: 'ቦኪንግ ተቀባይነት አግኝቷል!',
      bookingId: saved._id,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ success: false, error: err.message });
    } else {
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});