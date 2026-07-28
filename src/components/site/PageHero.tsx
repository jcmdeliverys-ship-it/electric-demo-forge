import type { ReactNode } from "react";
import { Bubbles } from "./Bubbles";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  children,
  tall = false,
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
    <section className="relative px-4 pt-28 sm:pt-32">
      <Bubbles />
      <div className="relative mx-auto max-w-6xl">
        <div
          className={`relative overflow-hidden rounded-4xl shadow-lift ${
            tall ? "min-h-[560px]" : "min-h-[420px]"
          }`}
        >
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/70 to-ink/25" />
          <div className="relative flex h-full flex-col justify-end p-7 pt-24 sm:p-14 sm:pt-32">
            <span className="w-fit rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft backdrop-blur-md">
              {eyebrow}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {lead}
            </p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
