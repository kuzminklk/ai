import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Daniel Cosmo",
  description:
    "Get in touch with Daniel Cosmo about a software, consulting, or infrastructure project.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-16 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-5 max-w-sm text-lg text-ink-soft">
            Tell us a bit about what you&apos;re building or the problem
            you&apos;re trying to solve. We reply to every message
            personally.
          </p>

          <div className="mt-10 space-y-5 border-t border-line pt-8">
            <div>
              <p className="text-sm font-semibold text-ink">Email</p>
              <a
                href="mailto:hello@danielcosmo.com"
                className="text-sm text-ink-soft hover:text-ink"
              >
                hello@danielcosmo.com
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Based in</p>
              <p className="text-sm text-ink-soft">Riga, Latvia</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Response time</p>
              <p className="text-sm text-ink-soft">Within 1–2 business days</p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
