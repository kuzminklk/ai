import Link from "next/link";
import NetworkGraphic from "@/components/NetworkGraphic";

const tags = [
  "Software Development",
  "IT Consulting",
  "Cloud & Infrastructure",
  "Data & Integrations",
  "Systems Architecture",
];

const capabilities = [
  {
    title: "Software Development",
    description:
      "Web apps, internal tools, and backend services designed around how your team actually works, not a generic template.",
  },
  {
    title: "IT Consulting",
    description:
      "Architecture reviews, technical due diligence, and roadmaps that turn a vague problem into a clear next step.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Cloud setup, CI/CD pipelines, and monitoring that keep releases predictable and outages rare.",
  },
];

const steps = [
  {
    title: "Discover",
    description:
      "We start by understanding the problem you're actually trying to solve, not just the feature you asked for.",
  },
  {
    title: "Build",
    description:
      "Working software early, shipped in small pieces you can see, use, and react to along the way.",
  },
  {
    title: "Support",
    description:
      "We stay involved after launch, fixing, tuning, and adapting the system as your needs change.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-16 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Software and systems, built to last.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Daniel Cosmo works with founders and teams to design, build,
              and run the technology behind their business, from a first
              working prototype to the infrastructure that keeps it online.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/services" className="btn-secondary">
                View services
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <NetworkGraphic />
          </div>
        </div>
      </section>

      {/* Capability strip */}
      <section className="border-y border-line bg-cream">
        <div className="container-page flex flex-wrap gap-3 py-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              What we do
            </h2>
            <p className="mt-4 text-ink-soft">
              A small, focused set of services rather than a long menu, so
              the work stays deep instead of spread thin.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded border border-line p-7 transition-colors hover:border-ink"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
            >
              See the full list of services
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-pad bg-dark">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper">
            How we work
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-paper">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-faint">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div
                    className="absolute right-[-1.25rem] top-2 hidden h-px w-8 bg-line-dark md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              A founder-led studio
            </h2>
            <p className="mt-5 text-ink-soft">
              Daniel Cosmo is led directly by its founder, which means the
              person who scopes your project is the same person accountable
              for delivering it. No handoffs between sales and engineering,
              no account managers relaying messages.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
              >
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="h-64 rounded border border-line bg-cream md:h-72" />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-cream">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-ink-soft">
              Tell us about it and we&apos;ll get back to you within a
              couple of days.
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
