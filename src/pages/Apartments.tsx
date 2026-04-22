import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

// Mock data
const APARTMENTS = [
  {
    id: "1",
    name: "Luxury 2-Bedroom Service Apartment",
    type: "2 Bedroom",
    price: "₦130,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipOghZA2ir96ddwp0KnNNLgiPgS7u7CkQs2udnob=w1200-h800-k-no",
    features: ["En-suite rooms", "Smart TV in all rooms", "Fitted Kitchen", "Balcony", "Dedicated Dining Area", "24/7 Power", "Fast WiFi"]
  },
  {
    id: "2",
    name: "Premium 1-Bedroom Service Apartment",
    type: "1 Bedroom",
    price: "₦90,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipPfApy9HtktoLUgFlC8bT8QNezcuzYwc8p11h7e=w1200-h800-k-no",
    features: ["Spacious Lounge", "Smart TV", "Dedicated Workspace", "Fully Equipped Kitchen", "24/7 Power", "Fast WiFi"]
  },
  {
    id: "3",
    name: "Executive Studio Apartment",
    type: "Studio",
    price: "₦70,000",
    image: "https://lh3.googleusercontent.com/p/AF1QipNqIULE3dbpwOG85USahNn0gyQ2N-DvyvvkP346=w1200-h800-k-no",
    features: ["Queen Bed", "Kitchenette", "Smart TV", "Cozy Setup", "24/7 Power", "Fast WiFi"]
  },
  {
    id: "4",
    name: "Deluxe 2-Bedroom (Alt)",
    type: "2 Bedroom",
    price: "₦120,000",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
    features: ["En-suite rooms", "Smart TV", "Fitted Kitchen", "Ground Floor Access", "24/7 Power", "Fast WiFi"]
  }
];

export function Apartments() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="py-12 border-b border-stone-200 mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl text-stone-900 mb-4"
          >
            Our Apartments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 text-lg max-w-2xl"
          >
            Select from our range of meticulously designed, fully-serviced shortlets tailored for your comfort.
          </motion.p>
        </div>

        {/* List */}
        <div className="space-y-16">
          {APARTMENTS.map((apt, index) => (
            <motion.div 
              key={apt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row gap-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              {/* Image Side */}
              <div className="lg:w-1/2 overflow-hidden rounded-2xl h-[300px] md:h-[400px]">
                <img 
                  src={apt.image} 
                  alt={apt.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="uppercase text-xs font-bold tracking-widest text-gold-600 mb-3">{apt.type}</div>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">{apt.name}</h2>
                <div className="text-2xl font-light text-stone-800 mb-8 pb-8 border-b border-stone-100">
                  <span className="font-bold">{apt.price}</span> / night
                </div>
                
                <h3 className="font-sans text-sm uppercase tracking-widest text-stone-500 mb-4 font-bold">Amenities Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  {apt.features.map(feature => (
                    <li key={feature} className="flex items-start text-stone-600">
                      <Check className="h-5 w-5 text-gold-500 mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link 
                    to="/contact"
                    className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-stone-900 px-10 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition hover:bg-stone-800"
                  >
                    Select & Book Dates
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
