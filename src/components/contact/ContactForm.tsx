"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { branches } from "@/lib/branches";
import { CONTACT_EMAIL } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

// Contact form for static hosting via Web3Forms; falls back to mailto when no access key is set.
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const mailtoFallback = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Offerte aanvraag Second Shot Media")}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!accessKey) {
      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const eventType = String(formData.get("eventType") ?? "");
      const date = String(formData.get("date") ?? "");
      const message = String(formData.get("message") ?? "");
      const body = [
        `Naam: ${name}`,
        `E-mail: ${email}`,
        `Type event: ${eventType}`,
        `Datum: ${date}`,
        "",
        message,
      ].join("\n");
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Offerte aanvraag Second Shot Media")}&body=${encodeURIComponent(body)}`;
      setStatus("idle");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Offerte aanvraag via secondshotmedia.nl");
    formData.append("from_name", "Second Shot Media website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message ?? "Versturen mislukt. Probeer het opnieuw of mail direct.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Versturen mislukt. Probeer het opnieuw of mail direct.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center space-y-2">
        <p className="font-semibold text-foreground">Bedankt voor uw bericht!</p>
        <p className="text-muted-foreground text-sm">
          Wij reageren doorgaans binnen één werkdag op {CONTACT_EMAIL}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-medium">Naam</label>
          <Input id="contact-name" name="name" required placeholder="Uw naam" />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium">E-mail</label>
          <Input id="contact-email" name="email" type="email" required placeholder="uw@email.nl" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="contact-event-type" className="text-sm font-medium">Type event</label>
          <Select id="contact-event-type" name="eventType" required defaultValue="">
            <option value="" disabled>Selecteer type</option>
            {branches.map((branch) => (
              <option key={branch.slug} value={branch.title}>{branch.title}</option>
            ))}
            <option value="Anders">Anders</option>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-date" className="text-sm font-medium">Datum (indicatie)</label>
          <Input id="contact-date" name="date" type="date" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">Bericht</label>
        <Textarea
          id="contact-message"
          name="message"
          required
          placeholder="Beschrijf uw event, locatie en gewenste output (foto, video, reels…)"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Versturen…" : "Verstuur aanvraag"}
      </Button>

      {!accessKey && (
        <p className="text-xs text-muted-foreground text-center">
          Of mail direct:{" "}
          <a href={mailtoFallback} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
        </p>
      )}
    </form>
  );
}
