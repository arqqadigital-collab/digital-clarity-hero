import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import headerVideo from "@/assets/header-bg.mp4";
import { ExpertiseSection } from "@/components/ExpertiseSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SBS — Transforming Complexity Into Digital Clarity" },
      {
        name: "description",
        content:
          "End-to-end digital transformation for modern enterprises and healthcare organizations.",
      },
    ],
  }),
});

const navLinks = ["Products", "Solutions", "Company", "Clients", "Case Studies", "Contact"];

function Index() {
  return (
    <>
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={headerVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 md:px-12">
          <img src={logo} alt="SBS — Superior Business Solutions" className="h-12 w-auto md:h-14" />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-brand)" }}
          >
            Get Started
          </button>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-white">Transforming Complexity</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Into Digital Clarity
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            End-to-end digital transformation for modern enterprises and healthcare organizations.
          </p>

          <button
            className="mt-12 inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-semibold text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-brand)" }}
          >
            Start Your Digital Transformation
            <ArrowRight className="h-5 w-5" />
          </button>
        </section>
      </div>
    </main>
    <ExpertiseSection />
    </>
  );
}
