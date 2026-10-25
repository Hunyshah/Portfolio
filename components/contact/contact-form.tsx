"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  if (data.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (data.message.trim().length < 20) errors.message = "Please write at least 20 characters.";
  return errors;
}

const field =
  "mt-2 block w-full rounded-xl border border-line bg-raised px-4 py-3 text-base text-ink placeholder:text-ink-3 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-red-600";

export function ContactForm({ fallbackHref }: { fallbackHref: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (response.ok) {
        setStatus({ state: "success" });
        form.reset();
        return;
      }
      setStatus({
        state: "error",
        message:
          response.status === 503
            ? "The contact form isn’t connected to email yet, so your message was not sent. Please use one of the direct links instead."
            : result.error ?? "Something went wrong and your message was not sent. Please try again or use a direct link.",
      });
    } catch {
      setStatus({ state: "error", message: "Network error — your message was not sent. Please try again." });
    }
  }

  if (status.state === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-raised p-8">
        <CheckCircle2 aria-hidden className="size-8 text-emerald-600" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">Message sent.</h2>
        <p className="mt-2 text-ink-2">Thanks for reaching out — I’ll reply by email.</p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 min-h-11 rounded-full border border-line px-5 text-sm font-medium hover:border-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status.state === "submitting";

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby={status.state === "error" ? "form-error" : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
      </div>
      <Field label="Subject" name="subject" error={errors.subject} />
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={field}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="What are you building, and where can I help?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>
      {/* Honeypot: hidden from people, filled by naive bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <div id="form-error" role="alert" className="rounded-xl border border-red-600/40 bg-red-600/5 p-4 text-sm text-ink">
          {status.message}{" "}
          <a href={fallbackHref} className="font-medium underline underline-offset-4">
            Contact directly
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-on-accent disabled:opacity-60"
      >
        {submitting && <Loader2 aria-hidden className="size-4 animate-spin" />}
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={field}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
