export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rag",
    name: "RAG Knowledge Assistant",
    tagline: "Hand-rolled retrieval-augmented generation, no frameworks",
    description:
      "A complete RAG pipeline built from scratch: chunking, embedding, vector + keyword hybrid retrieval, and citation-backed answers -- no LangChain or LlamaIndex, by choice, to understand the mechanics instead of configuring a black box. Measured against a hand-written 20-question eval set with a documented tuning history, and honest treatment of statistical uncertainty at small sample sizes rather than a single inflated accuracy claim.",
    highlights: [
      "90% answer accuracy (18/20) on a hand-written eval set, with full tuning history",
      "Hand-rolled BM25 keyword search fused with vector search via Reciprocal Rank Fusion",
      "Real cost and latency measured across a 6-configuration retrieval sweep",
      "Root-caused and fixed a real chunking bug after an external code review",
    ],
    tech: ["Python", "ChromaDB", "Groq", "fastembed", "Docker"],
    github: "https://github.com/m-hamzaj/rag",
    featured: true,
  },
  {
    slug: "cafe-os",
    name: "cafe-os",
    tagline: "Point of sale and inventory for a single cafe, with an AI daily summary",
    description:
      "A full-stack cafe system: a fast counter screen for cashiers, and an owner dashboard for sales, menu, stock, costs and supplier orders. Every sale subtracts the ingredients its recipe actually uses, so stock and costs reflect what really happened. The AI summary only narrates figures already computed in SQL -- it never calculates or invents a number.",
    highlights: [
      "Recipe-level stock: a latte with oat milk subtracts beans and oat milk, not a generic item count",
      "Costs recorded at the moment of sale for COGS, gross profit, food cost % and per-item margins",
      "Reorder points from real usage and supplier lead time, plus purchase orders where only received stock counts",
      "Waste log and physical counts that keep the reason for every correction",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Groq", "Tailwind CSS", "Zod"],
    github: "https://github.com/m-hamzaj/cafe-os",
    live: "https://cafe-os-m-hamzaj.vercel.app",
  },
  {
    slug: "saas-sales-bot",
    name: "SaaS Sales Assistant",
    tagline: "RAG-powered customer support chatbot",
    description:
      "An AI chatbot that answers customer questions by retrieving relevant sections from product documentation, rather than relying on hardcoded FAQ responses -- built to reduce support workload and give round-the-clock product knowledge access to customers and sales teams alike.",
    highlights: [
      "Retrieval-augmented answers grounded in real product docs, not hardcoded replies",
      "Live Streamlit demo backed by a Groq LLaMA 3.3 generation pipeline",
    ],
    tech: ["LangChain", "ChromaDB", "Groq", "Sentence Transformers", "Streamlit"],
    github: "https://github.com/m-hamzaj/saas-sales-bot",
  },
  {
    slug: "ai-cv-screener",
    name: "AI CV Screener",
    tagline: "Automated recruitment screening agent, built in n8n",
    description:
      "A webhook-triggered n8n workflow that extracts text from PDF resumes, evaluates each candidate with an LLM, and logs structured results straight to Google Sheets -- a numeric score, strengths, weaknesses, and a hire/reject recommendation, with zero manual review.",
    highlights: [
      "Processes real PDF resume URLs end to end with no human intervention",
      "Structured scoring output (e.g. 8.5/10) with detailed candidate evaluation",
    ],
    tech: ["n8n", "PDF.co", "Groq", "Google Sheets API"],
    github: "https://github.com/m-hamzaj/ai-cv-screener",
  },
  {
    slug: "agrisage",
    name: "AgriSage",
    tagline: "Tomato leaf disease detection from a photo",
    description:
      "A web app that classifies tomato leaf diseases from an uploaded photo using a VGG16 convolutional neural network, returning a diagnosis, confidence score, and treatment guidance in real time -- built for farmers who need an answer immediately, not a lab test.",
    highlights: ["91.28% accuracy across 9 distinct tomato leaf diseases", "Real-time diagnosis with treatment recommendations"],
    tech: ["Python", "Flask", "TensorFlow", "VGG16", "Tailwind CSS"],
    github: "https://github.com/m-hamzaj/AgriSage-",
  },
];
