export const projects = [
  {
    title: "SyncSpace — Real-Time Collaborative Workspace",
    category: "Full-Stack / Tiptap & Socket.IO",
    description:
      "Architected real-time collaborative platform supporting concurrent document editing, live chat, and presence tracking. Designed room-based event-driven communication with modular socket handlers. Implemented JWT-secured REST and WebSocket auth with RBAC. Deployed backend on Koyeb and frontend on Vercel.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "MongoDB"],
    repoLink: "https://github.com/Kamal-Poshala/syncspace",
    demoLink: "https://syncspace-frontend-six.vercel.app/",
  },
  {
    title: "Internship Program Management System (IPMS)",
    category: "Full-Stack / Backend",
    description:
      "Designed distributed approval workflow with role-based access control and secure JWT authentication. Implemented 15+ RESTful endpoints handling 1,000+ transaction events with centralized logging. Automated email remindes using cron, reducing approval turnaround by 40%.",
    tech: ["Node.js", "MongoDB", "Express", "REST APIs", "Cron"],
    repoLink: "https://github.com/Kamal-Poshala/IPMS",
  },
  {
    title: "CogniFetch — Search and Retrieval Engine",
    category: "Detailed Full-Stack / NLP",
    description:
      "Developed TF-IDF based search engine indexing 10K+ academic documents with relevance scoring. Built OCR and NLP ingestion pipeline transforming 2K+ PDFs into structured datasets. Implemented cosine similarity ranking and reduced query latency by 45%.",
    tech: ["Node.js", "MongoDB", "NLP", "React", "OCR"],
    repoLink: "https://github.com/Kamal-Poshala/CogniFetch",
  },
  {
    title: "Multilingual Polarization Detection",
    category: "NLP / Machine Learning",
    description:
      "Developed a high-performance multilingual analysis engine leveraging transformer-based models (mBERT) for accurate polarization detection and sentiment analysis across language barriers.",
    tech: ["Python", "PyTorch", "HuggingFace", "mBERT"],
    repoLink: "https://github.com/Kamal-Poshala/multilingual_polarization_detection",
    demoLink: "/multilingual.pdf",
  },
  {
    title: "AI Book Summarizer & Vector Store",
    category: "AI / LangChain",
    description:
      "Engineered an automated summarization tool integrating ChromaDB and HuggingFace embeddings for precise vector storage and retrieval of long-context book texts via semantic search.",
    tech: ["Python", "LangChain", "ChromaDB", "HuggingFace"],
  },
  {
    title: "Automated Video Dubbing Engine (Deepdub)",
    category: "AI / Audio Processing",
    description:
      "Built a multi-language video dubbing pipeline replacing traditional translation dependencies with deep-translator for stable lip-sync TTS conversion and automated audio track replacement.",
    tech: ["Python", "Deep-Translator", "TTS", "FFmpeg"],
  }
];
