import svgPaths from "./svg-9j3rch17lz";
import img9B12112BAf7241EcBe6784F6B3Aa527F1Photoroom4 from "./f63515ccfd8aeaadc3275663a9e2183ed31d98fd.png";

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
        <p className="leading-[32px]">Purchase Units</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f3e39] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">METER/CUSTOMER NUMBER</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p1e40bff0} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container1 />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Add Another</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <Label />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
          <p className="leading-[24px]">45151438822</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center p-[17px] relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(149,110,103,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[32px] relative shrink-0 w-[64px]" data-name="9b12112b-af72-41ec-be67-84f6b3aa527f 1-Photoroom 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9B12112BAf7241EcBe6784F6B3Aa527F1Photoroom4} />
        </div>
      </div>
    </div>
  );
}

function PlaceholderForBrandLogoIdentity() {
  return (
    <div className="content-stretch flex h-[24px] items-center pl-[13px] relative shrink-0" data-name="Placeholder for Brand Logo Identity">
      <div aria-hidden="true" className="absolute border-[rgba(149,110,103,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[29.31%] content-stretch flex items-center right-[24px] top-[29.31%]" data-name="Container">
      <PlaceholderForBrandLogoIdentity />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container4 />
    </div>
  );
}

function MeterNumberFieldRounded() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Meter Number Field (Rounded)">
      <Container />
      <Container2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">ENTER AMOUNT</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[24px] w-full">
          <p className="leading-[normal]">0.00</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[64px] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[41px] pr-[49px] py-[18px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[28.13%] content-stretch flex flex-col items-start left-[16px] top-[28.13%]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">₦</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] right-[24px] top-1/2 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(188,0,1,0.05)] content-stretch flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f70003] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">₦1,000</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d8dadc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">₦2,000</p>
      </div>
    </button>
  );
}

function Button3() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d8dadc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">₦5,000</p>
      </div>
    </button>
  );
}

function Button4() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center px-[21px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d8dadc] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">₦10,000</p>
      </div>
    </button>
  );
}

function SectionAmountInput() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Amount Input">
      <Label1 />
      <Container6 />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[389px]" data-name="Quick Select Chips">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f70003] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">RECEIPT INFORMATION</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
        <p className="leading-[24px]">09073808749</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Input">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Input2 />
        <Container12 />
      </div>
    </div>
  );
}

function GsmNumberTraditionalStyleWithIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="GSM Number (Traditional Style with Icon)">
      <div aria-hidden="true" className="absolute border-[rgba(234,188,180,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f3e39] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Phone Number</p>
        </div>
        <Container10 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
        <p className="leading-[24px]">iamfarukdeyemi@gmail.com</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Input">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Input3 />
        <Container15 />
      </div>
    </div>
  );
}

function EmailTraditionalStyleWithIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Email (Traditional Style with Icon)">
      <div aria-hidden="true" className="absolute border-[rgba(234,188,180,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5f3e39] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">EMAIL</p>
        </div>
        <Container13 />
      </div>
    </div>
  );
}

function OntainerForContactInfo() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] relative rounded-[24px] shrink-0 w-full" data-name="ontainer for Contact Info">
      <div aria-hidden="true" className="absolute border border-[rgba(234,188,180,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_30px_0px_rgba(247,0,3,0.05)]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[25px] relative size-full">
        <Heading1 />
        <GsmNumberTraditionalStyleWithIcon />
        <EmailTraditionalStyleWithIcon />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Continue</p>
      </div>
    </div>
  );
}

function Container17() {
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

function Button5() {
  return (
    <div className="bg-[#f70003] content-stretch flex gap-[12px] h-[56px] items-center justify-center max-w-[512px] py-[16px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(188,0,1,0.2),0px_4px_6px_-4px_rgba(188,0,1,0.2)]" data-name="Button:shadow" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f3e39] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Your token will be sent to the provided contacts.</p>
      </div>
    </div>
  );
}

function PrimaryAction() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Primary Action">
      <Button5 />
      <Container18 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <MeterNumberFieldRounded />
      <SectionAmountInput />
      <OntainerForContactInfo />
      <PrimaryAction />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+0.5px)] max-w-[512px] px-[24px] top-[128px] w-[437px]" data-name="Main">
      <Heading />
      <Section />
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

export default function PurchaseUnit() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="Purchase Unit">
      <StatusbarIPhoneXLightBackground />
      <Main />
      <ArrowLeft />
    </div>
  );
}