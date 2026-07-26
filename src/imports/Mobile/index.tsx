import svgPaths from "./svg-5uu58tfhk2";
import imgAdobeStockCa36D73123594Eaf9Aba22Cf4B21158912 from "./c27b1f201f6864f48251e9fca46ba94e8e388d54.webp";
import imgAdobeStock46775264611 from "./b9f75c0a78805e573fd7ba6264690ff7fc119464.webp";
import imgAdobeStock1715461911 from "./faf98039103ec19a5a8cea4bb3b15bb435e98f27.webp";
import imgAdobeStock5945451222 from "./0ed95b9c10d6f138aa05178ee56582c704d965a2.webp";
import imgAdobeStock2619825271 from "./8e5eb0f957911a1b8a542f8c02ebfbed02d9f155.webp";
import imgAdobeStock5945451221 from "./84645b8a5ef11283d6e6443763bb76a2b8eab618.webp";
import imgAdobeStock7965650301 from "./bfdac52013fd058c16676a0d83a329a0a460bdb9.webp";

function Nav() {
  return (
    <nav className="[word-break:break-word] bg-[rgba(0,0,0,0.05)] content-stretch flex font-['Montserrat:Medium',sans-serif] gap-[22px] h-[33px] items-center justify-center leading-[0] not-italic pb-[16px] pt-[15px] px-[40px] relative rounded-[40px] shadow-[0px_0.5px_2.9px_0px_rgba(0,0,0,0.25)] shrink-0 text-[8px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.04px] w-[323px] whitespace-nowrap" data-name="Nav">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45]">eaisy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45]">Termékek</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45]">Rólunk</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45]">Kapcsolat</p>
      </div>
    </nav>
  );
}

