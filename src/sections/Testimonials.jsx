
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


const testimonials = [
    {
        quote:
            "Très à l'écoute du besoin de ses clients.",
        author: "Gérard M.",
        role: "Responsable logistique, SYNAPSE TECH",
        avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        quote:
            "Très bonne approche des rendus immerssif.",
        author: "Claudia S.",
        role: "GameDev MMORPG, TURTLE INCS",
        avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        quote:
            "Très flexible dans les adaptations des modules.",
        author: "Max R.",
        role: "Responsable Logistique, RECURSE LOGISTICS",
        avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export const Testimonials = () => {

const [ activeId, setActiveId] = useState(0);

const next = () => {
    setActiveId((prev) => (prev + 1) % testimonials.length);
}
const previous = () => {
    setActiveId((prev) => (prev - 1 + testimonials.length) % testimonials.length);
}

    return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] 
                                bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        /> 
        <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className=" text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking_wider uppercase animate fade-in">
                Ce qu'ils disent de moi.
            </span>

        </div>
        <h2
                className="text-4xl md:text-5x1 font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
            >
                Des témoignages de {" "}
                <span className="font-serif italic font-normal text-white">
                    clients et partenaires satisfaits
                </span>
            </h2>
        </div>
        {/* Carroussel témoignages */}
        <div className="max-w-4xl mx-auto">
            <div className="relative">
                {/* Main témoignages */}
                <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                    <div
                        className="absolute -top-4 left-8 w-12 h-12 rounded-full
                                    bg-primary flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary-foreground"/>
                    </div>
                        <blockquote className="text-x1 md-text-2xl font-medium leading-relaxed mb-8 pt-4">
                            "{testimonials[activeId].quote}"</blockquote>
                    <div className="flex items-center gap-4">
                        <img
                            src={testimonials[activeId].avatar}
                            alt={testimonials[activeId].avatar}
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div>
                            <div className="font-semibold">
                                {testimonials[activeId].author}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {testimonials[activeId].role}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation témoignages */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={previous}
                    >
                        <ChevronLeft />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, id) => (
                            <button
                                key={id}
                                onClick={ () => setActiveId(id)}
                                className={ `w-2 h-2 rounded-full transition-all duration-300 ${
                                    id === activeId
                                    ? "w-8 bg-primary"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            />
                        ))}
                    </div>
                    <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={next}>
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    </section>
    );
    
}
