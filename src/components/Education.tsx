"use client";

import { education } from "@/data/experience";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
                <div
                    key={index}
                    className="bg-card/30 border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:bg-card/50 transition-colors"
                >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                        <p className="text-primary/90 font-medium">{edu.degree}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
