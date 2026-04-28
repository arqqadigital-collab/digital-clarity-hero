import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import process1 from "@/assets/process-1.mov";
import process2 from "@/assets/process-2.mov";
import process3 from "@/assets/process-3.mov";

type Card = {
  title: string;
  description: string;
  bullets: string[];
  video: string;
};

const cards: Card[] = [
  {
    title: "Power Your Business with Scalable ERP Ecosystems",
    description:
      "Our ERP Ecosystem features top-tier platforms including Odoo ERP Solutions, Microsoft Dynamics 365 (Business Central & CE), and Zoho Business Applications.",
    bullets: ["ERP implementation & customization", "Financial & operational automation"],
    video: process1,
  },
  {
    title: "Smarter Care Through Connected Health Technology",
    description:
      "Enhance patient care and streamline operations with our advanced healthcare technology solutions. We integrate data securely to provide actionable insights.",
    bullets: [
      "Comprehensive Electronic Health Records",
      "Secure Telemedicine Platforms",
      "Predictive Analytics for Patient Care",
    ],
    video: process2,
  },
  {
    title: "Expert Support That Powers Successful Transformation",
    description:
      "Leverage our specialized expertise and regional compliance knowledge to ensure your transformation projects are delivered securely, efficiently, and to the highest standards.",
    bullets: [
      "AI Healthcare Transformation Consulting",
      "Compliance with DHA, DoH, ADHICS",
      "Staff Augmentation & Managed Services",
      "Implementation and Integration services",
    ],
    video: process3,
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Translate horizontally: show 3 cards across the scrolled distance
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);

  return (
    <section ref={ref} className="relative bg-background" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-6 pt-16 md:pt-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--brand-dark)" }}
              >
                <span className="h-px w-10 bg-current" />
                Our Process
              </p>
              <h2
                className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
                style={{ color: "var(--brand-dark)" }}
              >
                How We Transform
                <br />
                Your Business
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              <p className="max-w-md text-base text-muted-foreground md:text-right md:text-lg">
                Our solutions combine technology, automation, and industry expertise to help
                organizations modernize operations and accelerate digital growth.
              </p>
              <button
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
                style={{ background: "var(--gradient-brand)" }}
              >
                View All Services
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scrolling cards */}
        <div className="mt-10 flex flex-1 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 px-6 md:gap-8 md:px-12">
            {cards.map((card, i) => (
              <article
                key={i}
                className="flex h-[68vh] w-[88vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xl md:w-[640px] lg:w-[720px]"
              >
                <div className="relative h-1/2 overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    src={card.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3
                    className="text-xl font-bold leading-tight md:text-2xl"
                    style={{ color: "var(--brand-dark)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    {card.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm md:text-base"
                        style={{ color: "var(--brand-dark)" }}
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: "var(--brand-blue)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--brand-blue)" }}
                  >
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
