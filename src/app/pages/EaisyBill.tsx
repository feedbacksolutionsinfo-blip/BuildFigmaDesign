import { useState, useEffect, useRef, type TransitionEvent, type PointerEvent } from "react";
import { Link } from "react-router";
import { ChevronDown, FileText, Calendar, Zap, Database, Clock, TrendingUp, Mail, BarChart3, Briefcase, Calculator, ArrowUpRight, ArrowDownRight, CheckCircle2, AlertCircle, EyeOff, RefreshCw, Users, Landmark } from "lucide-react";
import imgHero from "@/imports/EaisyBillNyito0/808a7ecc27a2d6165cfc3842e1f3fe6578bebc62.png";
import imgFeaturesBg from "@/imports/EaisyBillFunkciok/bg-dashboard.jpeg";
import { openDemoModal } from "@/app/Root";
import EaisybillLogo from "@/imports/EaisybillLogoBrightBackground/index";
import imgBillLogo from "@/imports/EaisyBill2Megoldas/eaisybill.png";

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
  { num: 1, title: "NAV Online Számla szinkron", desc: "A bejövő és kimenő számlák automatikusan, valós időben beérkeznek a NAV Online Számla rendszeréből. Nem kell kézzel feltölteni — minden számla azonnal a rendszerben van." },
  { num: 2, title: "Idegen nyelvű és devizás számlák feldolgozása", desc: "MNB árfolyamon, automatikus árfolyamkülönbség-vezetéssel. A külföldi szállítóktól érkező számlák sem jelentenek problémát." },
  { num: 3, title: "AI dokumentumkivonat", desc: "E-mailben küldött vagy feltöltött számlákból a mesterséges intelligencia strukturált adatot készít — kinyeri a számlafejet csakúgy, mint az összes számlán szereplő tételt, az összegeket, az ÁFÁ-t. Működik magyar és idegen nyelvű, forintos és devizás számlákkal egyaránt, sőt kézzel írt számlák esetében is." },
  { num: 4, title: "Hiányzó számlaképbegyűjtés", desc: "Automatikusan azonosítja, ha egy NAV-ból betöltött számlához nem érkezett meg a számlakép (PDF), és e-mailben automatikusan bekéri azt. A hiányzó számákat jelzi, és emailen, manuálisan, vagy akár fotózva (HEIC, HEIF formátumban is) is fel lehet tölteni a rendszerbe. A beérkezett képet a számlához rendeli és iktatja." },
  { num: 5, title: "Bankintegráció", desc: "A banki tranzakciók háromféle módon érkezhetnek az eaisyBill-be: PSD2 banki aggregátoron keresztül automatikusan, e-mail alapú banki értesítőkből, vagy manuális feltöltéssel. Több bank, több számla kezelhető párhuzamosan." },
  { num: 6, title: "Intelligens összekötés", desc: "Intelligensen és önállóan köti össze a NAV számlaadatokat a számlaképekkel, és a számlákat a banki tranzakciókkal. A korábbi kontírozási döntésekből tanul, és automatikusan örökíti a szabályokat — nincs hosszadalmas betanítás." },
  { num: 7, title: "Automatikus kontírozás", desc: "Minden számlatétel automatikusan a megfelelő főkönyvi szám alá kerül. A kontírozási szabályok a cég saját számlatükre szerint működnek, több számlatükör-változat is kezelhető párhuzamosan." },
  { num: 8, title: "Utalási listák", desc: "A beérkezett szállítói számlákból és a rögzített bérekből automatikusan utalási listákat generál. A listák tartalmazzák a kedvezményezetteket, összegeket, határidőket — másodpercek alatt, kézi összeállítás nélkül." },
  { num: 9, title: "ÁFA analitika", desc: "Kezeli a különböző ÁFA kategóriákat, összesíti a fizetendő és levonható ÁFA összeget, így valós idejű ÁFA fizetési kötelezettséget láthatunk. A beérkezett szállítói számlákból és a rögzített bérekből automatikusan utalási listákat generál, amelyek tartalmazzák a kedvezményezetteket, összegeket, határidőket — másodpercek alatt, kézi összeállítás nélkül." },
  { num: 10, title: "Kintlévőség-kezelés", desc: "Korfa kategóriák (30/60/90+ nap), csoportos felszólító e-mailek, partnerenként mentett e-mail címekkel. Az eaisyBill figyelmeztet, mielőtt a pénz bent ragadna — a felszólítások naplózottak, visszakövethetők." },
  { num: 11, title: "Költségkategória azonosítás", desc: "Az eaisyBill automatikusan kategorizálja a költségeket - például anyagköltség, bérleti díj, marketing, IT- vagy bankköltség szerint. Valós idejű áttekintést ad a költségszerkezetről — így könnyen követhető, mire megy el a pénz, kategóriánként." },
  { num: 12, title: "Profitcenter azonosítás", desc: "Automatikusan projektekhez, üzletágakhoz vagy partnerekhez rendeli a bevételeket és költségeket. A profitcenter kimutatás megmutatja, melyik projekt vagy üzletág mennyire nyereséges — nem kell külön Excelben számolgatni." },
  { num: 13, title: "Tárgyi eszköz nyilvántartó", desc: "A tárgyi eszközök nyilvántartása egy kattintással a kapcsolódó számlatételekből indítható. Automatikus értékcsökkenés-számítás a számviteli törvény szerint, eszközkartonok és leltárív generálása — nincs szükség külön nyilvántartó rendszerre." },
  { num: 14, title: "AI béradó-asszisztens", desc: "Az eaisyBill a 2026-os magyar szabályozás szerint támogatja a bérkalkulációt, beleértve a minimálbérre, garantált bérminimumra, SZJA-ra, TB-re és SZOCHO-ra vonatkozó számításokat. A működés GDPR-megfelelő: személyes adatok nem hagyják el a rendszert." },
  { num: 15, title: "SZÉP kártya feldolgozás", desc: "Az eaisyBill dedikált felületen kezeli a SZÉP Kártyás tranzakciókat: automatikusan összepárosítja a tételeket a kapcsolódó elszámolásokkal, majd a beállított pénzügyi logika szerint kontírozza őket. Így nincs szükség a banki kivonatokkal történő ismétlődő, kézi egyeztetésre." },
  { num: 16, title: "Futárszolgálati elszámolások", desc: "Az eaisyBill automatikusan feldolgozza a GLS, MPL, Mixpack, Fáma, Foxpost és DPD riportokat, majd összeveti a csomagszámokat és az összegeket a kapcsolódó számlákkal. Így könnyebben ellenőrizhető, hogy a teljesítések és elszámolások rendben vannak-e, és eltérés esetén a reklamációhoz szükséges adatok is gyorsan visszakereshetők." },
  { num: 17, title: "Munkaidő-nyilvántartó", desc: "A Mt. 152. § szerinti jelenléti ív, naprakész munkaidő-kimutatás, azonnali visszajelzés a rögzítésről. Nincs több papíralapú jelenléti ív. Hangvezérlésű munkaidő nyilvántartás." },
  { num: 18, title: "AI eszkalációs rendszer", desc: "Automatikusan priorizálja a figyelmet igénylő elemeket, és csak azokat a kérdéses tételeket emeli ki, amelyek valóban humán döntést igényelnek. A rutinszerű egyeztetéseket automatikusan rendezi — neked csak a valódi kivételekkel kell foglalkozni." },
];

