import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import statsBg from "@/assets/stats-bg.jpg";

export function ParallaxDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.35]);
  const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]"
      aria-hidden="false"
    >
      <motion.div
        style={{ y: bgY, scale, backgroundImage: `url(${statsBg})` }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,15,35,0.75) 0%, rgba(8,15,35,0.55) 50%, rgba(8,15,35,0.85) 100%)",
        }}
        aria-hidden
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Driving digital transformation
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            across industries
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
