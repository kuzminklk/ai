# Daniel Cosmo — Company Website

A Next.js 14 (App Router) site for Daniel Cosmo, a general-purpose IT and
software company. Design direction: chain.link-inspired layout (white base,
dark navy sections, hairline borders, bordered cards) with a yellow
(`#F4C10F`) accent instead of blue.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- next/font (Sora for headlines, Inter for body)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx        Root layout, fonts, Navbar/Footer
  page.tsx           Home
  services/page.tsx  Services
  about/page.tsx      About
  contact/page.tsx    Contact (form)
  globals.css        Design tokens & base styles
components/
  Navbar.tsx
  Footer.tsx
  NetworkGraphic.tsx  Hero SVG illustration
  ContactForm.tsx     Client-side contact form
```

## Things to wire up before going live

- **Contact form**: `components/ContactForm.tsx` currently logs the
  submission to the console. Add an API route (e.g.
  `app/api/contact/route.ts`) that sends the message through an email
  provider (Resend, Postmark, SendGrid, etc.) or a form service, and call
  it from `handleSubmit`.
- **Real email/address**: replace the placeholder
  `hello@danielcosmo.com` and location in `components/Footer.tsx` and
  `app/contact/page.tsx`.
- **Photo/imagery**: the About and Home "about teaser" sections use a
  plain cream placeholder block (`<div className="... bg-cream" />`) where
  a real photo or image could go — drop a file into `public/` and swap in
  an `<Image />`.
- **Favicon**: add `app/favicon.ico` (or `app/icon.png`).
- **Deploy**: works out of the box on Vercel (`vercel deploy`), or any
  Node host that supports `next build && next start`.

## Customizing the design

Colors, fonts, and radii are defined as design tokens in
`tailwind.config.ts` (`ink`, `paper`, `dark`, `accent`, etc.) and applied
via utility classes and the shared `.btn-primary` / `.btn-secondary` /
`.container-page` / `.section-pad` classes in `app/globals.css`.