const AUDIENCE_BENEFITS = [
  {
    eyebrow: "Amiért a", role: "Cégvezető", sub: "dönteni fog mellette", icon: Briefcase, gradient: `linear-gradient(135deg, #0D9488 0%, #005757 100%)`,
    items: [
      { title: "Minden egy helyen", desc: "Számlák, bank, kintlévőségek, kimutatások, bérszámfejtés, munkaidő - 360 fokos átláthatóság." },
      { title: "Valós idejű kontroll", desc: "Bármikor látszik a cég pénzügyi helyzete, nem csak hónap végén. A döntésekhez friss adatok állnak rendelkezésre." },
      { title: "Több idő a növekedésre", desc: "Ami eddig rengeteg adminisztráció volt, azt az eaisyBill elvégzi. A felszabaduló idő a vállalkozás fejlesztésére fordítható." },
    ],
  },
  {
    eyebrow: "Amiért az", role: "Könyvelő", sub: "értékelni fogja", icon: Calculator, gradient: `linear-gradient(135deg, #005757 0%, #032D32 100%)`,
    items: [
      { title: "Villámgyors hónapzárás", desc: "Az eaisyBill összeköti és kontírozza a tételeket, a könyvelőnek csak ellenőriznie kell, nem pedig adatot rögzítenie." },
      { title: "Kevesebb egyeztetés", desc: "A rendezett, ellenőrizhető pénzügyi adatok szükségtelenné teszik az ismétlődő egyeztetéseket." },
      { title: "Pontosabb adatok", desc: "NAV-szinkron és AI validáció miatt kevesebb hiba, kevesebb utólagos javítás." },
    ],
  },
  {
    eyebrow: "Amiért", role: "Pénzügyi vezető", sub: "megbízik benne", icon: TrendingUp, gradient: `linear-gradient(135deg, #032D32 0%, #02191C 100%)`,
    items: [
      { title: "Valós idejű kontroll", desc: "Bármikor látszik a likviditás, a kintlévőségek állapota." },
      { title: "Mérhető megtakarítás", desc: "Lényegesen kevesebb adminisztratív kör - ez időben és költségben is mérhető megtakarítást jelent." },
      { title: "NAV megfelelés - automatikusan", desc: "Magyar jogszabályi formátumok — a Számviteli törvénynek mindenben megfelel." },
    ],
  },
];

