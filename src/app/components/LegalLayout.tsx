import type { ReactNode } from "react";

/**
 * Shared layout for legal pages (Privacy Policy etc.).
 * Renders the site header (Root) via the router, a clean reading column,
 * and supports HU/EN sections stacked in a single page.
 */
export function LegalLayout({
  title,
  intro,
  hu,
  en,
  lastUpdated,
}: {
  title: string;
  intro?: ReactNode;
  hu: ReactNode;
  en?: ReactNode;
  lastUpdated?: string;
}) {
  return (
    <article className="w-full max-w-[820px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <header className="flex flex-col gap-3 mb-12 pb-8 border-b border-black/10">
        <p className="font-['Inter',sans-serif] font-medium text-xs uppercase tracking-widest text-[#186d98]">
          Adatvédelem / Privacy Policy
        </p>
        <h1 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
          {title}
        </h1>
        {lastUpdated && (
          <p className="font-['Inter',sans-serif] text-sm text-black/45">
            Utolsó frissítés / Last updated: {lastUpdated}
          </p>
        )}
      </header>

      {intro && <div className="legal-intro mb-12">{intro}</div>}

      {hu && (
        <section lang="hu" className="flex flex-col gap-6 mb-16">
          {hu}
        </section>
      )}

      {en && (
        <section lang="en" className="flex flex-col gap-6 pt-10 border-t border-black/10">
          {en}
        </section>
      )}

      <footer className="mt-16 pt-8 border-t border-black/10 flex flex-col gap-2">
        <a
          href="mailto:hello@thinkai.hu"
          className="font-['Inter',sans-serif] text-sm text-[#186d98] font-semibold hover:underline"
        >
          hello@thinkai.hu
        </a>
        <p className="font-['Inter',sans-serif] text-xs text-black/40">
          © 2024 THINK AI Kft. — 1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó
        </p>
      </footer>
    </article>
  );
}

/* ── small typographic helpers used by the privacy pages ─────────────────── */

export function P({ children }: { children: ReactNode }) {
  return <p className="font-['Inter',sans-serif] text-[15px] leading-relaxed text-black/75">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-['Inter',sans-serif] font-bold text-xl text-black tracking-tight mt-4">{children}</h2>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="font-['Inter',sans-serif] text-[15px] leading-relaxed text-black/75 list-disc pl-5 flex flex-col gap-1.5">{children}</ul>;
}
