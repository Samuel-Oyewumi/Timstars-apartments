import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "Apartments", path: "/apartments" },
  { name: "Gallery", path: "/gallery" },
  { name: "Location", path: "/location" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 border-b",
        scrolled
          ? "bg-stone-950/80 py-4 text-white shadow-lg backdrop-blur-xl border-stone-800"
          : isHome
          ? "bg-gradient-to-b from-stone-950/80 to-transparent py-6 text-white border-transparent"
          : "bg-white py-6 text-stone-900 border-stone-100"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-tight transition-transform group-hover:scale-105">
            Tim<span className={cn(scrolled || isHome ? "text-gold-400" : "text-gold-600")}>stars</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative font-sans text-xs font-bold tracking-[0.15em] transition-colors uppercase py-2",
                location.pathname === link.path 
                  ? cn(scrolled || isHome ? "text-gold-400" : "text-gold-600") 
                  : cn(scrolled || isHome ? "hover:text-gold-400 text-stone-300" : "hover:text-gold-600 text-stone-500")
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className={cn("absolute bottom-0 left-0 w-full h-[2px]", scrolled || isHome ? "bg-gold-400" : "bg-gold-600")} />
              )}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-stone-300/30 mx-2" />
          
          <Link
            to="/contact"
            className={cn(
              "rounded-full px-8 py-3 text-xs font-bold transition-all uppercase tracking-[0.15em] shadow-sm hover:shadow-md",
              scrolled || isHome 
                ? "bg-gold-500 text-stone-950 hover:bg-gold-400" 
                : "bg-stone-900 text-white hover:bg-stone-800"
            )}
          >
            Reserve & Book
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-current p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      <div
        className={cn(
          "absolute left-0 top-full w-full origin-top bg-stone-950 p-6 text-white transition-all duration-300 md:hidden border-t border-stone-800 shadow-xl",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0 overflow-hidden py-0"
        )}
      >
        <div className="flex flex-col gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold tracking-widest transition-colors uppercase",
                location.pathname === link.path ? "text-gold-400" : "text-stone-300 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-px bg-stone-800 mt-2 mb-2" />
          <Link
            to="/contact"
            className="w-full rounded-full bg-gold-500 py-4 text-center text-sm font-bold text-stone-950 uppercase tracking-widest"
          >
            Make a Reservation
          </Link>
        </div>
      </div>
    </nav>
  );
}
