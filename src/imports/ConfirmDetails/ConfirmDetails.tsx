import svgPaths from "./svg-774lcrurbc";

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
        <p className="leading-[32px]">Confirm Details</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[36px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">₦1,100.00</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">TOTAL AMOUNT</p>
        </div>
        <Heading />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f3e39] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Ref: 4WG20QGD KEXDI0D</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.75 15">
        <g id="Container">
          <path d={svgPaths.p3a0c5400} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eceef0] relative rounded-[32px] shrink-0 w-[255px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function SectionSummaryHighlightCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Section - Summary Highlight Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_30px_0px_rgba(247,0,3,0.05)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[25px] relative size-full">
          <Container />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.pcf6c580} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Account Info</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container4 />
        <Heading1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Account Type</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">PRE-PAID</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Meter Number</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">45151438822</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Tariff Type</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Standard Residential</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Customer Name</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">ASIN ABIA</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Email</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">iamfarukdeyemi@gmail.com</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Phone Number</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">09073808749</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Address</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">HOUSE 41, 6TH AVENUE</p>
        <p className="leading-[20px]">GALADIMA. GWARINPA</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container6 />
        <Container9 />
        <Container12 />
        <Container15 />
        <Container18 />
        <Container21 />
        <Container24 />
      </div>
    </div>
  );
}

function SectionAccountInfo() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Section - Account Info">
      <div aria-hidden="true" className="absolute border border-[rgba(234,188,180,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function AccountCustomerDetailsBentoStyleGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Account & Customer Details (Bento-style Grid)">
      <SectionAccountInfo />
    </div>
  );
}

function Heading2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Public_Sans:SemiBold',sans-serif] font-semibold items-start justify-between leading-[0] relative shrink-0 text-[#191c1e] text-[12px] tracking-[1.2px] uppercase w-full whitespace-nowrap" data-name="Heading 3">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">BILLING BREAKDOWN</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">Total</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#5f5e5e]">
        <p className="leading-[24px]">PREPAID Energy charge</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#191c1e]">
        <p className="leading-[24px]">₦925.00</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#5f5e5e]">
        <p className="leading-[24px]">VAT @ 7.5%</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#191c1e]">
        <p className="leading-[24px]">₦75.00</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#5f5e5e]">
        <p className="leading-[24px]">Service Charge</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#191c1e]">
        <p className="leading-[24px]">₦100.00</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] pb-[8px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function BreakdownSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Breakdown Section">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative size-full">
        <Heading2 />
        <Container27 />
        <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
          <div aria-hidden="true" className="absolute border-[rgba(234,188,180,0.4)] border-dashed border-t inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Total Due</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">₦1,100.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BreakdownSection />
      <HorizontalBorder />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">{`Confirm & Pay`}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f70003] flex-[1_0_0] h-[56px] max-w-[512px] min-w-px relative rounded-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center max-w-[inherit] py-[16px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(188,0,1,0.2),0px_4px_6px_-4px_rgba(188,0,1,0.2)]" data-name="Button:shadow" />
        <Container33 />
      </div>
    </div>
  );
}

function FixedBottomActionBar() {
  return (
    <div className="absolute backdrop-blur-[12px] content-stretch flex items-start justify-center left-0 pb-[24px] pt-[25px] px-[24px] top-[761px] w-[440px]" data-name="Fixed Bottom Action Bar">
      <div aria-hidden="true" className="absolute border-[rgba(234,188,180,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 max-w-[512px] px-[24px] right-0 top-[156px]" data-name="Main">
      <SectionSummaryHighlightCard />
      <AccountCustomerDetailsBentoStyleGrid />
      <Frame2 />
      <FixedBottomActionBar />
    </div>
  );
}

export default function ConfirmDetails() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="Confirm details">
      <StatusbarIPhoneXLightBackground />
      <Frame1 />
      <Main />
    </div>
  );
}