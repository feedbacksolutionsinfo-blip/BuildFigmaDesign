import { useState, useRef, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Plus, X, Check, Home } from "lucide-react";
import svgPaths from "@/imports/Mobile/svg-5uu58tfhk2";

export function EaisyLogo({ dark = false }: { dark?: boolean }) {
  const fill = dark ? "white" : "black";
  return (
    <svg fill="none" viewBox="0 0 80 17" className="h-full w-auto">
      <g>
        <path d={svgPaths.p2dda4500} fill={fill} />
        <path d={svgPaths.p9f13400} fill={fill} />
        <path d={svgPaths.p25a06300} fill={fill} />
        <path d={svgPaths.p23b2ba80} fill={fill} />
        <path d={svgPaths.p32667980} fill={fill} />
        <path d={svgPaths.p3cc48b00} fill={fill} />
        <path d={svgPaths.p3128d200} fill={fill} />
        <path d={svgPaths.p2af52f00} fill={fill} />
        <path d={svgPaths.p1fc6e780} fill={fill} />
        <path d={svgPaths.pb6f800} fill="#1CEEE0" />
      </g>
    </svg>
  );
}

// ── shared event to open the demo modal from anywhere ────────────────────────
export function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

const products = [
  { name: "eaisyBill", path: "/eaisy-bill", color: "#05512a" },
  { name: "eaisyDesk", path: "/eaisy-desk", color: "#186d98" },
  { name: "eaisyBoost", path: "/eaisy-boost", color: "#701ab7" },
  { name: "eaisyDocs", path: "#", color: "#150f87" },
];

const DEMO_PRODUCTS = ["Mind", "eaisyBill", "eaisyDesk", "eaisyBoost", "eaisyDocs", "eaisyCRM", "eaisyHR"];

function ContactModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({ nev: "", telefon: "", email: "" });
  const overlayRef = useRef<HTMLDivElement>(null);

  function toggle(product: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (product === "Mind") {
        if (next.has("Mind")) {
          return new Set();
        }
        return new Set(DEMO_PRODUCTS);
      }
      if (next.has(product)) {
        next.delete(product);
        next.delete("Mind");
      } else {
        next.add(product);
        // auto-check "Mind" if all specifics selected
        const specifics = DEMO_PRODUCTS.slice(1);
        if (specifics.every((p) => next.has(p))) next.add("Mind");
      }
      return next;
    });
  }

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-8"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-y-auto">

        {/* header */}
        <div className="flex items-start justify-between gap-4 px-8 pt-8 pb-6 border-b border-black/6 shrink-0">
          <div className="flex flex-col gap-1">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black tracking-tight">
              Melyik eaisy megoldás érdekel?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black/50 hover:bg-black/10 hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-8 py-7 flex flex-col gap-8">

          {/* checkboxes */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter',sans-serif] font-medium text-sm text-black/50">
              Jelöld meg, mely szoftverek érdekelnek:
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {DEMO_PRODUCTS.map((p) => {
                const checked = selected.has(p);
                return (
                  <label
                    key={p}
                    className="flex items-center gap-3 cursor-pointer group select-none"
                    onClick={() => toggle(p)}
                  >
                    <span
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        checked
                          ? "bg-black border-black"
                          : "border-black/20 group-hover:border-black/40"
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </span>
                    <span className={`font-['Inter',sans-serif] text-sm ${checked ? "font-semibold text-black" : "font-normal text-black/70"}`}>
                      {p}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* contact fields */}
          <div className="flex flex-col gap-3">
            {[
              { key: "nev", placeholder: "Név", type: "text" },
              { key: "telefon", placeholder: "Telefonszám", type: "tel" },
              { key: "email", placeholder: "Email cím", type: "email" },
            ].map(({ key, placeholder, type }) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                className="w-full px-5 py-3.5 rounded-xl border border-black/12 bg-[#f8f8f8] font-['Inter',sans-serif] text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/30 focus:bg-white transition-colors"
              />
            ))}
          </div>

          {/* submit */}
          <button
            className="w-full py-4 bg-black text-white rounded-full font-['Montserrat',sans-serif] font-medium text-sm tracking-wide hover:bg-black/80 transition-colors"
          >
            KÉRJ DEMOT
          </button>

          {/* fine print */}
          <div className="flex flex-col gap-3 pt-1 border-t border-black/6">
            <p className="font-['Inter',sans-serif] font-normal text-xs text-black/40 leading-relaxed">
              Elég csak azt az elérhetőségedet megadni, amelyiken szeretnéd, hogy megkeressünk.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-xs text-black/40 leading-relaxed">
              <span className="font-semibold text-black/55">Demo tudnivalók:</span> egy eaisy megoldás bemutatása körülbelül fél–egy órás Google Meet megbeszélést vesz igénybe: ez idő alatt bemutatjuk a szoftver működését és felteheted a kérdéseidet is.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

const PRODUCT_NAV_ITEMS: Record<string, { label: string; href: string }[]> = {
  "/eaisy-bill": [
    { label: "A probléma", href: "#problemak" },
    { label: "A megoldás", href: "#megoldas" },
    { label: "Funkciók", href: "#funkciok" },
    { label: "Előnyök", href: "#elonyok" },
    { label: "GYIK", href: "#gyik" },
  ],
};

function SiteHeader({ onDemoOpen }: { onDemoOpen: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const productNav = PRODUCT_NAV_ITEMS[location.pathname];
  const isProductPage = Boolean(productNav);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center h-7 shrink-0">
          <EaisyLogo />
        </Link>

        {/* Nav pill — home vs product page */}
        {isProductPage ? (
          <nav
            className="hidden md:flex items-center justify-center gap-[32px] py-2.5 rounded-[40px] shadow-[0px_0.5px_2.9px_0px_rgba(0,0,0,0.25)]"
            style={{ backgroundColor: "rgba(0,0,0,0.05)", backdropFilter: "blur(8px)", paddingLeft: 24, paddingRight: 24 }}
          >
            <Link
              to="/"
              className="flex items-center justify-center w-7 h-7 rounded-full border border-black text-black/55 hover:text-white hover:bg-[#F26B77] hover:border-[#F26B77] transition-colors shrink-0"
              aria-label="Vissza a főoldalra"
            >
              <Home className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
            <span className="w-px h-4 bg-black/15 shrink-0" />
            {productNav.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-['Montserrat',sans-serif] font-medium text-sm text-black/55 hover:text-black transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </nav>
        ) : (
          <nav
            className="hidden md:flex items-center justify-center gap-[40px] py-2.5 rounded-[40px] shadow-[0px_0.5px_2.9px_0px_rgba(0,0,0,0.25)]"
            style={{ backgroundColor: "rgba(0,0,0,0.05)", backdropFilter: "blur(8px)", width: 575 }}
          >
            {[
              { label: "eaisy", href: "#mi-az-eaisy" },
              { label: "Termékek", href: "#termekek" },
              { label: "Rólunk", href: "#rolunk" },
              { label: "Kapcsolat", href: "#kapcsolat" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-['Montserrat',sans-serif] font-medium text-sm text-black/55 hover:text-black transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {/* Plus icon — product dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95"
            aria-label="Termékek megnyitása"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-14 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden min-w-[200px]">
              <p className="px-5 pt-4 pb-2 text-[10px] font-['Montserrat',sans-serif] font-medium text-black/30 tracking-widest uppercase">
                Termékek
              </p>
              {products.map((p) => (
                <Link
                  key={p.name}
                  to={p.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-black/3 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="font-['Inter',sans-serif] font-medium text-sm text-black">
                    {p.name}
                  </span>
                </Link>
              ))}
              <div className="px-5 py-4 border-t border-black/5">
                <button
                  onClick={() => { setMenuOpen(false); onDemoOpen(); }}
                  className="block w-full text-center py-2.5 bg-black text-white rounded-full font-['Montserrat',sans-serif] font-medium text-xs tracking-wide hover:bg-black/80 transition-colors"
                >
                  KÉRJ DEMOT
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#082432] text-white" id="kapcsolat">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="border-t border-white/10 pt-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="flex flex-col gap-3">
            <div className="h-6">
              <EaisyLogo dark />
            </div>
            <p className="text-sm font-['Inter',sans-serif] font-semibold text-white tracking-wide">
              THINK AI Kft.
            </p>
            <p className="text-sm font-['Inter',sans-serif] text-white/60 max-w-xs leading-relaxed">
              The future was yesterday. We are tomorrow.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-['Montserrat',sans-serif] font-medium text-white/40 uppercase tracking-widest">
                Navigáció
              </p>
              {["eaisy", "Termékek", "Rólunk"].map((item) => (
                <a key={item} href="#" className="text-sm font-['Inter',sans-serif] text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-['Montserrat',sans-serif] font-medium text-white/40 uppercase tracking-widest">
                Termékek
              </p>
              {products.map((p) => (
                <Link key={p.name} to={p.path} className="text-sm font-['Inter',sans-serif] text-white/70 hover:text-white transition-colors">
                  {p.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-['Montserrat',sans-serif] font-medium text-white/40 uppercase tracking-widest">
                Kapcsolat
              </p>
              <p className="text-sm font-['Inter',sans-serif] font-semibold text-white">ÍRJ NEKÜNK!</p>
              <a href="mailto:hello@thinkai.hu" className="text-sm font-['Inter',sans-serif] text-white/70 hover:text-white transition-colors">
                hello@thinkai.hu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-['Inter',sans-serif] text-white/30">
            © 2024 THINK AI Kft. Minden jog fenntartva.
          </p>
          <p className="text-xs font-['Inter',sans-serif] text-white/30">
            100% GDPR kompatibilis
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Root() {
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    function onOpen() { setDemoOpen(true); }
    window.addEventListener("open-demo-modal", onOpen);
    return () => window.removeEventListener("open-demo-modal", onOpen);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f6f6f6]">
      <SiteHeader onDemoOpen={() => setDemoOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      {demoOpen && <ContactModal onClose={() => setDemoOpen(false)} />}
    </div>
  );
}