const WHO_FOR = [
  { icon: FileText, num: "01", title: "Ahol sok a számla", desc: "Havi több tucat vagy több száz bejövő számla, több bank, több partner. A kézi követés már nem működik hatékonyan. Az eaisyBill automatikusan rendszerezi, iktatja és kontírozza őket." },
  { icon: EyeOff, num: "02", title: "Ahol a pénzügy nem átlátható", desc: "A cégvezető / pénzügyes nem tudja pontosan, hol tart a vállalkozás, mert az adatok több rendszerben, Excelben, e-mailben szétszórva vannak. Az eaisyBill egy felületen mutat mindent." },
  { icon: Calculator, num: "03", title: "Ahol a könyvelés a szűk keresztmetszet", desc: "A hagyományos könyvelés havi zárást ad, de a cégnek heti vagy napi rálátásra van szüksége. Az eaisyBill valós idejű kontrollt ad a pénzügyek felett — a könyvelés mellett, nem helyette." },
  { icon: RefreshCw, num: "04", title: "Ahol a rutinfeladatok elszívják a kapacitást", desc: "A csapat a számlák másolgatásával, banki egyeztetéssel és adatbevitellel tölti az idejét, ahelyett hogy a pénzügyi elemzéssel és a növekedés támogatásával foglalkozna. Az eaisyBill automatizálja a rutint." },
  { icon: TrendingUp, num: "05", title: "Ahol a méret növekszik, de a folyamatok nem", desc: "A cég nő, de a pénzügyi folyamatok nem skálázódnak vele együtt. Minden új ügyfél vagy partner több kézi munkát jelent. Az eaisyBill-lel a skálázódás nem jár arányos létszámnövekedéssel - épp ellenkezőleg!" },
];

const FAQS = [
  { q: "Kiváltja az eaisyBill a könyvelőt?", a: "Nem — és nem is ez a célja. A rutinmunkát (iktatás, kontírozás, egyeztetés, bevallás-összeállítás) automatizálja, így a könyvelő a kivételekre, tanácsadásra és ellenőrzésre tud koncentrálni. A platform a könyvelő munkáját egészíti ki." },
  { q: "Milyen számlákat dolgoz fel?", a: "Minden típusút: NAV Online Számlából szinkronizált magyar áfás számlákat, e-mailben érkező PDF-eket, feltöltött dokumentumokat, idegen nyelvű és devizás számlákat. MNB hivatalos árfolyamon számol." },
  { q: "Megfelel a NAV előírásainak?", a: "Igen — a rendszer a Számviteli törvénynek mindenben megfelel. A 2665-ös ÁFA-űrlapot, az A-típusú beszámolót, az eÁFA és ONYA formátumokat natívan kezeli. Magyar szabályozásra épített." },
  { q: "Mennyi idő a bevezetés?", a: "A rendszer betanítás nélkül működik — a kontírozási szabályok öröklődnek, nem kell minden számlát egyenként megtanítani. Az első ÁFA-bevallás gyakran már az első hónap végén leadható." },
  { q: "Mi van, ha a könyvelőm nem akar platformot váltani?", a: "A platform nem a könyvelő ellen dolgozik — a rutinfeladatok alól szabadítja fel. A kontírozási javaslatokat a könyvelő bármikor felülbírálhatja, és a szakértelmére koncentrálhat." },
  { q: "Biztonságban vannak az adataim?", a: "Igen. A rendszer felhőalapú, biztonsági mentésekkel. Sorszintű hozzáférés-kezelés biztosítja, hogy mindenki csak a saját adataihoz fér hozzá." },
  { q: "Skálázódik a cégemmel?", a: "Igen — ez az egyik fő előnye. A platform ugyanazzal a csapattal 30–50%-kal több ügyfél vagy tranzakció kiszolgálását teszi lehetővé. A növekedés nem jár arányos létszámbővítéssel." },
  { q: "Mennyibe kerülnek az eaisy termékek?", a: "Az eaisy termékeket úgy alakítottuk ki, hogy a kisebb és nagyobb vállalkozások eltérő működéséhez, funkcionális igényeihez és adatmennyiségéhez is rugalmasan igazodjanak. Az egyes termékeken belül is csak azokat a modulokat és funkciókat szükséges igénybe venni, amelyekre valóban szükség van. Az árat a választott funkciók, a felhasználási volumen és az integrációs igények egyaránt befolyásolják, ezért minden ügyfelünk számára egyedi ajánlatot készítünk." },
];

