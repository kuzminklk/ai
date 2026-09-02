import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Daniel Cosmo
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Software development, IT consulting, and infrastructure for
            teams that need their technology to just work.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Site</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/" className="text-sm text-ink-soft hover:text-ink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-ink-soft hover:text-ink">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-ink-soft hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-ink-soft hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Services</p>
          <ul className="mt-4 space-y-3">
            <li className="text-sm text-ink-soft">Software Development</li>
            <li className="text-sm text-ink-soft">IT Consulting</li>
            <li className="text-sm text-ink-soft">Cloud &amp; Infrastructure</li>
            <li className="text-sm text-ink-soft">Data &amp; Integrations</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="mailto:hello@danielcosmo.com"
                className="text-sm text-ink-soft hover:text-ink"
              >
                hello@danielcosmo.com
              </a>
            </li>
            <li className="text-sm text-ink-soft">Riga, Latvia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-xs text-ink-faint md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Daniel Cosmo. All rights reserved.</p>
          <p>Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
