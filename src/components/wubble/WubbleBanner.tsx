import { useEffect, useState } from "react";

const KEY = "wubble-demo-banner-dismissed";

export function WubbleBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY) !== "1") setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="wubble-banner wubble-gradient fixed inset-x-0 bottom-0 z-[70] flex items-center justify-center gap-3 px-4 py-2.5 text-center text-sm text-white sm:gap-4">
      <span className="font-medium">This is a live Wubble demonstration website.</span>
      <a
        href="https://wubble.uk/book-consultation"
        className="wubble-banner-cta shrink-0 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/25"
      >
        Let's build yours
      </a>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => {
          sessionStorage.setItem(KEY, "1");
          setVisible(false);
        }}
        className="wubble-banner-close absolute right-3 flex h-7 w-7 items-center justify-center rounded-full text-lg leading-none text-white/80 transition hover:bg-white/20 hover:text-white"
      >
        &times;
      </button>
    </div>
  );
}
