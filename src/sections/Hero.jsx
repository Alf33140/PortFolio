
import {Button} from "@/components/button";
import {ArrowRight, ChevronDown, Download } from "lucide-react";
import {AnimatedBorderButton} from "../components/AnimatedBorderButton";
import { IoLogoGithub, IoLogoLinkedin,IoLogoTwitter } from "react-icons/io";

const skills = [
    "Javascript",
    "React",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Github",
    "Github Actions",
    "SQL",
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
        {/* Background (inchangé) */} 
        <div className="absolute inset-0">
            <img src="/bg-Github.png" alt="fond" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/* Particules (inchangé) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="absolute rounded-full w-5 h-5 opacity-50 bg-[#0F264D]" style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random()* 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
                    boxShadow: `0 0 20px 5px #0F264D`, 
                  }}
                />
            ))}
        </div>   

        {/* Contenu principal */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            {/* GRILLE PRINCIPALE : Elle sépare Gauche et Droite */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* 1. Colonne de Gauche */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                            Developpeur <span className="text-primary glow-text">Fullstack</span><br />
                            passionné par le code<br />
                            <span className="font-serif italic font-normal text-white">et les défis web</span>
                        </h1>
                        <div className="text-lg text-muted-foreground max-w-lg">
                            <p>Je vous aiderai à structurer et développer vos idées...</p>
                            <p className="font-bold mt-4">ALORS PRÊT À FAIRE ÉCLORE VOS IDÉES ENSEMBLE ?</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <Button href="#contact" size="lg">
                            Contactez-moi <ArrowRight className="w-5 h-5" />
                        </Button>  
                        <AnimatedBorderButton /> 
                    </div>

                    {/* Réseaux Sociaux (Placés sous les boutons à gauche) */}
                    <div className="flex items-center gap-4 pt-4">
                        <span className="text-sm text-muted-foreground">Suivez-moi: </span>
                        {[
                            {icon: IoLogoGithub , href: "https://github.com/Alf33140 "},
                            {icon: IoLogoLinkedin , href: "https://linkedin.com/..."},
                            {icon: IoLogoTwitter , href:"#" },
                        ].map((social, i) => (
                            <a key={i} href={social.href} className="p-2 rounded-full glass hover:text-primary transition-all">
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Colonne de Droite  */}
                <div className="relative animate-fade-in flex justify-center lg:justify-end">
                    <div className="relative max-w-md w-full"> 
                        <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl animate-pulse" />
                        <div className="relative z-10 glass rounded-3xl p-2 glow-border">
                            <img src="/projectimg/profil.png" 
                                alt="Profil" 
                                className="w-full aspect-[4/5] object-cover rounded-2xl" 
                                />
                            
                            {/* Badge Disponible */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"/> 
                                    <span className="text-sm font-medium">Disponible</span>
                                </div>
                            </div>

                            {/* Badge Expérience */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-4 animate-float">
                                <div className="text-2xl font-bold text-primary">1</div>
                                <div className="text-xs text-muted-foreground">Année Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* FIN DE LA GRILLE */}

            {/* 3. Section Technologies  */}
            <div className="mt-24 animate-fade-in">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies de développement pratiquées</p>
                <div className="relative overflow-hidden w-full flex items-center">
                    {[...skills, ...skills].map((skill, id) => (
                        <div key={id} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Scroll indicator (Tout en bas) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center gap-2 hover:text-primary transition-colors">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
    );
}