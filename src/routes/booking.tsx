import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { business, images, services } from "@/lib/site-data";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book an Electrician in Brighton | Elevate Electrical Ltd" },
      {
        name: "description",
        content:
          "Book a survey, an EICR or a repair visit with Elevate Electrical. Choose a date, tell us the job and we confirm the slot the same working day.",
      },
      { property: "og:title", content: "Book a Visit | Elevate Electrical Ltd" },
      {
        property: "og:description",
        content: "Pick a date and a job type, and we confirm your electrician the same day.",
      },
      { property: "og:image", content: images.bookingHero },
      { name: "twitter:image", content: images.bookingHero },
    ],
  }),
  component: Booking,
});

function Booking() {
  const [step, setStep] = useState(1);
  const [job, setJob] = useState(services[0].title);
  const [slot, setSlot] = useState("Morning, 8am to 12pm");

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Get us in the diary."
        lead="Three short steps. We confirm by phone within a couple of hours during working days, and first thing the next morning otherwise."
        image={images.bookingHero}
        alt="Aerial view of houses in a residential neighbourhood"
      />

      <section className="px-4 pt-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="rounded-4xl bg-card p-8 shadow-lift sm:p-10">
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <span
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                      s <= step ? "copper-gradient" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-copper">
                Step {step} of 3
              </p>

              {step === 1 && (
                <div className="mt-6 animate-fade-up">
                  <h2 className="text-2xl leading-tight text-ink">What is the job?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {services.map((s) => (
                      <button
                        key={s.title}
                        type="button"
                        onClick={() => setJob(s.title)}
                        className={`rounded-2xl px-5 py-4 text-left text-sm font-semibold transition ${
                          job === s.title
                            ? "copper-gradient text-white shadow-soft"
                            : "bg-secondary text-ink hover:bg-accent/20"
                        }`}
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="mt-6 animate-fade-up">
                  <h2 className="text-2xl leading-tight text-ink">When suits you?</h2>
                  <label className="mt-6 grid gap-2">
                    <span className="text-sm font-semibold text-ink">Preferred date</span>
                    <input
                      type="date"
                      className="rounded-full border border-input bg-background px-5 py-3.5 text-[15px] outline-none focus:border-copper focus:ring-4 focus:ring-copper/15"
                    />
                  </label>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["Morning, 8am to 12pm", "Afternoon, 12pm to 5pm", "First available"].map(
                      (s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSlot(s)}
                          className={`rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                            slot === s
                              ? "copper-gradient text-white shadow-soft"
                              : "bg-secondary text-ink hover:bg-accent/20"
                          }`}
                        >
                          {s}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="mt-6 animate-fade-up">
                  <h2 className="text-2xl leading-tight text-ink">Where are we coming?</h2>
                  <div className="mt-6 grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" placeholder="Alex Turner" />
                      <Field label="Phone" placeholder="07700 900123" />
                    </div>
                    <Field label="Address" placeholder="14 Southover Street, Brighton" />
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-ink">Anything we should know</span>
                      <textarea
                        rows={4}
                        placeholder="Parking is permit only, there is a bay outside number 12."
                        className="rounded-3xl border border-input bg-background px-5 py-4 text-[15px] outline-none focus:border-copper focus:ring-4 focus:ring-copper/15"
                      />
                    </label>
                    <p className="rounded-2xl bg-secondary p-5 text-sm leading-relaxed text-ink-soft">
                      Requesting <strong className="font-bold">{job}</strong>, {slot.toLowerCase()}.
                      This is a demonstration site, so no booking is actually created.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-accent/20"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setStep(step === 3 ? 3 : step + 1)}
                  className="ripple rounded-full copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                >
                  {step === 3 ? "Request this slot" : "Continue"}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-sand p-7 shadow-soft">
                <h2 className="text-xl font-bold text-ink">Emergency instead?</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Loss of power, a burning smell or water anywhere near a board should not go
                  through a form. Ring us and we will talk you through isolating it.
                </p>
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="mt-6 inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-125"
                >
                  Call {business.phone}
                </a>
              </div>
              <div className="rounded-3xl bg-card p-7 shadow-soft">
                <h3 className="font-bold text-ink">What happens next</h3>
                <ol className="mt-4 grid gap-3 text-sm text-ink-soft">
                  {[
                    "Sofia rings to confirm the slot and check access.",
                    "You get a text the morning of the visit with the electrician's name.",
                    "Quote or certificate follows by email within 48 hours.",
                  ].map((t, i) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full copper-gradient text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                      {t}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-full border border-input bg-background px-5 py-3.5 text-[15px] outline-none transition focus:border-copper focus:ring-4 focus:ring-copper/15"
      />
    </label>
  );
}