function Header1() {
  return (
    <header className="content-stretch flex items-center justify-center pb-[9px] pt-[37px] relative shrink-0 w-full" data-name="Header 1">
      <div className="absolute h-[17px] left-[148px] top-[11px] w-[80px]" data-name="LOGO">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 17">
          <g id="LOGO">
            <path d={svgPaths.p2dda4500} fill="black" />
            <path d={svgPaths.p9f13400} fill="black" />
            <path d={svgPaths.p25a06300} fill="black" />
            <path d={svgPaths.p23b2ba80} fill="black" />
            <path d={svgPaths.p32667980} fill="black" />
            <path d={svgPaths.p3cc48b00} fill="black" />
            <path d={svgPaths.p3128d200} fill="black" />
            <path d={svgPaths.p2af52f00} fill="black" />
            <path d={svgPaths.p1fc6e780} fill="black" />
            <path d={svgPaths.pb6f800} fill="var(--fill-0, #1CEEE0)" />
          </g>
        </svg>
      </div>
      <Nav />
      <div className="absolute left-[314px] size-[33px] top-[37px]" data-name="plus-circle">
        <div className="absolute inset-0 overflow-clip" data-name="plus-circle">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-1.82%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5 28.5">
                <g id="Icon">
                  <path d={svgPaths.p220f7e00} fill="black" />
                  <path d={svgPaths.p3d6a8d0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[595px] size-[43px] top-[25px]" data-name="plus-circle">
        <div className="absolute inset-0 overflow-clip" data-name="plus-circle">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-1.4%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8333 36.8333">
                <path d={svgPaths.p898a900} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[28px] top-[11px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.7)] tracking-[-0.04px] w-full whitespace-pre-wrap">
        <p className="leading-[1.32] mb-0">MEGOLDÁSOK A VÁLLALKOZÁSOD PROBLÉMÁIRA</p>
        <p className="leading-[1.32]">{` - A PÉNZÜGYTŐL A MARKETINGIG`}</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-black relative rounded-[30px] shrink-0 w-full" data-name="Primary button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">FEDEZD FEL</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function SecondaryButton() {
  return (
    <button className="bg-white relative rounded-[30px] shrink-0 w-full" data-name="Secondary button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-center text-ellipsis tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">KÉRJ DEMOT</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Buttons() {
  return (
    <div className="absolute bottom-[21px] content-stretch cursor-pointer flex flex-col gap-[16px] items-center justify-center left-[24px] right-[24px]" data-name="Buttons">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[25px] left-[193px] top-[198px] w-[158px]" />;
}

function Hero() {
  return (
    <section className="block h-[384px] relative shrink-0 w-full" data-name="Hero 1">
      <div className="absolute aspect-[1280/584] left-0 right-0 top-[51px]" data-name="AdobeStock_ca36d731-2359-4eaf-9aba-22cf4b211589 (1) 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" loading="lazy" decoding="async" className="absolute h-[146.12%] left-0 max-w-none top-[-36.33%] w-full" src={imgAdobeStockCa36D73123594Eaf9Aba22Cf4B21158912} />
        </div>
      </div>
      <Text />
      <Buttons />
      <Frame3 />
      <div className="-translate-x-1/2 absolute h-[88px] left-[calc(50%+0.5px)] top-[41px] w-[234px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 88">
          <g id="Vector">
            <path d={svgPaths.p394ca180} fill="url(#paint0_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint1_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint2_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint3_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint4_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint5_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint6_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint7_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint8_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint9_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint10_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint11_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint12_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint13_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint14_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint15_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint16_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint17_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint18_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint19_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint20_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint21_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint22_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint23_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint24_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint25_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint26_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint27_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint28_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint29_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint30_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint31_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint32_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint33_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint34_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint35_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint36_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint37_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint38_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint39_linear_1_483)" />
            <path d={svgPaths.p394ca180} fill="url(#paint40_linear_1_483)" />
            <path d={svgPaths.p1e736c00} fill="url(#paint41_linear_1_483)" />
            <path d={svgPaths.p941ea80} fill="url(#paint42_linear_1_483)" />
            <path d={svgPaths.p10218400} fill="url(#paint43_linear_1_483)" />
            <path d={svgPaths.p27a21f00} fill="url(#paint44_linear_1_483)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_483" x1="20.9032" x2="240.463" y1="54.7105" y2="54.5838">
              <stop stopColor="#B556B0" />
              <stop offset="0.5" stopColor="#186D98" />
              <stop offset="1" stopColor="#082432" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

function Component() {
  return (
    <div className="absolute h-[35px] left-[24px] top-[279px] w-[160px]" data-name="100% 1">
      <div className="absolute bg-[rgba(217,217,217,0.2)] border-[rgba(0,0,0,0.08)] border-b border-solid h-[35px] left-0 rounded-[7px] top-0 w-[160px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[25px] justify-center leading-[0] left-[79px] not-italic text-[8px] text-black text-center top-[17.5px] w-[158px]">
        <p className="leading-[6px]">100% pénzvisszafizetési garancia</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[35px] left-[192px] top-[279px] w-[159px]" data-name="100% 2">
      <div className="absolute bg-[rgba(217,217,217,0.2)] border-[rgba(0,0,0,0.08)] border-b border-solid h-[35px] left-0 rounded-[7px] top-0 w-[159px]" />
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[5px_1px_5px_0] justify-center leading-[0] not-italic text-[8px] text-black text-center">
        <p className="leading-[6px]">100% GDPR kompatibilis</p>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#186d98] text-[0px] tracking-[-0.07px] w-full">
        <p className="text-[14px]">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[1.45] not-italic">{`MI AZ `}</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.45] text-[#186d98]">eaisy</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[1.45] not-italic">{` ? `}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black tracking-[-0.32px] w-full whitespace-pre-wrap">
        <h3 className="block leading-[1.2] mb-0">{`Könnyebb működés. Nagyobb `}</h3>
        <h3 className="block leading-[1.2]">szabadság.</h3>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <section className="h-[447px] relative shrink-0 w-full" data-name="Text 2">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic pb-[56px] pt-[31px] px-[24px] relative size-full">
        <Headline />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.45)] tracking-[-0.08px] w-full">
          <p className="leading-[1.45]">{`Már biztosan használsz valamilyen AI-eszközt a vállalkozásodban. És valószínűleg jól is működik – egy adott területen, egy konkrét problémát megoldva. Mi nem különálló AI-funkciókban gondolkodunk: az eaisy moduljai és integrációi olyan hiányzó láncszemek a vállalkozásodban, amelyek összekapcsolják és mozgásban tartják meglévő rendszereidet, munkafolyamataidat. `}</p>
        </div>
      </div>
    </section>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[22px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[46px] justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[#1ceee0] text-[64px] text-left tracking-[-5.12px] w-[78px]">
        <p className="leading-[25px]">01</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-left w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
        <h5 className="block leading-[1.45]">Átfogó megoldások</h5>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.4]">{`Az eaisy modulok a vállalkozás fő működési területeit támogatják a pénzügyektől és az ügyfélkommunikációtól az értékesítésen át egészen a marketingig. `}</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[30px] px-[24px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <article className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 1">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <Body />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[22px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[46px] justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[#1ceee0] text-[64px] text-left tracking-[-5.12px] w-[93px]">
        <p className="leading-[25px]">02</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[9px] items-start leading-[0] not-italic relative shrink-0 text-left w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
        <h5 className="block leading-[1.45]">{`Teljes folyamat `}</h5>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.4]">Összekapcsolják a meglévő rendszereket, adatforrásokat, kommunikációs csatornákat és információkat, majd ezeket végigkövethető, automatizált üzleti folyamatokká rendezik.</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[30px] px-[24px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <article className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 2">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
        <Body1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[22px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[46px] justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[#1ceee0] text-[64px] text-left tracking-[-5.12px] w-[85px]">
        <p className="leading-[25px]">03</p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-left w-full" data-name="Body">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
        <h5 className="block leading-[1.45]">Hibrid működés</h5>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.4]">Egyszerre rugalmas és kiszámítható: az AI gyorsasága mellett szabályalapú automatizmusok biztosítják a pontosságot ott, ahol a folyamatoknak megbízhatóan kell végigfutniuk.</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[30px] px-[24px] relative size-full">
          <Body3 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <article className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 3">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame2 />
        <Body2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function FeatureCards() {
  return (
    <button className="cursor-pointer h-[1004px] relative shrink-0 w-full" data-name="Feature cards 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[41px] pt-[40px] px-[24px] relative size-full">
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </div>
    </button>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#186d98] text-[0px] tracking-[-0.07px] w-full">
        <p className="text-[20px]">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[1.45] not-italic">{`MIBEN SEGÍTENEK AZ `}</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.45] text-[#186d98]">eaisy</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[1.45] not-italic">{` MODULJAI? `}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black tracking-[-0.32px] w-full">
        <h3 className="block leading-[1.2]">A te vállalkozásodban hol akadnak el a folyamatok?</h3>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <section className="h-[754px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(210, 252, 249, 0.6) 0%, rgba(210, 252, 249, 0.6) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Text 1">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic pb-[50px] pt-[38px] px-[24px] relative size-full">
        <Headline1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.45)] tracking-[-0.09px] w-full whitespace-pre-wrap">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] mb-0">{`Moduljaink a vállalkozás fő működési területeit támogatják a pénzügyektől és a dokumentumkezeléstől az ügyfélkommunikáción és az értékesítésen át egészen a marketingig. Összekapcsolják a meglévő rendszereket, adatforrásokat, kommunikációs csatornákat és információkat, majd ezeket végigkövethető, automatizált üzleti folyamatokká rendezik. `}</p>
          <p className="leading-[1.45] mb-0">​</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45]">Az eaisy moduljai külön-külön is használhatók, együtt pedig egységes, fokozatosan bővíthető cégműködési rendszert alkotnak.</p>
        </div>
      </div>
    </section>
  );
}

function Nav1() {
  return (
    <nav className="[word-break:break-word] backdrop-blur-[35px] content-center flex flex-wrap font-['Montserrat:Light',sans-serif] gap-[27px_40px] items-center justify-center leading-[0] not-italic px-[21px] py-[16px] relative rounded-[20px] shrink-0 text-[12px] text-center tracking-[-0.06px] w-[329px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)" }} data-name="Nav">
      <div className="flex flex-col justify-center relative shrink-0 text-[#bbfaf6]">
        <p className="leading-[1.45]">Minden terület</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white">
        <p className="leading-[1.45]">Pénzügy, könyvelés</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white">
        <p className="leading-[1.45]">Ügyfélkommunikáció</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white">
        <p className="leading-[1.45]">Értékesítés</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white">
        <p className="leading-[1.45]">Marketing</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white">
        <p className="leading-[1.45]">Iktatás</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-white">
        <p className="leading-[1.45]">HR</p>
      </div>
    </nav>
  );
}

function Header2() {
  return (
    <header className="content-stretch flex items-center justify-center pb-[24px] pt-[46px] relative shrink-0 w-[359px]" data-name="Header 2">
      <Nav1 />
      <div className="absolute h-[33px] left-[38px] rounded-[40px] top-[54px] w-[127px]">
        <div aria-hidden className="absolute border border-[#8cfff6] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </div>
    </header>
  );
}

function Text5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#05512a] text-[24px] tracking-[-0.48px] w-full">
        <h4 className="block leading-[1.2]">eaisyBill</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] mb-0 text-black">A pénzügyei végre egy helyen. Automatikusan. Valós időben.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] mb-0">Az eaisyBill egy mesterséges intelligenciával támogatott pénzügyi és kontrolling platform, amely a vállalkozás szétszórt pénzügyi adataiból egységes, naprakész és ellenőrizhető működési képet épít.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5]">Segít automatizálni a pénzügyi háttérfolyamatokat, minimálizálja a manuális adminisztrációt, és olyan vezetői rálátást ad, amely alapján a cég nem utólag, hanem menet közben tud dönteni, beavatkozni és tervezni.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#05512a] cursor-pointer relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[18px] text-center text-ellipsis text-white tracking-[-0.09px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">TOVÁBB</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text5 />
      <Button />
    </div>
  );
}