const BENEFITS = [
  "Kapacitásnövelés",
  "Felszabadult idő",
  "Értékteremtés",
  "Évi több milliós megtakarítás",
  "80–90% kevesebb manuális feladat",
];

const WHO_SHOULD = [
  "Aki csökkenteni szeretné a kézi pénzügyi adminisztrációt",
  "Aki túl sok időt tölt számlák, banki tételek és kintlévőségek egyeztetésével",
  "Aki valós időben szeretné látni, hol áll a cég pénzügyileg",
  "Aki gyorsabb, rendezettebb havi zárást szeretne",
  "Aki Excel helyett kontrolláltabb pénzügyi működést keres",
];


function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="bg-white rounded-2xl px-6 py-5 cursor-pointer border border-black/5 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:border-[#6ACCC3] transition-all duration-300"
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
            style={{ color: C.teal, transform: open ? "rotate(180deg)" : "none" }}
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

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden pt-16" style={{ minHeight: 800 }}>
      <style>{`
        @keyframes hero-pill-in {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-pill { animation: none !important; }
        }
      `}</style>
      {/* full-bleed background image */}
      <img src={imgHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* white fade overlay — responsive to protect text readability */}
      <div
        className="absolute inset-0 bg-white/90 lg:bg-transparent lg:bg-[linear-gradient(to_left,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_42%,rgba(255,255,255,0)_58%,transparent_100%)]"
      />

      {/* content — aligned to the right on desktop, centered on mobile */}
      <div className="relative w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 py-20 flex justify-center lg:justify-end">
        <div className="flex flex-col gap-7 w-full max-w-[520px] pt-12 lg:pt-0">

          <p className="font-['Inter',sans-serif] font-semibold text-xl lg:text-2xl leading-snug" style={{ color: C.main }}>
            A pénzügyeid végre egy helyen.<br />Automatikusan. Valós időben.
          </p>

          {/* logo — unified 100px height across product pages */}
          <img src={imgBillLogo} alt="eaisyBill" className="h-[100px] w-auto max-w-full self-start my-6" />

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
            className="self-start mt-10 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.coral }}
          >
            KÉRJ DEMOT
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Autoplay teaser: vertical loop of product panels (like the demo login page) ──
const TEASER_BARS = [38, 52, 44, 62, 48, 70, 56, 66, 50, 60, 74, 58];

function TeaserHeader({ icon: Icon, label, alert = false }: { icon: typeof BarChart3; label: string; alert?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: alert ? "rgba(252,210,205,0.5)" : C.lightBg }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: alert ? C.coral : C.main }} strokeWidth={2} />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60">{label}</p>
    </div>
  );
}

