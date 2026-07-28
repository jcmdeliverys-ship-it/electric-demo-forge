import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Brighton | Rewires, EICRs & EV Chargers" },
      {
        name: "description",
        content:
          "Rewires, consumer unit upgrades, EICRs, EV charger installation, fault finding and emergency call out across Brighton, Hove and Lewes.",
      },
      { property: "og:title", content: "Electrical Services | Elevate Electrical Ltd" },
      {
        property: "og:description",
        content:
          "Domestic and small commercial electrical work in Brighton and Hove, priced with fixed written quotes.",
      },
      { property: "og:image", content: images.servicesHero },
      { name: "twitter:image", content: images.servicesHero },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Domestic and small commercial electrical work."
        lead="Everything below is done in house by our own electricians. If a job needs a plasterer, decorator or heating engineer alongside us, we will tell you who we use locally."
        image={images.servicesHero}
        alt="Electrician installing cabling in a residential property"
      />

      <section className="px-4 pt-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <article className="hover-lift h-full rounded-3xl bg-card p-8 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-ink">{s.title}</h2>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-copper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.blurb}</p>
                <ul className="mt-6 grid gap-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full copper-gradient" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 pt-20">
        <div className="mx-auto max-w-6xl rounded-4xl bg-sand p-8 shadow-soft sm:p-14">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
                  We do not publish a price list.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  Two houses on the same street can need completely different work. Rather than
                  guess with a headline figure, we survey the property and send a tailored quote
                  with a fixed price and a start date.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/contact"
                  className="ripple rounded-full copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
                >
                  Get a tailored quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