function Row() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[32px] pt-[30px] px-[24px] relative size-full">
          <div className="h-[218px] relative rounded-[10px] shrink-0 w-[327px]" data-name="AdobeStock_467752646 (1) 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
              <img alt="" loading="lazy" decoding="async" className="absolute h-[109.18%] left-[-2.6%] max-w-none top-[-0.33%] w-[107.09%]" src={imgAdobeStock46775264611} />
            </div>
          </div>
          <Content />
        </div>
      </div>
    </li>
  );
}

function Text6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#186d98] text-[24px] tracking-[-0.48px] w-full">
        <h4 className="block leading-[1.2]">eaisyDesk</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans:Regular',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[1.45] mb-0 text-black">{`Nem chatbot. Nem egy újabb AI ügyfélszolgálat. Intelligens munkatárs, aki 24/7 dolgozik. `}</p>
        <p className="leading-[1.45] mb-0">​</p>
        <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[1.5]">{`Az eaisyDesk egy AI-támogatott, omnichannel ügyfélkommunikációs rendszer, amelyben minden csatornán egy AI asszisztens válaszol az ügyfeleknek. Időpontot foglal, értesítést küld, válaszol hívásokra, social media üzenetekre - és ha kell, azonnal eszkalál élő kollégának. Sőt, kimenő kommunikációt és kampányokat is indít. `}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-[#186d98] cursor-pointer h-[50px] relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[18px] text-center text-ellipsis text-white tracking-[-0.09px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">TOVÁBB</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text6 />
      <Button1 />
    </div>
  );
}

