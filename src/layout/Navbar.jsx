import { Button } from "../components/Button";
import {Menu, X} from "lucide-react";
import { useState } from "react"; 
import { useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About"},
  { href: "#projects", label: "Projects"},
  { href: "#experience", label: "Experience"},
  { href: "#testimonials", label: "Testimonials"},
  { href: "#contact", label: "contact"},
]
export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => 
        window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
      <header 
        className="fixed top-0 left-0 right-0 transition-all duration-500 
        $<'isScrolled ? glass-strong py-3 :bg-transparent py-5 
        z-50">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          
          <a>
            <img 
                src="/Alf.png" 
                alt="Logo Portfolio" 
                className="w-[80px] h-[80px] object-contain rounded-lg"
            />
          </a>
          {/* Desktop Nav */}
          <div className=" hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

              {navLinks.map((link, index)=>( 
                  <a 
                    key = {index} 
                    href={link.label}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                    {link.label}

                  </a>
                  
              ))}
            
            </div>
          </div>
        </nav>
        {/* CTA Button */}
            {/* <div className="hidden md:block">
                <Button size='sm'>Contactez-moi</Button>
            </div>  */}
              {/* Mobile Nav - Hamburger menu */}
              <button 
                className="md:hidden p-2 text-foreground cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
        {/* Mobile Menu*/}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                  {navLinks.map((link,index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-foreground py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.label}
                      </a>
                  ))}
                   <div className="hidden md:block flex gap-4 items-center">
                    <Button onClick={() => setIsMobileMenuOpen(false)}>
                      Contactez-moi
                    </Button>
                </div>
              </div>
          </div>

        )}
              
      </header>
      
    )
    
  }

export default Navbar
