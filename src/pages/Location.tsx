import { motion } from "motion/react";
import { MapPin, Navigation, Car, Bus } from "lucide-react";

export function Location() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="py-12 border-b border-stone-200 mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl text-stone-900 mb-4"
          >
            Location & Access
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 text-lg max-w-2xl"
          >
            Strategically located in a serene and secure neighborhood right in Umuahia, Abia State.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Embed Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full h-[500px] bg-stone-200 rounded-3xl overflow-hidden shadow-sm"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.3503258849!2d7.4208075!3d5.5262796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042dc08fd9a912f%3A0xc32aefbbbdb5ca05!2sTimstars%20apartments!5e0!3m2!1sen!2sng!4v1715000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Details Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 bg-gold-100 p-3 rounded-full text-gold-600 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Timstars Apartments</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  2 Timstars Drive, LGA, Umuahia 440101, Abia
                </p>
                <div className="mt-4">
                  <a href="https://maps.app.goo.gl/vR1wevrdxXTVqs2C8" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gold-600 hover:text-gold-700">
                    Open in Google Maps <Navigation className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-stone-200 mb-8" />

            <h3 className="font-sans text-sm uppercase tracking-widest text-stone-500 mb-6 font-bold">Getting Here</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Car className="h-5 w-5 text-stone-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900">By Car</h4>
                  <p className="text-stone-600 text-sm mt-1">Easily accessible via major roads. Free secure parking is provided for all guests on the premises.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Bus className="h-5 w-5 text-stone-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900">Local Transport</h4>
                  <p className="text-stone-600 text-sm mt-1">Ride-hailing services (if available) and local taxis can drop you directly at the gate.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  );
}
