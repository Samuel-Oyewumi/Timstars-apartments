import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOFLAHghNotrabjy8rXynKjPZE6l3VSxqcLbFC-FoQaZyLoj7CigEu1QgH1cIthcCerFMJcJDasaocI9J4NWKqtuPBpEMXXMWHXFHMYrthrdzDWc-4=w600-h315-p-k" 
                alt="Timstars Apartments Logo" 
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Luxury shortlet apartments in Umuahia, Abia State. Comfortable,
              secure, and fully serviced hospitality.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/profile.php?id=61577163462753" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-gold-400">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><Link to="/apartments" className="hover:text-gold-400">Our Apartments</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-gold-400">About Us</Link></li>
              <li><Link to="/location" className="hover:text-gold-400">Location Map</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>2 Timstars Drive, LGA, Umuahia 440101, Abia State</li>
              <li>+234 810 695 2008</li>
              <li>bookings@timstars.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for special offers and updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-stone-900 border border-stone-800 px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500 rounded-l-md"
              />
              <button 
                type="submit"
                className="bg-gold-500 px-4 py-2 text-sm text-stone-950 font-bold uppercase tracking-wider hover:bg-gold-400 transition rounded-r-md"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Timstars Service Apartments. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
