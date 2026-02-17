"use client";

import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <div className="space-y-12">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="relative pl-8 sm:pl-10 border-l border-gray-800"
                >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-lg text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 sm:mt-0 flex flex-col items-start sm:items-end gap-1">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" /> {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" /> {exp.location}
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-2 mb-6 text-gray-400">
                        {exp.description.map((item, idx) => (
                            <li key={idx} className="leading-relaxed relative pl-4">
                                <span className="absolute left-0 top-2.5 w-1 h-1 bg-gray-600 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
