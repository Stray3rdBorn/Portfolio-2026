"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
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
          maxLength={20}
          required
          className="w-full rounded-xl border border-border bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
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
          maxLength={30}
          required
          className="w-full rounded-xl border border-border bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
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
          maxLength={200}
          required
          className="w-full rounded-xl border border-border bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
      {status === "sent" && (
        <p className="text-sm text-accent">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
