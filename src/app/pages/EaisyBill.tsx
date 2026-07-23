import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Check, ChevronDown, FileText, Calendar, Zap, Database, Clock, TrendingUp, Mail, BarChart3 } from "lucide-react";
import imgHero from "@/imports/EaisyBillNyito0/808a7ecc27a2d6165cfc3842e1f3fe6578bebc62.png";
import imgBgLaptop from "@/imports/EaisyBill2Megoldas/bg-laptop.png";
import { openDemoModal } from "@/app/Root";
import EaisybillLogo from "@/imports/EaisybillLogoBrightBackground/index";

const C = {
  dark: "#032D32",     // Teal 900
  teal: "#005757",     // Teal 800
  main: "#0D9488",     // Teal 600
  accent: "#6ACCC3",   // Teal 400
  coral: "#F26B77",    // Rose 600
  lightBg: "#E2FBF4",  // Teal 50
  bodyText: "rgba(0,0,0,0.55)",
};

const PROBLEMS = [
  { icon: FileText, title: "Hiányzó számlák", desc: "Papíron, e-mailben, egyéb elektronikus csatornákon érkeznek: sokszor követhetetlen, hogy mi hol van, mi lett iktatva, mi vár még feldolgozásra." },
  { icon: Calendar, title: "Várakozás a könyvelésre", desc: 'A valós pénzügyi helyzet gyakran csak hónapzárás után derül ki, amikor a számlák és banki adatok végre összeérnek - addig a cég "vakon repül".' },
  { icon: Zap, title: "Stresszes ÁFA-bevallás", desc: "Hónapról hónapra kézzel kell összegyűjteni a hiányzó számlákat és banki adatokat, miközben a legfontosabb kérdés sokszor az utolsó pillanatig nyitott: mennyi ÁFA-t kell fizetni?" },
  { icon: Database, title: "Manuális kintlévőségkezelés", desc: "Nem mindig látszik pontosan, ki mennyivel és mióta tartozik. A sablonos felszólítások sokszor hatástalanok, miközben a késedelmes befizetések rontják a likviditást." },
  { icon: Clock, title: "Időrabló rutinfeladatok", desc: "A számlák másolgatása, iktatása, a banki tranzakciók tételes egyeztetése, a manuális adatbevitel sok időt igényelnek — ahelyett, hogy a vállalkozás növekedésével tudnánk foglalkozni." },
  { icon: TrendingUp, title: "Az átfogó kép hiánya", desc: "A pénzügyi adatok több rendszerben, Excel-táblában és e-mailben szóródnak szét. Nincs egyetlen közös felület, ahol minden fontos információ összefutna. A döntésekhez gyakran hiányzik az átfogó rálátás." },
];

