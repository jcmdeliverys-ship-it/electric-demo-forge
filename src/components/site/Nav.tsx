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

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-4 pt-3 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full glass-panel py-2.5 pl-24 pr-2.5 transition-shadow duration-500 sm:pl-28 ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full copper-gradient text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
          </span>
          <span className="hidden text-[15px] font-extrabold tracking-tight text-ink sm:block">
            Elevate Electrical
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-secondary text-ink" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/booking"
            className="ripple hidden rounded-full copper-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105 sm:block"
          >
            Book a visit
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-ink lg:hidden"
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
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl glass-panel p-3 shadow-soft lg:hidden">
          <div className="grid gap-1">
            {[...links, { to: "/booking", label: "Booking" } as const].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phone.replace(/\s/g, "")}`}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-copper"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
