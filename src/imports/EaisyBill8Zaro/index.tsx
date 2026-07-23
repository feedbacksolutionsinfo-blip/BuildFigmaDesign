import svgPaths from "./svg-q4ie57lsnn";

function Frame() {
  return <div className="absolute bg-[#032d32] border-[#082432] border-b border-solid h-[65px] left-0 top-0 w-[860px]" />;
}

function SectionLabel() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[34px]" data-name="SectionLabel">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#3ad6b9] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">Következő lépés</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-center left-[212px] pt-[12px] top-[75px] w-[369px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[36px] text-center text-white whitespace-nowrap">Nézd meg működés közben!</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="absolute grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] left-[212px] pb-[16px] pt-[8px] right-[214px] top-[132px]" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal justify-self-stretch leading-[21.125px] relative self-start shrink-0 text-[14px] text-[rgba(255,255,255,0.68)] text-center">Kérj demót, és megmutatjuk, hogyan alakítja az eaisyBill a szétszórt pénzügyi adatokat átlátható, naprakész vezetői képpé — kevesebb kézi adminisztrációval, több kontrollal.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#005757] h-[328px] left-[36px] rounded-[16px] top-[122px] w-[793px]" data-name="Section">
      <SectionLabel />
      <Heading1 />
      <ParagraphMargin />
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] leading-[0] left-[383px] not-italic text-[#3ad6b9] text-[11px] text-center top-[256px] whitespace-nowrap">
        <p className="leading-[18px] mb-0 whitespace-pre">{`eaisyBill— az AI-támogatott pénzügyi és kontrolling platform, `}</p>
        <p className="leading-[18px] whitespace-pre">{`ami átláthatóvá teszi a céged pénzügyeit. `}</p>
      </div>
    </div>
  );
}

function Text() {
  return <div className="bg-[#ffa8a8] relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text1() {
  return <div className="bg-[#f26b77] relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Text2() {
  return <div className="bg-[#95333c] relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[383.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start pb-[20px] relative size-full">
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[118px] relative shrink-0 w-[383.195px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[28px] relative size-full">
        <div className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#032d32] text-[36px] whitespace-nowrap">
          <p className="leading-[45px] mb-0 whitespace-pre">{`Kinek érdemes `}</p>
          <p className="leading-[45px] whitespace-pre">{`demot kérni? `}</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1968)" id="Icon">
          <path d={svgPaths.p1832a80} id="Vector" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1968">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#032d32] text-[13px] whitespace-nowrap">{`Aki csökkenteni szeretné a kézi pénzügyi adminisztrációt `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.88)] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f26b77] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative size-full">
          <Icon />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1968)" id="Icon">
          <path d={svgPaths.p1832a80} id="Vector" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1968">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#032d32] text-[13px] whitespace-nowrap">Aki túl sok időt tölt számlák, banki tételek és kintlévőségek egyeztetésével</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.88)] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f26b77] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative size-full">
          <Icon1 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1968)" id="Icon">
          <path d={svgPaths.p1832a80} id="Vector" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1968">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#032d32] text-[13px] whitespace-nowrap">Aki valós időben szeretné látni, hol áll a cég pénzügyileg</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.88)] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f26b77] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative size-full">
          <Icon2 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1968)" id="Icon">
          <path d={svgPaths.p1832a80} id="Vector" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1968">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#032d32] text-[13px] whitespace-nowrap">Aki gyorsabb, rendezettebb havi zárást szeretne</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.88)] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f26b77] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative size-full">
          <Icon3 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1968)" id="Icon">
          <path d={svgPaths.p1832a80} id="Vector" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #F26B77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1968">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#032d32] text-[13px] whitespace-nowrap">Aki Excel helyett kontrolláltabb pénzügyi működést keres</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.88)] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f26b77] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative size-full">
          <Icon4 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[51px] pb-[56px] pt-[30px] px-[32px] top-[507px] w-[763px]" data-name="Container">
      <Container1 />
      <Heading />
      <Container2 />
    </div>
  );
}

export default function EaisyBill8Zaro() {
  return (
    <div className="bg-white relative size-full" data-name="eaisyBill-8-zaro">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] left-[820px] not-italic text-[#5f7d95] text-[14px] top-[1170.5px] whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
      <Frame />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] left-[609px] not-italic text-[#6accc3] text-[14px] top-[32.5px] whitespace-nowrap">
        <p className="leading-[normal]">eaisyBill - ÜGYFÉLTÁJÉKOZTATÓ</p>
      </div>
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
      <Section />
      <Container />
    </div>
  );
}