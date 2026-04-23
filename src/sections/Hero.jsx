
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
            <div className=" absolute inset-0 bg-gradient-to-be
                    from-background/20 via-backbackground/80 to-background"
            />
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
                        <div className="animate-fate-in">
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
                                Bonjour, je m'appelle Davy Carreau - je vous aide a faire naitre, structurer et developper 
                                vos idées afin qu'elles prennent vie sur des applications de tout secteurs industriels, sanitaires ou jeux web communautaires.
                            </p>
                        </div>
                        {/* Bouton d'appel à l'action*/}
                        <div>
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
            </div>
    </section>
    );
}