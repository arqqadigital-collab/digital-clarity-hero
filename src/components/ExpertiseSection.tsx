import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import expertiseImg from "@/assets/expertise.png";

export function ExpertiseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1.05]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [120, 24, 24]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.2, 1, 1]);

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.25em]"
          style={{ color: "var(--brand-blue)" }}
        >
          Our Expertise
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          <span style={{ color: "var(--brand-dark)" }}>Technology Expertise Built Around</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Business Needs
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base text-muted-foreground md:text-lg">
          Through years of experience delivering ERP systems, healthcare technology solutions, and
          digital transformation services, we collaborate closely with organizations to implement
          systems that simplify processes, integrate data, and unlock new opportunities for
          innovation.
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
          style={{ color: "var(--brand-blue)" }}
        >
          Discover Our Approach
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <motion.div
          style={{ scale, borderRadius, opacity }}
          className="overflow-hidden shadow-2xl"
        >
          <img
            src={expertiseImg}
            alt="Technology expert working on AI healthcare transformation"
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
