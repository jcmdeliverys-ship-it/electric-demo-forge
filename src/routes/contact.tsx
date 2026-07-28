import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { business, images } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elevate Electrical | Brighton, Hove & Lewes" },
      {
        name: "description",
        content:
          "Call 01273 555 018 or send a message. Elevate Electrical covers Brighton, Hove, Lewes and the surrounding villages, with 24 hour emergency call out.",
      },
      { property: "og:title", content: "Contact Elevate Electrical Ltd" },
      {
        property: "og:description",
        content: "Phone, email and workshop details for our Brighton based electrical team.",
      },
      { property: "og:image", content: images.contactHero },
      { name: "twitter:image", content: images.contactHero },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what is going on."
        lead="The quickest way to get an answer is to ring the office. If it is easier to write it down, use the form and we will come back the same working day."
        image={images.contactHero}
        alt="Person taking a phone call at a desk with paperwork"
      />

      <section className="px-4 pt-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="grid gap-4">
              {[
                ["Phone", business.phone, `tel:${business.phone.replace(/\s/g, "")}`],
                ["Email", business.email, `mailto:${business.email}`],
              ].map(([label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  className="hover-lift block rounded-3xl bg-card p-7 shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-copper">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-ink">{value}</p>
                </a>
              ))}
              <div className="rounded-3xl bg-card p-7 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-copper">
                  Workshop
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{business.address}</p>
                <p className="mt-4 text-sm text-muted-foreground">{business.hours}</p>
              </div>
              <div className="rounded-3xl bg-ink p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-copper-soft">
                  Areas covered
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                  Brighton, Hove, Lewes, Shoreham, Peacehaven, Ditchling, Hurstpierpoint and the
                  villages between.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-4xl bg-card p-8 shadow-lift sm:p-10">
              <h2 className="text-2xl leading-tight text-ink">Send a message</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                This form is part of a demonstration site, so nothing is actually sent.
              </p>
              <form
                className="mt-8 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Alex Turner" />
                  <Field label="Phone" name="phone" placeholder="07700 900123" />
                </div>
                <Field label="Email" name="email" type="email" placeholder="alex@example.co.uk" />
                <Field label="Postcode" name="postcode" placeholder="BN2 9UB" />
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-ink">What do you need?</span>
                  <textarea
                    rows={5}
                    required
                    placeholder="Two sockets in the back bedroom keep tripping the RCD."
                    className="rounded-3xl border border-input bg-background px-5 py-4 text-[15px] outline-none transition focus:border-copper focus:ring-4 focus:ring-copper/15"
                  />
                </label>
                <button
                  type="submit"
                  className="ripple rounded-full copper-gradient px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                >
                  {sent ? "Thanks, we would be in touch" : "Send message"}
                </button>
                {sent && (
                  <p className="text-sm text-muted-foreground">
                    On the live version of this site, that message would land in the office inbox
                    and a text confirmation would go to your phone.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-full border border-input bg-background px-5 py-3.5 text-[15px] outline-none transition focus:border-copper focus:ring-4 focus:ring-copper/15"
      />
    </label>
  );
}
