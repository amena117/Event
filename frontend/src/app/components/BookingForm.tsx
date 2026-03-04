"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "@/app/lib/schema";
import { useState } from "react";

const eventTypeOptions = [
  { value: "Proposal", label: "ፕሮፖዛል (Proposal)" },
  { value: "Anniversary", label: "የትዳር አመት (Anniversary)" },
  { value: "Birthday", label: "ልደት ለራስ ወይም ስጦታ (Birthday)" },
  { value: "BabyShower", label: "የህፃን ሻወር (Baby Shower)" },
  { value: "BridalShower", label: "የሙሽራ ሻወር (Bridal Shower)" },
  { value: "Graduation", label: "ምርቃት (Graduation)" },
  { value: "Meeting", label: "ስብሰባ (Meeting)" },
  { value: "Wedding", label: "ሰርግ (Wedding)" },
  { value: "Other", label: "ሌላ (Other)" },
];

const serviceOptions = [
  { value: "LuxuryPicnicSetup", label: "የሉክሰሪ ፒክኒክ ዝግጅት (Luxury Picnic Setup)" },
  { value: "EventDecoration", label: "የዝግጅት ማስጌጥ (Event Decoration)" },
  { value: "Catering", label: "ምግብ (Catering)" },
  { value: "PhotographyVideography", label: "ፎቶ እና ቪዲዮ (Photography/Videography)" },
  { value: "Cake", label: "ኬክ (Cake)" },
  { value: "Champagne", label: "ቻምፓኝ (Champagne)" },
  { value: "CarDecoration", label: "መኪና ማስጌጥ (Car Decoration)" },
  { value: "ChairsTables", label: "ወንበር እና ጠረጴዛ (Chairs/Tables)" },
  { value: "Other", label: "ሌላ (Other)" },
];

