// src/app/page.tsx  (or wherever the error is)
import BookingForm from "@/app/components/BookingForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <BookingForm />
    </main>
  );
}