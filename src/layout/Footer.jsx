import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const socialLinks = [
    {icon: IoLogoGithub , href: "https://github.com/Alf33140 "},
    {icon: IoLogoLinkedin , href: "ttps://www.linkedin.com/in/davy-carreau-b015453b9"},
    {icon: IoLogoTwitter , href:"#" },
];

const footerLinks = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },   
    { href: "#experience", label: "Expérience" }, 
    { href: "#contact", label: "Contact" },    
];

export const Footer = () => {
    // Définition de l'année en cours
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/10 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* Logo et Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#home" className="text-xl font-bold tracking-tight text-white">
                            Davy Carreau<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Davy Carreau. Tous droits réservés.
                        </p>
                    </div>

                    {/* Liens de Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Réseaux Sociaux */}
                    <div className="flex items-center gap-5">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank" // Bonne pratique pour les liens externes
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};