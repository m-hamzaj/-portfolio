const links = [
  { label: "Email", href: "mailto:mhamzajavaid370@gmail.com", value: "mhamzajavaid370@gmail.com" },
  { label: "GitHub", href: "https://github.com/m-hamzaj", value: "github.com/m-hamzaj" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-sm font-mono font-medium text-zinc-500 dark:text-zinc-400">03 / Contact</h2>
      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
        Have a project in mind, or want to talk about how something here was built? I&apos;m happy to
        hear from you.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-2 text-base font-medium"
          >
            <span className="text-zinc-500 dark:text-zinc-400">{link.label}</span>
            <span className="transition-colors group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
              {link.value}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-16 border-t border-black/[.06] pt-6 text-sm text-zinc-500 dark:border-white/[.08] dark:text-zinc-500">
        M Hamza Javaid — built with Next.js and Tailwind CSS.
      </p>
    </section>
  );
}
