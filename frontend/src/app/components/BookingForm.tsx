// frontend/src/components/BookingForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "@/app/lib/schema"; // copy schema.ts from backend or create it
import { useEffect, useState } from "react";

type EventTypeOption = { value: string; label: string };

export default function BookingForm() {
  const [eventTypes, setEventTypes] = useState<EventTypeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      services: [],
      numberOfGuests: 2,
    },
  });

  const selectedEvent = watch("eventType");

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/event-types");
        if (!res.ok) throw new Error("Failed to load event types");
        const data = await res.json();
        if (data.success) {
          setEventTypes(data.data);
        }
      } catch (err: any) {
        setError("የክስተት አይነቶች መጫን አልተቻለም።");
      } finally {
        setLoading(false);
      }
    };
    fetchTypes();
  }, []);

  const onSubmit = async (data: BookingFormData) => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Submission failed");
      }

      const result = await res.json();
      alert(`ቦኪንግ ተልኳል! ID: ${result.bookingId}`);
      console.log("Success:", result);
    } catch (err: any) {
      alert("Error: " + err.message);
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">ሉክሰሪ ፒክኒክ ቦኪንግ</h1>

      {loading && <p className="text-center">እየጫነ...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {!loading && !error && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Basic test fields */}
          <div>
            <label className="block mb-1">ስም *</label>
            <input
              {...register("fullName")}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="አሜን"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block mb-1">ኢሜል *</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-3 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1">የክስተት አይነት *</label>
            <select
              {...register("eventType")}
              className="w-full p-3 border rounded"
            >
              <option value="">ይምረጡ</option>
              {eventTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType.message}</p>}
          </div>

          {selectedEvent === "Other" && (
            <div>
              <label className="block mb-1">ሌላ አይነት ጻፍ</label>
              <input
                {...register("otherEventType")}
                className="w-full p-3 border rounded"
                placeholder="እባክዎ ይግለጹ..."
              />
            </div>
          )}

          <div>
            <label className="block mb-1">ቀን *</label>
            <input
              type="date"
              {...register("preferredDate")}
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">የእንግዶች ብዛት *</label>
            <input
              type="number"
              {...register("numberOfGuests", { valueAsNumber: true })}
              min="1"
              className="w-full p-3 border rounded"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="w-full bg-purple-600 text-white py-3 rounded font-bold hover:bg-purple-700 disabled:opacity-50"
          >
            {isSubmitting ? "በመላክ ላይ..." : "ቦኪንግ ላክ"}
          </button>
        </form>
      )}
    </div>
  );
}