import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "ስም ቢያንስ 2 ፊደል መሆን አለበት"),
  email: z.string().email("ትክክለኛ ኢሜል ያስገቡ"),
  phone: z.string().min(9, "ስልክ ቁጥር ትክክል መሆን አለበት"),
  location: z.string().min(1, "አካባቢ ያስገቡ (ለምሳሌ ፡ አዲስ አበባ)"),

  dateOfBirth: z.string().optional(),

  eventType: z.enum([
    "Proposal", "Anniversary", "Birthday", "BabyShower",
    "BridalShower", "Graduation", "Meeting", "Wedding", "Other"
  ], { required_error: "የክስተት አይነት ይምረጡ" }),
  otherEventType: z.string().optional(),

  preferredDate: z.string().min(1, "ቀን ይምረጡ"),
  preferredTime: z.string().optional(),

  numberOfGuests: z.number().min(1, "ቢያንስ 1 እንግዳ መኖር አለበት").max(100, "ከ 100 በላይ እንግዳ አይፈቀድም"),
  eventLocation: z.string().min(1, "የክስተቱ ቦታ ያስገቡ (ለምሳሌ፡ እንጦጦ፣ ቡልቡላ፣ ቤት፣ ሆቴል)"),

  indoorOutdoor: z.enum(["Indoor", "Outdoor", "Both"], {
    required_error: "ቤት ውስጥ ወይስ ውጭ ይምረጡ",
  }),

  style: z.enum(["Modern", "Traditional", "Mixed"], {
    required_error: "ስታይል ይምረጡ (ዘመናዊ / ባህላዊ / ቅልቅል)",
  }),

  services: z.array(
    z.enum([
      "LuxuryPicnicSetup", "EventDecoration", "Catering",
      "PhotographyVideography", "Cake", "Champagne",
      "CarDecoration", "ChairsTables", "Other"
    ])
  ).min(1, "ቢያንስ አንድ አገልግሎት ይምረጡ"),

  cakeDetails: z.string().optional(),
  specialRequests: z.string().optional(),
  budgetRange: z.enum(["5k-10k", "10k-20k", "20k+", "Custom"]).optional(),
  howHeard: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;