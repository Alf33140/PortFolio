import { Code2 } from "lucide-react";
import { Rocket } from "lucide-react";
import { Users } from "lucide-react";
import { Lightbulb } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        Description:
            "Ecrire du Code Maintenable, paramétrable,flexible et évolutif qui résiste aux épreuves du temps.",
    },
    {
        icon: Rocket,
        title: "Performance",
        Description:
            "Optimiser la vitese et offrir une expérience utlisateur fluide en prenant en compte son environnement.",
    },
    {
        icon: Users,
        title: "Collaboration",
        Description:
            "Travailler en étroite collaboration avec des équipes métiers pour concrétiser leur iées et concepts.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        Description:
            "Rester à la pointe des dernières technologies et des bonnes pratiques.",
    },
]

export const About = () => {
    return <section> 
        <div>
            {/* Colonne de Gauche */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground yext-sm font-medium tracking-wider upprcase">
                            A propos de moi
                        </span>
                    </div>
                        <h2
                            className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in
                                                    animation-delay-100 text-secondary-foregroung"
                        >
                            Construisons le futur,
                                <span className="font-serif italic font-normal text-white"
                                >
                                    {" "}
                                    un composant, un projet à la fois.
                                 </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animattion-delay-200">
                            <p>
                                Le monde est en perpétuels changement, cependant le besoin de donner corps à ses idées 
                                pour simplifier son qhotidien tout en répondant aux normes de traçabilité réglementaire.
                                Ces idées trouvent rarement de réponses adaptées avec les programmes disponible sur étagère.
                                En tant qu'ancien professionnel du segment logistique et opérationnel. je me suis attaché a
                                 me former en conception développent d'applications afin de répondre à cette question:
                                 Comment répondre de manière complête et réglementaire à mon secteur d'activité encréant un 
                                 adapté a mes besoins tout comme a ceux de mes utilisateurs. 
                            </p>
                            <p>
                                Je me suis spécialisé en symfony, React, Javascript et HTML5/CSS3/SQL qui permettent de par leur 
                                technicité des constructions d'applications stables, dotées de bases de données associées pour 
                                l'ensemble des secteurs d'activités simples ou complexes san pour autant faire l'impasse sur 
                                l'ergonomie et l'intuitivité de navigation. 
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-dely-300">
                            <p className="text-lg font-medium italic text-foreground">
                                Mon experience associé de 25 ans au sein de domaines 
                                d'activités logistiques commme le secteur sanitaires sur les volets techniques en hôpital, mais 
                                également sur les secteurs de resptauration hospitalière, de gestions de l'hébergement, les gestions 
                                de parc de véhicules. Cette expertise et mon écoute est à votre service pour faire éclore les futures 
                                solutions à votre problématiques.
                            </p>
                        </div>
                </div>
                {/* Colonne de droite- highlights */}
                <div>
                    {highlights.map((item, id) =>{
                        <div>
                            <item.icon />
                        </div>
                    })}
                </div>

        </div>
    </section>;
}