function Row1() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[32px] relative size-full">
          <div className="h-[213px] relative rounded-[10px] shrink-0 w-[327px]" data-name="AdobeStock_171546191 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
              <img alt="" loading="lazy" decoding="async" className="absolute h-[102.27%] left-[-0.1%] max-w-none top-[-0.03%] w-full" src={imgAdobeStock1715461911} />
            </div>
          </div>
          <Content1 />
        </div>
      </div>
    </li>
  );
}

function Feature() {
  return (
    <ul className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Feature 1">
      <Row />
      <Row1 />
    </ul>
  );
}

function Text7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#b70071] text-[24px] tracking-[-0.48px] w-full">
        <h4 className="block leading-[1.2]">eaisyCRM</h4>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">Az érdeklődőtől a visszatérő ügyfélig. Minden kapcsolat egy helyen.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[rgba(0,0,0,0.55)]">{`Ügyfél- és értékesítéskezelő rendszer, amely egységesen kezeli a kapcsolati adatokat, az érdeklődéseket, az értékesítési lehetőségeket és a kapcsolódó feladatokat. Átlátható értékesítési folyamatot épít, segíti az utánkövetést, automatizálja az ismétlődő teendőket, és megmutatja, mely ügyfelekre vagy lehetőségekre érdemes fókuszálni. `}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <button className="bg-[#b70071] cursor-pointer relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">TOVÁBB</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text7 />
      <Button2 />
    </div>
  );
}

