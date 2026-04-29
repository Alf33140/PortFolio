// Données des expériences professionnelles
const experience = [
    {
        period: "02/2026 - aujourd'hui",
        role: "En Reconversion professionnelle CONCEPTEUR DEVELOPPEUR D'APPLICATIONS",
        company: "AFPA BEGLES",
        description: "Formation en reconversion professionnelle sur les domaines de conception d'architectures logicielles et developpement web FullStack ",
        technologies: ["PHP sur PHP Symfony", "React", "React Native", "Javascript", "HTML 5/ CSS 3"],
        current: true, // Indicateur pour l'animation de point actif
    },
    {
        period: "09/2024 - 02/2026",
        role: "Chef de Pôle logistique",
        company: "Groupement de soutien du Commissariat de Cazaux-Biscarosse Base Aérienne 120",
        description: "Responsable des moyens techniques et logistiques du groupement de défense Sud-ouest",
        technologies: ["Conduite du changement", "Gestion des services techniques opérationnels et moyens humains", "Gestion de projet, Innovation"],
        current: true, // Indicateur pour l'animation de point actif
    },
    {
        period: "09/2022 - 09/2024",
        role: "Chef du Sous-groupement logistique",
        company: "Bataillon de Marin-Pompiers de Marseille",
        description: "Responsable logistique, Pilote budgétaire logistique opérationnelle et Chef de Projet Numérique Logistique",
        technologies: ["Transition numérique", "Recherche" , "Conception et déploiement des solutions KIMOCE (OSLO) adaptés au secteur logistique", "gestion de projet numérique", "Création des cahiers des charges techniques et Pilotage"],
        current: true, // Indicateur pour l'animation de point actif
    },
    {
        period: "09/2019 - 09/2022",
        role: "Directeur des services techniques logistique",
        company: "HHôpital d'instruction des armées ROBERT PIQUE",
        description: "Chef de département logistique, Management de la politique de maintenance et des équipes techniques de l'hôpital(Ingénierie Biomédical,Infrastructure, Moyens généraux,Hébergement et Restauration Hospitalière",
        technologies: ["Transition numérique"," Gestion de la maintenance technique", "Gestion de projet infrastructure", "Création des cahiers des charges techniques et Pilotage"],
        current: true, // Indicateur pour l'animation de point actif
    },
    {
        period: "09/2017 - 09/2019",
        role: "Chef de service restauration Hospitalière",
        company: "Hôpital d'instruction des armées LAVERAN",
        description: "Conduite du changement, Gestion de projet transformation de l'activité de restauration, Gestion des flux ",
        technologies: ["Gestion de projet", "Création des cahiers des charges techniques et Pilotage"],
        current: true, // Indicateur pour l'animation de point actif
    },
    {
        period: "09/2015 - 09/2017",
        role: "Directeur des services techniques logistique",
        company: "Hôpital d'instructiondes armées PERCY",
        description: "Chef de département logistique, Management de la politique de maintenance et des équipes techniques de l'hôpital(Ingénierie Biomédical,Infrastructure, Moyens généraux,Hébergement et Restauration Hospitalière",
        technologies: ["Transition numérique", "Gestion de la maintenance technique", "Gestion de projet infrastructure", "Création des cahiers des charges techniques et Pilotage"],
        current: true, // Indicateur pour l'animation de point actif
    },
];

export const Experience = () => {
    return (
        /* Section principale : 
           - py-32 : Large espacement vertical (padding top/bottom).
           - relative : Référentiel pour les éléments positionnés en absolu (le halo de fond).
           - overflow-hidden : Empêche les effets visuels de créer une barre de défilement horizontale.
        */
        <section id="expérience" className="py-32 relative overflow-hidden">
            
            {/* Halo de lumière en arrière-plan :
                - absolute : Positionné par rapport à la section.
                - bg-primary/5 : Couleur principale avec 5% d'opacité.
                - blur-3xl : Flou maximal pour créer un effet diffus.
                - -translate-y-1/2 : Centre l'élément verticalement sur son point d'ancrage.
            */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div> 

            <div className="container mx-auto px-6 relative z-10">
                
                {/* En-tête de section */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Parcours professionnel:
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Expérience <span className="font-serif italic font-normal text-white">Multi-Segments</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Le parcours de mon évolution professionnelle...
                    </p>
                </div>

                {/* Conteneur de la Timeline */}
                <div className="relative">
                    
                    {/* Ligne verticale de la timeline :
                        - w-[2px] : Largeur précise de 2 pixels.
                        - bg-gradient-to-b : Dégradé du haut vers le bas.
                        - from-primary/70 via-primary/30 to-transparent : Transition de couleur pour l'effet de disparition.
                        - shadow-[...] : Ombre personnalisée (hexadécimal ou rgba) pour l'effet néon.
                    */}
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                    <div className="space-y-12">
                        {experience.map((exp, id) => (
                            <div 
                                key={id}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                // Délai d'animation dynamique pour l'effet "cascade"
                                style={{ animationDelay: `${(id + 1) * 150}ms` }}
                            >
                                {/* Point de jonction sur la ligne :
                                    - ring-4 ring-background : Crée une bordure invisible pour séparer le point de la ligne.
                                    - animate-ping : L'effet de cercle qui pulse (uniquement si current est true).
                                    - rounded-full : cercle
                                */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                                </div>

                                {/* Alignement alterné (Gauche / Droite) :
                                    - id % 2 === 0 ? ... : Logique pour alterner le texte à droite ou à gauche sur desktop.
                                */}
                                <div className={`pl-8 md:pl-0 ${id % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    
                                    {/* Le Contenu (Rectangle d'expérience) :
                                        - glass : Classe personnalisée pour l'effet flou/transparence.
                                        - transition-all duration-500 ease-in-out : Transition fluide de toutes les propriétés.
                                        - hover:scale-105 : Effet de zoom de 5% au survol.
                                        - hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.6)] : Le halo blanc diffus.
                                    */}
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 ease-in-out
                                        hover:scale-105
                                        hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.6)]
                                        `}>
                                        
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>

                                        {/* Tags de technologies */}
                                        <div className={`flex flex-wrap gap-2 mt-4 ${id % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techId) => (
                                                <span 
                                                    key={techId} 
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-white/5"
                                                >
                                                    {tech}
                                                </span> 
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        </section>
    );
};