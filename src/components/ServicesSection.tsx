import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import erpVideo from "@/assets/service-erp.mov";
import healthVideo from "@/assets/service-health.mov";
import transformVideo from "@/assets/service-transform.mov";

type Service = {
  video: string;
  title: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    video: erpVideo,
    title: "Power Your Business with Scalable ERP Ecosystems",
    description:
      "Our ERP Ecosystem features top-tier platforms including Odoo ERP Solutions, Microsoft Dynamics 365 (Business Central & CE), and Zoho Business Applications.",
    bullets: ["ERP implementation & customization", "Financial & operational automation"],
  },
  {
    video: healthVideo,
    title: "Smarter Care Through Connected Health Technology",
    description:
      "Enhance patient care and streamline operations with our advanced healthcare technology solutions. We integrate data securely to provide actionable insights.",
    bullets: [
      "Comprehensive Electronic Health Records",
      "Secure Telemedicine Platforms",
      "Predictive Analytics for Patient Care",
    ],
  },
  {
    video: transformVideo,
    title: "Expert Support That Powers Successful Transformation",
    description:
      "Leverage our specialized expertise and regional compliance knowledge to ensure your transformation projects are delivered securely, efficiently, and to the highest standards.",
    bullets: [
      "AI Healthcare Transformation Consulting",
      "Compliance with DHA, DoH, ADHICS",
      "Staff Augmentation & Managed Services",
      "Implementation and Integration services",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--brand-blue)" }}
          >
            How We Transform Your Business
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
            <span style={{ color: "var(--brand-dark)" }}>Solutions that drive</span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              digital growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Our solutions combine technology, automation, and industry expertise to help
            organizations modernize operations and accelerate digital growth.
          </p>

          <button
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-brand)" }}
          >
            View All Services
          </button>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3
                  className="text-xl font-bold leading-snug md:text-2xl"
                  style={{ color: "var(--brand-dark)" }}
                >
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground md:text-base">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm font-semibold"
                      style={{ color: "var(--brand-dark)" }}
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: "var(--gradient-brand)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-8 flex items-center justify-between rounded-full border border-border px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:border-transparent hover:text-white"
                  style={{ color: "var(--brand-dark)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--gradient-brand)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  Explore
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
