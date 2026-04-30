// import React from 'react'
// import {Download} from "lucide-react";

// export const AnimatedBorderButton = () =>{
//                     return (
//                             <button className="relative bg-transparent border border-border text-foreground
//                              hover:border-primary/50 transition-all duration-1000 focus:outline-none
//                              focus-visible:ring-2 focus-visible:ring-primary
//                              focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
//                              group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border">
//                                 <svg
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         viewBox="0 0 200 60"
//         preserveAspectRatio="none"
//       >
//                         <path
//                         d="M 30,1 H 170 A 29,29 0 0 1 199,30 A 29,29 0 0 1 170,59 H 30 A 29,29 0 0 1 1,30 A 29,29 0 0 1 30,1 Z"
//                         fill="none"
//                         stroke="white" /* Le trait sera blanc pour trancher sur le rouge */
//                         strokeWidth="3" /* Un peu plus épais pour mieux le voir */
//                         strokeDasharray="400"
//                         className="opacity-0 group-hover:opacity-100 animated-border-path transition-opacity duration-300"
//                         />
//                     </svg>
                                                
//                                                 <span className="relative z-10 flex items-center justify-center gap-2">
//                         <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                         Télécharger mon CV
//                     </span>
//                     </button>
//                 )
//                 }

import React from 'react';
import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <a 
      href="/Cv_Davy_Carreau.pdf" // Chemin vers ton fichier dans le dossier public
      download="Cv_Davy_Carreau.pdf" // Force le téléchargement et nomme le fichier
      className="relative group px-8 py-4 text-lg font-medium rounded-full overflow-visible transition-all duration-300 bg-[#dc2626] text-white border-none hover:bg-[#b91c1c] hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] inline-flex items-center justify-center no-underline"
    >
      
      {/* SVG : La ligne blanche mobile */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 30,1 H 170 A 29,29 0 0 1 199,30 A 29,29 0 0 1 170,59 H 30 A 29,29 0 0 1 1,30 A 29,29 0 0 1 30,1 Z"
          fill="none"
          stroke="white" 
          strokeWidth="4.5"
          strokeDasharray="400"
          /* On cache la ligne par défaut, elle n'apparaît qu'au survol */
          className="opacity-0 group-hover:opacity-100 animated-border-path transition-opacity duration-300"
        />
      </svg>
      
      {/* Contenu du bouton */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-5 h-5" />
        Télécharger mon CV
      </span>
    </a>
  );
};