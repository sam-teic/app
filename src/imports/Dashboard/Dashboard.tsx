import svgPaths from "./svg-bdfaobp403";

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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">GOOD MORNING</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">David Abuh</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]" data-name="Container">
      <Container2 />
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container3 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-between left-0 px-[24px] py-[16px] top-[76px] w-[440px]" data-name="Header">
      <Container />
      <Button />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Total Wallet Balance</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center opacity-60 relative shrink-0 text-[#191c1e] text-[20px] tracking-[-0.96px]">
        <p className="leading-[28px]">₦</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#191c1e] text-[32px] tracking-[-0.96px]">
        <p className="leading-[56px]">12,500</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5f5e5e] text-[16px]">
        <p className="leading-[20px]">.00</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-[144.02px]" data-name="Container">
      <Container6 />
      <Heading1 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="h-[34px] relative shrink-0 w-[35px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34">
        <g id="Overlay">
          <rect fill="var(--fill-0, #FFDAD4)" fillOpacity="0.3" height="34" rx="12" width="35" />
          <path d={svgPaths.p30ca00} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container5 />
        <Overlay />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
        <g id="Container">
          <path d={svgPaths.pcb8380} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Active Wallet ID: AP-8822</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(188,0,1,0.05)] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(188,0,1,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white left-[24px] right-[24px] rounded-[24px] top-0" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <Container4 />
        <OverlayBorder />
        <div className="absolute bg-[rgba(188,0,1,0.05)] blur-[32px] right-[-39px] rounded-[9999px] size-[141px] top-[-39px]" data-name="Overlay+Blur" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_30px_-5px_rgba(247,0,3,0.05)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9815 20">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[16px]">Purchase Units</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f70003] col-1 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center pl-[34.66px] pr-[34.65px] py-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(188,0,1,0.2),0px_4px_6px_-4px_rgba(188,0,1,0.2)]" data-name="Button:shadow" />
          <Overlay1 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Container">
          <path d={svgPaths.p6672a80} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,218,212,0.5)] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[12px] text-center tracking-[0.2px] whitespace-nowrap">
          <p className="leading-[16px]">Create Wallet</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] col-2 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center pl-[39.19px] pr-[39.18px] py-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_30px_-5px_rgba(247,0,3,0.05)]" data-name="Button:shadow" />
          <Overlay2 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_110px] h-[110px] left-[24px] right-[24px] top-[207.5px]" data-name="Section">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Recent Transactions</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">See All</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <Heading2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
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

function Background() {
  return (
    <div className="bg-[#fbe3e4] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[20px]">Ikeja Electric</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Token: 4515-1438-8822</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[154.11px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Background />
        <Container17 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">-₦5,000</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">2h ago</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[61.48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_30px_-5px_rgba(247,0,3,0.05)]" data-name="Overlay+Shadow" />
          <Container15 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
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

function Overlay3() {
  return (
    <div className="bg-[rgba(255,218,212,0.2)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Overlay">
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[20px]">Wallet Top-up</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Via Bank Transfer</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[115.27px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Overlay3 />
        <Container25 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f70003] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">+₦20,000</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Yesterday</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[73.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_30px_-5px_rgba(247,0,3,0.05)]" data-name="Overlay+Shadow" />
          <Container23 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] right-[24px] top-[349.5px]" data-name="Section">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Power Saving Tip</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bottom-0 h-[115.021px] right-[-13.66px] w-[99.043px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.043 115.021">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p10c550c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[8px] relative shrink-0 w-[269px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eff1f3] text-[14px] w-[269px]">
        <p className="leading-[20px]">Switching to LED bulbs can reduce your lighting energy usage by up to 80%.</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Learn More</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#2d3133] content-stretch flex flex-col gap-[8px] items-start left-[24px] overflow-clip p-[24px] right-[24px] rounded-[24px] top-[581.5px]" data-name="Section">
      <Heading3 />
      <Container31 />
      <Container32 />
      <Button4 />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute h-[773px] left-1/2 top-[180px] w-[440px]" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f70003] content-stretch flex items-center justify-center left-0 overflow-clip rounded-[20px] shadow-[0px_16px_16px_-8px_rgba(0,0,0,0.32)] size-[56px] top-0" data-name="Button">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] size-[54px] top-0" data-name="Button:shadow" />
      <Container33 />
    </div>
  );
}

function FloatingButton() {
  return (
    <div className="absolute left-[calc(75%+30px)] size-[56px] top-[910px]" data-name="Floating Button">
      <Button5 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="Dashboard">
      <StatusbarIPhoneXLightBackground />
      <Header />
      <Main />
      <FloatingButton />
    </div>
  );
}