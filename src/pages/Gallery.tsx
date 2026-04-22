import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  "https://lh3.googleusercontent.com/p/AF1QipOghZA2ir96ddwp0KnNNLgiPgS7u7CkQs2udnob=w1200-h1200-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipPfApy9HtktoLUgFlC8bT8QNezcuzYwc8p11h7e=w1200-h1200-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipNqIULE3dbpwOG85USahNn0gyQ2N-DvyvvkP346=w1200-h1200-k-no",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200"
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="py-12 border-b border-stone-200 mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-stone-900 mb-6"
          >
            Visual Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto font-light"
          >
            A closer look into the aesthetic, comfort, and premium feel of Timstars Apartments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={src} 
                alt={`Timstars Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              {/* Lightbox overlay hover effect */}
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 p-4 md:p-8 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors border border-white/20 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()} // Prevent click from closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
