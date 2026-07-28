import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { business, images, services, testimonials, gallery } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevate Electrical Ltd | NICEIC Electricians in Brighton & Hove" },
      {
        name: "description",
        content:
          "NICEIC approved electricians in Brighton, Hove and Lewes. Rewires, consumer units, EICRs, EV chargers and 24 hour emergency call out.",
      },
      { property: "og:title", content: "Elevate Electrical Ltd | Electricians in Brighton & Hove" },
      {
        property: "og:description",
        content:
          "Rewires, EICRs, EV chargers and fault finding across Brighton, Hove and Lewes. Fixed written quotes, tidy work, certificates on time.",
      },
      { property: "og:image", content: images.homeHero },
      { name: "twitter:image", content: images.homeHero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <PageHero
        tall
        eyebrow="Brighton, Hove & Lewes"
        title={
          <>
            Electrical work you only
            <br className="hidden sm:block" /> have to have done once.
          </>
        }
        lead="Elevate Electrical is a six person team of NICEIC approved electricians working on period homes, small commercial units and everything in between across the city."
        image={images.homeHero}
        alt="Electrician testing wiring inside a consumer unit"
      >
        <Link
          to="/booking"
          className="ripple rounded-full copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
        >
          Book a visit
        </Link>
        <a
          href={`tel:${business.phone.replace(/\s/g, "")}`}
          className="rounded-full bg-white/12 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-md transition hover:bg-white/20"
        >
          Call {business.phone}
        </a>
      </PageHero>

      <section className="px-4 pt-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["NICEIC approved", "Certificates notified to building control"],
            ["Fixed written quotes", "Priced before we lift a floorboard"],
            ["24 hour call out", "A real person answers, day or night"],
            ["Since 2009", "Around 400 homes rewired locally"],
          ].map(([title, sub], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="hover-lift h-full rounded-3xl bg-card p-6 shadow-soft">
                <p className="text-[15px] font-bold text-ink">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={images.board}
                alt="Test meter and wiring on a workbench"
                loading="lazy"
                className="w-full rounded-4xl object-cover shadow-lift"
              />
              <div className="absolute -bottom-8 -right-2 hidden w-56 rounded-3xl glass-panel p-5 shadow-soft sm:block">
                <p className="text-3xl font-extrabold text-ink">48hr</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Typical turnaround on EICR reports
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              What we are good at
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              Old houses, awkward wiring, careful work.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Most of Brighton was wired for a lot less than we ask of it now. We spend our weeks
              inside Victorian terraces, converted flats and 1930s semis, working out what can stay
              and what genuinely needs replacing. If a circuit tests well, we leave it alone and say
              so in writing.
            </p>
            <ul className="mt-7 grid gap-3">
              {[
                "Dust sheets, board protection and a hoover at the end of every day",
                "Chases cut properly and made good, not filled with a smear of bonding",
                "One named electrician on your job from first fix to certificate",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full copper-gradient" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent/20"
            >
              More about the team
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  Services
                </span>
                <h2 className="mt-4 max-w-lg text-3xl leading-tight text-ink sm:text-4xl">
                  From a single socket to a full rewire.
                </h2>
              </div>
              <Link
                to="/services"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:brightness-125"
              >
                See all services
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article className="hover-lift h-full rounded-3xl bg-card p-7 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-copper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-lg text-3xl leading-tight text-ink sm:text-4xl">
              Recent work around the city.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 3).map((g, i) => (
              <Reveal key={g.title} delay={i * 90}>
                <figure className="hover-lift group overflow-hidden rounded-3xl bg-card shadow-soft">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={g.src}
                      alt={g.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-copper">
                      {g.tag}
                    </p>
                    <p className="mt-2 font-bold text-ink">{g.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{g.place}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10">
              <Link
                to="/gallery"
                className="inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent/20"
              >
                View the full gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pt-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-sand p-8 shadow-soft sm:p-14">
          <Reveal>
            <p className="rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:w-fit">
              Placeholder reviews for this demo site
            </p>
            <h2 className="mt-6 max-w-xl text-3xl leading-tight text-ink sm:text-4xl">
              What customers would say, if they were real.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.text} delay={i * 90}>
                <blockquote className="hover-lift h-full rounded-3xl bg-card p-7 shadow-soft">
                  <p className="text-[15px] leading-relaxed text-ink-soft">{t.text}</p>
                  <footer className="mt-6 text-sm">
                    <span className="font-bold text-ink">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-ink p-8 sm:p-14">
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <h2 className="max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                    Tell us what is going on and we will tell you what it takes to fix.
                  </h2>
                  <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                    Quotes are free, written and fixed. If the job is smaller than you feared, we
                    will say so on the phone before booking a visit.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    to="/booking"
                    className="ripple rounded-full copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
                  >
                    Book a visit
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                  >
                    Get a tailored quote
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
