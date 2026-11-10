import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-copper text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      </span>
      <span
        className={`font-expanded text-[15px] font-extrabold leading-none tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Elevate
        <span className={`block text-[11px] font-semibold tracking-normal ${light ? "text-white/60" : "text-muted-foreground"}`}>
          Electrical Ltd
        </span>
      </span>
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = `tel:${business.phone.replace(/\s/g, "")}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b transition-colors duration-300 ${
        scrolled || open ? "glass-panel border-border" : "border-transparent bg-background"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 pl-20 pr-4 sm:pl-24 sm:pr-6">
        <Link to="/" aria-label="Elevate Electrical home">
          <Logo />
        </Link>

        <div className="hidden items-center lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-ink after:scale-x-100" }}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-[17px] after:h-[3px] after:origin-left after:scale-x-0 after:bg-copper after:transition-transform hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={tel}
            className="hidden items-center gap-2 px-3 text-sm font-semibold text-ink xl:flex"
          >
            <span className="h-2 w-2 rounded-full bg-[#3fa66b] shadow-[0_0_0_3px_rgb(63_166_107/0.2)]" />
            {business.phone}
          </a>
          <Link
            to="/booking"
            className="hidden rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper sm:block"
          >
            Book a visit
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-ink lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden">
          <div className="mx-auto grid max-w-7xl">
            {[...links, { to: "/booking", label: "Book a visit" } as const].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-base font-semibold text-ink"
              >
                {l.label}
              </Link>
            ))}
            <a href={tel} className="pt-4 text-base font-bold text-copper">
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
