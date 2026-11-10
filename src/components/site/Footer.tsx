import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site-data";
import { WubbleCredit } from "@/components/wubble/WubbleCredit";
import { Logo } from "./Nav";

export function Footer() {
  const tel = `tel:${business.phone.replace(/\s/g, "")}`;
  return (
    <footer className="blueprint mt-0 px-4 pb-28 pt-16 text-white/70 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-white/50">Power off, burning smell, water near the board?</p>
            <a
              href={tel}
              className="font-expanded mt-2 block text-4xl font-extrabold tracking-tight text-white transition-colors hover:text-copper-soft sm:text-6xl"
            >
              {business.phone}
            </a>
          </div>
          <p className="max-w-xs text-sm">
            A real person answers, day or night, and tells you what to isolate before we arrive.
          </p>
        </div>

        <div className="grid gap-12 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              NICEIC approved electricians working across {business.area}. Rewires, EICRs, EV
              chargers and the small jobs nobody else will turn up for.
            </p>
            <p className="mt-5 text-sm leading-relaxed">
              {business.address}
              <br />
              Company no. 09482731 (fictional demo business)
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Pages</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
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
                <Link key={to} to={to} className="transition-colors hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm">
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
              <p>{business.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <WubbleCredit />
          <p className="text-sm text-white/40">
            Demonstration site. All content and reviews are placeholder examples.
          </p>
        </div>
      </div>
    </footer>
  );
}