function TeaserCarousel() {
  const panelCls = "bg-white rounded-xl border border-black/5 shadow-[0_2px_10px_rgba(3,45,50,0.08)] p-4 flex flex-col gap-3";

  const panels = [
    // 1 — Dashboard overview
    <div key="dashboard" className={panelCls}>
      <TeaserHeader icon={BarChart3} label="Pénzügyi áttekintés" />
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-black/50">Bevétel</p>
            <ArrowUpRight className="w-3 h-3" style={{ color: C.main }} strokeWidth={2} />
          </div>
          <p className="text-base font-bold text-black leading-none">2,4M Ft</p>
          <p className="text-[9px] font-semibold" style={{ color: C.main }}>+12.5%</p>
        </div>
        <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-black/50">Kiadás</p>
            <ArrowDownRight className="w-3 h-3" style={{ color: C.coral }} strokeWidth={2} />
          </div>
          <p className="text-base font-bold text-black leading-none">890K Ft</p>
          <p className="text-[9px] font-semibold" style={{ color: C.coral }}>-3.2%</p>
        </div>
      </div>
      <div className="rounded-lg border border-black/5 p-2.5">
        <p className="text-[10px] font-semibold text-black mb-1.5">Havi áttekintés</p>
        <div className="flex items-end gap-1 h-12">
          {TEASER_BARS.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: "linear-gradient(to top, #005757, #6ACCC3)" }} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FileText className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          INV-2026-0142 <span className="font-normal text-black/50">TechCorp Kft. — 1 250 000 Ft</span>
        </p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#E2FBF4]" style={{ color: C.teal }}>Fizetve</span>
      </div>
    </div>,

    // 2 — Payroll
    <div key="payroll" className={panelCls}>
      <TeaserHeader icon={Users} label="Bérösszesítő — 2026. március" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { name: "Kovács Anna", amount: "485 000 Ft" },
          { name: "Nagy Péter", amount: "512 000 Ft" },
          { name: "Szabó Eszter", amount: "580 000 Ft" },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between py-1.5">
            <p className="text-[10px] font-medium text-black">{r.name}</p>
            <p className="text-[10px] text-black/50">{r.amount}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-black/10">
        <p className="text-[10px] font-semibold text-black">Összesen (nettó)</p>
        <p className="text-[11px] font-bold" style={{ color: C.teal }}>1 577 000 Ft</p>
      </div>
    </div>,

    // 3 — Bank matching
    <div key="bank" className={panelCls}>
      <TeaserHeader icon={Landmark} label="Banki egyeztetés" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { bank: "K&H 10200812-32145698", inv: "INV-2026-0142" },
          { bank: "OTP 11773312-01234567", inv: "INV-2026-0143" },
          { bank: "Wise EUR 2 800.00", inv: "INV-2026-0150" },
        ].map((r) => (
          <div key={r.bank} className="flex items-center gap-2 py-1.5">
            <p className="text-[10px] text-black/55 flex-1 truncate">{r.bank}</p>
            <p className="text-[10px] font-semibold text-black">{r.inv}</p>
            <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>,

    // 4 — Overdue receivables
    <div key="alerts" className={panelCls}>
      <TeaserHeader icon={AlertCircle} label="Kintlévőség-kezelés" alert />
      <div className="flex items-center gap-2">
        <p className="text-[10px] font-semibold text-black flex-1">Lejárt kintlévőségek</p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FCD2CD]/50" style={{ color: "#95333C" }}>Figyelmeztetés</span>
      </div>
      <div className="flex items-center gap-2">
        <FileText className="w-3 h-3 shrink-0" style={{ color: C.coral }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          INV-2026-0034 <span className="font-normal text-black/50">Delta Trade Kft. — 860 000 Ft</span>
        </p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FCD2CD]/50" style={{ color: "#95333C" }}>Lejárt</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(226,251,244,0.6)" }}>
        <Mail className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.teal }}>1. fizetési felszólító email elküldve</p>
      </div>
    </div>,

    // 5 — Quick invoicing
    <div key="invoicing" className={panelCls}>
      <TeaserHeader icon={Zap} label="Gyors számlázás partnereknek" />
      <div className="flex items-center gap-2">
        <p className="text-[10px] text-black/50">Adószám</p>
        <p className="text-[10px] font-semibold text-black">12345678-2-41</p>
      </div>
      <div className="rounded-lg border border-black/5 px-2.5 py-2 flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold text-black truncate">Alfa Kereskedelmi Kft.</p>
          <p className="text-[9px] text-black/45">Partner adatai lekérve a hivatalos cégadatbázisból</p>
        </div>
        <span className="text-[8px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#E2FBF4]" style={{ color: C.teal }}>AI</span>
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

