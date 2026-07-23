import { useState } from "react";
import { Link } from "react-router";
import { openDemoModal } from "@/app/Root";
import Vector from "@/imports/Vector/index";
import imgHero from "@/imports/Mobile/c27b1f201f6864f48251e9fca46ba94e8e388d54.png";
import imgBill from "@/imports/Mobile/b9f75c0a78805e573fd7ba6264690ff7fc119464.png";
import imgDesk from "@/imports/Mobile/faf98039103ec19a5a8cea4bb3b15bb435e98f27.png";
import imgCRM from "@/imports/Mobile/0ed95b9c10d6f138aa05178ee56582c704d965a2.png";
import imgBoost from "@/imports/Mobile/8e5eb0f957911a1b8a542f8c02ebfbed02d9f155.png";
import imgDocs from "@/imports/Mobile/84645b8a5ef11283d6e6443763bb76a2b8eab618.png";
import imgHR from "@/imports/Mobile/bfdac52013fd058c16676a0d83a329a0a460bdb9.png";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f6f6]" style={{ height: "80vh", minHeight: 520 }}>
      {/* full-bleed background image under the header */}
      <div className="absolute inset-0">
        <img
          alt=""
          src={imgHero}
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.45 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f0f0]/70 via-[#f6f6f6]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f6f6f6] to-transparent" />
      </div>

      {/* ── top row: tagline ── sits just below header */}
      <div className="relative max-w-[1400px] mx-auto w-full px-6 lg:px-10 pt-24">
        <p className="font-['Montserrat',sans-serif] font-normal text-sm text-black/60 tracking-wider uppercase leading-relaxed">
          Megoldások a vállalkozásod problémáira<br />– A pénzügytől a marketingig
        </p>
      </div>

      {/* ── center block: eaisy logo + CTA buttons ── */}
      <div className="relative flex flex-col items-center max-w-[1400px] mx-auto w-full px-6 lg:px-10 pt-6">
        <div className="w-full max-w-2xl" style={{ aspectRatio: "718 / 271" }}>
          <Vector />
        </div>
        <div className="flex flex-row gap-4 mt-8">
          <a
            href="#termekek"
            className="inline-flex items-center justify-center px-12 py-3.5 bg-black text-white rounded-full font-['Montserrat',sans-serif] font-light text-sm tracking-wide whitespace-nowrap hover:bg-black/80 transition-colors"
          >
            FEDEZD FEL
          </a>
          <button
            onClick={openDemoModal}
            className="inline-flex items-center justify-center px-12 py-3.5 bg-white border border-black text-black rounded-full font-['Montserrat',sans-serif] font-light text-sm tracking-wide whitespace-nowrap hover:bg-black hover:text-white transition-colors"
          >
            KÉRJ DEMOT
          </button>
        </div>
      </div>
    </section>
  );
}

