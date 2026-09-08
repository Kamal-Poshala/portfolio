export type Project = {
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  highlight: string;
  tech: string[];
  repoLink?: string;
  demoLink?: string;
  paperLink?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "SyncSpace",
    tagline: "Real-Time Collaborative Workspace",
    category: "Full-Stack · Distributed Systems",
    year: "2025",
    description:
      "A collaborative platform with WebSocket-based concurrent document editing, live presence tracking, and JWT-secured role-based access control. Room-based, event-driven communication is handled by modular socket handlers; the backend runs on Koyeb and the frontend on Vercel.",
    highlight: "60% lower MongoDB write load under sustained edit bursts via debounced buffering",
    tech: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "MongoDB"],
    repoLink: "https://github.com/Kamal-Poshala/syncspace",
    demoLink: "https://syncspace-frontend-six.vercel.app/",
    image: "/projects/syncspace.png",
  },
  {
    title: "DeepDub",
    tagline: "Automated Video Dubbing & Lip-Sync",
    category: "Applied ML · Multimodal Pipeline",
    year: "2025",
    description:
      "An end-to-end multimodal pipeline — automatic speech recognition, translation, text-to-speech, and GAN-based lip sync — orchestrated asynchronously with FastAPI, Celery, and Redis. Modular fault isolation keeps each stage independently recoverable for videos up to 10 minutes.",
    highlight: "ASR → translation → TTS → GAN lip-sync, fully async with per-stage fault isolation",
    tech: ["PyTorch", "Whisper", "Wav2Lip", "FastAPI", "Celery", "Redis"],
    repoLink: "https://github.com/Kamal-Poshala/DeepDub",
    image: "/projects/deepdub.png",
  },
  {
    title: "Multilingual Polarization Detection",
    tagline: "SemEval 2026 — 22 Languages",
    category: "Applied ML · Multilingual NLP",
    year: "2025",
    description:
      "A classification pipeline spanning 22 languages built on mBERT and mT5 with parameter-efficient LoRA fine-tuning. The approach matches full fine-tuning quality while training a fraction of the parameters.",
    highlight: "Macro F1 of 0.87 with 60% fewer trainable parameters than full fine-tuning",
    tech: ["PyTorch", "LoRA / PEFT", "mBERT", "mT5", "scikit-learn"],
    repoLink: "https://github.com/Kamal-Poshala/multilingual_polarization_detection",
    paperLink: "/multilingual.pdf",
    image: "/projects/polarization.png",
  },
  {
    title: "CogniFetch",
    tagline: "NLP Search & Retrieval Engine",
    category: "Full-Stack · Information Retrieval",
    year: "2024",
    description:
      "A retrieval engine with cosine-similarity ranking over 10,000+ academic documents, backed by an inverted-index design for fast lookups. An OCR and NLP ingestion pipeline converts scanned PDFs into structured, searchable data, paired with a React front end for interactive document search.",
    highlight: "Sub-50 ms p95 query latency — a 45% reduction — over 10,000+ documents",
    tech: ["Node.js", "TF-IDF", "MongoDB", "React", "OCR"],
    repoLink: "https://github.com/Kamal-Poshala/CogniFetch",
    image: "/projects/cognifetch.png",
  },
  {
    title: "IPMS",
    tagline: "Internship Program Management System",
    category: "Backend · Workflow Automation",
    year: "2025",
    description:
      "A distributed multi-role approval workflow with role-based access control and JWT authentication, exposing 15+ RESTful endpoints with centralized logging. Scheduled cron jobs send automated email reminders to keep approvals moving.",
    highlight: "1,000+ transaction events handled; approval turnaround cut 40% via automated reminders",
    tech: ["Node.js", "Express", "MongoDB", "REST APIs", "Cron"],
    repoLink: "https://github.com/Kamal-Poshala/IPMS",
    image: "/projects/ipms.png",
  },
];
