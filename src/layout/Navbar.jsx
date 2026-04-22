const navLinks = [
  { href: "#about", label: "About"},
  { href: "#projects", label: "Projects"},
  { href: "#experience", label: "Experience"},
  { href: "#testimonials", label: "Testimonials"},
]
export const Navbar = () => {

    return (
      <header>
        <nav>
          <a>
            Portfolio <span>  </span>

          </a>
          {/* Desktop Nav */}
          <div>
            <div>
              
              {navLinks.map((link, index)=>( <a key = {index} href={link.label}>{link.label}</a>
              ))}
            
            </div>
          </div>
        </nav>
      </header>
    )
  }

export default Navbar
