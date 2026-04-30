import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "carreau.davy@protonmail.com",
        href: "mailto:carreau.davy@protonmail.com",
    },
    {
        icon: Phone,
        label: "Tél",
        value: "+33 6 22 13 86 94",
        href: "tel:+33622138694",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Bordeaux, France",
        href: "http://googleusercontent.com/maps.google.com/3",
    },
]

export const Contact = () => {
    // Initialisation avec des chaînes vides (sans espaces) pour éviter les erreurs de formatage
    const [formData, setFormData] = useState({ 
        name: "", 
        email: "", 
        message: "" 
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ 
        type: null, 
        message: "" 
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("Configuration EmailJS incomplète.");
            }

            // --- SYNCHRONISATION VARIABLES TEMPLATE ---
            // On utilise user_name et user_email pour correspondre au template Circuit Imprimé
            await emailjs.send(serviceId, templateId, {
                user_name: formData.name,   // Correspond à {{user_name}}
                user_email: formData.email, // Correspond à {{user_email}}
                message: formData.message,  // Correspond à {{message}}
                date: new Date().toLocaleString('fr-FR'), // Pour la balise {{date}}
            }, publicKey);

            setSubmitStatus({ 
                type: "success", 
                message: "Merci ! Votre message a été transmis avec succès." 
            });
            
            // Reset du formulaire
            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error("Erreur EmailJS détaillée:", error);
            setSubmitStatus({ 
                type: "error", 
                message: error?.text || "Une erreur s'est produite. Vérifiez vos clés API ou votre connexion." 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        /* Section principale avec padding vertical important et gestion du débordement */
        <section id="contact" className="py-32 relative overflow-hidden">
            
            {/* --- DÉCORATIONS D'ARRIÈRE-PLAN --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div> 

            <div className="container mx-auto px-6 relative z-10">
                
                {/* --- HEADER DE LA SECTION --- */}
                <div className="text-center mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium">Contact</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
                        Une idée? Un projet?{" "}
                        <span className="font-serif italic font-normal text-white">Parlons-en ensemble !</span>
                    </h2>
                </div>

                {/* --- GRILLE : 12 colonnes pour gérer l'agrandissement x1.5 du formulaire --- */}
                <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
                    
                    {/* --- BLOC FORMULAIRE (7/12 de la largeur) --- */}
                    {/* transition-all & hover:scale : Gère l'effet de zoom fluide */}
                    {/* hover:shadow : Gère le halo blanc diffus au survol */}
                    <div className="lg:col-span-7 glass p-10 rounded-3xl border border-primary/30 
                                    transition-all duration-500 ease-in-out
                                    hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:border-white/40">
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Champ Nom */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium ml-1">Nom</label>
                                <input 
                                    type="text" id="name" required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                                    placeholder="Votre nom..."
                                    className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            {/* Champ Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                <input 
                                    type="email" id="email" required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                                    placeholder="Votre email..."
                                    className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            {/* Champ Message (Hauteur augmentée) */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                <textarea
                                    rows={8}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value})}
                                    placeholder="Votre Message..."
                                    className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
                                />
                            </div>

                            {/* Bouton d'envoi dynamique */}
                            <Button className="w-full py-6 text-lg" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? "Initialisation du signal..." : (
                                    <span className="flex items-center gap-3">
                                        Envoyer le message <Send className="w-5 h-5" />
                                    </span>
                                )}
                            </Button>

                            {/* Affichage des erreurs ou succès */}
                            {submitStatus.type && (
                                <div className={`flex items-center gap-3 p-4 rounded-xl animate-fade-in
                                    ${submitStatus.type === "success" 
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"}`}
                                >
                                    {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* --- BLOC INFOS DE CONTACT (5/12 de la largeur) --- */}
                    <div className="lg:col-span-5 space-y-8 animate-fade-in animation-delay-400">
                        
                        {/* Carte des coordonnées */}
                        <div className="glass rounded-3xl p-8 border border-primary/10">
                            <h3 className="text-xl font-semibold mb-8">Information de contact:</h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, i) => (
                                    <a href={item.href} key={i} className="flex items-center gap-5 p-2 rounded-2xl hover:bg-white/5 transition-all group">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-6 h-6 text-primary"/>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                                            <div className="font-medium text-lg">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Carte de disponibilité avec animation de statut */}
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                <span className="font-bold uppercase text-xs tracking-widest text-white">Disponibilité</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Actuellement disponible pour de nouveaux projets. Échangeons ensemble sur vos besoins et vos idées pour vos futurs projets Web.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}