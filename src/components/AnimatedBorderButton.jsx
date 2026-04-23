import React from 'react'
import {Download} from "lucide-react";

export const AnimatedBorderButton = () =>{
                    return (
                            <button className="relative bg-transparent border border-border text-foreground
                            '                   hover:border-primary/50 transition-all duretion-1000 focus-outline< className=
                                                focus-visible:ring-2 focus-visible:ring-primary
                                                focus-visible:ring:offset-2 disable:opacity-50 disabled:cursor-not-allowed
                                                group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border">
                                <svg
                                    className="absolute left-0 top-0 w-full pointer-events-auto"
                                    viewBox="0 0 200 60"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                     d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59L"
                                     fill="none"
                                     stroke="var(--color-primary)"
                                     strokeWidth="2"
                                     strokeDasharray= "400"
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="animated-border-path"
                                />
                                </svg>
                                
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Download className="w-5 h-5"/>
                                    Télécharger mon CV
                                </span>
                            </button>
  )
}


