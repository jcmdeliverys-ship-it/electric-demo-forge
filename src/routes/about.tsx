import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elevate Electrical | Brighton Electricians Since 2009" },
      {
        name: "description",
        content:
          "Six electricians, one workshop in Brighton and fifteen years of rewiring period homes across Sussex. Meet the team behind Elevate Electrical.",
      },
      { property: "og:title", content: "About Elevate Electrical Ltd" },
      {
        property: "og:description",
        content:
          "A six person electrical team in Brighton, working on period homes and small commercial units since 2009.",
      },
      { property: "og:image", content: images.aboutHero },
      { name: "twitter:image", content: images.aboutHero },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Danny Whitmore",
    role: "Founder, qualified supervisor",
    bio: "Started out on new build sites in 2003, went out on his own in 2009. Does most of the survey visits and writes every quote himself.",
  },
  {
    name: "Priya Nandra",
    role: "Approved electrician",
    bio: "Handles the testing and inspection side, including landlord EICRs and commercial periodics. Fastest fault finder in the van.",
  },
  {
    name: "Callum Reid",
    role: "Approved electrician",
    bio: "Runs the rewire crew. Known for chases straight enough that plasterers stop complaining about us.",
  },
  {
    name: "Sofia Barnes",
    role: "Office manager",
    bio: "Books the diary, chases certificates and is the person who actually answers the phone before eight in the morning.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A small team that turns up when it says it will."
        lead="Elevate Electrical started with one van and a spare room in Hanover. Fifteen years on there are six of us, a proper workshop off Lewes Road, and the same rule about tidying up."
        image={images.aboutHero}
        alt="Electrician working at a bench in a workshop"
      />

      <section className="px-4 pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              Fifteen years of Brighton wiring, and most of it strange.
            </h2>
            <div className="mt-6 grid gap-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Danny set the company up in 2009 after ten years on commercial sites, mostly because
                he was tired of watching good work get rushed. The first job was a two bedroom flat
                in Kemptown with a fuse board older than the man who fitted it.
              </p>
              <p>
                Since then we have rewired around four hundred homes across the city, from basement
                flats with no loft access to a Georgian townhouse in Lewes where every cable run had
                to be agreed with a conservation officer first.
              </p>
              <p>
                We stay small on purpose. Six people means Danny still sees every job, and you get
                the same electrician from first fix to the certificate landing in your inbox. It
                also means we book up, so if you have a deadline, ring early.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.van}
              alt="Work van parked outside a residential property"
              loading="lazy"
              className="h-full w-full rounded-4xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-4 pt-24">
        <div className="mx-auto max-w-6xl rounded-4xl bg-sand p-8 shadow-soft sm:p-14">
          <Reveal>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">How we work</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Survey first, always",
                "We come out, look at the board, lift a socket front and test what is there before quoting. No pricing over a photo.",
              ],
              [
                "02",
                "A written plan",
                "You get a quote that lists circuits, materials and how many days we need, plus which rooms lose power on which day.",
              ],
              [
                "03",
                "Certificates on time",
                "Test results, certificate and building control notification within a week of finishing. Chased by Sofia, not by you.",
              ],
            ].map(([n, t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="hover-lift h-full rounded-3xl bg-card p-7 shadow-soft">
                  <span className="text-sm font-extrabold text-copper">{n}</span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">The people on the tools</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="hover-lift h-full rounded-3xl bg-card p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full copper-gradient text-base font-extrabold text-white">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <h3 className="mt-5 font-bold text-ink">{m.name}</h3>
                  <p className="text-sm font-medium text-copper">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Team members shown are fictional, created for this demonstration site.
          </p>
        </div>
      </section>

      <section className="px-4 pt-20">
        <div className="mx-auto max-w-6xl rounded-4xl bg-ink p-8 sm:p-14">
          <Reveal>
            <h2 className="max-w-xl text-3xl leading-tight text-white sm:text-4xl">
              Want to see whether we are the right fit?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="ripple rounded-full copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
              >
                Book a survey
              </Link>
              <Link
                to="/services"
                className="rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
              >
                Browse services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
