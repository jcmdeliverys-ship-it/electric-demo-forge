import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { gallery, images } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Elevate Electrical Ltd, Brighton" },
      {
        name: "description",
        content:
          "Rewires, consumer units, EV chargers and commercial fit outs completed across Brighton, Hove, Lewes and the surrounding villages.",
      },
      { property: "og:title", content: "Project Gallery | Elevate Electrical Ltd" },
      {
        property: "og:description",
        content: "Recent electrical projects across Brighton, Hove and Lewes.",
      },
      { property: "og:image", content: images.galleryHero },
      { name: "twitter:image", content: images.galleryHero },
    ],
  }),
  component: Gallery,
});

const filters = ["All", "Rewires", "Consumer units", "EV charging", "Commercial", "Renovations", "Testing", "Outdoor"];

function Gallery() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? gallery : gallery.filter((g) => g.tag === active);

  return (
    <>
      <PageHero
        eyebrow="Recent projects"
        title="Work we would happily take you round to see."
        lead="A selection of jobs finished in the last two years. Photography here is stock imagery used for this demonstration site rather than our own project archive."
        image={images.galleryHero}
        alt="Interior of a renovated home with new lighting installed"
      />

      <section className="px-4 pt-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    active === f
                      ? "copper-gradient text-white shadow-soft"
                      : "bg-secondary text-ink hover:bg-accent/20"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          {items.length === 0 ? (
            <p className="mt-16 rounded-3xl bg-card p-10 text-center text-muted-foreground shadow-soft">
              Wub couldn't find anything here yet.
            </p>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((g, i) => (
                <Reveal key={g.title} delay={(i % 3) * 80}>
                  <figure className="hover-lift group h-full overflow-hidden rounded-3xl bg-card shadow-soft">
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
          )}
        </div>
      </section>
    </>
  );
}
