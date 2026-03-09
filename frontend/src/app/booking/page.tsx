"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Send, Calendar, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Schema for the visible form fields only
const bookingSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    eventType: z.string().min(2, "Event type is required"),
    preferredDate: z.string().min(1, "Event date is required"),
    eventLocation: z.string().min(2, "Event location is required"),
    numberOfGuests: z.number().min(1, "Number of guests is required"),
    services: z.array(z.string()).min(1, "Select at least one service"),
    budgetRange: z.string().optional(),
    additionalNotes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            eventType: "",
            preferredDate: "",
            eventLocation: "",
            numberOfGuests: 1,
            services: [],
            budgetRange: "",
            additionalNotes: "",
        },
    });

    const onSubmit = async (data: BookingFormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Inject backend-required fields not present in visible form
            const payload = {
                ...data,
                preferredDate: new Date(data.preferredDate).toISOString(),
                location: "Online Form Lead",
                indoorOutdoor: "Both",
                style: "Mixed",
            };

            const res = await fetch("http://localhost:5000/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSubmitStatus("success");
                reset();
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = "w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-avoda-gold/50 focus:border-avoda-gold transition-all duration-300";
    const labelClass = "block text-sm font-medium text-avoda-green-dark/80 mb-2";

    return (
        <div className="pt-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <SectionHeading
                    title="Plan Your Event With Us"
                    subtitle="Tell us about your event and our team will contact you shortly."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">

                    {/* Left Side: Booking Form */}
                    <motion.div
                        className="lg:col-span-8 bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl border border-gray-50"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence>
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mb-8 p-6 bg-green-50 text-avoda-green-dark border-l-4 border-green-500 rounded-r-xl"
                                >
                                    <h4 className="font-serif text-xl font-bold mb-2">Request Received Successfully!</h4>
                                    <p>Thank you for choosing Avoda. Our team will review your details and contact you shortly to plan your unforgettable event.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Full Name</label>
                                    <input {...register("fullName")} className={inputClass} placeholder="John Doe" />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-1 px-2">{errors.fullName.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Email Address</label>
                                    <input type="email" {...register("email")} className={inputClass} placeholder="john@example.com" />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 px-2">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number</label>
                                    <input {...register("phone")} className={inputClass} placeholder="+1 (555) 000-0000" />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1 px-2">{errors.phone.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Event Type</label>
                                    <select {...register("eventType")} className={`${inputClass} appearance-none cursor-pointer text-gray-700`}>
                                        <option value="">Select an option</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Corporate Event">Corporate Event</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.eventType && <p className="text-red-500 text-xs mt-1 px-2">{errors.eventType.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Event Date</label>
                                    <input type="date" {...register("preferredDate")} className={inputClass} />
                                    {errors.preferredDate && <p className="text-red-500 text-xs mt-1 px-2">{errors.preferredDate.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Event Location</label>
                                    <input {...register("eventLocation")} className={inputClass} placeholder="Venue or City" />
                                    {errors.eventLocation && <p className="text-red-500 text-xs mt-1 px-2">{errors.eventLocation.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Number of Guests</label>
                                    <input type="number" {...register("numberOfGuests", { valueAsNumber: true })} className={inputClass} placeholder="e.g. 150" />
                                    {errors.numberOfGuests && <p className="text-red-500 text-xs mt-1 px-2">{errors.numberOfGuests.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Estimated Budget (Optional)</label>
                                    <input {...register("budgetRange")} className={inputClass} placeholder="e.g. $10,000" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Services Needed</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
                                    {["Decoration", "Photography", "Videography", "Catering"].map((service) => (
                                        <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input type="checkbox" value={service} {...register("services")} className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-avoda-gold checked:border-avoda-gold transition-colors cursor-pointer" />
                                                <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={4} />
                                            </div>
                                            <span className="text-gray-700 group-hover:text-avoda-green-dark transition-colors">{service}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.services && <p className="text-red-500 text-xs mt-2 px-2">{errors.services.message}</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Message / Event Description</label>
                                <textarea
                                    {...register("additionalNotes")}
                                    rows={4}
                                    className={`${inputClass} resize-none`}
                                    placeholder="Tell us about the vision, theme, or any specific requirements for your event..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-8 py-4 bg-avoda-gold text-white rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-avoda-gold-light transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center group"
                                >
                                    {isSubmitting ? "Sending..." : "Request Event Quote"}
                                    {!isSubmitting && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 px-8 py-4 bg-transparent border-2 border-avoda-green-dark text-avoda-green-dark rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-avoda-green-dark hover:text-white transition-colors flex justify-center items-center group"
                                >
                                    <Calendar className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                    Book Consultation
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Side: Contact Information */}
                    <motion.div
                        className="lg:col-span-4 space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-avoda-green-dark text-white p-10 rounded-3xl h-full flex flex-col shadow-2xl relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-avoda-gold/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-avoda-gold/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="font-serif text-3xl mb-8">Amen</h3>

                                <p className="text-avoda-cream/80 text-sm mb-12 leading-relaxed">
                                    We are here to help you craft the perfect celebration. Reach out to us through any of our channels, and our team will be delighted to assist you.
                                </p>

                                <div className="space-y-8 flex-grow">
                                    <div className="flex items-center group">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-5 group-hover:bg-avoda-gold transition-colors duration-300">
                                            <Phone className="w-5 h-5 text-avoda-gold group-hover:text-avoda-green-dark transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-avoda-cream/50 mb-1">Phone Number</p>
                                            <p className="text-avoda-cream font-medium">+251 911 000 000</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center group">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-5 group-hover:bg-avoda-gold transition-colors duration-300">
                                            <Mail className="w-5 h-5 text-avoda-gold group-hover:text-avoda-green-dark transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-avoda-cream/50 mb-1">Email</p>
                                            <p className="text-avoda-cream font-medium">hello@avoda-events.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center group">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-5 group-hover:bg-avoda-gold transition-colors duration-300">
                                            <MapPin className="w-5 h-5 text-avoda-gold group-hover:text-avoda-green-dark transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-avoda-cream/50 mb-1">Location</p>
                                            <p className="text-avoda-cream font-medium">Addis Ababa, Ethiopia</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/10">
                                    <p className="text-sm text-avoda-cream/70 mb-4 font-medium">Follow our journey</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-avoda-gold hover:text-avoda-green-dark transition-all duration-300">
                                            <Instagram className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-avoda-gold hover:text-avoda-green-dark transition-all duration-300">
                                            <Facebook className="w-4 h-4" />
                                        </a>
                                        <a href="https://wa.me/251911000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300">
                                            <MessageCircle className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
