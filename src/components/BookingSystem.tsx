"use client";

import { useState, useEffect } from "react";
import { Loader2, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, ChevronLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzDN5KhM-Jn1a6WBudClqjtrAhjXkO8gO_s6p3UIok9YUoOW7jCge2NO6m6a9T4iLME/exec";

const TIME_SLOTS = [
    "10:00", "10:45", "11:30", "12:15", "13:00", "13:45",
    "14:30", "15:15", "16:00", "16:45", "17:30", "18:15"
];

interface BookedSlot {
    date: string;
    time: string;
}

export default function BookingSystem() {
    const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(true);

    // Selection State
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    // View State: 'datetime' | 'form' | 'success'
    const [view, setView] = useState<"datetime" | "form" | "success">("datetime");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: ""
    });

    const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        loadBookedSlots();
    }, []);

    async function loadBookedSlots() {
        setLoadingSlots(true);
        try {
            const res = await fetch(WEB_APP_URL);
            const data = await res.json();
            if (Array.isArray(data)) {
                setBookedSlots(data);
            }
        } catch (e) {
            console.error("Failed to load slots", e);
        } finally {
            setLoadingSlots(false);
        }
    }

    function isSlotBooked(date: string, time: string) {
        return bookedSlots.some(slot => normalizeDate(slot.date) === date && normalizeTime(slot.time) === time);
    }

    function normalizeTime(t: string) {
        return String(t || "").trim();
    }

    function normalizeDate(d: string) {
        const s = String(d || "").trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
        const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (m) {
            return `${m[3]}-${String(m[1]).padStart(2, '0')}-${String(m[2]).padStart(2, '0')}`;
        }
        return s;
    }

    function handleTimeSelect(time: string) {
        setSelectedTime(time);
        // Small delay to show selection before transition
        setTimeout(() => setView("form"), 150);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setBookingStatus("submitting");

        try {
            const payload = new URLSearchParams({
                ...formData,
                meetingDate: selectedDate,
                meetingTime: selectedTime
            });

            const res = await fetch(WEB_APP_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                body: payload.toString()
            });

            const out = await res.json();

            if (out.result === "success") {
                setBookingStatus("success");
                setView("success");
                loadBookedSlots();
            } else {
                setBookingStatus("error");
                setErrorMessage(out.message || "Booking failed.");
            }
        } catch (e) {
            setBookingStatus("error");
            setErrorMessage("Network error. Please try again.");
        }
    }

    // Success View
    if (view === "success") {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
                    <p className="text-gray-400">We have sent a confirmation email to you.</p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-full max-w-sm backdrop-blur-sm">
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                            <span className="text-gray-400 flex items-center gap-2"><CalendarIcon className="w-4 h-4" /> Date</span>
                            <span className="font-semibold text-white text-base">{selectedDate}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 flex items-center gap-2"><Clock className="w-4 h-4" /> Time</span>
                            <span className="font-semibold text-white text-base">{selectedTime}</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setBookingStatus("idle");
                        setFormData({ name: "", email: "", phone: "", address: "", notes: "" });
                        setView("datetime");
                        setSelectedTime("");
                    }}
                    className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-2"
                >
                    <ChevronLeft className="w-4 h-4" /> Book another time
                </button>
            </div>
        );
    }

    return (
        <div className="h-full bg-[#141414]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col shadow-2xl relative overflow-hidden">
            {/* Header Steps */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">Book a Demo</h2>
                    <p className="text-gray-400 text-sm mt-1">
                        {view === "datetime" ? "Select a date & time" : "Enter your details"}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span className={`px-3 py-1 rounded-full ${view === "datetime" ? "bg-primary/20 text-primary border border-primary/20" : "bg-white/5 text-gray-500"}`}>1. Time</span>
                    <span className="text-gray-600">→</span>
                    <span className={`px-3 py-1 rounded-full ${view === "form" ? "bg-primary/20 text-primary border border-primary/20" : "bg-white/5 text-gray-500"}`}>2. Details</span>
                </div>
            </div>

            <div className="flex-1 relative">
                <AnimatePresence mode="wait" initial={false}>
                    {/* View 1: Date & Time Selection */}
                    {view === "datetime" && (
                        <motion.div
                            key="datetime"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col gap-8"
                        >
                            <div className="grid md:grid-cols-2 gap-8 h-full">
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                        <CalendarIcon className="w-4 h-4" /> Select Date
                                    </label>
                                    <input
                                        type="date"
                                        min={today}
                                        value={selectedDate}
                                        onChange={(e) => {
                                            setSelectedDate(e.target.value);
                                            setSelectedTime("");
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-base outline-none focus:border-primary/50 transition-all cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 hover:bg-white/10"
                                    />
                                    <p className="text-xs text-gray-500 pl-1">
                                        Timezone: Asia/Amman
                                    </p>
                                </div>

                                <div className="space-y-2 h-full flex flex-col">
                                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> Available Slots
                                    </label>
                                    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 overflow-y-auto custom-scrollbar">
                                        {loadingSlots ? (
                                            <div className="h-full flex items-center justify-center text-gray-400 gap-2">
                                                <Loader2 className="w-5 h-5 animate-spin text-primary" /> Loading...
                                            </div>
                                        ) : !selectedDate ? (
                                            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-2">
                                                <CalendarIcon className="w-8 h-8 opacity-20" />
                                                <p className="text-sm">Pick a date first</p>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                {TIME_SLOTS.map((time) => {
                                                    const booked = isSlotBooked(selectedDate, time);
                                                    return (
                                                        <button
                                                            key={time}
                                                            disabled={booked}
                                                            onClick={() => handleTimeSelect(time)}
                                                            className={`
                                                                py-3 px-2 rounded-lg text-sm font-semibold transition-all duration-200 border
                                                                ${booked
                                                                    ? "bg-white/5 border-transparent text-gray-600 cursor-not-allowed line-through opacity-50"
                                                                    : "bg-[#1A1A1A] border-white/10 text-gray-200 hover:border-primary hover:bg-primary/10 hover:text-primary active:scale-95"
                                                                }
                                                            `}
                                                        >
                                                            {time}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* View 2: Form Details */}
                    {view === "form" && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="flex-1">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Selected Time</div>
                                    <div className="text-lg font-semibold text-white flex items-center gap-2">
                                        <CalendarIcon className="w-4 h-4 text-primary" />
                                        {selectedDate}
                                        <span className="w-1 h-1 bg-gray-600 rounded-full mx-1"></span>
                                        <Clock className="w-4 h-4 text-primary" />
                                        {selectedTime}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setView("datetime")}
                                    className="text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4"
                                >
                                    Change
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Full Name *</label>
                                        <input
                                            required
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email Address *</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="you@company.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            placeholder="+962 7..."
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Address / Location</label>
                                        <input
                                            placeholder="City, Area"
                                            value={formData.address}
                                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Additional Notes</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Any specific topics you'd like to discuss?"
                                        value={formData.notes}
                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                                    />
                                </div>

                                {bookingStatus === "error" && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className="mt-auto pt-4 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setView("datetime")}
                                        className="px-6 py-4 rounded-xl font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={bookingStatus === "submitting"}
                                        className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-white text-lg font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                                    >
                                        {bookingStatus === "submitting" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Confirm Booking
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
