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
  /** Source lives in a private repository, so no code link is shown. */
  private?: boolean;
  kind: "ai" | "fullstack" | "backend";
  image: string;
};

export const projects: Project[] = [
  {
    title: "DocMind",
    tagline: "Agentic RAG Document Assistant",
    category: "Applied AI · Agentic RAG",
    year: "2026",
    description:
      "A full-stack assistant that answers questions grounded in uploaded documents. Rather than stuffing retrieved text into every prompt, an agent loop lets the model decide when to call a search tool over a pgvector index, then streams its answer token by token. Chunking, local sentence-transformer embeddings, and cosine retrieval are built from first principles, and the agent is provider-agnostic across Gemini, Anthropic, Groq, OpenRouter, and Ollama.",
    highlight: "Retrieval quality (hit-rate@3) is an automated check in CI, alongside backend and frontend tests",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "sentence-transformers", "LLM tool use", "Docker"],
    private: true,
    kind: "ai",
    image: "/projects/docmind.webp",
  },
  {
    title: "StockSense",
    tagline: "AI Inventory Forecasting & Insights",
    category: "Applied AI · Forecasting",
    year: "2026",
    description:
      "Forecasts demand per item, flags stockout and overstock risk, and turns the numbers into a plain-language briefing. A global gradient-boosting model produces p10/p50/p90 forecasts over a 28-day horizon, backtested against seasonal-naive and moving-average baselines, with prediction intervals calibrated to 80% coverage. A Claude tool-use agent answers questions — including what-if order simulations — by calling the app's own forecast and risk tools.",
    highlight: "On synthetic demo data, backtest error ~13% below seasonal-naive and ~32% below a moving average",
    tech: ["FastAPI", "scikit-learn", "pandas", "SQLAlchemy", "PostgreSQL", "Claude API", "React", "TypeScript", "Docker"],
    private: true,
    kind: "ai",
    image: "/projects/stocksense.webp",
  },
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
    kind: "fullstack",
    image: "/projects/syncspace.webp",
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
    repoLink: "https://github.com/Kamal-Poshala/DeepDubAI",
    kind: "ai",
    image: "/projects/deepdub.webp",
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
    kind: "ai",
    image: "/projects/polarization.webp",
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
    kind: "fullstack",
    image: "/projects/cognifetch.webp",
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
    kind: "backend",
    image: "/projects/ipms.webp",
  },
  {
    title: "SRL Academic Ancestry",
    tagline: "Research Lineage Platform",
    category: "Full-Stack · Research Data Platform",
    year: "2026",
    description:
      "A web platform for recording and exploring a research lab's academic lineage — who advised whom, generation by generation. A relational schema models people and advisor/student links; a password-gated Streamlit app handles search, editing, and validation, with a tree visualization exportable to PNG/PDF plus Excel and formatted reports. Includes a tested SQLite-to-PostgreSQL migration path and a Streamlit Community Cloud deployment.",
    highlight: "Delivered end to end from a written technical scope, backed by 56 passing automated tests",
    tech: ["Python", "Streamlit", "SQLite", "PostgreSQL", "Data Validation"],
    private: true,
    kind: "fullstack",
    image: "/projects/srl-ancestry.webp",
  },
];
