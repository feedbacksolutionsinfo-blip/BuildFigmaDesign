import { useState, useEffect, useRef, type TransitionEvent, type PointerEvent } from "react";
import { Layers, Timer, Shuffle, EyeOff, Palette, Users, ThumbsUp, TrendingUp, Sparkles, Mail, Fingerprint, CalendarDays, CalendarClock, BarChart3, Briefcase, Share2, Clock, ChevronDown, CheckCircle2, Megaphone } from "lucide-react";
import imgHero from "@/imports/eaisy-boost-hero.webp";
import imgFeaturesBg from "@/imports/eaisy-boost-features-bg.webp";
import imgLogo from "@/imports/EaisyBoostNyito/eaisyboost.png";
import { openDemoModal } from "@/app/Root";
import { Seo, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";

const C = {
  dark: "#3B0764",        // Purple 950
  deep: "#581C87",        // Purple 900
  main: "#7E22CE",        // Purple 700 — brand on light backgrounds
  purple: "#A855F7",      // Purple 500
  accent: "#D8B4FE",      // Purple 300 — soft accent / hover borders
  lightBg: "#FAF5FF",     // Purple 50
  yellow: "#FACC15",      // Yellow 400 — CTA accent
  yellowLight: "#FEF08A", // Yellow 200 — icon/eyebrow accent on dark
  bodyText: "rgba(0,0,0,0.55)",
};

// shared eyebrow pill styles
const eyebrowLight = { backgroundColor: "rgba(250,204,21,0.35)", color: C.deep };
const eyebrowDark = { backgroundColor: "rgba(250,204,21,0.18)", color: C.yellowLight };

const PROBLEMS = [
  { icon: Layers, title: "Szétszórt eszközök", desc: "Az e-mail kampányok, a social tartalmak, a vizuálok és a márkaanyagok külön felületeken készülnek, külön folyamatokkal." },
  { icon: Timer, title: "Lassú tartalomgyártás", desc: "Egyetlen poszthoz is ötlet, szöveg, kép, formázás és jóváhagyás kell — minden alkalommal újra." },
  { icon: Shuffle, title: "Következetlen márkahang", desc: "A szövegek és a vizuálok csatornánként eltérnek, mert nincs közös márkaprofil, amely minden tartalmat ugyanabba az irányba terel." },
  { icon: CalendarClock, title: "Rendszertelen a kommunikáció", desc: "Tartalomnaptár nélkül a posztolás alkalomszerűvé válik, a fontos témák pedig könnyen kimaradnak." },
  { icon: EyeOff, title: "Hiányos rálátás", desc: "Az e-mailes és social eredmények külön felületeken látszanak, ezért nehéz gyorsan megérteni, mi működik igazán." },
  { icon: Megaphone, title: "A kampány csak néhány elszigetelt poszt", desc: "Egy akció vagy termékbevezetés gyakran nem épül fel egymásra épülő social media tartalmakból, ezért nem tud valódi kampányként működni." },
];

const FEATURES = [
  { num: 1, title: "Weboldal- és márka-audit", desc: "Az eaisyBoost SEO-, marketing-, vizuális és kapcsolati szempontból elemzi a weboldaladat, majd pontszámokkal és fejlesztési javaslatokkal mutatja meg a legfontosabb teendőket." },
  { num: 2, title: "Brand DNA profil", desc: "A rendszer rögzíti a márkád hangnemét, vizuális karakterét, tartalmi irányait és a posztsablonok fő stílusát. Minden új szöveg és vizuál erre a közös márkaalapra épül." },
  { num: 3, title: "Márkaazonos Quick Post", desc: "Kép, posztszöveg, hashtag és cselekvésre ösztönző üzenet egyetlen gyors folyamatban, a márka saját stílusához igazítva. A saját márkastílusodon belül szöveges, promóciós, lifestyle- vagy fotóközpontú sablonok választhatók. Az AI segít a szöveg és a hozzá illő kép elkészítésében különböző képarányokban. Az eredmény publikálás előtt finomítható." },
  { num: 4, title: "Social tervezés és publikálás", desc: "Tervezd meg a tartalmakat naptárnézetben, hagyd jóvá az elkészült posztokat, majd időzítsd vagy publikáld őket Facebookra és Instagramra. Az eredményeket közös analitikai felületen követheted." },
  { num: 5, title: "AI-támogatott e-mail-kampányok", desc: "Egy rövid briefből készíts teljes, formázott e-mail-kampányt. A generált szöveget és a vizuális felépítést küldés előtt szabadon finomíthatod, kódolás nélkül." },
  { num: 6, title: "Célzott küldés és kampánymérés", desc: "Kezeld a feliratkozókat és a célcsoportokat, küldd ki a kampányt azonnal vagy időzítve, majd A/B tesztekkel és részletes statisztikákkal mérd, melyik változat működik jobban." },
];

const AUDIENCE_BENEFITS = [
  {
    eyebrow: "Amiért a", role: "Marketingvezető", sub: "dönteni fog mellette", icon: Briefcase, gradient: `linear-gradient(135deg, #7E22CE 0%, #581C87 100%)`,
    items: [
      { title: "Egy platform, átláthatóbb működés", desc: "Az e-mail, a social media és a márka-audit közös rendszerbe kerül, így kevesebb eszközt és folyamatot kell összehangolni." },
      { title: "Gyorsabb kampányindítás", desc: "Az AI felgyorsítja a szöveg- és kreatívkészítést, ezért az ötletből rövidebb idő alatt lesz publikálható kampány." },
      { title: "Következetes márkahang", desc: "A közös márkaprofil minden csatornán ugyanahhoz a hangnemhez és vizuális karakterhez igazítja a tartalmat." },
    ],
  },
  {
    eyebrow: "Amiért a", role: "Social media kezelő", sub: "szeretni fogja", icon: ThumbsUp, gradient: `linear-gradient(135deg, #581C87 0%, #3B0764 100%)`,
    items: [
      { title: "Gyorsabb napi tartalomkészítés", desc: "A márka stílusához előre igazított Quick Post sablonokkal, az AI-szövegekkel és a generált képekkel grafikai előképzettség nélkül is gyorsan készülhetnek egységes, igényes posztok." },
      { title: "Tervezhető tartalomnaptár", desc: "Az előre elkészített és időzített posztokkal a folyamatos jelenlét nem napi kapkodáson múlik." },
      { title: "Egyszerű jóváhagyás", desc: "A generált tartalmak egy helyen ellenőrizhetők, szerkeszthetők és hagyhatók jóvá." },
    ],
  },
  {
    eyebrow: "Amiért a", role: "Cégvezető", sub: "skálázhatja", icon: TrendingUp, gradient: `linear-gradient(135deg, #3B0764 0%, #1E0433 100%)`,
    items: [
      { title: "Egy dashboard, több csatorna", desc: "Az e-mailes és social teljesítmény egy helyen követhető, így gyorsabban látszik, mi hoz eredményt." },
      { title: "Több tartalom ugyanazzal a csapattal", desc: "Az automatizált előkészítés és publikálás csökkenti a manuális munkát, ezért a marketing nagyobb volumenben is kezelhető." },
      { title: "Gyorsabb piacra lépés", desc: "Az új ajánlatokhoz és kampányokhoz szükséges tartalmak napok helyett akár órák alatt előkészíthetők." },
    ],
  },
];

const WHO_FOR = [
  { icon: Users, title: "Ahol nincs külön marketingcsapat", desc: "Az eaisyBoost azoknak is segít rendszeresen és igényesen kommunikálni, akiknek nincs saját szövegírójuk, grafikusuk vagy social media menedzserük." },
  { icon: Clock, title: "Ahol túl sok idő megy el a tartalomgyártásra", desc: "Ha minden poszt és kampány nulláról indul, az AI-generálás és a sablonok jelentősen lerövidítik az előkészítést." },
  { icon: Share2, title: "Ahol több csatornán kell jelen lenni", desc: "Az e-mailes és social feladatok közös rendszerben tervezhetők, így kevesebb az eszközváltás és az adminisztráció." },
  { icon: Palette, title: "Ahol fontos az egységes márkamegjelenés", desc: "A Brand DNA segít abban, hogy a különböző időpontokban és csatornákra készülő tartalmak is ugyanazt a márkát képviseljék." },
  { icon: TrendingUp, title: "Ahol nő a tartalomigény, de a csapat nem", desc: "A folyamatok automatizálásával több kampány és több publikáció kezelhető arányos létszámnövelés nélkül." },
];

const FAQS = [
  { q: "Kell hozzá marketinges vagy grafikai tudás?", a: "Nem. Az eaisyBoost célja, hogy kész sablonokkal és AI-támogatással azok is gyorsan készíthessenek igényes tartalmakat, akik nem marketing- vagy dizájnszakemberek. A generált szövegek publikálás előtt egyszerűen szerkeszthetők." },
  { q: "Automatikusan publikálja az AI által készített tartalmat?", a: "Nem jóváhagyás nélkül. A rendszer előkészíti a tartalmat, de az csak ellenőrzés és jóváhagyás után kerül ki." },
  { q: "Mely közösségi platformokat kezeli?", a: "A jelenlegi működés Facebook- és Instagram-publikálásra, időzítésre és analitikára épül." },
  { q: "Használhatok kész sablonokat a posztokhoz?", a: "Igen. A fő sablonstílus már a márkaprofil kialakításakor létrejön, ezért a Quick Postban nem egymástól független sabloncsaládok közül kell választanod. A saját stílusodon belül választhatsz tartalomtípust — például szöveges, promóciós, lifestyle- vagy fotóközpontú sablont — és képarányt; minden változat következetesen illeszkedik a márkádhoz." },
  { q: "Kezeli az e-mail kampányokat is?", a: "Igen. Készíthetsz AI-generált kampányt, szerkesztheted vizuálisan, időzítheted a kiküldést, A/B tesztet futtathatsz, és követheted a teljesítményét." },
  { q: "Látom egy helyen a kampányeredményeket?", a: "Igen. Az e-mailes és social mutatók közös platformon követhetők, csatornánként és összesítve." },
  { q: "Mennyi idő a bevezetés?", a: "Ez a használt moduloktól, a csatornák összekapcsolásától és a márkaprofil kialakításától függ. Egy rövid igényfelmérés után pontos bevezetési tervet adunk." },
  { q: "Mennyibe kerülnek az eaisy termékek?", a: "Az eaisy termékeket úgy alakítottuk ki, hogy a kisebb és nagyobb vállalkozások eltérő működéséhez, funkcionális igényeihez és adatmennyiségéhez is rugalmasan igazodjanak. Az egyes termékeken belül is csak azokat a modulokat és funkciókat szükséges igénybe venni, amelyekre valóban szükség van. Az árat a választott funkciók, a felhasználási volumen és az integrációs igények egyaránt befolyásolják, ezért minden ügyfelünk számára egyedi ajánlatot készítünk." },
];

const BENEFITS = [
  "Márkaazonos posztok",
  "Heti és havi tartalomtervek",
  "Social media kampányok",
  "Grafikai tudás nélkül",
  "Quick Post funkció",
];

const WHO_SHOULD = [
  "Aki rendszeresen szeretne posztolni, de nincs rá elég ideje vagy külön csapata",
  "Aki túl sok külön eszközben kezeli az e-mailes és social feladatokat",
  "Aki gyorsabban szeretne kampányokat és márkaazonos tartalmakat készíteni",
  "Aki előre tervezhető, automatizált publikálást szeretne",
  "Aki több tartalmat készítene a marketingcsapat bővítése nélkül",
];

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden pt-16 min-h-[800px]">
      <style>{`
        @keyframes hero-pill-in {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-pill { animation: none !important; }
        }
      `}</style>
      {/* hero photo — pre-composed banner (subject left, white space right), placed as-is */}
      <img
        src={imgHero}
        alt=""
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />

      {/* mobile-only white veil to protect text readability (desktop: the photo's own white area) */}
      <div className="absolute inset-0 bg-white/85 lg:bg-transparent" />

      {/* content — aligned to the right on desktop, centered on mobile */}
      <div className="relative w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 py-20 flex justify-center lg:justify-end">
        <div className="flex flex-col gap-7 w-full max-w-[520px] pt-12 lg:pt-0">

          <p className="font-['Inter',sans-serif] font-semibold text-xl lg:text-2xl leading-snug" style={{ color: C.main }}>
            A profi jelenlét többé nem<br />idő- vagy kreativitás kérdése.
          </p>

          {/* logo — unified 100px height across product pages */}
          <img src={imgLogo} alt="eaisyBoost" className="h-auto max-h-[100px] w-auto max-w-full object-contain self-start my-6" />

          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed text-black/55">
            AI-támogatott tartalomkészítés, kampánykezelés és márka-audit egyetlen platformon.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {BENEFITS.map((b, i) => (
              <div
                key={b}
                className="hero-pill inline-flex items-center px-4 py-2 rounded-full w-fit"
                style={{
                  border: `1.5px solid ${C.main}`,
                  color: C.main,
                  animation: `hero-pill-in 0.55s cubic-bezier(0.22,1,0.36,1) ${350 + i * 110}ms both`,
                }}
              >
                <span className="font-['Inter',sans-serif] font-medium text-sm">{b}</span>
              </div>
            ))}
          </div>

          <button
            onClick={openDemoModal}
            className="self-start mt-10 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.yellow, color: C.dark }}
          >
            KÉRJ DEMÓT
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Autoplay teaser: vertical loop of product panels ──
const TEASER_BARS = [38, 52, 44, 62, 48, 70, 56, 66, 50, 60, 74, 58];

function TeaserHeader({ icon: Icon, label }: { icon: typeof BarChart3; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: C.lightBg }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: C.main }} strokeWidth={2} />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60">{label}</p>
    </div>
  );
}

