export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    label: "Backend & Systems",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Socket.IO",
      "Celery",
      "Redis",
      "Distributed Systems",
      "Docker",
      "CI/CD",
      "Linux",
      "Git",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Databases & Data Engineering",
    items: [
      "MongoDB",
      "MySQL",
      "Query Optimization",
      "Indexing",
      "Aggregation Pipelines",
      "Data Pipeline Design",
    ],
  },
  {
    label: "Machine Learning & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
      "LoRA / PEFT",
      "Fine-Tuning",
      "mBERT",
      "mT5",
      "Multilingual NLP",
    ],
  },
  {
    label: "Speech & Vision AI",
    items: ["Whisper (ASR)", "Wav2Lip", "GANs", "Edge-TTS", "FFmpeg"],
  },
];