export default function BookingForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      services: [],
      numberOfGuests: 2,
    },
  });

  const selectedEventType = watch("eventType");
  const selectedServices = watch("services") || [];
  const requiresCake = selectedServices.includes("Cake");

  const onSubmit = async (data: BookingFormData) => {
    setSuccessMessage(null);
    setErrorMessage(null);
    try {
      // NOTE: File upload (e.g., multer/Cloudinary) can be handled via multipart/form-data here if needed.
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Submission failed");
      }

      setSuccessMessage("ቦኪንግዎ ተልኳል! በ48 ሰዓት ውስጥ እንገናኛለን።");
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || "ስህተት አጋጥሟል! እባክዎ እንደገና ይሞክሩ።");
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12 mb-10 bg-white shadow-2xl rounded-2xl border-t-8 border-purple-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          ሉክሰሪ ፒክኒክ & ክስተት ቦኪንግ
        </h1>
        <p className="text-gray-500">Luxury Picnic & Event Booking</p>
      </div>

      {successMessage && (
        <div className="p-4 mb-6 bg-green-100 text-green-700 rounded-lg text-center font-bold">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg text-center font-bold">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

        {/* Section 1: Client Info */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">የአንተ / የአንቺ መረጃ (Client Info)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">ሙሉ ስም (Full Name) *</label>
              <input
                {...register("fullName")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="ስም እና የአባት ስም"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">ኢሜል (Email) *</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">ስልክ ቁጥር (Phone) *</label>
              <input
                {...register("phone")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="09..."
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">አካባቢ (Location) *</label>
              <input
                {...register("location")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="ቦሌ፣ ጉርድ ሾላ..."
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">የትውልድ ቀን (Date of Birth) - (አማራጭ)</label>
              <input
                type="date"
                {...register("dateOfBirth")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
            </div>
          </div>
        </section>

        {/* Section 2: Event Type */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">የክስተት አይነት (Event Type)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">ክስተት ይምረጡ *</label>
              <select
                {...register("eventType")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm bg-white"
              >
                <option value="">ይምረጡ...</option>
                {eventTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
            </div>

            {selectedEventType === "Other" && (
              <div>
                <label className="block mb-2 font-semibold text-gray-700">ሌላ ክስተት (If Other, specify)</label>
                <input
                  {...register("otherEventType")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                  placeholder="እባክዎ ይግለጹ..."
                />
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Event Details */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">የክስተቱ ዝርዝር (Event Details)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">የሚፈልጉት ቀን (Date) *</label>
              <input
                type="date"
                {...register("preferredDate")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">ሰዓት (Time) - (አማራጭ)</label>
              <input
                type="time"
                {...register("preferredTime")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">የእንግዶች ብዛት (Guests) *</label>
              <input
                type="number"
                {...register("numberOfGuests", { valueAsNumber: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              {errors.numberOfGuests && <p className="text-red-500 text-sm mt-1">{errors.numberOfGuests.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">ቦታ (Event Location) *</label>
              <input
                {...register("eventLocation")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="እንጦጦ፣ ቤትዎ፣ ወዘተ..."
              />
              {errors.eventLocation && <p className="text-red-500 text-sm mt-1">{errors.eventLocation.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">ቤት ውስጥ ወይስ ውጪ (Indoor/Outdoor) *</label>
              <select
                {...register("indoorOutdoor")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm bg-white"
              >
                <option value="">ይምረጡ...</option>
                <option value="Indoor">ቤት ውስጥ (Indoor)</option>
                <option value="Outdoor">ውጭ (Outdoor)</option>
                <option value="Both">ሁለቱም (Both)</option>
              </select>
              {errors.indoorOutdoor && <p className="text-red-500 text-sm mt-1">{errors.indoorOutdoor.message}</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">የአሰራር ስታይል (Style) *</label>
              <select
                {...register("style")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm bg-white"
              >
                <option value="">ይምረጡ...</option>
                <option value="Modern">ዘመናዊ (Modern)</option>
                <option value="Traditional">ባህላዊ (Traditional)</option>
                <option value="Mixed">ቅልቅል (Mixed)</option>
              </select>
              {errors.style && <p className="text-red-500 text-sm mt-1">{errors.style.message}</p>}
            </div>
          </div>
        </section>

        {/* Section 4: Services */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">የሚፈልጉት አገልግሎቶች (Services) *</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceOptions.map((srv) => (
              <label key={srv.value} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  value={srv.value}
                  {...register("services")}
                  className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-gray-700 group-hover:text-purple-600 transition">{srv.label}</span>
              </label>
            ))}
          </div>
          {errors.services && <p className="text-red-500 text-sm mt-2">{errors.services.message}</p>}

          {requiresCake && (
            <div className="mt-6">
              <label className="block mb-2 font-semibold text-gray-700">ስለ ኬኩ ዝርዝር (Cake Details - Kilo, Type)</label>
              <input
                {...register("cakeDetails")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="ለምሳሌ፡ 2 ኪሎ፣ ቸኮሌት..."
              />
            </div>
          )}
        </section>

        {/* Section 5: Additional Info */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">ተጨማሪ መረጃ (Additional Information)</h2>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">ልዩ ጥያቄዎች (Special Requests)</label>
              <textarea
                {...register("specialRequests")}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="ለምሳሌ፡ የቡና ስነ-ስርዓት፣ ሰርፕራይዝ፣ የሚወዱት ቀለም..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">የበጀት መጠን (Budget Range) - (አማራጭ)</label>
                <select
                  {...register("budgetRange")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm bg-white"
                >
                  <option value="">ይምረጡ...</option>
                  <option value="5k-10k">5,000 - 10,000 ETB</option>
                  <option value="10k-20k">10,000 - 20,000 ETB</option>
                  <option value="20k+">ከ 20,000 ETB በላይ</option>
                  <option value="Custom">ልዩ በጀት (Custom)</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">ስለ እኛ ከየት ሰሙ? (How did you hear about us?)</label>
                <input
                  {...register("howHeard")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                  placeholder="Instagram, Tiktok, ጓደኛ..."
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">ተጨማሪ ማስታወሻ (Additional Notes)</label>
              <textarea
                {...register("additionalNotes")}
                rows={2}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>

            {/* Optional File Upload Note for User */}
            {/* <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded">
              <label className="block mb-2 text-sm text-gray-600">ፎቶ / ማስረጃ (Optional Reference Image Upload)</label>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
              <p className="text-xs text-gray-400 mt-2">Note: Require backend configuration (e.g. Multer/Cloudinary) to process.</p>
            </div> */}

          </div>
        </section>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-600 transition shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "በመላክ ላይ..." : "ቦኪንግ ላክ (Submit Booking)"}
        </button>
      </form>
    </div>
  );
}