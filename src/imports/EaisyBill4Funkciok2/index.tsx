import svgPaths from "./svg-b542f0bjvs";

function Container1() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">KINTLÉVŐSÉG-KEZELÉS</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#4a5565] text-[12px] w-full">Korfa kategóriák (30/60/90+ nap), csoportos felszólító e-mailek, partnerenként mentett e-mail címekkel. Az eaisyBill figyelmeztet, mielőtt a pénz bent ragadna — a felszólítások naplózottak, visszakövethetők.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function ProductFeatureCard() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">11</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] w-[443px]">KÖLTSÉGKATEGÓRIA AZONOSÍTÁS</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4a5565] text-[12px] w-[707px]">
          <span className="leading-[19.5px]">{`Az eaisyBill automatikusan `}</span>
          <span className="leading-[19.5px]">{`kategorizálja a költségeket `}</span>
          <span className="leading-[19.5px]">{`- például anyagköltség, bérleti díj, marketing, IT- vagy bankköltség szerint. `}</span>
          <span className="leading-[19.5px]">{`Valós idejű áttekintést ad a költségszerkezetről — `}</span>
          <span className="leading-[19.5px]">így könnyen követhető</span>
          <span className="leading-[19.5px]">, mire megy el a pénz, kategóriánként.</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function ProductFeatureCard1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">PROFITCENTER AZONOSÍTÁS</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#4a5565] text-[12px] w-full">Automatikusan projektekhez, üzletágakhoz vagy partnerekhez rendeli a bevételeket és költségeket. A profitcenter kimutatás megmutatja, melyik projekt vagy üzletág mennyire nyereséges — nem kell külön Excelben számolgatni.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function ProductFeatureCard2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">13</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">TÁRGYI ESZKÖZ NYILVÁNTARTÓ</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#4a5565] text-[12px] w-full">A tárgyi eszközök nyilvántartása egy kattintással a kapcsolódó számlatételekből indítható. Automatikus értékcsökkenés-számítás a számviteli törvény szerint, eszközkartonok és leltárív generálása — nincs szükség külön nyilvántartó rendszerre.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function ProductFeatureCard3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">AI BÉRADÓ-ASSZISZTENS</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4a5565] text-[12px] w-full">
          <span className="leading-[19.5px]">Az eaisyBill a 2026-os magyar szabályozás szerint támogatja a bérkalkulációt, beleértve a minimálbérre, garantált bérminimumra, SZJA-ra, TB-re és SZOCHO-ra vonatkozó számításokat. A működés GDPR-megfelelő:</span>
          <span className="leading-[19.5px]">{` személyes adatok nem hagyják el a rendszert.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function ProductFeatureCard4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">15</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">SZÉP KÁRTYA FELDOLGOZÁS</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#4a5565] text-[12px] w-[675px]">Az eaisyBill dedikált felületen kezeli a SZÉP Kártyás tranzakciókat: automatikusan összepárosítja a tételeket a kapcsolódó elszámolásokkal, majd a beállított pénzügyi logika szerint kontírozza őket. Így nincs szükség a banki kivonatokkal történő ismétlődő, kézi egyeztetésre.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function ProductFeatureCard5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">16</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">FUTÁRSZOLGÁLATI ELSZÁMOLÁSOK</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#4a5565] text-[12px] w-[675px]">Az eaisyBill automatikusan feldolgozza a GLS, MPL, Mixpack, Fáma, Foxpost és DPD riportokat, majd összeveti a csomagszámokat és az összegeket a kapcsolódó számlákkal. Így könnyebben ellenőrizhető, hogy a teljesítések és elszámolások rendben vannak-e, és eltérés esetén a reklamációhoz szükséges adatok is gyorsan visszakereshetők.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function ProductFeatureCard6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">17</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">MUNKAIDŐ-NYILVÁNTARTÓ</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-[693px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4a5565] text-[12px] w-full">
          <span className="leading-[19.5px]">{`A `}</span>
          <span className="leading-[19.5px]">Mt. 152. § szerinti jelenléti ív, naprakész munkaidő-kimutatás, azonnali visszajelzés a rögzítésről. Nincs több papíralapú jelenléti ív. Hangvezérlésű munkaidő nyilvántartás.</span>
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading7 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function ProductFeatureCard7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#6accc3] opacity-50 relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">18</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005757] text-[14px] whitespace-nowrap">AI ESZKALÁCIÓS RENDSZER</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-[693px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#4a5565] text-[12px] w-full">Automatikusan priorizálja a figyelmet igénylő elemeket, és csak azokat a kérdéses tételeket emeli ki, amelyek valóban humán döntést igényelnek. A rutinszerű egyeztetéseket automatikusan rendezi — neked csak a valódi kivételekkel kell foglalkozni.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading8 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function ProductFeatureCard8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="ProductFeatureCard">
      <div aria-hidden className="absolute border border-[#e2fbf4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)]" />
      <div className="content-stretch flex flex-col items-start px-[21px] py-[11px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[36px] top-[124px] w-[795px]">
      <ProductFeatureCard />
      <ProductFeatureCard1 />
      <ProductFeatureCard2 />
      <ProductFeatureCard3 />
      <ProductFeatureCard4 />
      <ProductFeatureCard5 />
      <ProductFeatureCard6 />
      <ProductFeatureCard7 />
      <ProductFeatureCard8 />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[#032d32] border-[#082432] border-b border-solid h-[65px] left-0 top-0 w-[860px]" />;
}

export default function EaisyBill4Funkciok() {
  return (
    <div className="bg-white relative size-full" data-name="eaisyBill-4-funkciok2">
      <Frame1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] left-[820px] not-italic text-[#5f7d95] text-[14px] top-[1170.5px] whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
      <Frame />
      <div className="absolute bg-[#032d32] h-[29px] left-[32px] top-[18px] w-[137px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 29">
          <g id="Vector">
            <path d={svgPaths.p22aaa000} fill="white" />
            <path d={svgPaths.p13216200} fill="white" />
            <path d={svgPaths.p2a983b00} fill="white" />
            <path d={svgPaths.p37eae500} fill="white" />
            <path d={svgPaths.p476af80} fill="white" />
            <path d={svgPaths.p3e14300} fill="white" />
            <path d={svgPaths.pae44e00} fill="white" />
            <path d={svgPaths.p1664c300} fill="white" />
            <path d={svgPaths.p28cc2800} fill="white" />
            <path d={svgPaths.p38053000} fill="var(--fill-0, #1CEEE0)" />
          </g>
        </svg>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] left-[609px] not-italic text-[#6accc3] text-[14px] top-[32.5px] whitespace-nowrap">
        <p className="leading-[normal]">eaisyBill - ÜGYFÉLTÁJÉKOZTATÓ</p>
      </div>
    </div>
  );
}