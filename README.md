# Elevate Demo Showcase

Prompt

industry = electrician
business_name = Elevate Electrical Ltd
subdomain = electrician.wubble.uk

Build a premium, fully-designed demo website for a fictional industry business called business_name, as a showcase site for a digital agency called Wubble (wubble.uk). This is a demo, not a real client site — content can be realistic placeholder content, but the design must be genuinely premium. The site will live at subdomain.

Design system to apply:

Rounded everything: large border-radius, glass/blurred navigation, rounded cards and buttons, soft shadows, floating circular decorations

Typography: modern geometric sans-serif (Manrope, Satoshi, General Sans, or Plus Jakarta Sans)

Motion: soft floating bubbles, gentle hover lift, fade-up on scroll, subtle mouse parallax, ripple hover effects — calm, never flashy

Feel: a handcrafted premium agency site, not a generic SaaS template — editorial spacing, layered sections, large imagery

Colour palette — industry-led, not Wubble's palette: Choose a colour palette that genuinely fits industry and business_name — what a real premium business in that trade would actually use for their brand (e.g. a plumber might lean navy and steel blue with a warm accent, a restaurant might lean deep green and warm terracotta, a dentist might lean soft clinical blue and white). Warm white or off-white base background, clean card surfaces, near-black text is fine as a shared structural choice, but the accent/primary colours should be chosen for the business, not copied from Wubble's own brand gradient. Wubble's blue-to-mint gradient belongs to Wubble, not to the demo businesses — see the locked component spec below for where it's actually meant to appear.

Pages to include: Home, About, Services, Gallery, Testimonials (clearly marked as placeholder/demo), FAQ, Contact, Booking

Content: Write realistic, specific content appropriate for the industry given — services offered, tone of voice, typical customer concerns, and imagery style — based on how real industry businesses in the UK present themselves. Don't use generic placeholder filler; make it feel like a real business with a real specialty and personality within that industry.

Locked Wubble component spec (do not leave to interpretation)

These pieces must be identical, word-for-word and behaviour-for-behaviour, on every single demo site. Give Lovable the literal implementation below as a shared component built once and reused across every page — don't describe it and let Lovable design its own version.

Important: these three components always use Wubble's own colour gradient — Blue → Royal Blue → Teal → Mint — regardless of what colour palette the rest of the site uses. They should read as "Wubble's badge on someone else's site," clearly distinct from the surrounding design, not restyled to match the business's palette.

1. Demo identification banner

Fixed to the bottom of the viewport, full width, on every page. Wubble gradient background, white text, small close (×) icon that persists as dismissed for the session only (reappears on next visit).

Exact copy — do not paraphrase:

This is a live Wubble demonstration website. Like what you see? Let's build yours.

"Let's build yours" is a button/link to https://wubble.uk/book-consultation.

Reference markup:

html

<div class="wubble-banner">
  <span>This is a live Wubble demonstration website.</span>
  <a href="https://wubble.uk/book-consultation" class="wubble-banner-cta">Let's build yours</a>
  <button class="wubble-banner-close" aria-label="Dismiss">&times;</button>
</div>

2. Wubble back button

Fixed top-left on every page, all breakpoints (shrinks to icon-only under 480px, no label). Circular glass bubble, Wubble gradient ring, left-arrow icon. Label on hover/long-press: "Back to Wubble".

This is a single shared component, imported into the layout once, not rebuilt per page — so its position and behaviour can never drift between pages.

Exact logic — implement as written, do not substitute alternate referrer handling:

js

function getWubbleBackHref() {
  const referrer = document.referrer;
  const fallback = "https://wubble.uk/live-demos";
  try {
    const referrerHost = new URL(referrer).hostname;
    return referrerHost.endsWith("wubble.uk") ? referrer : fallback;
  } catch {
    return fallback;
  }
}