function TeaserCarousel() {
  const panelCls = "bg-white rounded-xl border border-black/5 shadow-[0_2px_10px_rgba(59,7,100,0.10)] p-4 flex flex-col gap-3";

  const panels = [
    // 1 — Quick Post generálás
    <div key="quickpost" className={panelCls}>
      <TeaserHeader icon={Sparkles} label="Quick Post — generálás" />
      <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-1.5">
        <p className="text-[10px] font-medium text-black">„Őszi akció: 20% kedvezmény minden csomagra — csak ezen a héten!"</p>
        <div className="flex flex-wrap gap-1.5">
          {["Szöveges", "Promóciós", "1:1"].map((t) => (
            <span key={t} className="text-[9px] font-semibold px-2 py-1 rounded-full border" style={{ borderColor: C.main, color: C.main }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>Brand DNA szerint</span>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "rgba(250,204,21,0.3)", color: C.deep }}>Jóváhagyásra vár</span>
      </div>
    </div>,

    // 2 — Email kampány
    <div key="email" className={panelCls}>
      <TeaserHeader icon={Mail} label="E-mail kampány" />
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          Kampány időzítve <span className="font-normal text-black/50">— holnap 9:00</span>
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(250,245,255,0.9)" }}>
        <BarChart3 className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.main }}>A/B teszt fut — 2 változat</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(250,245,255,0.9)" }}>
        <Users className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.main }}>1 240 célzott feliratkozó</p>
      </div>
    </div>,

    // 3 — Brand DNA
    <div key="branddna" className={panelCls}>
      <TeaserHeader icon={Fingerprint} label="Brand DNA profil" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { k: "Hangnem", v: "barátságos, szakértő" },
          { k: "Vizuális karakter", v: "letisztult, lila hangsúly" },
          { k: "Sablonstílus", v: "fotóközpontú" },
        ].map((r) => (
          <div key={r.k} className="flex items-center gap-2 py-1.5">
            <p className="text-[10px] font-semibold text-black w-[88px] shrink-0">{r.k}</p>
            <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>,

    // 4 — Social naptár
    <div key="calendar" className={panelCls}>
      <TeaserHeader icon={CalendarDays} label="Social naptár" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { when: "Kedd 10:00", what: "Instagram poszt — termékbemutató" },
          { when: "Csütörtök 17:30", what: "Facebook poszt — őszi akció" },
          { when: "Péntek 9:00", what: "Instagram story — kulisszatitkok" },
        ].map((r) => (
          <div key={r.when} className="flex items-center gap-2 py-1.5">
            <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0" style={{ backgroundColor: "rgba(250,204,21,0.3)", color: C.deep }}>{r.when}</span>
            <p className="text-[10px] font-medium text-black truncate flex-1">{r.what}</p>
          </div>
        ))}
      </div>
    </div>,

    // 5 — Analitika
    <div key="analytics" className={panelCls}>
      <TeaserHeader icon={BarChart3} label="Analitika — összesítve" />
      <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-1.5">
        <p className="text-[10px] font-medium text-black">Elérés az elmúlt 30 napban</p>
        <div className="flex items-end gap-1 h-8">
          {TEASER_BARS.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: "linear-gradient(to top, #7E22CE, #FACC15)" }} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>E-mail + social egy felületen</span>
      </div>
    </div>,
  ];

  return (
    <div className="relative w-full max-w-[520px] h-[440px] lg:h-[520px] overflow-hidden">
      <style>{`
        @keyframes teaser-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .teaser-track { animation: teaser-scroll 36s linear infinite; }
        .teaser-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .teaser-track { animation: none; }
        }
      `}</style>

      {/* looping track — panels duplicated 2x for a seamless loop */}
      <div className="teaser-track flex flex-col">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col" aria-hidden={copy === 1}>
            {panels.map((p) => (
              <div key={`${copy}-${p.key}`} className="pb-4">{p}</div>
            ))}
          </div>
        ))}
      </div>

      {/* white fades above and under the teaser */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}

