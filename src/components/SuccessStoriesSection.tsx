import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import caseErp from "@/assets/case-erp.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import caseFintech from "@/assets/case-fintech.jpg";

type Story = {
  quote: string;
  name: string;
  company: string;
  image: string;
};

const stories: Story[] = [
  {
    quote:
      "We faced severe challenges with our legacy operational systems and data fragmentation. The team managed a full ERP migration seamlessly, providing us with unified reporting and automated workflows. I highly recommend their expertise for large-scale enterprise deployments.",
    name: "Ahmed Al-Mansoori",
    company: "Global Logistics Corp",
    image: caseErp,
  },
  {
    quote:
      "Ensuring compliance with DHA standards while modernizing our patient records seemed daunting. Their healthcare transformation framework not only secured our data but enhanced our clinical efficiency by 40%, drastically improving patient outcomes.",
    name: "Dr. Sarah Jenkins",
    company: "Prime Care Hospitals",
    image: caseHealthcare,
  },
  {
    quote:
      "Lacking an internal specialized IT team, we relied completely on their managed services. They now handle our entire cybersecurity posture and infrastructure scaling, allowing us to focus entirely on our core business growth with total peace of mind.",
    name: "Michael Chang",
    company: "FinTech Solutions",
    image: caseFintech,
  },
];

export function SuccessStoriesSection() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  const next = () => setActive((p) => (p + 1) % stories.length);
  const prev = () => setActive((p) => (p - 1 + stories.length) % stories.length);

  return (
    <section className="relative overflow-hidden bg-[#0a1628] px-6 py-24 md:px-12 md:py-32">
      {/* Header */}
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--brand-green)" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Success Stories
          </span>
        </div>

        <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-white">Case </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Studies
          </span>
        </h2>

        <p className="mt-4 text-base text-white/60 md:text-lg">
          Real Results from Real Organizations
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={story.image}
              src={story.image}
              alt={story.company}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
        </div>

        {/* Text */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                    style={{ color: "var(--brand-green)" }}
                  />
                ))}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="mt-8">
                <div className="text-lg font-bold text-white">{story.name}</div>
                <div
                  className="mt-1 text-sm font-semibold"
                  style={{ color: "var(--brand-green)" }}
                >
                  {story.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show story ${i + 1}`}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === active ? 32 : 16,
                    background:
                      i === active
                        ? "var(--brand-green)"
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
