import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Elevate Electrical Ltd (Demo Content)" },
      {
        name: "description",
        content:
          "Example customer feedback for Elevate Electrical, a fictional Brighton electrical company. All reviews on this page are placeholder demonstration content.",
      },
      { property: "og:title", content: "Testimonials | Elevate Electrical Ltd" },
      {
        property: "og:description",
        content: "Placeholder customer feedback shown as part of a demonstration website.",
      },
      { property: "og:image", content: images.testimonialsHero },
      { name: "twitter:image", content: images.testimonialsHero },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Placeholder reviews"
        title="What the review page would look like."
        lead="Every quote below is written for this demonstration site. Nothing here comes from a real customer, and no real names, photographs or platform ratings are used."
        image={images.testimonialsHero}
        alt="Two people talking over paperwork in a bright room"
      />

      <section className="px-4 pt-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="rounded-3xl border border-dashed border-copper/50 bg-card p-6 text-[15px] leading-relaxed text-ink-soft shadow-soft">
              <strong className="font-bold text-ink">Demo content notice.</strong> Elevate
              Electrical Ltd is a fictional business built by Wubble to show how a real electrical
              company's website could work. The testimonials below are examples of tone and layout,
              not genuine reviews.
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.text} delay={(i % 3) * 80}>
                <blockquote className="hover-lift flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft">
                  <span className="text-sm font-semibold uppercase tracking-widest text-copper">
                    Example review
                  </span>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">{t.text}</p>
                  <footer className="mt-6 border-t border-border pt-5 text-sm">
                    <span className="font-bold text-ink">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-20">
        <div className="mx-auto max-w-6xl rounded-4xl bg-ink p-8 sm:p-14">
          <Reveal>
            <h2 className="max-w-xl text-3xl leading-tight text-white sm:text-4xl">
              On a real site, this page would pull live reviews.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Google, Checkatrade or Trustpilot feeds can sit here and update themselves, so the
              page stays current without anyone editing it.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="ripple inline-flex rounded-full copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
