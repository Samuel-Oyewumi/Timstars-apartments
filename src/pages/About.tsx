import { motion } from "motion/react";

export function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center bg-stone-50 p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-stone-100 shadow-md shadow-stone-200/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 luxury-gradient" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/50 border border-gold-200/50 mb-6 w-max">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-700">
                Our Story
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-8 leading-[1.1]">
              Redefining Hospitality in Umuahia.
            </h1>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-6 font-light">
              At Timstars Apartments, we believe that travel shouldn't mean sacrificing the comfort, security, and warmth of home. We created this space to offer a premium, reliable shortlet experience tailored for both business travelers and vacationers in Abia State.
            </p>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light mt-2 pt-6 border-t border-stone-200/60">
              We pay attention to the details—from ensuring uninterrupted power supply to curating beautifully designed, fully furnished interiors. When you stay with us, you are guaranteed peace of mind.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-xl shadow-stone-200"
          >
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipOghZA2ir96ddwp0KnNNLgiPgS7u7CkQs2udnob=w1200-h1200-k-no" 
              alt="Timstars Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="py-24 border-t border-stone-100">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-900">Why Choose Timstars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Uncompromising Comfort",
                desc: "Every piece of furniture and amenity is deliberately chosen to ensure maximum relaxation. Premium bedding, spacious lounges, and climate control in every room."
              },
              {
                title: "Guaranteed Security",
                desc: "Located in a serene neighborhood with a gated entrance and CCTV, ensuring you sleep soundly and your belongings remain safe."
              },
              {
                title: "Seamless Convenience",
                desc: "With 24/7 power, fast WiFi, and a fully equipped kitchen, long and short stays are completely frictionless. Just arrive and unwind."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-gold-600 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
