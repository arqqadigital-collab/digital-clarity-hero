import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import expertiseImg from "@/assets/expertise.png";

export function ExpertiseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Image grows from contained card to fully fill the viewport
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [0.85, 1, 1.15, 1.15]);
  const width = useTransform(scrollYProgress, [0, 0.5, 0.8], ["72%", "100%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 0.8], [32, 0, 0]);

  return (
    <section ref={ref} className="relative bg-background" style={{ height: "260vh" }}>
      {/* Sticky stage that holds heading + growing image */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-5xl px-6 pt-16 text-center md:pt-20">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--brand-blue)" }}
          >
            Our Expertise
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
            <span style={{ color: "var(--brand-dark)" }}>Technology Expertise Built Around</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Business Needs
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Through years of experience delivering ERP systems, healthcare technology solutions, and
            digital transformation services, we collaborate closely with organizations to implement
            systems that simplify processes, integrate data, and unlock new opportunities for
            innovation.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "var(--brand-blue)" }}
          >
            Discover Our Approach
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mt-8 flex flex-1 items-center justify-center px-0">
          <motion.div
            style={{ scale, width, borderRadius }}
            className="overflow-hidden shadow-2xl"
          >
            <img
              src={expertiseImg}
              alt="Technology expert working on AI healthcare transformation"
              className="h-[60vh] w-full object-cover md:h-[70vh]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
