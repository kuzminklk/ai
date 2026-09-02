"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      // Wire this up to a real endpoint (e.g. app/api/contact/route.ts
      // sending through an email provider) before going live.
      // eslint-disable-next-line no-console
      console.log("Contact form submission:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded border border-line bg-cream p-8">
        <h3 className="font-display text-lg font-semibold text-ink">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for reaching out — we&apos;ll get back to you within a
          couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-ink"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ink"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
          placeholder="What are you trying to build or solve?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
