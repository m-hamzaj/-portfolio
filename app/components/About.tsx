import { UserRound } from "lucide-react";

const skills = [
  "Python",
  "RAG / retrieval systems",
  "Vector search (ChromaDB, embeddings)",
  "n8n workflow automation",
  "LLM APIs (Groq, OpenAI)",
  "Docker",
  "TypeScript / Next.js",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="flex items-center gap-2 font-mono text-sm font-medium text-accent">
        <UserRound size={15} />
        02 / About
      </h2>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        <p>
          I work across two sides of applied AI: hand-building retrieval and RAG systems in Python to
          actually understand how they work, and building AI-powered automation agents in n8n to solve
          real business workflows quickly. Both come from the same instinct -- don&apos;t trust a
          system until you&apos;ve measured it.
        </p>
        <p>
          Most of my projects ship with an honest account of what works, what doesn&apos;t, and how I
          know -- real evaluation numbers, documented tradeoffs, and fixes traced back to a root cause
          instead of a guess.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-accent-soft px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
