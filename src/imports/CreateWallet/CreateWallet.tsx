import svgPaths from "./svg-rhqy5bp9r5";

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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[24px] w-full">
        <p className="leading-[32px]">Create Wallet</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Initial Deposit (₦)</p>
      </div>
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label:margin">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <Label />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-[15.02px] top-[2px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#d8dadc] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 right-[0.02px] top-0" data-name="Container">
      <Container2 />
      <div className="flex flex-row items-center self-stretch">
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 16">
        <g id="Margin">
          <path d={svgPaths.p2484dac0} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b border-solid inset-0 pointer-events-none" />
      <Input />
      <Margin />
    </div>
  );
}

function AmountField() {
  return (
    <div className="relative shrink-0 w-full" data-name="Amount Field">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <LabelMargin />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Phone Number</p>
      </div>
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label:margin">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <Label1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d8dadc] text-[16px] w-full">
        <p className="leading-[normal]">080 0000 0000</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[3px] pt-[2px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
    </div>
  );
}

function VuesaxLinearCall() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/call">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="call">
          <g id="call_2">
            <path d={svgPaths.pae67240} id="Vector" stroke="var(--stroke-0, #F70003)" strokeMiterlimit="10" strokeWidth="1.5" />
          </g>
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b border-solid inset-0 pointer-events-none" />
      <Input1 />
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/call">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxLinearCall />
        </div>
      </div>
    </div>
  );
}

function GsmNoField() {
  return (
    <div className="relative shrink-0 w-full" data-name="GSM No Field">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <LabelMargin1 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Email Address</p>
      </div>
    </div>
  );
}

function LabelMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label:margin">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <Label2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d8dadc] text-[16px] w-full">
        <p className="leading-[normal]">user@example.com</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[3px] pt-[2px] relative rounded-[inherit] size-full">
        <Container4 />
      </div>
    </div>
  );
}

function VuesaxLinearSms() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/sms">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="sms">
          <path d={svgPaths.p292a9000} id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p29f6ce40} id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b border-solid inset-0 pointer-events-none" />
      <Input2 />
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/sms">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <VuesaxLinearSms />
        </div>
      </div>
    </div>
  );
}

function EmailField() {
  return (
    <div className="relative shrink-0 w-full" data-name="Email Field">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <LabelMargin2 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Set Wallet PIN</p>
      </div>
    </div>
  );
}

function VuesaxLinearEyeSlash() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/eye-slash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="eye-slash">
          <path d={svgPaths.pd6c8b00} id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1fa8b280} id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pc243c00} id="Vector_3" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pacc3080} id="Vector_4" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p54b5100} id="Vector_5" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c64e480} id="Vector_6" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <button className="-translate-y-1/2 absolute content-stretch cursor-pointer flex items-center left-[320.67px] size-[20px] top-1/2" data-name="Component 5">
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/eye-slash">
          <VuesaxLinearEyeSlash />
        </div>
      </button>
    </div>
  );
}

function Input3() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input5() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[16.03px] relative size-full">
          <Input3 />
          <Input4 />
          <Input5 />
          <Input6 />
        </div>
      </div>
    </div>
  );
}

function SetWalletPinSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Set Wallet PIN Section">
      <Container5 />
      <Container6 />
    </div>
  );
}

function SetWalletPinSectionMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Set Wallet PIN Section:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <SetWalletPinSection />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Confirm PIN</p>
      </div>
    </div>
  );
}

function VuesaxLinearEyeSlash1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/eye-slash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="eye-slash">
          <path d={svgPaths.pd6c8b00} id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1fa8b280} id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pc243c00} id="Vector_3" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pacc3080} id="Vector_4" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p54b5100} id="Vector_5" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c64e480} id="Vector_6" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <button className="-translate-y-1/2 absolute content-stretch cursor-pointer flex items-center left-[320.67px] size-[20px] top-1/2" data-name="Component 5">
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/eye-slash">
          <VuesaxLinearEyeSlash1 />
        </div>
      </button>
    </div>
  );
}

function Input7() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input8() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input9() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input10() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d8dadc] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[16.03px] relative size-full">
          <Input7 />
          <Input8 />
          <Input9 />
          <Input10 />
        </div>
      </div>
    </div>
  );
}

function ConfirmPinSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Confirm PIN Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_30px_60px_-15px_rgba(247,0,3,0.05)]" data-name="Overlay+Shadow" />
        <AmountField />
        <GsmNoField />
        <EmailField />
        <SetWalletPinSectionMargin />
        <ConfirmPinSection />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Create Wallet</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f70003] content-stretch flex gap-[12px] h-[56px] items-center justify-center max-w-[512px] py-[16px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(188,0,1,0.2),0px_4px_6px_-4px_rgba(188,0,1,0.2)]" data-name="Button:shadow" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Heading />
      <OverlayBorderOverlayBlur />
      <Button />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.5px)] max-w-[512px] px-[24px] top-[128px] w-[437px]" data-name="Main">
      <Frame1 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute left-[24px] size-[24px] top-[84px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d="M19 12H5" id="Vector" stroke="var(--stroke-0, #010101)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 19L5 12L12 5" id="Vector_2" stroke="var(--stroke-0, #010101)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function CreateWallet() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="Create Wallet">
      <StatusbarIPhoneXLightBackground />
      <Main />
      <ArrowLeft />
    </div>
  );
}