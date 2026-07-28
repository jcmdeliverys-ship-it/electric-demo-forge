import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { faqs, images } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Elevate Electrical Ltd, Brighton Electricians" },
      {
        name: "description",
        content:
          "Common questions about rewires, EICRs, fuse board upgrades, EV chargers and how Elevate Electrical prices work in Brighton and Hove.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Elevate Electrical Ltd" },
      {
        property: "og:description",
        content: "Answers on rewires, EICRs, fuse boards, EV chargers and pricing.",
      },
      { property: "og:image", content: images.faqHero },
      { name: "twitter:image", content: images.faqHero },
    ],
  }),
  component: Faq,
});

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="The things people ask us before booking."
        lead="If your question is not here, ring the office. Sofia has heard most of them and will happily tell you when a job is not worth doing yet."
        image={images.faqHero}
        alt="Close up of electrical tools laid out on a work surface"
      />

      <section className="px-4 pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 4) * 60}>
                <div className="overflow-hidden rounded-3xl bg-card shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left"
                  >
                    <span className="text-[17px] font-bold text-ink">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-copper transition-transform duration-300 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <aside className="sticky top-28 rounded-4xl bg-sand p-8 shadow-soft">
              <h2 className="text-2xl leading-tight text-ink">Still not sure?</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Send a photo of your fuse board and a short description of the problem. We will tell
                you whether it needs a visit, and roughly what that visit involves.
              </p>
              <div className="mt-7 grid gap-3">
                <Link
                  to="/contact"
                  className="ripple rounded-full copper-gradient px-6 py-3.5 text-center text-sm font-semibold text-white shadow-soft"
                >
                  Send a message
                </Link>
                <Link
                  to="/booking"
                  className="rounded-full bg-card px-6 py-3.5 text-center text-sm font-semibold text-ink transition hover:bg-accent/20"
                >
                  Book a visit
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