function ProblemsSection() {
  useEffect(() => {
    function adjustHeights() {
      const cards = document.querySelectorAll(".problem-card-item");
      if (cards.length === 0) return;

      // Reset heights first to measure natural height
      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = "0px";
      });

      let maxHeight = 0;
      cards.forEach((c) => {
        const h = c.clientHeight;
        if (h > maxHeight) maxHeight = h;
      });

      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = `${maxHeight}px`;
      });
    }

    // Run on mount with a minor timeout to ensure content has rendered, and on resize
    const timer = setTimeout(adjustHeights, 100);
    window.addEventListener("resize", adjustHeights);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", adjustHeights);
    };
  }, []);

  return (
    <section id="problemak" className="w-full py-20 lg:py-24" style={{ backgroundColor: "#F3F3F4" }}>
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-10">

        {/* eyebrow pill + title */}
        <div className="flex flex-col gap-5 w-full">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowLight}>
            Amikor a marketing túl sok eszköz között vész el
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl tracking-tight leading-tight text-black">
            Ismerős helyzetek?
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed w-full text-black/55">
            A rendszeres közösségi média-jelenléthez folyamatosan új ötletek, szövegek és vizuálok kellenek. Ha nincs külön marketinges vagy elegendő idő, a posztolás könnyen rendszertelenné válik – a márka pedig eltűnik a követők szeme elől.
          </p>
        </div>

        {/* 6 problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="problem-card-item bg-white rounded-2xl p-6 flex flex-row gap-5 shadow-sm border border-black/5 hover:-translate-y-1 hover:shadow-md hover:border-[#D8B4FE] transition-all duration-300 group cursor-pointer h-full"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: C.dark }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.yellow }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* highlighted pullquote — pill shape, yellow border */}
        <div
          className="rounded-full px-10 py-6"
          style={{ backgroundColor: "rgba(250,204,21,0.15)", border: "2px solid rgba(250,204,21,0.6)" }}
        >
          <p className="font-['Inter',sans-serif] font-light text-lg lg:text-xl text-center" style={{ color: C.dark }}>
            A legtöbb vállalkozás nem azért marad le, mert nincs ötlete — hanem mert{" "}
            <span className="font-semibold">nincs ideje minden csatornán következetesen jelen lenni.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="megoldas" className="w-full bg-white py-20 lg:py-24 relative overflow-hidden">

      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-16 relative z-10">

        {/* Top block: text on left, teaser on right */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Eyebrow, Logo, Paragraphs */}
          <div className="flex-1 flex flex-col items-start gap-6 w-full lg:max-w-[620px]">

            {/* Eyebrow badge */}
            <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowLight}>
              A mi megoldásunk
            </div>

            {/* Logo */}
            <img src={imgLogo} alt="eaisyBoost" className="w-full max-w-[220px] h-auto" />

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 text-black/55">
              <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed">
                Az eaisyBoost egy AI-támogatott marketingplatform, amellyel egyedi posztokat, előre felépített heti vagy havi tartalomnaptárat, illetve egy konkrét cél köré szervezett teljes social media kampányt tervezhetsz. Az eaisyBoost először megismeri a márkádat: felismeri annak vizuális világát, kommunikációs stílusát és fő üzeneteit. Ezután minden elkészített social media tartalmat ezekhez igazít.
              </p>

              {/* Highlighted statement with left border */}
              <div
                className="pl-5 py-0.5 border-l-4"
                style={{ borderLeftColor: C.main }}
              >
                <p className="font-['Inter',sans-serif] font-semibold text-base leading-relaxed" style={{ color: C.main }}>
                  Egyetlen posztra van szükséged vagy egy teljes kampányra? Az eaisyBoost mindkettőt ugyanabban a következetes márkastílusban készíti el.
                </p>
              </div>
            </div>

          </div>

          {/* Right column: autoplay teaser (vertical loop, white fades) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <TeaserCarousel />
          </div>

        </div>

        {/* Bottom block: 3 colored pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Card 1 */}
          <div
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#7E22CE" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#FEF08A] group-hover:scale-110 transition-transform duration-300">
              <Share2 className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Social Media Kezelés
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                AI-támogatott szöveg- és képgenerálás, a márka vizuális stílusához igazodó Quick Post sablonok, időzítés, valamint Facebook- és Instagram-publikálás egyetlen felületről.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#581C87" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#FEF08A] group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Email Marketing
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                AI kampánygenerálás, vizuális szerkesztés, azonnali vagy időzített küldés, A/B tesztelés és valós idejű statisztikák.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#3B0764" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#FEF08A] group-hover:scale-110 transition-transform duration-300">
              <Fingerprint className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Márka-audit és Brand DNA
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                A weboldal elemzéséből létrejövő márkaprofil segít abban, hogy a generált szövegek és vizuálok ne csak szépek, hanem felismerhetően márkaazonosak legyenek.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function FeaturesSection() {
  const N = FEATURES.length;
  // Cards rendered 3x so the row loops seamlessly (6, 5... appear left of 1)
  const LOOP = [...FEATURES, ...FEATURES, ...FEATURES];
  const [pos, setPos] = useState(N);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const swiped = useRef(false);
  const [metrics, setMetrics] = useState({ step: 0, card: 0, view: 0 });

  const active = ((pos % N) + N) % N;

  // Measure card width + gap + viewport width so the active card centers precisely
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      setMetrics({
        step: second.offsetLeft - first.offsetLeft,
        card: first.offsetWidth,
        view: track.parentElement?.offsetWidth ?? window.innerWidth,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Autoplay - pauses on hover / gesture
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPos((p) => p + 1), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setPos((p) => p + dir);

  // Jump to feature i using the copy nearest to the current position
  const goTo = (i: number) => setPos((p) => Math.round((p - i) / N) * N + i);

  // After animating into an outer copy, snap back to the middle copy invisibly
  const handleTransitionEnd = (e: TransitionEvent) => {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;
    if (pos < N || pos >= 2 * N) {
      setInstant(true);
      setPos(N + active);
    }
  };

  // Re-enable the transition right after the invisible snap
  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  // Gesture swipe (touch / pen / mouse) - horizontal; vertical scroll stays free
  const onPointerDown = (e: PointerEvent) => {
    dragStartX.current = e.clientX;
    swiped.current = false;
    setPaused(true);
  };
  const endDrag = (x: number | null) => {
    if (dragStartX.current == null) return;
    if (x != null) {
      const dx = x - dragStartX.current;
      if (Math.abs(dx) > 24) {
        swiped.current = true;
        // longer swipes skip multiple cards — no big mandatory flick needed
        const steps = Math.max(1, Math.round(Math.abs(dx) / (metrics.step || 240)));
        go(dx < 0 ? steps : -steps);
      }
    }
    dragStartX.current = null;
    setPaused(false);
  };

  return (
    <section
      id="funkciok"
      className="w-full py-20 lg:py-24 overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background photo + dark purple overlay */}
      <img
        src={imgFeaturesBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(59,7,100,0.94) 0%, rgba(88,28,135,0.88) 55%, rgba(126,34,206,0.90) 135%)" }}
      />

      <div className="relative z-10">
      {/* Header */}
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col items-start gap-5 mb-12">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowDark}>
          Egy platform. Teljes marketingfolyamat.
        </div>
        <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight max-w-[720px]">
          Funkciók az ötlettől a publikálásig
        </h2>
      </div>

      {/* Spotlight carousel: active card centered, neighbours dimmed and peeking */}
      <div
        className="relative"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerUp={(e) => endDrag(e.clientX)}
        onPointerCancel={() => endDrag(null)}
        onPointerLeave={() => endDrag(null)}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-3 w-max py-6 ${instant ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ transform: `translateX(${metrics.view / 2 - (pos * metrics.step + metrics.card / 2)}px)` }}
        >
          {LOOP.map((f, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (swiped.current) {
                  swiped.current = false;
                  return;
                }
                goTo(f.num - 1);
              }}
              aria-current={idx === pos}
              className={`w-[250px] sm:w-[280px] lg:w-[320px] aspect-[4/5] shrink-0 text-left rounded-3xl bg-white p-5 lg:p-6 flex flex-col gap-5 border-[3px] transition-all duration-500 ${
                idx === pos
                  ? "opacity-100 scale-105 shadow-2xl relative z-10 border-[#FACC15]"
                  : "opacity-40 scale-95 shadow-md hover:opacity-70 cursor-pointer relative z-0 border-transparent"
              }`}
            >
              <span
                className="font-['Inter',sans-serif] font-extrabold text-6xl leading-none select-none"
                style={{ color: "rgba(126,34,206,0.30)" }}
              >
                {f.num}
              </span>
              <p className="font-['Inter',sans-serif] font-bold text-base lg:text-lg leading-snug text-black">
                {f.title}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-xs lg:text-sm leading-relaxed" style={{ color: C.bodyText }}>
                {f.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Numbered navigation 1-6 (hidden on mobile — swipe gestures take over) */}
      <div className="mt-8 px-6 hidden sm:block">
        <div className="flex flex-wrap justify-center gap-2.5 max-w-[520px] mx-auto">
          {FEATURES.map((f, i) => (
            <button
              key={f.num}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Funkció ${f.num}: ${f.title}`}
              className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full font-['Inter',sans-serif] text-sm transition-all duration-300 ${
                i === active ? "font-semibold scale-125 mx-3" : "text-white/80 font-light ring-1 ring-white/40 hover:bg-white/25"
              }`}
              style={
                i === active
                  ? { backgroundColor: C.yellow, color: C.dark }
                  : { backgroundColor: "rgba(255,255,255,0.15)" }
              }
            >
              {f.num}
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  // equalize card heights across all columns: min-height = tallest card
  useEffect(() => {
    function adjustHeights() {
      const cards = document.querySelectorAll(".benefit-card-item");
      if (cards.length === 0) return;

      // Reset heights first to measure natural height
      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = "0px";
      });

      let maxHeight = 0;
      cards.forEach((c) => {
        const h = c.clientHeight;
        if (h > maxHeight) maxHeight = h;
      });

      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = `${maxHeight}px`;
      });
    }

    // Run on mount with a minor timeout to ensure content has rendered, and on resize
    const timer = setTimeout(adjustHeights, 100);
    window.addEventListener("resize", adjustHeights);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", adjustHeights);
    };
  }, []);

  return (
    <section
      id="elonyok"
      className="w-full py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(250,245,255,0.7) 100%)" }}
    >
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-12">

        {/* header — same language as the rest of the page */}
        <div className="flex flex-col items-start gap-5">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowLight}>
            Előnyök
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Amit a csapatod azonnal érez
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed max-w-[620px]">
            Ugyanaz a platform — más előny minden szerepkörben. Nézd meg, mit ad az eaisyBoost a marketingvezetőnek, a tartalomkészítőnek és a cégvezetőnek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {AUDIENCE_BENEFITS.map((col) => {
            const RoleIcon = col.icon;
            return (
              <div key={col.role} className="flex flex-col gap-4 group">

                {/* role header — purple gradient card, like the Megoldás section */}
                <div
                  className="rounded-2xl p-6 flex items-center gap-4 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300"
                  style={{ background: col.gradient }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#FEF08A]">
                    <RoleIcon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col uppercase">
                    <span className="font-['Inter',sans-serif] font-normal text-[11px] tracking-widest text-white/60">
                      {col.eyebrow}
                    </span>
                    <span className="font-['Inter',sans-serif] font-extrabold text-xl tracking-wide text-white leading-tight">
                      {col.role}
                    </span>
                    <span className="font-['Inter',sans-serif] font-normal text-[11px] tracking-widest text-white/60">
                      {col.sub}
                    </span>
                  </div>
                </div>

                {/* benefit cards — white, interactive, page-consistent */}
                {col.items.map((item) => (
                  <div
                    key={item.title}
                    className="benefit-card-item flex-1 bg-white rounded-2xl p-6 flex flex-col gap-3 border border-[#E9D5FF] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:border-[#FACC15] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhoForSection() {
  return (
    <section id="kinek-valo" className="w-full py-20 lg:py-24" style={{ backgroundColor: "#F3F3F4" }}>
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-12">

        {/* header — eyebrow pill + headline */}
        <div className="flex flex-col items-start gap-5">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowLight}>
            Kinek való az <span className="normal-case">eaisyBoost</span>?
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight max-w-[720px]">
            Ahol a marketingnek működnie kell — nagy csapat nélkül is
          </h2>
        </div>

        {/* 5 interactive cards — 3 + centered 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {WHO_FOR.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} bg-white rounded-2xl p-6 flex flex-col gap-5 border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#D8B4FE] transition-all duration-300 group cursor-pointer h-full`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: C.dark }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.yellow }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">
                    {w.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
                    {w.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="bg-white rounded-2xl px-6 py-5 cursor-pointer border border-black/5 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:border-[#D8B4FE] transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">{q}</p>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: C.lightBg }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform"
            style={{ color: C.main, transform: open ? "rotate(180deg)" : "none" }}
          />
        </div>
      </div>
      {open && (
        <p className="font-['Inter',sans-serif] font-normal text-sm pt-3 leading-relaxed" style={{ color: C.bodyText }}>
          {a}
        </p>
      )}
    </div>
  );
}

function FaqSection() {
  // accordion — only one question open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="gyik" className="w-full bg-white py-20 lg:py-24">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0">
        {/* light purple rounded rectangle backdrop */}
        <div
          className="rounded-[32px] px-6 py-10 lg:px-12 lg:py-14 flex flex-col gap-10"
          style={{ backgroundColor: "rgba(250,245,255,0.8)" }}
        >
          <div className="flex flex-col gap-5">
            <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowLight}>
              GYIK
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
              Kérdések, amiket fel szoktak tenni
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="demo" className="w-full py-28 lg:py-36 relative overflow-hidden">
      {/* Background photo + dark purple overlay — same as the Funkciók section */}
      <img
        src={imgFeaturesBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(59,7,100,0.94) 0%, rgba(88,28,135,0.88) 55%, rgba(126,34,206,0.90) 135%)" }}
      />

      <div className="relative z-10 w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={eyebrowDark}>
            Következő lépés
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Nézd meg működés közben!
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed text-white/65 max-w-md">
            Kérj demót, és megmutatjuk, hogyan segít az eaisyBoost gyorsabban elkészíteni, egységesen kezelni és egyszerűbben publikálni az e-mailes és social tartalmaidat — egyetlen, AI-támogatott platformon.
          </p>
          <button
            onClick={openDemoModal}
            className="self-start px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.yellow, color: C.dark }}
          >
            KÉRJ DEMÓT
          </button>
          <p className="font-['Inter',sans-serif] font-medium text-xs" style={{ color: C.yellowLight }}>
            eaisyBoost — AI-támogatott marketingplatform, amely összefogja<br />
            a tartalomkészítést, a kampányokat és a márkád következetes megjelenését.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="font-['Inter',sans-serif] font-bold text-2xl text-white">
            Kinek érdemes demót kérnie?
          </p>
          <div className="flex flex-col gap-2">
            {WHO_SHOULD.map((w) => (
              <div
                key={w}
                className="inline-flex items-center px-4 py-2 rounded-full w-fit"
                style={{ border: `1.5px solid ${C.yellow}` }}
              >
                <span className="font-['Inter',sans-serif] font-medium text-sm" style={{ color: C.yellowLight }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sticky Kérj demót CTA — visible between the hero and the contact section ──
function StickyDemoCta() {
  const [heroInView, setHeroInView] = useState(true);
  const [demoInView, setDemoInView] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target.id === "hero") setHeroInView(e.isIntersecting);
          if (e.target.id === "demo") setDemoInView(e.isIntersecting);
          if (e.target.id === "kapcsolat") setFooterInView(e.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );
    ["hero", "demo", "kapcsolat"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const visible = !heroInView && !demoInView && !footerInView;

  return (
    <button
      onClick={openDemoModal}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-50 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest shadow-[0_8px_30px_rgba(250,204,21,0.45)] hover:opacity-90 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: C.yellow, color: C.dark }}
    >
      KÉRJ DEMÓT
    </button>
  );
}

export default function EaisyBoost() {
  return (
    <div>
      <Seo
        title="eaisyBoost – AI social media és e-mail marketing | eaisy"
        description="Az eaisyBoost AI marketingeszköz: social media kezelés, e-mail kampányok, márka-audit és analitika egy platformon – nagy marketingcsapat nélkül is működő marketing."
        path="/eaisy-boost"
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyBoost",
            description: "AI-támogatott marketing platform: social media kezelés, e-mail kampányok és márkaépítés egy helyen.",
            path: "/eaisy-boost",
          }),
          faqSchema(FAQS),
        ]}
      />
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <WhoForSection />
      <FaqSection />
      <CtaSection />
      <StickyDemoCta />
    </div>
  );
}
