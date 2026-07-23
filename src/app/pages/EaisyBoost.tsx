import { Link } from "react-router";
import imgBoost from "@/imports/Mobile/8e5eb0f957911a1b8a542f8c02ebfbed02d9f155.png";

const COLOR = "#701ab7";
const COLOR_LIGHT = "#f3e8fb";

const features = [
  {
    num: "01",
    title: "Quick Post",
    desc: "Néhány lépésben létrehozhatók a különböző felületekre és képarányokra optimalizált posztok – képpel és szöveggel együtt. AI segítségével, a márkád hangjában.",
  },
  {
    num: "02",
    title: "Multi-platform közzététel",
    desc: "Facebook, Instagram, LinkedIn, TikTok – egyetlen felületről kezelheted az összes platformot. Az eaisyBoost elvégzi az optimalizálást minden csatornára.",
  },
  {
    num: "03",
    title: "Hirdetéskezelés",
    desc: "A kampányok összeállítása, elindítása és teljesítménykövetése egyetlen helyen. Valós idejű adatok alapján finomhangolható minden hirdetés.",
  },
  {
    num: "04",
    title: "Tartalomterv és ütemezés",
    desc: "AI-alapú tartalomjavaslatok, szerkesztői naptár és automatikus időzítés – a rendszeres, egységes online jelenlét már nem igényel kreativitást minden nap.",
  },
];

const platforms = [
  { name: "Facebook", color: "#1877F2" },
  { name: "Instagram", color: "#E1306C" },
  { name: "LinkedIn", color: "#0A66C2" },
  { name: "TikTok", color: "#010101" },
  { name: "X / Twitter", color: "#000000" },
  { name: "YouTube", color: "#FF0000" },
];

export default function EaisyBoost() {
  return (
    <div className="bg-[#f6f6f6]">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: COLOR_LIGHT }}>
        <div className="absolute inset-0 opacity-20">
          <img src={imgBoost} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3e8fb] via-[#f3e8fb]/80 to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-32 flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="flex flex-col gap-6 lg:max-w-xl pt-16">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-['Inter',sans-serif] text-black/40 hover:text-black/70 transition-colors w-fit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Vissza a főoldalra
            </Link>
            <p className="font-['Montserrat',sans-serif] font-medium text-sm tracking-widest uppercase" style={{ color: COLOR }}>
              Marketing & Social Media
            </p>
            <h1
              className="font-['Inter',sans-serif] font-bold text-5xl lg:text-6xl tracking-tight leading-none"
              style={{ color: COLOR }}
            >
              eaisyBoost
            </h1>
            <p className="font-['Inter',sans-serif] font-bold text-xl lg:text-2xl text-black leading-snug">
              Következetes social media jelenlét.<br />Posztkészítés pár kattintással.<br />Egyszerűbb hirdetéskezelés.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed">
              A rendszeres posztoláshoz, a márkához illő, trendi közösségi média tartalmakhoz mostantól csupán egy munkatársa lesz szükséged: az eaisyBoostra. A rendszeres, egységes, szemet gyönyörködtető online jelenlét már nem csak azok kiváltsága, akik kreatív vénával rendelkeznek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-['Montserrat',sans-serif] font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
                style={{ backgroundColor: COLOR }}
              >
                KÉRJ DEMOT
              </a>
              <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border font-['Montserrat',sans-serif] font-medium text-sm tracking-wide hover:bg-black hover:text-white hover:border-black transition-colors" style={{ borderColor: COLOR, color: COLOR }}>
                TUDJ MEG TÖBBET
              </button>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: 420 }}>
              <img src={imgBoost} alt="eaisyBoost" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-['Montserrat',sans-serif] font-medium text-xs tracking-widest uppercase text-black/40 text-center mb-8">
            Támogatott platformok
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="px-6 py-3 bg-[#f6f6f6] rounded-full border border-black/5 font-['Inter',sans-serif] font-semibold text-sm" style={{ color: p.color }}>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-[#f6f6f6] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-4 max-w-2xl mb-14">
            <p className="font-['Montserrat',sans-serif] font-medium text-sm tracking-widest uppercase" style={{ color: COLOR }}>
              Főbb funkciók
            </p>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
              Minden, ami egy következetes online jelenléthez kell
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <article key={f.num} className="bg-white rounded-2xl p-8 flex flex-col gap-4 border border-black/5 shadow-sm">
                <span className="font-['Inter',sans-serif] font-extrabold text-5xl tracking-tighter leading-none opacity-20" style={{ color: COLOR }}>
                  {f.num}
                </span>
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight">
                  {f.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-sm text-black/55 leading-relaxed">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / benefit */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col gap-6">
          <p className="font-['Inter',sans-serif] font-extrabold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            "A rendszeres, egységes, szemet gyönyörködtető online jelenlét már nem csak azok kiváltsága, akik kreatív vénával rendelkeznek."
          </p>
          <div className="w-12 h-1 rounded-full mx-auto" style={{ backgroundColor: COLOR }} />
          <p className="font-['Inter',sans-serif] font-medium text-sm text-black/40 tracking-wide uppercase">
            eaisyBoost — THINK AI Kft.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20" style={{ backgroundColor: COLOR }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-white tracking-tight">
              Készen állsz az automatizált social médiára?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-base text-white/70">
              Próbáld ki az eaisyBoost Quick Post funkcióját – az első posztodat pár perc alatt elkészíted.
            </p>
          </div>
          <a
            href="mailto:hello@thinkai.hu"
            className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-white rounded-full font-['Montserrat',sans-serif] font-medium text-sm tracking-wide hover:bg-white/90 transition-colors"
            style={{ color: COLOR }}
          >
            KÉRJ DEMOT
          </a>
        </div>
      </section>
    </div>
  );
}