const FEATURES = [
  { num: 1, title: "NAV Online Számla szinkron", desc: "A bejövő és kimenő számlák automatikusan, valós időben beérkeznek a NAV Online Számla rendszeréből. Kézi feltöltés nélkül." },
  { num: 2, title: "Devizás számlák feldolgozása", desc: "MNB árfolyamon, automatikus árfolyamkülönbség-vezetéssel. Külföldi szállítók és egzotikus írásjelek sem okoznak problémát." },
  { num: 3, title: "AI dokumentumkivonat", desc: "E-mailből vagy feltöltött fájlból az AI strukturált adatot készít: számlafejet, tételeket, ÁFÁ-t — kézzel írt számláknál is." },
  { num: 4, title: "Hiányzó számlaképbegyűjtés", desc: "Automatikusan azonosítja és e-mailben bekéri a hiányzó PDF-eket. Fotózva (HEIC/HEIF) is feltölthető, a rendszer a számlához rendeli." },
  { num: 5, title: "Bankintegráció", desc: "PSD2 aggregátoron, e-mail értesítőkből vagy manuálisan. Több bank, több számla párhuzamosan kezelve." },
  { num: 6, title: "Intelligens összekötés", desc: "Automatikusan köti össze a NAV adatokat a képekkel és banki tranzakciókkal. A korábbi kontírozási döntésekből tanul." },
  { num: 7, title: "Automatikus kontírozás", desc: "Minden számlatétel a megfelelő főkönyvi szám alá kerül a cég saját számlatükre szerint. Több számlatükör-változat is kezelhető." },
  { num: 8, title: "Utalási listák", desc: "Szállítói számlákból és bérekből automatikusan generált utalási listák: kedvezményezettek, összegek, határidők — kézi összeállítás nélkül." },
  { num: 9, title: "ÁFA analitika", desc: "Kezeli az összes ÁFA kategóriát, összesíti a fizetendő és levonható összeget. Valós idejű ÁFA fizetési kötelezettség." },
  { num: 10, title: "Kintlévőség-kezelés", desc: "Korfa kategóriák (30/60/90+ nap), csoportos felszólítók, naplózott és visszakövethető egyeztetések." },
  { num: 11, title: "Költségkategória azonosítás", desc: "Automatikus kategorizálás (anyagköltség, bérleti díj, marketing, IT stb.) — valós idejű áttekintés a költségszerkezetről." },
  { num: 12, title: "Profitcenter azonosítás", desc: "Projektekhez, üzletágakhoz rendeli a bevételeket és költségeket. Melyik projekt mennyire nyereséges — Excel nélkül." },
  { num: 13, title: "Tárgyi eszköz nyilvántartó", desc: "Egy kattintással indítható a számlatételekből. Automatikus értékcsökkenés, eszközkartonok, leltárív generálása." },
  { num: 14, title: "AI béradó-asszisztens", desc: "2026-os magyar szabályozás szerint: minimálbér, garantált bérminimum, SZJA, TB, SZOCHO. GDPR-megfelelő." },
  { num: 15, title: "SZÉP kártya feldolgozás", desc: "Automatikus párosítás az elszámolásokkal, kontírozás a pénzügyi logika szerint. Nincs ismétlődő kézi egyeztetés." },
  { num: 16, title: "Futárszolgálati elszámolások", desc: "GLS, MPL, Mixpack, Fáma, Foxpost, DPD riportok feldolgozása és összevetése a számlákkal." },
  { num: 17, title: "Munkaidő-nyilvántartó", desc: "Mt. 152. § szerinti jelenléti ív, hangvezérléses rögzítés. Nincs több papíralapú nyilvántartás." },
  { num: 18, title: "AI eszkalációs rendszer", desc: "Automatikusan priorizálja a figyelmet igénylő elemeket. Csak a valóban humán döntést igénylő tételeket emeli ki." },
];

const PRICING_BASE = { title: "eaisyBill alapcsomag", desc: "1 felhasználó, 1 bankszámla, számlák kezelése, házipénztár, bérek / járulékok, fizetendő ÁFA valós időben", price: "1 990 000 Ft" };
const PRICING_ADDONS = [
  { title: "Közepes csomag", desc: "3 felhasználó, több bankszámla, 1 futárcég, több dashboard, SZÉP kártya, projektkezelés", price: "+690 000 Ft" },
  { title: "Nagy csomag", desc: "Korlátlan felhasználó, multi tenancy, intelligens dashboard, több futárcég, kintlévőség, munkaidő, TENY", price: "+290 000 Ft" },
  { title: "Saját CRM / ERP illesztés", desc: "Integráció a meglévő rendszerhez, egyedi API összeköttetés", price: "+490 000 Ft" },
];
const PRICING_MONTHLY = [
  { title: "Havi alapdíj", desc: "A pontos ár a konfiguráció és számlamennyiség függvényében változik.", price: "4 900 – 24 900 Ft / hó" },
  { title: "Díjbekérő és számlakép automatizáció", desc: "Automatikus összevezetés díjbekérőt használó cégeknél", price: "4 Ft / db" },
  { title: "Automatikus bankszámla adatkapcsolat", desc: "Aggreg8.io PSD2 kapcsolat IBAN-onként", price: "500 Ft / IBAN" },
];

