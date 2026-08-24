import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