function Row2() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[32px] pt-[30px] px-[24px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[213px] relative rounded-[30px] w-[327px]" data-name="AdobeStock_594545122 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                  <img alt="" loading="lazy" decoding="async" className="absolute h-[102.26%] left-0 max-w-none top-[-0.02%] w-full" src={imgAdobeStock5945451222} />
                </div>
              </div>
            </div>
          </div>
          <Content2 />
        </div>
      </div>
    </li>
  );
}

function Text8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#701ab7] text-[24px] tracking-[-0.48px] w-full">
        <h4 className="block leading-[1.2]">eaisyBoost</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] mb-0 text-black">Következetes social media jelenlét. Posztkészítés pár kattintással. Egyszerűbb hirdetéskezelés.</p>
        <p className="leading-[1.45] mb-0">​</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45]">{`A rendszeres posztoláshoz, a márkához illő, trendi közösségi média tartalmakhoz mostantól csupán egy munkatársa lesz szükséged: az eaisyBoostra. A Quick Post funkcióval néhány lépésben létrehozhatók a különböző felületekre és képarányokra optimalizált posztok (kép és szöveg), a hirdetéskezelési funkciók pedig támogatják a kampányok összeállítását, elindítását és követését. A rendszeres, egységes, szemet gyönyörködtető online jelenlét már nem csak azok kiváltsága, akik kreatív vénával rendelkeznek. `}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <button className="bg-[#701ab7] cursor-pointer h-[50px] relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">TOVÁBB</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text8 />
      <Button3 />
    </div>
  );
}

function Row3() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[32px] relative size-full">
          <div className="aspect-[483/315] relative rounded-[30px] shrink-0 w-full" data-name="AdobeStock_261982527 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
              <img alt="" loading="lazy" decoding="async" className="absolute h-[102.27%] left-0 max-w-none top-[-0.03%] w-full" src={imgAdobeStock2619825271} />
            </div>
          </div>
          <Content3 />
        </div>
      </div>
    </li>
  );
}

function Feature1() {
  return (
    <ul className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Feature 2">
      <Row2 />
      <Row3 />
    </ul>
  );
}

function Text9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#150f87] text-[24px] tracking-[-0.48px] w-full">
        <h4 className="block leading-[1.2]">eaisyDocs</h4>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">Minden dokumentum a helyén. Automatikusan iktatva. Könnyen visszakereshetően.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[rgba(0,0,0,0.55)]">Dokumentumkezelő és iktatási rendszer, amely automatizálja a beérkező dokumentumok érkeztetését, felismerését, kategorizálását és iktatását. A fájlokat a megfelelő ügyhöz, partnerhez vagy folyamathoz kapcsolja, egységes nyilvántartást hoz létre, és gyors visszakeresést biztosít. A kapcsolódó feladatok, státuszok és jóváhagyási lépések kezelésével nemcsak tárolja a dokumentumokat, hanem a teljes dokumentumfolyamatot is átláthatóbbá teszi.</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <button className="bg-[#150f87] cursor-pointer relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">TOVÁBB</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text9 />
      <Button4 />
    </div>
  );
}

function Row4() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[32px] pt-[30px] px-[24px] relative size-full">
          <div className="h-[213px] relative rounded-[30px] shrink-0 w-[327px]" data-name="AdobeStock_594545122 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
              <img alt="" loading="lazy" decoding="async" className="absolute h-full left-[-15.79%] max-w-none top-0 w-[115.84%]" src={imgAdobeStock5945451221} />
            </div>
          </div>
          <Content4 />
        </div>
      </div>
    </li>
  );
}

function Text10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c74c71] text-[24px] tracking-[-0.48px] w-full">
        <h4 className="block leading-[1.2]">eaisyHR</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] mb-0 text-black">Kevesebb HR-adminisztráció. Átláthatóbb csapatműködés. Több idő az emberekre.</p>
        <p className="leading-[1.45] mb-0">​</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45]">Az eaisyHR egy AI-támogatott humánerőforrás-menedzsment rendszer, amely egy helyen segíti a munkavállalói adatok, dokumentumok, szabadságok, munkaidő-nyilvántartások és belső HR-folyamatok kezelését. Automatizálja az ismétlődő adminisztratív feladatokat, támogatja a beléptetési és utánkövetési folyamatokat, valamint átláthatóbbá teszi a csapattal kapcsolatos teendőket és információkat.</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <button className="bg-[#c74c71] cursor-pointer h-[50px] relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden text-ellipsis">Érdekel</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text10 />
      <Button5 />
    </div>
  );
}

