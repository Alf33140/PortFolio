import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    
   {
        title: "Portefolio",
        description: "Un portefolio personnel pour présenter mes projets et compétences",
        
        images: [
            "/projectimg/Projet1_1.png", 
            "/projectimg/Projet1_2.png", 
            "/projectimg/Projet1_3.png", 
        ], 
        tags: ["React", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/Alf33140/PorteFolio"
    },
    {
        title: "e-commerce",
        description: "Un site e-commerce de ventes d'articles avec gestion des paiements sous stripe",
        // Ajoute ici tes différentes captures d'écran
        images: [
            "/projectimg/Projet2_1.png", 
            "/projectimg/Projet2_2.png", 
            "/projectimg/Projet2_3.png",
            "/projectimg/Projet2_4.png", 
        ], 
        tags: ["PHP", "Symfony", "CSS", "Bootstrap", "Stripe"],
        link: "#",
        github: "https://github.com/Alf33140/e-commerce"
    },
    {
        title: "Bibliothèque - Gestion Documentaire",
        description: "Une application de gestion de documents de type bibliotheque avec gestion des stutut et des emprunts de documents /ouvrages avec restitution",
        // Ajoute ici tes différentes captures d'écran
        images: [
            "/projectimg/Projet3_1.png", 
            "/projectimg/Projet3_2.png", 
            "/projectimg/Projet3_3.png",
            "/projectimg/Projet3_4.png", 
        ], 
        tags: ["PHP", "Symfony", "CSS", "Bootstrap", "Stripe"],
        link: "#",
        github: "https://github.com/Alf33140/BibliothequeSymfony"
    },
];

// Sous-composant pour le Carrousel
const ProjectCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative overflow-hidden aspect-video group/carousel">
            {/* Images Container */}
            <div 
                className="flex h-full transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${title} screenshot ${i}`}
                        className="w-full h-full object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Contrôles (visibles au survol) */}
            {images.length > 1 && (
                <>
                    <button 
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 hover:bg-primary hover:text-white"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 hover:bg-primary hover:text-white"
                    >
                        <ChevronRight size={20} />
                    </button>
                    
                    {/* Indicateurs (Dots) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, i) => (
                            <div 
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? "bg-primary w-4" : "bg-white/50"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Travaux Vedettes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projets : <span className="font-serif italic font-normal text-white">qui font la différence</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Une sélection de mes travaux, illustrant mes compétences fullstack et ma capacité à résoudre des problèmes complexes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, id) => (
                        <div
                            key={id}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in relative"
                            style={{ animationDelay: `${(id + 1) * 100}ms` }}
                        >
                            {/* Remplacement de l'image par le Carrousel */}
                            <div className="relative">
                                <ProjectCarousel images={project.images} title={project.title} />
                                
                                {/* GitHub Link Overlay (toujours accessible) */}
                                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all inline-block shadow-xl"
                                        title="Voir sur GitHub"
                                    >
                                        <IoLogoGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Contenu de la carte */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, tagId) => (
                                        <span
                                            key={tagId}
                                            className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        Voir tous les projets <ArrowUpRight className="inline w-5 h-5 ml-2" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};