import type { ReactNode } from "react";

/** Inner page header: headline on plaster, photo framed like a site photo with a job tag. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image: string;
  alt: string;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className="px-4 pt-[104px] sm:px-6 sm:pt-[120px]">
      <div className="mx-auto grid max-w-7xl items-end gap-10 border-b border-border pb-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <p className="flex items-center gap-2 text-sm font-semibold text-copper">
            <span className="h-[3px] w-6 bg-copper" />
            {eyebrow}
          </p>
          <h1 className="font-expanded mt-5 max-w-3xl text-[2.6rem] text-ink sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div className="relative">
          <img
            src={image}
            alt={alt}
            className="aspect-[4/3] w-full rounded-lg bg-secondary object-cover"
            loading="eager"
          />
          <span className="absolute -bottom-3 left-5 rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white">
            NICEIC approved contractor
          </span>
        </div>
      </div>
    </section>
  );
}