const FAQS = [
  { q: "Kiváltja az eaisyBill a könyvelőt?", a: "Nem — és nem is ez a célja. A rutinmunkát (iktatás, kontírozás, egyeztetés, bevallás-összeállítás) automatizálja, így a könyvelő a kivételekre, tanácsadásra és ellenőrzésre tud koncentrálni. A platform a könyvelő munkáját egészíti ki." },
  { q: "Milyen számlákat dolgoz fel?", a: "Minden típusút: NAV Online Számlából szinkronizált magyar áfás számlákat, e-mailben érkező PDF-eket, feltöltött dokumentumokat, idegen nyelvű és devizás számlákat. MNB hivatalos árfolyamon számol." },
  { q: "Megfelel a NAV előírásainak?", a: "Igen — a rendszer a Számviteli törvénynek mindenben megfelel. A 2665-ös ÁFA-űrlapot, az A-típusú beszámolót, az eÁFA és ONYA formátumokat natívan kezeli. Magyar szabályozásra épített." },
  { q: "Mennyi idő a bevezetés?", a: "A rendszer betanítás nélkül működik — a kontírozási szabályok öröklődnek, nem kell minden számlát egyenként megtanítani. Az első ÁFA-bevallás gyakran már az első hónap végén leadható." },
  { q: "Mi a helyzet a devizás számlákkal?", a: "Teljes körűen feldolgozza az idegen nyelvű és devizás számlákat — MNB hivatalos árfolyamon, automatikus árfolyamkülönbség-vezetéssel." },
  { q: "Mi van, ha a könyvelőm nem akar platformot váltani?", a: "A platform nem a könyvelő ellen dolgozik — a rutinfeladatok alól szabadítja fel. A kontírozási javaslatokat a könyvelő bármikor felülbírálhatja, és a szakértelmére koncentrálhat." },
  { q: "Biztonságban vannak az adataim?", a: "Igen. A rendszer felhőalapú, biztonsági mentésekkel. Sorszintű hozzáférés-kezelés biztosítja, hogy mindenki csak a saját adataihoz fér hozzá." },
  { q: "Skálázódik a cégemmel?", a: "Igen — ez az egyik fő előnye. A platform ugyanazzal a csapattal 30–50%-kal több ügyfél vagy tranzakció kiszolgálását teszi lehetővé. A növekedés nem jár arányos létszámbővítéssel." },
];

const BENEFITS = [
  "Nincs több Excel táblázat",
  "Nincs több manuális rögzítés, iktatás",
  "80–90%-kal kevesebb rutinfeladat",
  "Kapacitásnövelés létszámbővítés nélkül",
  "Évi több milliós működési megtakarítás",
  "Több idő az értékteremtő munkára",
];

const WHO_SHOULD = [
  "Aki csökkenteni szeretné a kézi pénzügyi adminisztrációt",
  "Aki túl sok időt tölt számlák, banki tételek és kintlévőségek egyeztetésével",
  "Aki valós időben szeretné látni, hol áll a cég pénzügyileg",
  "Aki gyorsabb, rendezettebb havi zárást szeretne",
  "Aki Excel helyett kontrolláltabb pénzügyi működést keres",
];


