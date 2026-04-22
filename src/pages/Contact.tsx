import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Calendar as CalendarIcon, Users } from "lucide-react";

export function Contact() {
  const location = useLocation();
  const state = location.state as { checkIn?: string, checkOut?: string, guests?: string } | null;

  const [formData, setFormData] = useState({
    name: "",
    apartment: "Any Available",
    checkIn: state?.checkIn || "",
    checkOut: state?.checkOut || "",
    guests: state?.guests || "1",
    specialRequests: ""
  });

  const handleBookOnWhatsApp = () => {
    const defaultNumber = "2348106952008"; // Replaced with actual WhatsApp Number
    const message = `Hello Timstars Apartments!%0A%0AI would like to verify availability and make a booking:%0A%0A*Name:* ${formData.name}%0A*Apartment:* ${formData.apartment}%0A*Check-in:* ${formData.checkIn}%0A*Check-out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}%0A%0A*Special Requests:* ${formData.specialRequests || "None"}`;
    window.open(`https://wa.me/${defaultNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-200 mb-6 w-max">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-700">
                Direct Booking
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6 leading-tight">Secure Your Stay.</h1>
            <p className="text-stone-600 text-lg mb-12 font-light leading-relaxed">
              Book directly with us to guarantee the best available rates, bypass platform service fees, and enjoy a personalized hospitality experience.
            </p>

            <div className="space-y-8 bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="flex gap-4">
                <div className="mt-1 h-12 w-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 border border-stone-200 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase text-stone-400 mb-1">Call / WhatsApp</p>
                  <p className="font-medium text-stone-900 text-lg">+234 810 695 2008</p>
                </div>
              </div>
              <hr className="border-stone-100" />
              <div className="flex gap-4">
                <div className="mt-1 h-12 w-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 border border-stone-200 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase text-stone-400 mb-1">Email Reservations</p>
                  <p className="font-medium text-stone-900 text-lg">bookings@timstars.com</p>
                </div>
              </div>
              <hr className="border-stone-100" />
              <div className="flex gap-4">
                <div className="mt-1 h-12 w-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 border border-stone-200 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase text-stone-400 mb-1">HQ Location</p>
                  <p className="font-medium text-stone-900 text-lg">2 Timstars Drive, LGA, Umuahia 440101, Abia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 luxury-gradient" />
              
              <h3 className="font-serif text-3xl text-stone-900 mb-8 border-b border-stone-100 pb-6">Reservation Summary</h3>
              
              <form 
                onSubmit={(e) => { e.preventDefault(); handleBookOnWhatsApp(); }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Guest Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50/50 border border-stone-200 px-5 py-4 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition font-medium" 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Desired Accommodation</label>
                  <select 
                    value={formData.apartment}
                    onChange={e => setFormData({ ...formData, apartment: e.target.value })}
                    className="w-full bg-stone-50/50 border border-stone-200 px-5 py-4 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition appearance-none font-medium text-stone-900"
                  >
                    <option>Any Available</option>
                    <option>Luxury 2-Bedroom Suite</option>
                    <option>Premium 1-Bedroom</option>
                    <option>Executive Studio</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Check-in Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <input 
                        type="date" 
                        value={formData.checkIn}
                        onChange={e => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-5 py-4 pl-12 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition font-medium" 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Check-out Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <input 
                        type="date" 
                        value={formData.checkOut}
                        onChange={e => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-5 py-4 pl-12 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition font-medium" 
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <select 
                      value={formData.guests}
                      onChange={e => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-stone-50/50 border border-stone-200 px-5 py-4 pl-12 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition appearance-none font-medium"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Special Requests (Optional)</label>
                  <textarea 
                    rows={3}
                    value={formData.specialRequests}
                    onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-stone-50/50 border border-stone-200 px-5 py-4 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition font-medium resize-none" 
                    placeholder="E.g. Early check-in, extra pillows..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-stone-900 text-gold-400 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-stone-900 transition-colors mt-8 flex items-center justify-center gap-2"
                >
                  Confirm on WhatsApp
                </button>
                <p className="text-center text-xs text-stone-400 font-medium">You will not be charged yet.</p>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
