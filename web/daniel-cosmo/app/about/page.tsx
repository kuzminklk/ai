import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Daniel Cosmo",
  description:
    "Daniel Cosmo is a founder-led information technology and software company focused on pragmatic, durable engineering.",
};

const principles = [
  {
    title: "Directness",
    description:
      "You work with the person doing the work, not a layer of account managers relaying messages between you and the engineers.",
  },
  {
    title: "Pragmatism over hype",
    description:
      "New tools get adopted when they solve a real problem better than what's already working, not because they're trending.",
  },
  {
    title: "Built to be maintained",
    description:
      "Code is written for the person who has to change it in a year, including the version of us that comes back to support it.",
  },
  {
    title: "Clear communication",
    description:
      "Plain updates on what's done, what's next, and what's blocking progress — no status theater.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Technology, without the overhead.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              I&apos;m Daniel Cosmo, and this is my company: a small,
              general-purpose information technology and computer science
              practice built around one idea — that most businesses need
              solid engineering more than they need a big agency.
            </p>
          </div>
          <div className="h-72 rounded border border-line bg-cream md:h-80" />
        </div>
      </section>

      <section className="border-t border-line section-pad">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Background
          </h2>
          <p className="mt-5 text-ink-soft">
            My work spans the general range of information technology and
            computer science: building software, advising on architecture,
            and keeping the infrastructure underneath it all running. Rather
            than specializing in a single industry, I work across whatever
            problems come with a clear technical shape — which is most of
            them.
          </p>
          <p className="mt-4 text-ink-soft">
            Daniel Cosmo is founder-led by design. Projects stay small
            enough that nothing gets lost in handoffs, and every client
            works directly with the person accountable for the outcome.
          </p>
        </div>
      </section>

      <section className="border-t border-line section-pad">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            How I approach the work
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Want to work together?
            </h2>
            <p className="mt-2 text-ink-soft">
              I&apos;m generally happy to hear about new projects, big or
              small.
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
