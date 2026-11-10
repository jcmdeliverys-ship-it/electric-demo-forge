import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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

const circuits = [
  { label: "Rewires", rating: "32A", service: services[0] },
  { label: "Boards", rating: "40A", service: services[1] },
  { label: "EV", rating: "32A", service: services[2] },
  { label: "Faults", rating: "16A", service: services[3] },
  { label: "EICR", rating: "20A", service: services[4] },
  { label: "Lighting", rating: "6A", service: services[5] },
];

function ConsumerUnit() {
  const [powered, setPowered] = useState(false);
  const [lit, setLit] = useState(0);
  const [active, setActive] = useState(0);

  // One orchestrated moment on load: main switch on, then each way lights in turn.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPowered(true);
      setLit(circuits.length);
      return;
    }
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setPowered(true), 500));
    circuits.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLit(i + 1), 800 + i * 110));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const current = circuits[active];

  return (
    <div className="blueprint relative rounded-xl p-4 text-white shadow-lift sm:p-6">
      <div className="flex items-center justify-between text-xs text-white/50">
        <span>Elevate service board</span>
        <span className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              powered ? "bg-[#3fa66b] shadow-[0_0_10px_#3fa66b]" : "bg-white/20"
            }`}
          />
          {powered ? "Live" : "Isolated"}
        </span>
      </div>

      <div className="mt-4 rounded-lg border border-white/10 bg-[#1f2c39] p-3 sm:p-4">
        <div className="flex gap-2 sm:gap-2.5">
          <div className="flex w-14 shrink-0 flex-col items-center gap-2 rounded-md bg-[#2a3846] px-1 pb-2 pt-3 sm:w-16">
            <Toggle on={powered} main />
            <span className="text-center text-[10px] leading-tight text-white/60">Main switch</span>
          </div>
          <div className="grid flex-1 grid-cols-6 gap-1.5 sm:gap-2" role="tablist" aria-label="Our services">
            {circuits.map((c, i) => {
              const on = powered && lit > i;
              return (
                <button
                  key={c.label}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`group flex flex-col items-center gap-2 rounded-md px-0.5 pb-2 pt-3 transition-colors ${
                    active === i ? "bg-copper/25 ring-1 ring-copper" : "bg-[#2a3846] hover:bg-[#33424f]"
                  }`}
                >
                  <Toggle on={on} />
                  <span className="text-[10px] font-semibold leading-tight text-white/85 sm:text-[11px]">
                    {c.label}
                  </span>
                  <span className="text-[9px] text-white/40">{c.rating}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 min-h-[188px] rounded-lg bg-white p-5 text-ink sm:p-6" role="tabpanel">
        <p className="text-xs font-semibold text-copper">Way {active + 1}</p>
        <h3 className="mt-1 text-xl">{current.service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.service.blurb}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {current.service.points.map((p) => (
            <li key={p} className="rounded bg-secondary px-2 py-1 text-xs font-medium text-ink-soft">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Toggle({ on, main = false }: { on: boolean; main?: boolean }) {
  return (
    <span
      aria-hidden
      className={`relative block rounded-[3px] border border-black/30 bg-[#0f1820] ${
        main ? "h-14 w-7" : "h-11 w-5 sm:h-12 sm:w-6"
      }`}
    >
      <span
        className={`absolute inset-x-[3px] h-[45%] rounded-[2px] transition-all duration-200 ${
          on
            ? `top-[3px] ${main ? "bg-[#d64545]" : "bg-copper"}`
            : "top-[calc(55%-3px)] bg-[#4a5866]"
        }`}
      />
    </span>
  );
}

function Home() {
  const tel = `tel:${business.phone.replace(/\s/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-[104px] sm:px-6 sm:pt-[128px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div className="animate-fade-up">
            <p className="flex items-center gap-2 text-sm font-semibold text-copper">
              <span className="h-[3px] w-6 bg-copper" />
              Brighton, Hove and Lewes since 2009
            </p>
            <h1 className="font-expanded mt-6 text-[2.5rem] text-ink sm:text-6xl lg:text-[4.4rem]">
              Electrical work you only have to have done once.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A six person team of NICEIC approved electricians working on period homes, small
              commercial units and everything in between across the city.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="rounded-md bg-copper px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink"
              >
                Book a visit
              </Link>
              <a
                href={tel}
                className="rounded-md border border-ink/20 bg-card px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
          <ConsumerUnit />
        </div>
      </section>

      {/* Test certificate strip */}
      <section className="px-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-lg border border-border bg-card">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {[
              ["NICEIC approved", "Certificates notified to building control"],
              ["Fixed written quotes", "Priced before we lift a floorboard"],
              ["24 hour call out", "A real person answers, day or night"],
              ["Around 400 homes", "Rewired locally since 2009"],
            ].map(([title, sub]) => (
              <div key={title} className="flex gap-4 p-6">
                <svg className="mt-0.5 shrink-0 text-copper" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m5 12 4.5 4.5L19 7" />
                </svg>
                <div>
                  <p className="font-bold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 pt-28 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={images.board}
                alt="Test meter and wiring on a workbench"
                loading="lazy"
                className="aspect-[5/4] w-full rounded-lg bg-secondary object-cover"
              />
              <div className="absolute -bottom-6 right-4 w-48 rounded-lg bg-copper p-5 text-white shadow-lift sm:right-[-24px]">
                <p className="font-expanded text-4xl font-extrabold">48hr</p>
                <p className="mt-1 text-sm text-white/85">Typical turnaround on EICR reports</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-expanded text-4xl text-ink sm:text-5xl">
              Old houses, awkward wiring, careful work.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Most of Brighton was wired for a lot less than we ask of it now. We spend our weeks
              inside Victorian terraces, converted flats and 1930s semis, working out what can stay
              and what genuinely needs replacing. If a circuit tests well, we leave it alone and say
              so in writing.
            </p>
            <ul className="mt-8 grid gap-0 border-t border-border">
              {[
                "Dust sheets, board protection and a hoover at the end of every day",
                "Chases cut properly and made good, not filled with a smear of bonding",
                "One named electrician on your job from first fix to certificate",
              ].map((t) => (
                <li key={t} className="flex gap-4 border-b border-border py-4 text-[15px] text-ink-soft">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex border-b-2 border-copper pb-1 text-[15px] font-semibold text-ink transition-colors hover:text-copper"
            >
              More about the team
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Circuit schedule */}
      <section className="mt-28 bg-card px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-copper">Circuit schedule</p>
              <h2 className="font-expanded mt-3 max-w-2xl text-4xl text-ink sm:text-5xl">
                From a single socket to a full rewire.
              </h2>
            </div>
            <Link
              to="/services"
              className="rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper"
            >
              See all services
            </Link>
          </div>

          <div className="mt-12 border-t-2 border-ink">
            <div className="hidden grid-cols-[72px_1.1fr_2fr_1fr] gap-6 border-b border-border py-3 text-xs font-semibold text-muted-foreground md:grid">
              <span>Way</span>
              <span>Circuit</span>
              <span>What it covers</span>
              <span>Standard</span>
            </div>
            {services.slice(0, 6).map((s, i) => (
              <Link
                key={s.title}
                to="/services"
                className="group grid gap-2 border-b border-border py-6 transition-colors hover:bg-background md:grid-cols-[72px_1.1fr_2fr_1fr] md:gap-6 md:px-0"
              >
                <span className="font-expanded text-2xl font-extrabold text-copper/70 transition-colors group-hover:text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-bold text-ink">{s.title}</span>
                <span className="text-[15px] leading-relaxed text-muted-foreground">{s.blurb}</span>
                <span className="text-sm font-medium text-ink-soft">{s.points[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="px-4 pt-28 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-expanded max-w-xl text-4xl text-ink sm:text-5xl">
              Recent work around the city.
            </h2>
            <Link
              to="/gallery"
              className="border-b-2 border-copper pb-1 text-[15px] font-semibold text-ink transition-colors hover:text-copper"
            >
              View the full gallery
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:grid-rows-2">
            {gallery.slice(0, 3).map((g, i) => (
              <Reveal key={g.title} className={i === 0 ? "lg:row-span-2" : ""}>
                <figure className="group relative h-full overflow-hidden rounded-lg bg-ink">
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className={`w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03] ${
                      i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[16/9]"
                    }`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6 pt-16 text-white">
                    <span className="rounded bg-copper px-2 py-1 text-xs font-semibold">{g.tag}</span>
                    <p className="mt-3 text-lg font-bold">{g.title}</p>
                    <p className="text-sm text-white/70">{g.place}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 pt-28 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_2.2fr] lg:gap-14">
            <div>
              <p className="inline-block rounded bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                Placeholder reviews for this demo site
              </p>
              <h2 className="font-expanded mt-5 text-4xl text-ink sm:text-[2.75rem]">
                What customers would say, if they were real.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.slice(0, 3).map((t) => (
                <blockquote key={t.text} className="flex flex-col rounded-lg border-t-[3px] border-copper bg-card p-6 shadow-soft">
                  <p className="flex-1 text-[15px] leading-relaxed text-ink-soft">{t.text}</p>
                  <footer className="mt-6 border-t border-border pt-4 text-sm">
                    <span className="font-bold text-ink">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="-mb-24 mt-28 bg-copper px-4 py-20 text-white sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-expanded text-4xl sm:text-5xl">
              Tell us what is going on and we will tell you what it takes to fix.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/85">
              Quotes are free, written and fixed. If the job is smaller than you feared, we will say
              so on the phone before booking a visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/booking"
              className="rounded-md bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Book a visit
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-white/50 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get a tailored quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
