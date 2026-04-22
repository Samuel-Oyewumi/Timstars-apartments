import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Wifi, Shield, Sofa, Car, ChevronRight, Star, Calendar, Users, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

// Mock data
const FEATURED_APARTMENTS = [
  {
    id: "1",
    name: "Luxury 2-Bedroom Service Apartment",
    type: "2 Bedroom",
    price: "₦130,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipOghZA2ir96ddwp0KnNNLgiPgS7u7CkQs2udnob=w1200-h800-k-no",
    features: ["En-suite rooms", "Smart TV", "Fitted Kitchen", "Balcony"]
  },
  {
    id: "2",
    name: "Premium 1-Bedroom Service Apartment",
    type: "1 Bedroom",
    price: "₦90,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipPfApy9HtktoLUgFlC8bT8QNezcuzYwc8p11h7e=w1200-h800-k-no",
    features: ["Spacious Lounge", "Smart TV", "Workspace", "Kitchen"]
  },
  {
    id: "3",
    name: "Executive Studio Apartment",
    type: "Studio",
    price: "₦70,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipNqIULE3dbpwOG85USahNn0gyQ2N-DvyvvkP346=w1200-h800-k-no",
    features: ["Queen Bed", "Kitchenette", "Smart TV", "Cozy Setup"]
  }
];

const FAQS = [
  {
    question: "What time is check-in and check-out?",
    answer: "Standard check-in is from 2:00 PM, and check-out is by 12:00 PM (Noon). Early check-in or late check-out can be arranged subject to availability."
  },
  {
    question: "Do you have 24/7 power supply?",
    answer: "Yes, we guarantee 24/7 uninterrupted power supply with our robust backup systems including inverters and standby generators."
  },
  {
    question: "Are parties or events allowed in the apartments?",
    answer: "To maintain our premium and serene environment for all guests, loud parties and events are strictly prohibited inside the apartments."
  },
  {
    question: "Is there secure parking available?",
    answer: "Absolutely. We offer free, secure parking on the premises monitored by 24/7 CCTV and on-site security personnel."
  }
];

interface Review {
  id: string;
  text: string;
  author: string;
  role: string;
}

export function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Quick book state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  
  // Dynamic reviews state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    // Dynamically load testimonials from data source
    fetch('/data/reviews.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setIsLoadingReviews(false);
      })
      .catch(err => {
        console.error("Failed to load reviews:", err);
        setIsLoadingReviews(false);
      });
  }, []);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass state to contact page or append to WhatsApp
    navigate("/contact", { state: { checkIn, checkOut, guests } });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] w-full bg-stone-900 overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Apartment Living Room" 
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/20 to-stone-950/80 mix-blend-multiply" />
        </div>
        
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pt-32 lg:px-8 z-10 flex-1 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <Star className="w-4 h-4 text-gold-400" fill="currentColor" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-200">
                Premium Stays in Umuahia
              </span>
            </div>
            <h1 className="font-serif leading-[1.05] tracking-tight mb-8 text-5xl md:text-7xl font-medium drop-shadow-lg">
              Redefining <br/>
              <i className="text-gold-200 font-light">Luxury Living.</i>
            </h1>
            <p className="mb-10 max-w-xl text-lg md:text-xl text-stone-200 font-light leading-relaxed">
              Experience the perfect blend of comfort, privacy, and hotel-grade service. Your home away from home in Abia State.
            </p>
          </motion.div>
        </div>

        {/* Floating Quick Booking Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 mx-auto w-full max-w-5xl px-6 lg:px-8 pb-12"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
            <form onSubmit={handleQuickBook} className="flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Check In</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition" 
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Check Out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition" 
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <select 
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                    className="w-full bg-stone-900 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition appearance-none"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto bg-gold-500 hover:bg-gold-400 text-stone-900 font-bold uppercase tracking-widest text-sm py-3 px-8 rounded-xl transition-colors whitespace-nowrap h-[50px] shadow-[0_0_20px_rgba(214,164,69,0.3)] hover:shadow-[0_0_25px_rgba(214,164,69,0.5)]"
              >
                Check Availability
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Benefits / Amenities (Refined) */}
      <section className="py-32 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl text-stone-900 mb-6 leading-tight">The ultimate short stay experience awaits.</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                We've thought of all the details so you don't have to. From the moment you step in, our premium amenities guarantee a seamless transition into comfort and relaxation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, label: "24/7 Power", desc: "Never experience blackouts" },
                  { icon: Wifi, label: "Ultra-fast WiFi", desc: "For work and streaming" },
                  { icon: Shield, label: "Top Security", desc: "CCTV & gated access" },
                  { icon: Sofa, label: "Premium Interior", desc: "Luxurious furnishing" }
                ].map((item, i) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{item.label}</h4>
                      <p className="text-sm text-stone-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxurious interior" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl mb-2">Designed for comfort</p>
                <div className="w-12 h-1 bg-gold-500 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">Our Spaces</p>
              <h2 className="font-serif text-5xl text-stone-900">Featured Apartments</h2>
            </div>
            <Link to="/apartments" className="mt-6 md:mt-0 group flex items-center text-sm font-bold uppercase tracking-wider text-stone-900 transition hover:text-gold-600 border-b border-stone-900 hover:border-gold-600 pb-1">
              View All Collection <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_APARTMENTS.map((apt, i) => (
              <motion.div 
                key={apt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-stone-50 rounded-3xl overflow-hidden border border-stone-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={apt.image} 
                    alt={apt.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm text-stone-900 shadow-lg">
                    {apt.price} <span className="font-normal text-xs text-stone-500">/ night</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="uppercase text-xs font-bold tracking-widest text-gold-600 mb-3">{apt.type}</div>
                  <h3 className="font-serif text-2xl font-medium text-stone-900 mb-6">{apt.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {apt.features.slice(0,3).map(f => (
                      <span key={f} className="text-xs font-medium bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link to="/contact" className="block w-full text-center bg-stone-900 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-stone-900 transition-colors">
                      Reserve Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">Reviews</p>
          <h2 className="font-serif text-5xl mb-20">Guest Experiences</h2>
          
          {isLoadingReviews ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-8 h-8 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
              {reviews.map((item, i) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 p-10 rounded-3xl"
                >
                  <div className="flex mb-6 text-gold-400">
                    <Star fill="currentColor" className="w-5 h-5"/>
                    <Star fill="currentColor" className="w-5 h-5"/>
                    <Star fill="currentColor" className="w-5 h-5"/>
                    <Star fill="currentColor" className="w-5 h-5"/>
                    <Star fill="currentColor" className="w-5 h-5"/>
                  </div>
                  <p className="text-stone-300 italic mb-8 leading-relaxed text-lg">"{item.text}"</p>
                  <div>
                    <div className="font-bold text-white tracking-wide">{item.author}</div>
                    <div className="text-gold-500/80 text-sm">{item.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-32 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600">Everything you need to know before your stay.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 object-cover flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  <span className="font-bold text-stone-900 pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gold-600 transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-stone-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-5xl mb-6 leading-tight">Ready for your luxury stay?</h2>
          <p className="text-xl text-stone-300 mb-10 font-light max-w-2xl">
            Skip the platform fees. Book direct for the best rates, flexible check-ins, and personalized 24/7 service.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-12 py-5 font-sans text-sm font-bold uppercase tracking-widest text-stone-900 transition hover:bg-gold-400 hover:scale-105 shadow-[0_0_30px_rgba(214,164,69,0.3)]"
          >
            Start Your Booking
          </Link>
        </div>
      </section>

    </div>
  );
}
