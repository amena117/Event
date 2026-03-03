// backend/src/schemas/bookingSchema.ts
import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'ስም ቢያንስ 2 ፊደል መሆን አለበት'),
  email: z.string().email('ትክክለኛ ኢሜል ያስገቡ'),
  phone: z.string().min(9, 'ስልክ ቁጥር ትክክል መሆን አለበት'),
  location: z.string().min(1, 'ቦታ ያስገቡ'),
  dateOfBirth: z.string().optional().transform((val) => (val ? new Date(val) : undefined)),

  // eventType – no required_error object, just string + custom message via .refine or min(1)
  eventType: z.string().min(1, 'የክስተት አይነት ይምረጡ'),

  otherEventType: z.string().optional(),

  preferredDate: z.string().min(1, 'ቀን ይምረጡ').transform((val) => new Date(val)),
  preferredTime: z.string().optional(),

  numberOfGuests: z.number().min(1, 'ቢያንስ 1 እንግድ መኖር አለበት').max(100),
  eventLocation: z.string().min(1, 'የክስተቱ ቦታ ያስገቡ'),

  // indoorOutdoor – remove the object param
  indoorOutdoor: z.enum(['Indoor', 'Outdoor', 'Both']),

  // style – remove the object param
  style: z.enum(['Modern', 'Traditional', 'Mixed']),

  services: z
    .array(z.string())
    .min(1, 'ቢያንስ አንድ አገልግሎት ይምረጡ'),

  cakeDetails: z.string().optional(),
  specialRequests: z.string().optional(),
  budgetRange: z.enum(['5k-10k', '10k-20k', '20k+', 'Custom']).optional(),
  howHeard: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;