Bind this to the button's href on mount, on every page, so it always resolves to wherever the visitor actually came from (a specific industry card, the Live Demos grid, etc.), falling back to the Live Demos page for direct/cold-email visits.

3. Footer credit

Identical on every page, in the standard footer, small text, left-aligned:

html

<p class="wubble-credit">Designed &amp; built by <a href="https://wubble.uk">Wubble</a></p>

4. Wub cameo (optional, but if used, lock the lines too)

Only use the wording below — don't let Lovable invent new Wub lines per site, or his voice will drift:

Page loading: "Wub is polishing things."

Empty gallery/results: "Wub couldn't find anything here yet."

404: "Wub floated into the wrong bubble."

Site architecture requirements

Multi-page, not a single scrolling landing page. Each item in "Pages to include" above is a real, separate route (/about, /services, /gallery, /contact, etc.) with its own URL, not an anchor-linked section on one long homepage. This is what makes it read as a proper built site rather than a one-shot AI landing page.

Scroll resets on every navigation. When the visitor clicks to a new page, the viewport must reset to the top — no landing halfway down a page or carrying over previous scroll position. Standard route-change-to-top behaviour.

Deliberate page transition. Lovable-built sites tend to swap pages instantly, which is one of the clearest AI tells. Add a brief transition on every navigation — a short branded loader (a small Wub bubble pulse/spin, 400-700ms) or a fade/slide transition between pages — so page changes feel like they're actually loading content, the way a real WordPress-built site does.

Each page needs its own tailored hero. No repeated/generic hero banner across pages — every page (About, Services, Gallery, Contact, etc.) gets its own real stock photo hero suited to that page's content and the industry, with its own heading and framing, not a copy-pasted template block. This is what sells the "handcrafted agency site" feel over "AI scaffolded template."

Must not look AI-generated

This is critical. Every demo has to read as a handcrafted, human-made site, not something spun up by a prompt. Enforce these rules on every build:

No AI-generated imagery. All photography must be real stock photos (Unsplash, Pexels, or a licensed stock library), not Midjourney/DALL-E/ Stable Diffusion output. Watch for the usual AI-image tells (odd hands, warped text, too-perfect symmetry, uncanny faces) and reject anything that looks generated.

No AI gimmick styling. No sparkle/rocket/robot emoji sprinkled through headings, no "gradient text on every other word," no oversized emoji used as icons, no chatbot-style bullet spacing or AI-report formatting. Spacing and iconography should follow the Wubble design system, not default AI-generated layout patterns.

No em dashes, anywhere — not in headings, body copy, testimonials, or microcopy. Use a full stop, comma, or restructure the sentence instead.

No AI-sounding copy. Avoid stock AI phrasing ("in today's fast-paced world," "unlock your potential," "seamlessly," "elevate," "game-changing"). Write the way a real local business would talk about itself.

What NOT to do

No real testimonials or client logos — everything is clearly demo content

No pricing page — if pricing is relevant to the industry, point to "get a tailored quote" instead

Don't let the demo banner or back button cover primary CTAs on mobile

Per-demo checklist

 Variables set: industry, business_name, subdomain

 Site colour palette fits the industry/business, not copied from Wubble's gradient

 Banner, back button, and footer credit all still use Wubble's own gradient, distinct from the site's palette

 Demo banner: exact copy used, same on every page

 Back button: shared component, exact referrer logic used, tested from both a wubble.uk referrer and a direct link

 Footer credit: exact markup, same on every page

 Mobile check: banner + back button don't block CTAs

 Site is multi-page with real routes, not a single scrolling page

 Scroll resets to top on every page change

 Page transition/loader present (not instant page swaps)

 Every page has its own tailored hero image and heading, not a repeated block

 All imagery is real stock photography, no AI-generated images

 No AI gimmick emoji/spacing, no em dashes anywhere in copy

 Copy read aloud — doesn't sound AI-written

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://electric-demo-forge.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0e4f63d9-ee95-434f-bb64-931177ca455f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
