import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [showing, setShowing] = useState(pathname);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathname === showing) return;
    setLoading(true);
    const swap = window.setTimeout(() => {
      setShowing(pathname);
      window.scrollTo({ top: 0, behavior: "auto" });
      window.setTimeout(() => setLoading(false), 280);
    }, 280);
    return () => window.clearTimeout(swap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  return (
    <>
      <div
        aria-hidden={!loading}
        className={`pointer-events-none fixed inset-0 z-[80] flex flex-col items-center justify-center gap-4 bg-background transition-opacity duration-300 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <span
          className="h-14 w-14 rounded-full wubble-gradient"
          style={{ animation: "wub-pulse 0.9s ease-in-out infinite" }}
        />
        <p className="text-sm text-muted-foreground">Wub is polishing things.</p>
      </div>
      <div key={showing} className="animate-fade-up">
        {children}
      </div>
    </>
  );
}
