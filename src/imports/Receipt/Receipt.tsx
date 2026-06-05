import svgPaths from "./svg-ejhtkp2qnk";

function Frame() {
  return (
    <div className="absolute h-[11.181px] left-[351px] top-[19px] w-[64.272px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2724 11.1807">
        <g id="Frame 1000004388">
          <path d={svgPaths.p32f3c300} fill="var(--fill-0, #040404)" id="Cellular" />
          <path d={svgPaths.p70c2680} fill="var(--fill-0, #040404)" id="Wifi" />
          <g id="Battery">
            <path d={svgPaths.p4ac6e00} fill="var(--fill-0, #040404)" id="Union" opacity="0.4" />
            <rect fill="var(--fill-0, #040404)" height="7.23445" id="Capacity" rx="1.33333" width="17.7573" x="42.2454" y="1.97303" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusbarIPhoneXLightBackground() {
  return (
    <div className="absolute h-[48px] left-0 top-[16px] w-[440px]" data-name="statusbar/iPhone X light background">
      <Frame />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] left-[37px] not-italic text-[#040404] text-[14px] text-center top-[calc(50%-6px)] tracking-[-0.28px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d="M19 12H5" id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 19L5 12L12 5" id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 px-[24px] py-[16px] top-[72px] w-[440px]">
      <ArrowLeft />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#191c1e] text-[20px]">
        <p className="leading-[32px]">Receipt</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path d={svgPaths.pf059c0} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background">
      <Container />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[96px] items-start pb-[16px] relative shrink-0 w-[80px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Your transaction has been processed.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container1 />
    </div>
  );
}

function SectionSuccessHero() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Section - Success Hero">
      <Margin />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Payment Successful!</p>
      </div>
      <Margin1 />
    </div>
  );
}

function SectionSuccessHeroMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Section - Success Hero:margin">
      <SectionSuccessHero />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PREPAID TOKEN</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center px-[2.77px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] text-center tracking-[3.2px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">4512 • 8894 • 0021 • 3564 •</p>
        <p className="leading-[24px]">7781</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.75 15">
        <g id="Container">
          <path d={svgPaths.p3a0c5400} fill="var(--fill-0, #BC0001)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bc0001] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Copy Token</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[25px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(234,188,180,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Margin2 />
        <Margin3 />
        <Button />
      </div>
    </div>
  );
}

function SectionTokenContainer() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[12px] shrink-0 w-full" data-name="Section - Token Container">
      <div aria-hidden="true" className="absolute border border-[rgba(234,188,180,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function SectionTokenContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Section - Token Container:margin">
      <SectionTokenContainer />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">TOTAL AMOUNT</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[36px] tracking-[-0.96px] whitespace-nowrap">
          <p className="leading-[56px]">₦1,100.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(234,188,180,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[33px] relative size-full">
        <Margin4 />
        <Container6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">METER NUMBER</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">45151438822</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[103.17px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#bc0001] text-[10px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">AEDC</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,218,212,0.3)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Overlay">
      <Container12 />
    </div>
  );
}

function RowMeterNumber() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row: Meter Number">
      <Container8 />
      <Overlay />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">CUSTOMER</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
        <p className="leading-[24px]">ASIN ABIA</p>
      </div>
    </div>
  );
}

function RowCustomer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row: Customer">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">ADDRESS</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
        <p className="leading-[26px] mb-0">HOUSE 41, 6TH AVENUE GALADIMA.</p>
        <p className="leading-[26px]">GWARINPA</p>
      </div>
    </div>
  );
}

function RowAddress() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Row: Address">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">DATE</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
        <p className="leading-[24px]">May 18, 2026</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] w-full">
        <p className="leading-[16px]">09:51 AM</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">REFERENCE</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[12px] uppercase w-full">
        <p className="leading-[16px]">4WG20QGDKEXDI0D</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function GridDateReference() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_59px] relative shrink-0 w-full" data-name="Grid: Date & Reference">
      <Container17 />
      <Container21 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <RowMeterNumber />
        <RowCustomer />
        <RowAddress />
        <GridDateReference />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-w-px opacity-8 relative" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pl-[8px] pr-[8.09px] relative size-full">
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[12px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[16px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[8px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[12px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#191c1e] h-full relative rounded-[9999px] shrink-0 w-[20px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function AuthenticReceiptDecoration() {
  return (
    <div className="relative shrink-0 w-full" data-name="Authentic Receipt Decoration">
      <div aria-hidden="true" className="absolute border-[rgba(149,110,103,0.3)] border-dashed border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pt-[25px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function SectionMainReceiptCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="Section - Main Receipt Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px] shadow-[0px_10px_40px_0px_rgba(247,0,3,0.08)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <HorizontalBorder />
        <Container7 />
        <AuthenticReceiptDecoration />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[600px] pb-[160px] px-[24px] right-0 top-[156px]" data-name="Main">
      <SectionSuccessHeroMargin />
      <SectionTokenContainerMargin />
      <SectionMainReceiptCard />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #FFFBFF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fffbff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Share Receipt</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#eb0003] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(188,0,1,0.2),0px_4px_6px_-4px_rgba(188,0,1,0.2)]" data-name="Button:shadow" />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e6e8ea] content-stretch flex flex-col items-center justify-center py-[16px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Back to Home</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="max-w-[600px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function BottomActionsStickyFooter() {
  return (
    <div className="absolute backdrop-blur-[20px] bottom-[37px] content-stretch flex flex-col h-[152px] items-start left-0 pb-[24px] pt-[25px] px-[24px] w-[440px]" data-name="Bottom Actions (Sticky Footer)">
      <div aria-hidden="true" className="absolute border-[rgba(234,188,180,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

export default function Receipt() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="Receipt">
      <StatusbarIPhoneXLightBackground />
      <Frame1 />
      <Main />
      <BottomActionsStickyFooter />
    </div>
  );
}