function Row5() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[80px] pt-[32px] px-[24px] relative size-full">
          <div className="aspect-[483/314] relative rounded-[30px] shrink-0 w-full" data-name="AdobeStock_796565030 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
              <img alt="" loading="lazy" decoding="async" className="absolute h-[102.6%] left-0 max-w-none top-[-2.57%] w-full" src={imgAdobeStock7965650301} />
            </div>
          </div>
          <Content5 />
        </div>
      </div>
    </li>
  );
}

function Feature2() {
  return (
    <ul className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Feature 3">
      <Row4 />
      <Row5 />
    </ul>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center relative shrink-0 text-[#186d98] text-[20px] tracking-[-0.1px] w-full">
        <p className="leading-[1.45]">RÓLUNK</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black tracking-[-0.32px] w-full">
        <h3>
          <span className="leading-[1.2]">{`A team az `}</span>
          <span className="leading-[1.2] text-[#1ceee0]">eaisy</span>
          <span className="leading-[1.2]">{` mögött`}</span>
        </h3>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <section className="relative shrink-0 w-full" data-name="Text 3">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic pb-[80px] px-[24px] relative size-full">
        <Headline2 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
          <p className="leading-[1.45] mb-0">A Think AI-t 2023-ban alapítottuk Budapesten azzal a céllal, hogy olyan mesterségesintelligencia-alapú megoldásokat fejlesszünk, amelyek nemcsak látványosak, hanem valódi üzleti helyzetekben is megbízhatóan használhatók.</p>
          <p className="leading-[1.45] mb-0">​</p>
          <p className="mb-0">
            <span className="leading-[1.45]">{`A céget hárman indítottuk, három különböző szakmai háttérrel. `}</span>
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic">Ágó Zoltán</span>
            <span className="leading-[1.45]">{` többéves vállalkozói és fejlesztőcég-vezetői tapasztalatot, `}</span>
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic">Benke Viktor</span>
            <span className="leading-[1.45]">{` operatív vezetői szemléletet, `}</span>
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic">Lederer Balázs</span>
            <span className="leading-[1.45]">{` pedig több mint tíz év digitális és reklámügynökségi projektvezetési tapasztalatát hozta a közös munkába. Más területekről érkeztünk, de ugyanazt kerestük: hogyan lehet az AI-ból valóban működő, mérhető üzleti eredményt létrehozni.`}</span>
          </p>
          <p className="leading-[1.45] mb-0">​</p>
          <p className="leading-[1.45]">Ma tízfős, folyamatosan fejlődő csapatként dolgozunk. Fejlesztők, projektmenedzserek és UX-szakemberek építik együtt a megoldásainkat, mert hisszük, hogy egy jó rendszer nem pusztán technológiai kérdés. A használható szoftverhez meg kell érteni az iparágat, a munkafolyamatokat, a felhasználókat és azt az üzleti problémát is, amelyet meg akarunk oldani.</p>
        </div>
      </div>
    </section>
  );
}

function Company() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[75px]" data-name="Company">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] w-[123px]">
        <p className="leading-[1.45]">THINK AI Kft.</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Company />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] w-[min-content]">
        <p className="leading-[1.45]">{`The future was yesterday. We are tomorrow. `}</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Text12 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start pb-[8px] relative shrink-0 w-full" data-name="Header">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">ÍRJ NEKÜNK!</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">hello@thinkai.hu</p>
      </div>
    </nav>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Nav">
      <Column />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start py-[64px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Content6 />
      <Nav2 />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#082432] relative shrink-0 w-full" data-name="Footer 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-baseline px-[24px] relative size-full">
          <Container />
        </div>
      </div>
    </footer>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Header1 />
      <Hero />
      <Component />
      <Component1 />
      <Text2 />
      <FeatureCards />
      <Text4 />
      <Header2 />
      <Feature />
      <Feature1 />
      <Feature2 />
      <Text11 />
      <Footer />
    </div>
  );
}