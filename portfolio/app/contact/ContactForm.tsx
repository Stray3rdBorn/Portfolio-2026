"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function ContactForm() {
  // Track the submit state so the button label and status message can update
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  // TODO: swap the fake delay for a real fetch to /api/contact (or a server action) when the backend is ready
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Temporary placeholder so I can see the sending/sent states working
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("sent");
  }

  return (
    <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-text"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-surface bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-text"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-surface bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-text"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-surface bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Disable while sending so the form can't be submitted twice */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "sent" && (
        <p className="text-sm text-accent">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
