import fs from "fs";
import path from "path";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

// Drop your photo at public/avatar.jpg (or .png) and it's picked up
// automatically -- no code change needed. Falls back to initials until then.
function findAvatar(): string | null {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", `avatar.${ext}`))) {
      return `/avatar.${ext}`;
    }
  }
  return null;
}

export default function Hero() {
  const avatarSrc = findAvatar();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
            <h1 className="text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
              M Hamza Javaid
            </h1>
            <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">AI Developer</p>
          </div>

          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl" />
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-accent/40 bg-black/5 sm:h-28 sm:w-28 dark:bg-white/5">
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt="M Hamza Javaid"
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-semibold text-zinc-400 dark:text-zinc-600">
                  MHJ
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I build AI systems that actually work, not just demos. From hand-rolling a
          retrieval-augmented generation pipeline from scratch to automating real business
          workflows with AI agents, I care about understanding how something works before I ship
          it -- and proving it with real evaluation, not a claim.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            See my work
            <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/[.1] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.03] dark:border-white/[.15] dark:hover:bg-white/[.05]"
          >
            <Mail size={15} />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
