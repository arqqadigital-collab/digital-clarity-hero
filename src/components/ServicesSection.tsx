import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import healthcare from "@/assets/service-healthcare-compliance.png";
import erp from "@/assets/service-erp.png";
import ai from "@/assets/service-ai-healthcare.png";
import staff from "@/assets/service-staff.png";
import integration from "@/assets/service-integration.png";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    number: "Service 01",
    title: "Healthcare Compliance",
    description:
      "Ensure your operations strictly adhere to DHA, DoH, ADHICS, and regional healthcare standards.",
    image: healthcare,
  },
  {
    number: "Service 02",
    title: "ERP Implementation & Optimization",
    description:
      "Tailored deployment and continuous enhancement of enterprise systems to streamline your operations.",
    image: erp,
  },
  {
    number: "Service 03",
    title: "AI Healthcare Transformation",
    description:
      "Leverage artificial intelligence to optimize clinical workflows and drive medical innovation.",
    image: ai,
  },
  {
    number: "Service 04",
    title: "Staff Augmentation & Managed Services",
    description:
      "Scale your teams rapidly with specialized IT professionals and comprehensive managed support solutions.",
    image: staff,
  },
  {
    number: "Service 05",
    title: "Implementation & Integration",
    description:
      "Seamlessly connect disparate systems to create a unified, data-driven technological ecosystem.",
    image: integration,
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  const next = () => setActive((i) => (i + 1) % services.length);
  const prev = () => setActive((i) => (i - 1 + services.length) % services.length);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--brand-blue)" }}
          >
            Our Services
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span style={{ color: "var(--brand-dark)" }}>Solutions Built for </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Impact
            </span>
          </h2>
        </div>

        {/* Main feature card */}
        <div className="relative mt-16 overflow-hidden rounded-[2.5rem] shadow-2xl">
          <div className="relative h-[520px] md:h-[620px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />

            {/* Arrows */}
            <div className="absolute right-6 top-6 flex gap-2 md:right-10 md:top-10">
              <button
                onClick={prev}
                aria-label="Previous service"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next service"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center p-8 md:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
                    {current.number}
                  </span>
                  <h3 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
                    {current.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-base text-white/80 md:text-lg">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 translate-y-32 gap-2 md:flex">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to service ${i + 1}`}
                  className="h-2 rounded-full bg-white/40 transition-all"
                  style={{ width: i === active ? 28 : 8, opacity: i === active ? 1 : 0.5 }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="bg-black/40 p-4 backdrop-blur md:p-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActive(i)}
                    className="group relative h-24 overflow-hidden rounded-2xl text-left transition md:h-28"
                    style={{
                      boxShadow: isActive
                        ? "0 0 0 2px var(--brand-green)"
                        : "0 0 0 1px rgba(255,255,255,0.1)",
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 transition"
                      style={{
                        background: isActive
                          ? "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))"
                          : "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
                      }}
                    />
                    <span className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold leading-tight text-white md:text-sm">
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
