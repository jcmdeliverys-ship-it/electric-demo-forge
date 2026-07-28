import { useEffect, useState } from "react";

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

export function WubbleBackButton() {
  const [href, setHref] = useState("https://wubble.uk/live-demos");

  useEffect(() => {
    setHref(getWubbleBackHref());
  }, []);

  return (
    <a
      href={href}
      className="group fixed left-4 top-4 z-[75] flex items-center gap-2 rounded-full p-[2px] wubble-gradient shadow-soft sm:left-6 sm:top-6"
      aria-label="Back to Wubble"
    >
      <span className="flex items-center gap-2 rounded-full bg-white/75 py-2 pl-2.5 pr-2.5 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/90 min-[480px]:group-hover:pr-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full wubble-gradient text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </span>
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-ink opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:opacity-100 min-[480px]:inline">
          Back to Wubble
        </span>
      </span>
    </a>
  );
}
