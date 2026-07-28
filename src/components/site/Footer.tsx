import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site-data";
import { WubbleCredit } from "@/components/wubble/WubbleCredit";

export function Footer() {
  return (
    <footer className="mt-24 px-4 pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-ink px-6 py-14 text-white/80 sm:px-12">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full copper-gradient text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                </svg>
              </span>
              <span className="text-lg font-extrabold text-white">Elevate Electrical Ltd</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              NICEIC approved electricians working across {business.area}. Rewires, EICRs, EV
              chargers and the small jobs nobody else will turn up for.
            </p>
            <p className="mt-5 text-sm">
              {business.address}
              <br />
              Company no. 09482731 (fictional demo business)
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Pages</h3>
            <div className="mt-4 grid gap-2 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/gallery", "Gallery"],
                ["/testimonials", "Testimonials"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
                ["/booking", "Booking"],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="transition-colors hover:text-copper-soft">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm">
              <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="hover:text-copper-soft">
                {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="hover:text-copper-soft">
                {business.email}
              </a>
              <p>{business.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <WubbleCredit />
          <p className="text-sm text-white/40">
            Demonstration site. All content and reviews are placeholder examples.
          </p>
        </div>
      </div>
    </footer>
  );
}
