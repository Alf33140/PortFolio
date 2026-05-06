import { Code2, Rocket, Users, Lightbulb, ChevronDown } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        Description: "Écrire du code maintenable, paramétrable, flexible et évolutif.",
    },
    {
        icon: Rocket,
        title: "Performance",
        Description: "Optimiser la vitesse et offrir une expérience utilisateur fluide.",
    },
    {
        icon: Users,
        title: "Collaboration",
        Description: "Travailler en étroite collaboration avec les équipes métiers.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        Description: "Rester à la pointe des dernières technologies et bonnes pratiques.",
    },
];

export const About = () => {
    return (
        <section id="about" className="relative py-32 overflow-hidden bg-background">
            
            {/* --- IMAGE DE FOND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="/projectimg/reseau.png" 
                    alt="" 
                    className="w-full h-full object-contain opacity-20 lg:opacity-30"
                    style={{
                        maskImage: `
                            radial-gradient(circle at center, black 30%, transparent 80%),
                            linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
                        `,
                        WebkitMaskImage: `
                            radial-gradient(circle at center, black 30%, transparent 80%),
                            linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
                        `,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in"
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* --- En-tête --- */}
                <div className="text-center mb-20 animate-fade-in">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        À propos de moi
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-white">
                        Construisons le futur,
                        <span className="font-serif italic font-normal text-white/70">
                            {" "}restons connécté aux problématiques de terrain et lions les projets pour optimiser les données.
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Colonne Gauche : Texte avec largeur limitée pour dégager le centre */}
                    <div className="space-y-8 animate-fade-in max-w-md">
                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Le monde est en perpétuel changement, cependant le besoin de donner corps à ses idées 
                                reste indispensable. Ancien professionnel du segment logistique, je crée des outils 
                                sur mesure répondant précisément aux besoins métiers.
                            </p>
                            <p>
                                Spécialisé en <span className="text-white font-semibold">Symfony, React, et SQL</span>, 
                                je crée des applications stables sans sacrifier l'ergonomie.
                            </p>
                        </div>
                        
                        <div className="glass rounded-2xl p-8 glow-border group bg-white/5">
                            <p className="text-base md:text-lg font-medium italic text-foreground leading-relaxed">
                                "Mon expertise de 25 ans en logistique sur différents secteurs qu'elle soit industrielle  hospitalière ou opérationnelle est à votre service 
                                pour faire éclore les futures solutions à vos problématiques."
                            </p>
                        </div>
                    </div>

                    {/* Colonne Droite : Highlights raccourcis et alignés à droite */}
                    <div className="flex flex-col gap-4 animate-fade-in items-end w-full">
                        <div className="w-full max-w-xs xl:max-w-sm space-y-4"> 
                            {highlights.map((item, id) => (
                                <div 
                                    key={id} 
                                    className="glass p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300 group border border-white/5"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-bold text-foreground leading-none">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground mt-2 leading-tight">
                                            {item.Description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* --- Footer --- */}
                <div className="flex flex-col items-center justify-center mt-24 opacity-40">
                    <p className="text-xs tracking-widest uppercase mb-4 text-white">Travaux Vedettes</p>
                    <ChevronDown size={32} className="animate-bounce text-primary" />
                </div>
            </div>
        </section>
    );
};