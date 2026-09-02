import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Daniel Cosmo",
  description:
    "Software development, IT consulting, cloud infrastructure, and ongoing support from Daniel Cosmo.",
};

const services = [
  {
    title: "Software Development",
    description:
      "Web applications, internal tools, and backend services built around your actual workflow. Includes API design, database modeling, and front-end builds in the frameworks your team already uses.",
    points: ["Web & internal tools", "APIs & backend services", "Mobile-friendly front ends"],
  },
  {
    title: "IT Consulting",
    description:
      "An outside technical view on decisions that are hard to make from inside the team: what to build, what to buy, and where the current system will break first.",
    points: ["Architecture reviews", "Technical due diligence", "Technology roadmaps"],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Infrastructure that a small team can actually operate: sensible cloud setup, automated deployments, and monitoring that tells you about problems before your customers do.",
    points: ["Cloud migration & setup", "CI/CD pipelines", "Monitoring & alerting"],
  },
  {
    title: "Data & Integrations",
    description:
      "Getting systems to talk to each other reliably — third-party APIs, internal data pipelines, and the glue code that usually gets neglected until it breaks.",
    points: ["Third-party integrations", "Data pipelines", "Internal automation"],
  },
  {
    title: "Systems Architecture",
    description:
      "Technical design work for new products or systems approaching a scaling wall, done before code is written rather than as a post-mortem.",
    points: ["Greenfield architecture", "Scalability planning", "Technical documentation"],
  },
  {
    title: "Ongoing Support",
    description:
      "Continued involvement after launch on a retainer basis: bug fixes, small features, and adjustments as real usage reveals what the system actually needs.",
    points: ["Maintenance & fixes", "Incremental features", "Direct access, no ticket queue"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Services
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">
            A small set of services, applied deeply rather than a long menu
            spread thin. Most projects combine two or three of these.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="border-t border-line">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,280px)_1fr]"
              >
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {service.title}
                </h2>
                <div>
                  <p className="max-w-2xl text-ink-soft">{service.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-ink-soft"
                      >
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Not sure which service you need?
            </h2>
            <p className="mt-2 text-ink-soft">
              Describe the problem, not the solution — we&apos;ll help you
              figure out the rest.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
