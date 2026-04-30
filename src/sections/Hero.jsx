import React from 'react';
import { Button } from "@/components/button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const skills = [
    "Javascript", "React", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "Github", "Github Actions", "SQL",
];

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#75BDE0]">
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes electric-flow {
                    0% { stroke-dashoffset: 500; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 0; }
                }
                .animate-electric {
                    animation: electric-flow 4s linear infinite;
                }
                @keyframes slow-drift {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -20px); }
                }
            `}} />

            {/* --- BLOC BACKGROUND (RÉTABLI) --- */} 
            <div className="absolute inset-0 z-0">
                <img 
                    src="/projectimg/bg-Github.png" 
                    alt="fond github initial" 
                    className="w-full h-full object-cover opacity-40" 
                />
                
                {/* Overlays électriques */}
                <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="glow-electric-strong">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feFlood floodColor="#fbbf24" floodOpacity="1" result="color"/>
                            <feComposite in="color" in2="blur" operator="in" result="glow"/>
                            <feMerge>
                                <feMergeNode in="glow"/><feMergeNode in="glow"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    <path 
                        d="M -10,20 Q 50,50 110,80" 
                        stroke="#fbbf24" 
                        strokeWidth="0.5" 
                        fill="none" 
                        strokeDasharray="10 40"
                        className="animate-electric"
                        filter="url(#glow-electric-strong)"
                    />

                    <path 
                        d="M 110,10 Q 50,10 -10,60" 
                        stroke="#fbbf24" 
                        strokeWidth="0.4" 
                        fill="none" 
                        strokeDasharray="15 50"
                        className="animate-electric"
                        style={{ animationDelay: '2s', animationDuration: '3s' }}
                        filter="url(#glow-electric-strong)"
                    />

                    <path 
                        d="M -10,90 Q 50,70 110,95" 
                        stroke="#fbbf24" 
                        strokeWidth="0.6" 
                        fill="none" 
                        strokeDasharray="8 60"
                        className="animate-electric"
                        style={{ animationDelay: '1s', animationDuration: '5s' }}
                        filter="url(#glow-electric-strong)"
                    />
                </svg>

                {/* Dégradé de fond */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* --- PARTICULES FLOTTANTES --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                {[...Array(20)].map((_, index) => (
                    <div key={index} className="absolute rounded-full w-5 h-5 opacity-50 bg-[#0F264D]" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
                        boxShadow: `0 0 20px 5px #0F264D`, 
                    }} />
                ))}
            </div>   

            {/* --- CONTENU --- */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Colonne Gauche */}
                    <div className="space-y-8 text-white gap-3">
                        <div className="animate-fade-in flex flex-wrap items-center gap-3">
                            {/* Badge Software */}
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software
                            </span>

                            {/* Badge Logistique */}
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Logistique
                            </span>

                            {/* Badge Maintenance */}
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Maintenance (multi-secteurs)
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                                Developpeur <span className="text-primary glow-text">Fullstack</span><br />
                                passionné par le code<br />
                                <span className="font-serif italic font-normal">et les défis web</span>
                            </h1>
                            <p className="text-lg text-white/70 max-w-lg">
                                Je vous aiderai à structurer et développer vos idées...
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <Button href="#contact" size="lg">
                                Contactez-moi <ArrowRight className="w-5 h-5" />
                            </Button>  
                            <AnimatedBorderButton> 
                                <Download className="w-5 h-5"/>
                                Download CV
                            </AnimatedBorderButton>     
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <span className="text-sm text-white/60">Suivez-moi: </span>
                            {[
                                {icon: IoLogoGithub , href: "https://github.com/Alf33140 "},
                                {icon: IoLogoLinkedin , href: "https://www.linkedin.com/in/davy-carreau-b015453b9"},
                                {icon: IoLogoTwitter , href:"#" },
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="p-2 rounded-full glass hover:text-primary transition-all duration-300">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Colonne Droite : Image de Profil */}
                    <div className="relative animate-fade-in flex justify-center lg:justify-end">
                        <div className="relative max-w-xl w-full"> 
                            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl animate-pulse" />
                            <div className="relative z-20 glass rounded-3xl p-2 glow-border">
                                <img 
                                    src="/projectimg/profil.png" 
                                    alt="Profil" 
                                    className="w-full aspect-video object-cover rounded-2xl" 
                                />
                                
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"/> 
                                        <span className="text-sm font-medium">Disponible</span>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-4 animate-float shadow-xl">
                                    <div className="text-2xl font-bold text-primary">1</div>
                                    <div className="text-xs text-white/60">Année Exp..</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Technologies */}
                <div className="mt-24 animate-fade-in">
                    <p className="text-sm text-white/50 mb-6 text-center italic">Technologies de développement pratiquées</p>
                    <div className="relative overflow-hidden w-full flex items-center justify-center gap-4 flex-wrap">
                        {skills.map((skill, id) => (
                            <div key={id} className="px-6 py-2">
                                <span className="text-xl font-semibold text-white/30 hover:text-primary transition-colors cursor-default">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <a href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider opacity-50 group-hover:opacity-100">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};