export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="mb-4 font-mono text-sm text-zinc-500 dark:text-zinc-400">Hi, I&apos;m</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">M Hamza Javaid</h1>
      <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">AI Developer</p>
      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        I build AI systems that actually work, not just demos. From hand-rolling a retrieval-augmented
        generation pipeline from scratch to automating real business workflows with AI agents, I care
        about understanding how something works before I ship it -- and proving it with real
        evaluation, not a claim.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/[.1] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.03] dark:border-white/[.15] dark:hover:bg-white/[.05]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