function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "rgba(3,45,50,0.1)" }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between gap-4 py-4">
        <p className="font-['Montserrat',sans-serif] font-semibold text-sm" style={{ color: C.dark }}>{q}</p>
        <ChevronDown
          className="shrink-0 w-4 h-4 transition-transform"
          style={{ color: C.accent, transform: open ? "rotate(180deg)" : "none" }}
        />
      </div>
      {open && (
        <p className="font-['Montserrat',sans-serif] font-normal text-sm pb-4 leading-relaxed" style={{ color: C.bodyText }}>
          {a}
        </p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16" style={{ minHeight: 640 }}>
      {/* full-bleed background image */}
      <img src={imgHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* white fade overlay — responsive to protect text readability */}
      <div
        className="absolute inset-0 bg-white/90 lg:bg-transparent lg:bg-[linear-gradient(to_left,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_42%,rgba(255,255,255,0)_58%,transparent_100%)]"
      />

      {/* content — aligned to the right on desktop, centered on mobile */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 flex justify-center lg:justify-end">
        <div className="flex flex-col gap-7 w-full max-w-[520px] pt-12 lg:pt-0">

          <p className="font-['Montserrat',sans-serif] font-medium text-xl lg:text-2xl leading-snug" style={{ color: C.dark }}>
            A pénzügyeid végre egy helyen.<br />Automatikusan. Valós időben.
          </p>

          {/* logo */}
          <div style={{ width: 280, height: 68 }}>
            <EaisybillLogo />
          </div>

          <p className="font-['Montserrat',sans-serif] font-medium text-xs tracking-widest uppercase leading-relaxed" style={{ color: C.teal, width: "max-content", maxWidth: "100%" }}>
            <span className="block">Az AI-támogatott pénzügyi és kontrolling platform,</span>
            <span className="block">ami átláthatóvá teszi céged pénzügyeit.</span>
          </p>

          <div className="flex flex-col gap-2">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full w-fit"
                style={{ backgroundColor: "rgba(3,45,50,0.05)", border: "1px solid rgba(3,45,50,0.15)" }}
              >
                <Check className="w-3.5 h-3.5 shrink-0" style={{ color: C.coral }} />
                <span className="font-['Montserrat',sans-serif] font-medium text-sm" style={{ color: C.dark }}>{b}</span>
              </div>
            ))}
          </div>

          <button
            onClick={openDemoModal}
            className="self-start px-8 py-3.5 rounded-full font-['Montserrat',sans-serif] font-medium text-sm tracking-wide text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.coral }}
          >
            KÉRJ DEMOT
          </button>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="megoldas" className="w-full bg-white py-20 lg:py-24 relative overflow-hidden">
      
      {/* Desktop background image - large, positioned behind text and cards */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <img src={imgBgLaptop} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-16 relative z-10">
        
        {/* Top block: text on left */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Eyebrow, Logo, Paragraphs */}
          <div className="flex-1 flex flex-col items-start gap-6 w-full lg:max-w-[620px]">
            
            {/* Eyebrow badge */}
            <div className="inline-block rounded-full px-4 py-1.5 bg-[#FCD2CD]/40 text-[#95333C] text-xs font-semibold tracking-wider uppercase font-['Montserrat',sans-serif]">
              A mi megoldásunk
            </div>

            {/* Logo */}
            <div style={{ width: 220, height: 53 }} className="max-w-full">
              <EaisybillLogo />
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 text-black/75">
              <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed">
                Az eaisyBill egy mesterséges intelligenciával támogatott pénzügyi és kontrolling platform, amely a vállalkozás szétszórt pénzügyi adataiból egységes, naprakész és ellenőrizhető működési képet épít.
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed">
                Segít automatizálni a pénzügyi háttérfolyamatokat, minimálizálja a manuális adminisztrációt, és olyan vezetői rálátást ad, amely alapján a cég nem utólag, hanem menet közben tud dönteni, beavatkozni és tervezni.
              </p>
              
              {/* Third paragraph with left border */}
              <div 
                className="pl-5 py-0.5 border-l-4"
                style={{ borderLeftColor: C.main }}
              >
                <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed">
                  Nem számlázóprogram. Nem csak iktatórendszer. Egy teljes körű pénzügyi automatizációs platform, amely a rutinmunkát kiváltja, a kontrollt pedig a cégvezető kezébe adja.
                </p>
              </div>
            </div>

          </div>

          {/* Inline Laptop image for mobile only */}
          <div className="flex-1 w-full lg:hidden z-10">
            <img src={imgBgLaptop} alt="eaisyBill dashboard mockup" className="w-full h-auto object-contain mx-auto max-w-[480px]" />
          </div>

        </div>

        {/* Bottom block: 3 colored cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 */}
          <div 
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#0D9488" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Teljes körű számlakezelés
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                E-mailekből, NAV-ból és feltöltött mappákból gyűjti a számlákat, párosítja az utalásokkal, és jelzi a hiányzó bizonylatokat.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#005757" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Valós idejű pénzügyi kontroll
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                Kintlévőségek, házipénztár, bérek, járulékok, projektek, költségkategóriák, munkaidő nyilvántartás — minden egy helyen, valós időben.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#032D32" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Átlátható cégadatok és analitika
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                ÁFA analitika, cash flow kimutatás, profitcenterek nyereségessége, költségek megoszlása — könnyebb pénzügyi döntések a cégvezető számára.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
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
    <section id="problemak" className="w-full py-20 lg:py-24" style={{ backgroundColor: "rgba(3,45,50,0.04)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-10">

        {/* eyebrow + title */}
        <div className="flex flex-col gap-5 w-full">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg uppercase" style={{ color: C.main }}>
            AMIKOR A PÉNZÜGYEK KINŐNEK AZ EXCELBŐL
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl tracking-tight leading-tight" style={{ color: C.dark }}>
            Ismerős helyzetek?
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed w-full text-black/55">
            A cég növekedésével párhuzamosan a pénzügyek egyre több időt és figyelmet követelnek. Több számla, több bank, több partner — és egyre nehezebb átlátni, pontosan hol tart a vállalkozás. A manuális ismétlődő feladatok hibákat generálnak, és elveszik a kollégák idejét a valóban fontos, érdemi, kreatív munkától vagy azoktól a feladatoktól, melyek humán döntést igényelnek.
          </p>
        </div>

        {/* 6 problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="problem-card-item bg-white rounded-2xl p-6 flex flex-row gap-5 shadow-sm border border-black/5 hover:-translate-y-1 hover:shadow-md hover:border-[#6ACCC3]/30 transition-all duration-300 group cursor-pointer h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: C.dark }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.accent }} />
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

        {/* highlighted pullquote */}
        <div
          className="rounded-2xl px-8 py-6"
          style={{ backgroundColor: "rgba(255,168,168,0.12)", border: "1px solid rgba(242,107,119,0.2)" }}
        >
          <p className="font-['Montserrat',sans-serif] font-light text-lg lg:text-xl text-center" style={{ color: C.dark }}>
            A legtöbb cégnél a probléma nem az adathiány, hanem{" "}
            <span className="font-semibold">az összkép hiánya.</span>
          </p>
        </div>


      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="funkciok" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg uppercase" style={{ color: C.main }}>
            18 funkció
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Ami lefedi a vállalkozás teljes pénzügyi működését
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="flex gap-3 items-start p-5 rounded-xl"
              style={{ border: "1px solid #e2fbf4", boxShadow: "0px 1px 4px rgba(0,0,0,0.08)" }}
            >
              <div
                className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-['Montserrat',sans-serif] font-bold text-sm text-white"
                style={{ backgroundColor: "rgba(106,204,195,0.55)" }}
              >
                {f.num}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-['Montserrat',sans-serif] font-semibold text-sm uppercase" style={{ color: C.teal }}>{f.title}</p>
                <p className="font-['Montserrat',sans-serif] font-normal text-xs leading-relaxed" style={{ color: C.bodyText }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="arak" className="w-full py-20 lg:py-24" style={{ backgroundColor: C.lightBg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg uppercase" style={{ color: C.main }}>
            Árak
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Moduláris csomagok — a működésedhez igazítva
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base text-black/45 leading-relaxed">
            Az eaisyBill csomagjai a számlamennyiség, a bankkapcsolatok és az igényelt funkciók alapján állíthatók össze. Nem kell olyan modulokért fizetni, amiket nem használ.
          </p>
          <p className="font-['Montserrat',sans-serif] font-medium text-sm" style={{ color: C.main }}>
            Alapcsomag + bővítmények (nettó árak)
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="rounded-xl px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            style={{ backgroundColor: "rgba(0,87,87,0.9)" }}
          >
            <div className="flex flex-col gap-1">
              <p className="font-['Montserrat',sans-serif] font-semibold text-base text-white">{PRICING_BASE.title}</p>
              <p className="font-['Montserrat',sans-serif] font-normal text-xs text-white/70 max-w-sm">{PRICING_BASE.desc}</p>
            </div>
            <p className="font-['Montserrat',sans-serif] font-bold text-xl shrink-0 text-right" style={{ color: C.accent }}>
              {PRICING_BASE.price}
            </p>
          </div>

          {PRICING_ADDONS.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              style={{ border: `0.5px solid ${C.accent}` }}
            >
              <div className="flex flex-col gap-1">
                <p className="font-['Montserrat',sans-serif] font-semibold text-sm" style={{ color: C.dark }}>{p.title}</p>
                <p className="font-['Montserrat',sans-serif] font-normal text-xs leading-relaxed max-w-sm" style={{ color: C.bodyText }}>{p.desc}</p>
              </div>
              <p className="font-['Montserrat',sans-serif] font-bold text-lg shrink-0 text-right" style={{ color: C.dark }}>{p.price}</p>
            </div>
          ))}

          <p className="font-['Montserrat',sans-serif] font-medium text-xs mt-2" style={{ color: C.main }}>Havi díjak</p>

          {PRICING_MONTHLY.map((p) => (
            <div
              key={p.title}
              className="rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              style={{ backgroundColor: "rgba(252,210,205,0.35)", border: "0.5px solid #ffa8a8" }}
            >
              <div className="flex flex-col gap-1">
                <p className="font-['Montserrat',sans-serif] font-medium text-sm" style={{ color: C.dark }}>{p.title}</p>
                <p className="font-['Montserrat',sans-serif] font-normal text-xs" style={{ color: C.bodyText }}>{p.desc}</p>
              </div>
              <p className="font-['Montserrat',sans-serif] font-medium text-sm shrink-0 text-right whitespace-nowrap" style={{ color: C.dark }}>{p.price}</p>
            </div>
          ))}
        </div>

        <p className="font-['Montserrat',sans-serif] text-sm" style={{ color: C.dark }}>
          <span className="font-semibold">Kérj demót,</span>{" "}
          <span className="font-normal" style={{ color: C.bodyText }}>és megmutatjuk, melyik konfiguráció illeszkedik a működésedhez.</span>
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="gyik" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg uppercase" style={{ color: C.main }}>
            GYIK
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Kérdések, amiket fel szoktak tenni
          </h2>
        </div>
        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(3,45,50,0.1)" }}>
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="demo" className="w-full py-20 lg:py-24" style={{ backgroundColor: C.dark }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg uppercase" style={{ color: C.accent }}>
            Következő lépés
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Nézd meg működés közben!
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed text-white/65 max-w-md">
            Kérj demót, és megmutatjuk, hogyan alakítja az eaisyBill a szétszórt pénzügyi adatokat átlátható, naprakész vezetői képpé — kevesebb kézi adminisztrációval, több kontrollal.
          </p>
          <button
            onClick={openDemoModal}
            className="self-start px-8 py-3.5 rounded-full font-['Montserrat',sans-serif] font-medium text-sm tracking-wide text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.coral }}
          >
            KÉRJ DEMOT
          </button>
          <p className="font-['Montserrat',sans-serif] font-medium text-xs" style={{ color: C.accent }}>
            eaisyBill — az AI-támogatott pénzügyi és kontrolling platform,<br />
            ami átláthatóvá teszi a céged pénzügyeit.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="font-['Montserrat',sans-serif] font-bold text-2xl text-white">
            Kinek érdemes demot kérni?
          </p>
          <div className="flex flex-col gap-2">
            {WHO_SHOULD.map((w) => (
              <div
                key={w}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.88)", border: `1px solid ${C.coral}` }}
              >
                <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
                  <path d="M2 7l3.5 3.5L12 3" stroke={C.coral} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Montserrat',sans-serif] font-medium text-sm" style={{ color: C.dark }}>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EaisyBill() {
  return (
    <div>
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
