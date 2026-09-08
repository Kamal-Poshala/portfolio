export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    title: "Research Assistant",
    company: "University of Oklahoma — Advisor: Prof. Farrokh Mistree",
    location: "Norman, OK",
    period: "Jun 2026 – Present",
    description: [
      "Architecting the SRL Academic Ancestry Platform in Python, building structured data-validation pipelines that collect and visualize advisor–student research lineage across multiple generations of researchers.",
      "Engineering scalable data collection and validation workflows that consolidate multi-source researcher information into a unified, searchable dataset.",
      "Partnering with faculty and researchers to maintain data accuracy and improve the discoverability of academic genealogy records.",
    ],
    skills: ["Python", "Data Pipelines", "Data Validation"],
  },
  {
    title: "Software Engineer Intern",
    company: "Persistent Systems",
    location: "Hyderabad, India",
    period: "Aug 2023 – Oct 2023",
    description: [
      "Reduced Java module execution time by 25% through algorithmic redesign using graph traversal and heap-based scheduling, together with memory-optimization techniques.",
      "Strengthened multithreaded application stability by diagnosing and resolving synchronization bottlenecks and CPU contention across concurrent Java modules.",
    ],
    skills: ["Java", "Multithreading", "Algorithms", "Linux"],
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  detail?: string;
};

export const education: Education[] = [
  {
    institution: "University of Oklahoma",
    degree: "M.S. in Computer Science",
    period: "Aug 2024 – May 2026",
    location: "Norman, OK",
  },
  {
    institution: "CVR College of Engineering",
    degree: "B.Tech in Information Technology",
    period: "Aug 2020 – May 2024",
    location: "Hyderabad, India",
    detail: "CGPA 9.08 / 10.0",
  },
];