function SolutionSection() {
  return (
    <section id="megoldas" className="w-full bg-white py-20 lg:py-24 relative overflow-hidden">

      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-16 relative z-10">

        {/* Top block: text on left, desktop mockup on right */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Eyebrow, Logo, Paragraphs */}
          <div className="flex-1 flex flex-col items-start gap-6 w-full lg:max-w-[620px]">
            
            {/* Eyebrow badge */}
            <div className="inline-block rounded-full px-4 py-1.5 bg-[#FCD2CD]/40 text-[#95333C] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
              A mi megoldásunk
            </div>

            {/* Logo */}
            <div style={{ width: 220, height: 53 }} className="max-w-full">
              <EaisybillLogo />
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 text-black/55">
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
                <p className="font-['Inter',sans-serif] font-semibold text-base leading-relaxed" style={{ color: C.main }}>
                  Nem számlázóprogram. Nem csak iktatórendszer. Egy teljes körű pénzügyi automatizációs platform, amely a rutinmunkát kiváltja, a kontrollt pedig a cégvezető kezébe adja.
                </p>
              </div>
            </div>

          </div>

          {/* Right column: autoplay teaser (vertical loop, white fades) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <TeaserCarousel />
          </div>

        </div>

        {/* Bottom block: 3 colored cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 */}
          <div 
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#0D9488" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#FFA8A8] group-hover:scale-110 transition-transform duration-300">
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
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#FFA8A8] group-hover:scale-110 transition-transform duration-300">
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
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#FFA8A8] group-hover:scale-110 transition-transform duration-300">
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
    <section id="problemak" className="w-full py-20 lg:py-24" style={{ backgroundColor: "#F3F3F4" }}>
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-10">

        {/* eyebrow pill + title */}
        <div className="flex flex-col gap-5 w-full">
          <div className="inline-block self-start rounded-full px-4 py-1.5 bg-[#FCD2CD]/40 text-[#95333C] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
            Amikor a pénzügyek kinövik az excelt
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl tracking-tight leading-tight text-black">
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
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
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

        {/* highlighted pullquote — pill shape, stronger coral border */}
        <div
          className="rounded-full px-10 py-6"
          style={{ backgroundColor: "rgba(255,168,168,0.14)", border: "2px solid rgba(242,107,119,0.55)" }}
        >
          <p className="font-['Inter',sans-serif] font-light text-lg lg:text-xl text-center" style={{ color: C.dark }}>
            A legtöbb cégnél a probléma nem az adathiány, hanem{" "}
            <span className="font-semibold">az összkép hiánya.</span>
          </p>
        </div>


      </div>
    </section>
  );
}

function FeaturesSection() {
  const N = FEATURES.length;
  // Cards rendered 3x so the row loops seamlessly (18, 17... appear left of 1)
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
      if (Math.abs(dx) > 40) {
        swiped.current = true;
        go(dx < 0 ? 1 : -1);
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
      {/* Background photo (uncompressed) + dark green overlay */}
      <img
        src={imgFeaturesBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(3,45,50,0.93) 0%, rgba(4,58,65,0.86) 55%, rgba(0,87,87,0.90) 135%)" }}
      />

      <div className="relative z-10">
      {/* Header */}
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col items-start gap-5 mb-12">
        <div className="inline-block rounded-full px-4 py-1.5 bg-[#F26B77]/20 text-[#FFA8A8] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
          Egy szoftver. Számtalan lehetőség.
        </div>
        <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight max-w-[720px]">
          18 funkció - a pénzügyi adminisztrációtól a vezetői döntésekig
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
                  ? "opacity-100 scale-105 shadow-2xl relative z-10 border-[#6ACCC3]"
                  : "opacity-40 scale-95 shadow-md hover:opacity-70 cursor-pointer relative z-0 border-transparent"
              }`}
            >
              <span
                className="font-['Inter',sans-serif] font-extrabold text-6xl leading-none select-none"
                style={{ color: "rgba(242,107,119,0.35)" }}
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

      {/* Numbered navigation 1-18 (hidden on mobile — swipe gestures take over) */}
      <div className="mt-8 px-6 hidden sm:block">
        <div className="flex flex-wrap justify-center gap-2.5 max-w-[520px] mx-auto">
          {FEATURES.map((f, i) => (
            <button
              key={f.num}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Funkció ${f.num}: ${f.title}`}
              className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full font-['Inter',sans-serif] text-sm transition-all duration-300 ${
                i === active ? "text-white font-semibold scale-125 mx-3" : "text-white/80 font-light ring-1 ring-white/40 hover:bg-white/25"
              }`}
              style={{
                backgroundColor: i === active ? C.coral : "rgba(255,255,255,0.15)",
              }}
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
      style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(226,251,244,0.35) 100%)" }}
    >
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-12">

        {/* header — same language as the rest of the page */}
        <div className="flex flex-col items-start gap-5">
          <div className="inline-block self-start rounded-full px-4 py-1.5 bg-[#FCD2CD]/40 text-[#95333C] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
            Előnyök
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Személyre szabott előnyök
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed max-w-[620px]">
            Ugyanaz a platform — más eredmény minden szerepkörben. Nézd meg, mit kap tőle a cégvezető, a könyvelő és a pénzügyi vezető.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {AUDIENCE_BENEFITS.map((col) => {
            const RoleIcon = col.icon;
            return (
              <div key={col.role} className="flex flex-col gap-4 group">

                {/* role header — teal gradient card, like the Megoldás section */}
                <div
                  className="rounded-2xl p-6 flex items-center gap-4 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300"
                  style={{ background: col.gradient }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#FFA8A8]">
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
                    className="benefit-card-item flex-1 bg-white rounded-2xl p-6 flex flex-col gap-3 border border-[#E2FBF4] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:border-[#6ACCC3] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
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

        {/* header — eyebrow pill + headline with logo, per screenshot */}
        <div className="flex flex-col items-start gap-5">
          <div className="inline-block self-start rounded-full px-4 py-1.5 bg-[#FCD2CD]/40 text-[#95333C] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
            Kinek való az eaisyBill?
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Ahol megoldást jelent az
          </h2>
          <div style={{ width: 260, height: 63 }} className="max-w-full -mt-2">
            <EaisybillLogo />
          </div>
        </div>

        {/* 5 interactive cards — 3 + centered 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {WHO_FOR.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.num}
                className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} bg-white rounded-2xl p-6 flex flex-col gap-5 border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#6ACCC3]/30 transition-all duration-300 group cursor-pointer h-full`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: C.dark }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: "#FFA8A8" }} />
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

