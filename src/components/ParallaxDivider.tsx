import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dividerBg from "@/assets/parallax-divider.jpg";

export function ParallaxDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.35]);
  const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]"
      aria-hidden
    >
      <motion.div
        style={{
          y: bgY,
          scale,
          backgroundImage: `url(${dividerBg})`,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, rgba(8,15,35,0.5) 30%, rgba(8,15,35,0.5) 70%, hsl(var(--background)) 100%)",
        }}
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Engineered for{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            measurable impact
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