function WhatIsEaisy() {
  const cards = [
    { num: "01", title: "Átfogó megoldások", desc: "Az eaisy modulok a vállalkozás fő működési területeit támogatják a pénzügyektől és az ügyfélkommunikációtól az értékesítésen át egészen a marketingig." },
    { num: "02", title: "Teljes folyamat", desc: "Összekapcsolják a meglévő rendszereket, adatforrásokat, kommunikációs csatornákat és információkat, majd ezeket végigkövethető, automatizált üzleti folyamatokká rendezik." },
    { num: "03", title: "Hibrid működés", desc: "Egyszerre rugalmas és kiszámítható: az AI gyorsasága mellett szabályalapú automatizmusok biztosítják a pontosságot ott, ahol a folyamatoknak megbízhatóan kell végigfutniuk." },
  ];

  return (
    <section id="mi-az-eaisy" className="w-full bg-[#f6f6f6] pt-8 pb-20 lg:pb-28 -mt-16 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* left: text */}
        <div className="lg:max-w-sm xl:max-w-md flex flex-col gap-6 shrink-0">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg text-[#186d98]">
            MI AZ <span className="font-bold">eaisy</span>?
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Könnyebb működés.<br />Nagyobb szabadság.
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base text-black/45 leading-relaxed">
            Már biztosan használsz valamilyen AI-eszközt a vállalkozásodban. És valószínűleg jól is működik – egy adott területen, egy konkrét problémát megoldva. Mi nem különálló AI-funkciókban gondolkodunk: az eaisy moduljai és integrációi olyan hiányzó láncszemek a vállalkozásodban, amelyek összekapcsolják és mozgásban tartják meglévő rendszereidet, munkafolyamataidat.
          </p>
        </div>

        {/* right: 3 feature cards */}
        <div className="flex flex-col gap-5 flex-1">
          {cards.map((card) => (
            <article key={card.num} className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm border border-black/5">
              <div className="shrink-0">
                <span className="font-['Inter',sans-serif] font-extrabold text-5xl text-[#1ceee0] opacity-30 leading-none tracking-tighter">
                  {card.num}
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight">
                  {card.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-sm text-black/55 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── filter key → product id mapping ─────────────────────────────────────────
const FILTER_TABS = [
  { label: "Minden terület", id: "all" },
  { label: "Pénzügy, könyvelés", id: "bill" },
  { label: "Ügyfélkommunikáció", id: "desk" },
  { label: "Értékesítés", id: "crm" },
  { label: "Marketing", id: "boost" },
  { label: "Iktatás", id: "docs" },
  { label: "HR", id: "hr" },
] as const;

type FilterId = (typeof FILTER_TABS)[number]["id"];

const PRODUCTS: {
  id: FilterId;
  name: string;
  color: string;
  tagline: string;
  description: string;
  image: string;
  imageRight: boolean;
  link?: string;
  btnLabel?: string;
}[] = [
  {
    id: "bill",
    name: "eaisyBill",
    color: "#05512a",
    tagline: "A pénzügyei végre egy helyen. Automatikusan. Valós időben.",
    description: "Az eaisyBill egy mesterséges intelligenciával támogatott pénzügyi és kontrolling platform, amely a vállalkozás szétszórt pénzügyi adataiból egységes, naprakész és ellenőrizhető működési képet épít. Segít automatizálni a pénzügyi háttérfolyamatokat, minimálizálja a manuális adminisztrációt, és olyan vezetői rálátást ad, amely alapján a cég nem utólag, hanem menet közben tud dönteni, beavatkozni és tervezni.",
    image: imgBill,
    imageRight: false,
    link: "/eaisy-bill",
  },
  {
    id: "desk",
    name: "eaisyDesk",
    color: "#186d98",
    tagline: "Nem chatbot. Nem egy újabb AI ügyfélszolgálat. Intelligens munkatárs, aki 24/7 dolgozik.",
    description: "Az eaisyDesk egy AI-támogatott, omnichannel ügyfélkommunikációs rendszer, amelyben minden csatornán egy AI asszisztens válaszol az ügyfeleknek. Időpontot foglal, értesítést küld, válaszol hívásokra, social media üzenetekre – és ha kell, azonnal eszkalál élő kollégának. Sőt, kimenő kommunikációt és kampányokat is indít.",
    image: imgDesk,
    imageRight: true,
    link: "/eaisy-desk",
  },
  {
    id: "crm",
    name: "eaisyCRM",
    color: "#b70071",
    tagline: "Az érdeklődőtől a visszatérő ügyfélig. Minden kapcsolat egy helyen.",
    description: "Ügyfél- és értékesítéskezelő rendszer, amely egységesen kezeli a kapcsolati adatokat, az érdeklődéseket, az értékesítési lehetőségeket és a kapcsolódó feladatokat. Átlátható értékesítési folyamatot épít, segíti az utánkövetést, automatizálja az ismétlődő teendőket, és megmutatja, mely ügyfelekre vagy lehetőségekre érdemes fókuszálni.",
    image: imgCRM,
    imageRight: false,
  },
  {
    id: "boost",
    name: "eaisyBoost",
    color: "#701ab7",
    tagline: "Következetes social media jelenlét. Posztkészítés pár kattintással. Egyszerűbb hirdetéskezelés.",
    description: "A rendszeres posztoláshoz, a márkához illő, trendi közösségi média tartalmakhoz mostantól csupán egy munkatársa lesz szükséged: az eaisyBoostra. A Quick Post funkcióval néhány lépésben létrehozhatók a különböző felületekre és képarányokra optimalizált posztok (kép és szöveg), a hirdetéskezelési funkciók pedig támogatják a kampányok összeállítását, elindítását és követését.",
    image: imgBoost,
    imageRight: true,
    link: "/eaisy-boost",
  },
  {
    id: "docs",
    name: "eaisyDocs",
    color: "#150f87",
    tagline: "Minden dokumentum a helyén. Automatikusan iktatva. Könnyen visszakereshetően.",
    description: "Dokumentumkezelő és iktatási rendszer, amely automatizálja a beérkező dokumentumok érkeztetését, felismerését, kategorizálását és iktatását. A fájlokat a megfelelő ügyhöz, partnerhez vagy folyamathoz kapcsolja, egységes nyilvántartást hoz létre, és gyors visszakeresést biztosít.",
    image: imgDocs,
    imageRight: false,
  },
  {
    id: "hr",
    name: "eaisyHR",
    color: "#c74c71",
    tagline: "Kevesebb HR-adminisztráció. Átláthatóbb csapatműködés. Több idő az emberekre.",
    description: "Az eaisyHR egy AI-támogatott humánerőforrás-menedzsment rendszer, amely egy helyen segíti a munkavállalói adatok, dokumentumok, szabadságok, munkaidő-nyilvántartások és belső HR-folyamatok kezelését. Automatizálja az ismétlődő adminisztratív feladatokat, támogatja a beléptetési és utánkövetési folyamatokat.",
    image: imgHR,
    imageRight: true,
    btnLabel: "Érdekel",
  },
];

function ModulesSection() {
  // Set of active specific filters. Empty = "Minden terület" (show all).
  const [active, setActive] = useState<Set<FilterId>>(new Set());

  function toggleFilter(id: FilterId) {
    if (id === "all") {
      setActive(new Set());
      return;
    }
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const showAll = active.size === 0;

  function isVisible(id: FilterId) {
    return showAll || active.has(id);
  }

  return (
    <section
      id="termekek"
      className="w-full py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg, rgba(210,252,249,0.6) 0%, rgba(255,255,255,1) 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-12">

        {/* ── header (title unchanged) ── */}
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg text-[#186d98]">
            MIBEN SEGÍTENEK AZ <span className="font-bold">eaisy</span> MODULJAI?
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            A te vállalkozásodban hol akadnak el a folyamatok?
          </h2>
        </div>

        {/* ── description + filter — container-wide ── */}
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4">
            <p className="font-['Inter',sans-serif] font-normal text-base text-black/45 leading-relaxed w-full">
              Moduljaink a vállalkozás fő működési területeit támogatják a pénzügyektől és a dokumentumkezeléstől az ügyfélkommunikáción és az értékesítésen át egészen a marketingig. Összekapcsolják a meglévő rendszereket, adatforrásokat, kommunikációs csatornákat és információkat, majd ezeket végigkövethető, automatizált üzleti folyamatokká rendezik.
            </p>
            <p className="font-['Inter',sans-serif] font-semibold text-base text-black/70 leading-relaxed w-full">
              Az eaisy moduljai külön-külön is használhatók, együtt pedig egységes, fokozatosan bővíthető cégműködési rendszert alkotnak.
            </p>
          </div>

          {/* filter bar — full container width, dark pill */}
          <div
            className="w-full flex items-center justify-between gap-1 px-3 py-3 rounded-2xl"
            style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
          >
            {FILTER_TABS.map(({ label, id }) => {
              const isActive = id === "all" ? showAll : active.has(id);
              return (
                <button
                  key={id}
                  onClick={() => toggleFilter(id)}
                  className={`flex-1 px-3 py-2 rounded-xl text-sm font-['Montserrat',sans-serif] font-light tracking-tight transition-all whitespace-nowrap text-center ${
                    isActive
                      ? "bg-white/10 text-[#bbfaf6]"
                      : "text-white/55 hover:text-white/90 hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── product rows ── */}
        <div className="flex flex-col gap-20 lg:gap-28 pt-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className={isVisible(p.id) ? "block" : "hidden"}
            >
              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${p.imageRight ? "lg:flex-row" : ""}`}>
                {p.imageRight ? (
                  <>
                    {/* text left */}
                    <div className="flex-1 flex flex-col gap-6 justify-center py-4">
                      <ProductText product={p} />
                    </div>
                    {/* image right */}
                    <div className="flex-1 min-h-[260px] lg:min-h-[340px] rounded-2xl overflow-hidden shrink-0">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* image left */}
                    <div className="flex-1 min-h-[260px] lg:min-h-[340px] rounded-2xl overflow-hidden shrink-0">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    {/* text right */}
                    <div className="flex-1 flex flex-col gap-6 justify-center py-4">
                      <ProductText product={p} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ProductText({ product }: { product: typeof PRODUCTS[number] }) {
  return (
    <>
      <h3 className="font-['Inter',sans-serif] font-bold text-2xl lg:text-3xl tracking-tight" style={{ color: product.color }}>
        {product.name}
      </h3>
      <div className="flex flex-col gap-3">
        <p className="font-['Inter',sans-serif] font-semibold text-base lg:text-lg text-black leading-relaxed">
          {product.tagline}
        </p>
        <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed">
          {product.description}
        </p>
      </div>
      {product.link ? (
        <Link
          to={product.link}
          className="self-start inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-['Montserrat',sans-serif] font-medium text-base tracking-wide hover:opacity-90 transition-opacity"
          style={{ backgroundColor: product.color }}
        >
          {product.btnLabel ?? "TOVÁBB"}
        </Link>
      ) : (
        <button
          className="self-start inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-['Montserrat',sans-serif] font-medium text-base tracking-wide hover:opacity-90 transition-opacity"
          style={{ backgroundColor: product.color }}
        >
          {product.btnLabel ?? "TOVÁBB"}
        </button>
      )}
    </>
  );
}

function AboutSection() {
  return (
    <section id="rolunk" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:max-w-xs xl:max-w-sm shrink-0 flex flex-col gap-4">
          <p className="font-['Montserrat',sans-serif] font-medium text-lg text-[#186d98] tracking-wide uppercase">
            Rólunk
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            A team az{" "}
            <span style={{ color: "#1ceee0" }}>eaisy</span>
            {" "}mögött
          </h2>
        </div>

        <div className="flex-1 font-['Inter',sans-serif] text-base text-black/55 leading-relaxed flex flex-col gap-4">
          <p>
            A Think AI-t 2023-ban alapítottuk Budapesten azzal a céllal, hogy olyan mesterségesintelligencia-alapú megoldásokat fejlesszünk, amelyek nemcsak látványosak, hanem valódi üzleti helyzetekben is megbízhatóan használhatók.
          </p>
          <p>
            A céget hárman indítottuk, három különböző szakmai háttérrel.{" "}
            <strong className="text-black font-bold">Ágó Zoltán</strong> többéves vállalkozói és fejlesztőcég-vezetői tapasztalatot,{" "}
            <strong className="text-black font-bold">Benke Viktor</strong> operatív vezetői szemléletet,{" "}
            <strong className="text-black font-bold">Lederer Balázs</strong> pedig több mint tíz év digitális és reklámügynökségi projektvezetési tapasztalatát hozta a közös munkába. Más területekről érkeztünk, de ugyanazt kerestük: hogyan lehet az AI-ból valóban működő, mérhető üzleti eredményt létrehozni.
          </p>
          <p>
            Ma tízfős, folyamatosan fejlődő csapatként dolgozunk. Fejlesztők, projektmenedzserek és UX-szakemberek építik együtt a megoldásainkat, mert hisszük, hogy egy jó rendszer nem pusztán technológiai kérdés. A használható szoftverhez meg kell érteni az iparágat, a munkafolyamatokat, a felhasználókat és azt az üzleti problémát is, amelyet meg akarunk oldani.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsEaisy />
      <ModulesSection />
      <AboutSection />
    </>
  );
}
