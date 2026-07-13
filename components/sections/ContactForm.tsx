"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm({ email }: { email: string }) {
  const [values, setValues] = useState({ name: "", from: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend is wired up yet — falls back to opening the user's mail client.
    // Swap this for a POST to your form provider of choice (Formspree, Resend, etc.)
    // once you have one, and drop the mailto fallback.
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.from})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
          Name
        </label>
        <input
          id="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="mt-2 w-full rounded-lg border border-border bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="from" className="font-mono text-xs uppercase tracking-wider text-muted">
          Your email
        </label>
        <input
          id="from"
          type="email"
          required
          value={values.from}
          onChange={(e) => setValues((v) => ({ ...v, from: e.target.value }))}
          className="mt-2 w-full rounded-lg border border-border bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="mt-2 w-full resize-none rounded-lg border border-border bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm text-bg transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" />
        Send message
      </button>
      {sent && (
        <p className="font-mono text-xs text-accent">
          Opening your mail client — finish sending there.
        </p>
      )}
    </form>
  );
}