function FaqSection() {
  // accordion — only one question open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="gyik" className="w-full bg-white py-20 lg:py-24">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0">
        {/* light teal rounded rectangle backdrop */}
        <div
          className="rounded-[32px] px-6 py-10 lg:px-12 lg:py-14 flex flex-col gap-10"
          style={{ backgroundColor: "rgba(226,251,244,0.5)" }}
        >
          <div className="flex flex-col gap-5">
            <div className="inline-block self-start rounded-full px-4 py-1.5 bg-[#FCD2CD]/40 text-[#95333C] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
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
      {/* Background photo + dark green overlay — same as the Funkciók section */}
      <img
        src={imgFeaturesBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(3,45,50,0.93) 0%, rgba(4,58,65,0.86) 55%, rgba(0,87,87,0.90) 135%)" }}
      />

      <div className="relative z-10 w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-block self-start rounded-full px-4 py-1.5 bg-[#F26B77]/20 text-[#FFA8A8] text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
            Következő lépés
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Nézd meg működés közben!
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed text-white/65 max-w-md">
            Kérj demót, és megmutatjuk, hogyan alakítja az eaisyBill a szétszórt pénzügyi adatokat átlátható, naprakész vezetői képpé — kevesebb kézi adminisztrációval, több kontrollal.
          </p>
          <button
            onClick={openDemoModal}
            className="self-start px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.coral }}
          >
            KÉRJ DEMOT
          </button>
          <p className="font-['Inter',sans-serif] font-medium text-xs" style={{ color: C.accent }}>
            eaisyBill — az AI-támogatott pénzügyi és kontrolling platform,<br />
            ami átláthatóvá teszi a céged pénzügyeit.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="font-['Inter',sans-serif] font-bold text-2xl text-white">
            Kinek érdemes demot kérni?
          </p>
          <div className="flex flex-col gap-2">
            {WHO_SHOULD.map((w) => (
              <div
                key={w}
                className="inline-flex items-center px-4 py-2 rounded-full w-fit"
                style={{ border: `1.5px solid ${C.accent}` }}
              >
                <span className="font-['Inter',sans-serif] font-medium text-sm" style={{ color: C.accent }}>{w}</span>
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
      className={`fixed bottom-6 right-6 z-50 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest text-white shadow-[0_8px_30px_rgba(242,107,119,0.45)] hover:opacity-90 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: C.coral }}
    >
      KÉRJ DEMOT
    </button>
  );
}

export default function EaisyBill() {
  return (
    <div>
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
