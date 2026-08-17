import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-base text-cream min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <TechMarquee />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  );
}