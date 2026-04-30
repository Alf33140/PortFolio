import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/projectimg/logo.png" 
            alt="Logo DEV WEB CONCEPTION"
            className="w-[60px] h-[60px] object-contain rounded-full border-2 border-white/10 group-hover:border-primary transition-all duration-300 shadow-lg"
          />
        </a>

        {/* Desktop Nav - Effet "Super Halo" */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="
                  px-5 py-2 text-sm font-bold
                  text-muted-foreground hover:text-white 
                  rounded-full transition-all duration-300 
                  
                  /* État normal : transparent */
                  bg-transparent
                  
                  /* Survol : Fond bleu profond */
                  hover:bg-blue-800
                  
                  /* Survol : Zoom */
                  hover:scale-110 
                  
                  /* Survol : Triple Halo Blanc Ultra-Large */
                  hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4),0_0_40px_10px_rgba(255,255,255,0.2),0_0_60px_15px_rgba(255,255,255,0.1)]
                  
                  /* Survol : Luminosité boostée */
                  hover:brightness-150
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in mt-2 rounded-2xl mx-4">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-white py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-4">
              Contactez-moi
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;