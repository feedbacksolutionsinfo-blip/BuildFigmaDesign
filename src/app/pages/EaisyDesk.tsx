import { Link } from "react-router";
import imgDesk from "@/imports/Mobile/faf98039103ec19a5a8cea4bb3b15bb435e98f27.png";

const COLOR = "#186d98";
const COLOR_LIGHT = "#DFFFFD";

const features = [
  {
    num: "01",
    title: "Omnichannel AI asszisztens",
    desc: "Egyetlen AI asszisztens, aki minden csatornán jelen van: e-mail, chat, telefon, social media. Az ügyfelek a számukra legkényelmesebb csatornán érhetnek el téged – az eaisyDesk mindig ott van.",
  },
  {
    num: "02",
    title: "Időpontfoglalás és értesítések",
    desc: "Az eaisyDesk önállóan kezeli az időpontfoglalásokat, visszaigazolásokat és emlékeztetőket. Nincs több kézzel kezelt naptár – minden automatikusan szinkronizál.",
  },
  {
    num: "03",
    title: "Intelligens eszkaláció",
    desc: "Ha a szituáció emberi beavatkozást igényel, az eaisyDesk azonnal jelzi az érintett kolléga számára, és átadja az összes előzményt – kontextus és várakozás nélkül.",
  },
  {
    num: "04",
    title: "Kimenő kampányok",
    desc: "Nem csak bejövő kommunikáció: az eaisyDesk képes proaktív üzeneteket, emlékeztetőket és kampányokat küldeni az ügyfeleknek a megfelelő időpontban és csatornán.",
  },
];

const channels = [
  { icon: "💬", label: "Live chat" },
  { icon: "📧", label: "E-mail" },
  { icon: "📞", label: "Telefon" },
  { icon: "📱", label: "Social media" },
  { icon: "💼", label: "WhatsApp" },
  { icon: "🔔", label: "Push értesítés" },
];

export default function EaisyDesk() {
  return (
    <div className="bg-[#F8F5F8]">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: COLOR_LIGHT }}>
        <div className="absolute inset-0 opacity-20">
          <img src={imgDesk} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#DFFFFD] via-[#DFFFFD]/80 to-transparent" />
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
              Ügyfélkommunikáció
            </p>
            <h1
              className="font-['Inter',sans-serif] font-bold text-5xl lg:text-6xl tracking-tight leading-none"
              style={{ color: COLOR }}
            >
              eaisyDesk
            </h1>
            <p className="font-['Inter',sans-serif] font-semibold text-xl lg:text-2xl text-black leading-snug">
              Nem chatbot. Nem egy újabb AI ügyfélszolgálat.<br />Intelligens munkatárs, aki 24/7 dolgozik.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed">
              Az eaisyDesk egy AI-támogatott, omnichannel ügyfélkommunikációs rendszer, amelyben minden csatornán egy AI asszisztens válaszol az ügyfeleknek. Időpontot foglal, értesítést küld, válaszol hívásokra, social media üzenetekre – és ha kell, azonnal eszkalál élő kollégának.
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
              <img src={imgDesk} alt="eaisyDesk" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-['Montserrat',sans-serif] font-medium text-xs tracking-widest uppercase text-black/40 text-center mb-8">
            Minden csatornán jelen van
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {channels.map((ch) => (
              <div key={ch.label} className="flex items-center gap-2.5 px-5 py-3 bg-[#F8F5F8] rounded-full border border-black/5">
                <span className="text-xl">{ch.icon}</span>
                <span className="font-['Inter',sans-serif] font-medium text-sm text-black/70">{ch.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-[#F8F5F8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-4 max-w-2xl mb-14">
            <p className="font-['Montserrat',sans-serif] font-medium text-sm tracking-widest uppercase" style={{ color: COLOR }}>
              Főbb funkciók
            </p>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
              Egy AI, aki valóban dolgozik helyetted
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

      {/* Stats */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "24/7", label: "Elérhető, minden nap" },
              { value: "< 2s", label: "Átlagos válaszidő" },
              { value: "95%+", label: "Ügyfélelégedettség" },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col gap-2">
                <p className="font-['Inter',sans-serif] font-extrabold text-5xl tracking-tight" style={{ color: COLOR }}>
                  {stat.value}
                </p>
                <p className="font-['Inter',sans-serif] font-medium text-sm text-black/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20" style={{ backgroundColor: COLOR }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-white tracking-tight">
              Készen állsz egy igazi AI munkatársra?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-base text-white/70">
              Megmutatjuk, hogyan venné át az eaisyDesk az ügyfélkommunikáció terheit a te vállalkozásodban.
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
