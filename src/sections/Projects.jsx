import { IoLogoGithub } from "react-icons/io";// Import GitHub si nécessaire
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Portefolio", // Passage en minuscule pour la cohérence
        description: "Un portefolio personnel pour présenter mes projets et compétences",
        image: "/projectimg/Alf.png",
        tags: ["React", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/Alf33140/PorteFolio"
    },
    {
        title: "e-commerce",
        description: "Un site e-commerce de ventes d'articles avec gestion des paiements sous stripe",
        image: "/projectimg/Alf.png",
        tags: ["PHP", "Symfony", "CSS", "Bootstrap", "Stripe"],
        link: "#",
        github: "https://github.com/Alf33140/e-commerce"
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Background Brillant */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header section */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Travaux Vedettes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projets :{" "}
                        <span className="font-serif italic font-normal text-white">
                            qui font la différence
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Une petite sélection de travaux récents, de la plus simple à un peu plus complexe.
                    </p>
                </div>

                {/* Grille de projets */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, id) => (
                        <div
                            key={id}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 relative"
                            style={{ animationDelay: `${(id + 1) * 100}ms` }}
                        >
                            {/* Image des projets */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                
                                {/* Liens Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <IoLogoGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagId) => (
                                        <span
                                            key={tagId}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton Voir tout */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        Voir tous les projets <ArrowUpRight className="inline w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};