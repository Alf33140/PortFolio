
import {Button} from "@/components/button";
import {ArrowRight, Download } from "lucide-react";
import {AnimatedBorderButton} from "../components/AnimatedBorderButton";

export const Hero = () => {
    return (
    
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* background */} 
        <div className="absolute inset-0">
            <img src="/bg-Github.png"
                alt="Image de fond Github" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>
        {/* Carré type repo github
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, index) => (
              <div
                  className="absolute w-5 h-5 opacity-50"
                  style={{
                    backgroundColor: '#0F264D',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random()* 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random()*5}s`,
                  }}
                />
            ))}
          </div>    */}
            {/* Particules stellaires floues */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, index) => (
              <div
                  className="absolute rounded-full w-5 h-5 opacity-50"
                  style={{
                    backgroundColor: '#0F264D',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random()* 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    // Optionnel : ajouter un filtre glow
                    boxShadow: `0 0 20px 5px #0F264D`, 
                  }}
                />
            ))}
          </div>   
            {/* Contenu principal */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*Colonne de Gauche contenu textuel*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Software
                            </span>
                        </div>
                        {/*Titre Principal principal */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Developpeur <span className="text-primary glow-text">Fullstack</span>
                                <br />
                                passionné par le code
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                 et les défis web   
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-800">
                                  - Je vous aiderai à structurer et developper vos idées afin qu'elles prennent vie 
                                  et devienne vos outils adaptés à votre activité. Quel que soit secteur, qu'il soit 
                                  industriel, sanitaire ou culturel, nous pourrons trouver vos outils spécifiques qui 
                                  repondent a vos problématiques. 
                                <p>ALORS PRET A FAIRE ECLORE VOS IDEES ENSEMBLE?</p>
                            </p>
                            
                        </div>
                        {/* Bouton d'appel à l'action*/}
                        <div className="flex flex-wrap items-center gap-6 animate-fade-in animation-delay-800">
                            <Button 
                                href="#contact"
                                size="lg"
                                className="animate-fade-in animation-delay-800"
                            >
                                Contactez-moi <ArrowRight className="w-5 h-5" />
                            </Button>  
                          
                            <AnimatedBorderButton /> 
                        </div>
                       
                    </div>
                    {/*Colonne de droite image */}
                </div>
                {/* Réseau Sociaux */}
                <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                    <span classname="text-sm text-muted-foreground">Suivez-moi: </span>
                    {[
                        {icon: Github, href: "https://github.com/Alf33140 "},
                        {
                         icon: linkedin,
                         href: "https://www.linkedin.com/in/davy-carreau-b015453b9",   
                        },
                        {icon: Twitter, href:"#" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        >
                            {<social.icon className="w-5 h-5" />}
                        </a>
                    ))}

                </div>
            </div>
            {/* Colonne de droite image profil*/}
            <div className="relative animate-fade_in animation-delai-300">
                {/* Image de profil */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0 rounded-3x1 bg-linear-to-br
                            from-primary/30 via-transparent to primary/10
                            blur-2x1 animate-pulse"
                        />
                        <div className="relative glass rounded-3x1 p-2 glow-border">
                            <img 
                                src="/Alf.png" 
                                alt="Photo de profil"
                                className="w-full aspect-[4/5] object-cover rounded-2x1"
                            />
                            {/* Badge Flottant */}
                                <div classname="absolute -bottom-4 -right-4 glass rounded-x1 px-4 py-3 animate-float">
                                    <div classname="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"/> 
                                        <span classname="text-sm font-medium">
                                            Disponible pour de nouvelles opportunités
                                        </span>
                                    </div>
                                </div>
                            {/* Stats du Badge */}
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
            </div>
    </section>
    );
}