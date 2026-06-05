import svgPaths from "./svg-ixnc1b5yhn";

function Frame1() {
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
      <Frame1 />
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 px-[24px] py-[16px] top-[76px] w-[440px]">
      <ArrowLeft />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#191c1e] text-[20px]">
        <p className="leading-[32px]">Transaction History</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(95,94,94,0.5)] w-full">
          <p className="leading-[normal]">Search by token or reference...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[49px] pr-[17px] py-[15px] relative size-full">
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(234,188,180,0.3)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function VuesaxLinearSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/search-normal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search-normal">
          <path d={svgPaths.p2f3c4080} id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1a875000} id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search Bar">
      <Input />
      <div className="-translate-y-1/2 absolute left-[16px] size-[20px] top-[calc(50%+0.33px)]" data-name="vuesax/linear/search-normal">
        <VuesaxLinearSearchNormal />
      </div>
    </div>
  );
}

function SectionControlsSearch() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Section - Controls & Search">
      <SearchBar />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[41px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-full">
        <p className="leading-[20px]">Sort by</p>
      </div>
    </div>
  );
}

function VuesaxLinearSort() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/sort">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d="M2 4.66667H14" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.2" />
          <path d="M4 8H12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.2" />
          <path d="M6.66667 11.3333H9.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.2" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f70003] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <Text />
      <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/sort">
        <VuesaxLinearSort />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[30px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-full">
        <p className="leading-[20px]">Filter</p>
      </div>
    </div>
  );
}

function VuesaxLinearFilter() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/filter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter">
          <path d={svgPaths.p15235380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.2" />
          <path d="M7.28667 1.4L4 6.66667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute left-0 size-[16px] top-0" data-name="vuesax/linear/filter">
        <VuesaxLinearFilter />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f70003] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <Text1 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-full">
      <SectionControlsSearch />
      <Frame4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[1.2px] uppercase w-full">
          <p className="leading-[16px]">MAY 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,218,212,0.2)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Overlay">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Wallet Top-up</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">May 28, 2026 • 11:20 AM</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[158px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Overlay />
        <Container3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₦12,000.00</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex flex-col items-start px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b45309] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PENDING</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Background />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <Container7 />
        <Margin />
      </div>
    </div>
  );
}

function TransactionCard2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] h-[102px] relative rounded-[24px] shrink-0 w-full" data-name="Transaction Card 3">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(247,0,3,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container1 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#fbe3e4] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Ikeja Electric •</p>
        <p className="leading-[24px]">45151438822</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] w-[164px]">
        <p className="leading-[20px]">May 24, 2026 • 09:42 AM</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background1 />
        <Container11 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">-₦5,000</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#047857] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">SUCCESSFUL</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <Container15 />
        <Margin1 />
      </div>
    </div>
  );
}

function TransactionCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Transaction Card 1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(247,0,3,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container9 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TransactionCard />
    </div>
  );
}

function SectionMonthGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Month Group 1">
      <Heading />
      <TransactionCard2 />
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[1.2px] uppercase w-full">
          <p className="leading-[16px]">APRIL 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,218,212,0.2)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Overlay">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Wallet Top-up</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">April 28, 2026 • 11:20 AM</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[161.75px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Overlay1 />
        <Container19 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">+₦20,000</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#047857] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">SUCCESSFUL</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Background3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <Container23 />
        <Margin2 />
      </div>
    </div>
  );
}

function TransactionCard1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] h-[102px] relative rounded-[24px] shrink-0 w-full" data-name="Transaction Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(247,0,3,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[17px] pr-[16.99px] py-[17px] relative size-full">
          <Container17 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fbe3e4] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Background">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Ibadan Electricity •</p>
        <p className="leading-[24px]">99002233114</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">April 05, 2026 • 08:00 AM</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[167.88px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background4 />
        <Container26 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₦5,500.00</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[12px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">FAILED</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Background5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <Container30 />
        <Margin3 />
      </div>
    </div>
  );
}

function TransactionCard3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] opacity-70 relative rounded-[24px] shrink-0 w-full" data-name="Transaction Card 4">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(247,0,3,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container24 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <TransactionCard1 />
      <TransactionCard3 />
    </div>
  );
}

function SectionMonthGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Month Group 2">
      <Heading1 />
      <Container16 />
    </div>
  );
}

function Timeline() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Timeline">
      <SectionMonthGroup />
      <SectionMonthGroup1 />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 max-w-[768px] px-[24px] top-[160px] w-[440px]" data-name="Main">
      <Frame3 />
      <Timeline />
    </div>
  );
}

export default function History() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="History">
      <StatusbarIPhoneXLightBackground />
      <Frame2 />
      <Main />
    </div>
  );
}