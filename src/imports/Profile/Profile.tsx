import svgPaths from "./svg-nbi9qangpz";

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
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 px-[24px] py-[16px] top-[76px] w-[440px]">
      <ArrowLeft />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#191c1e] text-[20px]">
        <p className="leading-[32px]">Manage Profile</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
          <p className="leading-[24px]">David Abuh</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f2f4f6] flex-[1_0_0] min-w-px relative rounded-[32px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-[49px] py-[17px] relative size-full">
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(149,110,103,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function User() {
  return (
    <div className="absolute inset-[32.76%_6.12%_32.76%_88.78%]" data-name="user">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user">
          <path d={svgPaths.p3db82900} id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19362f00} id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearUser() {
  return (
    <div className="absolute contents inset-[32.76%_6.12%_32.76%_88.78%]" data-name="vuesax/linear/user">
      <User />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 rounded-[32px] top-[24px]" data-name="Container">
      <Input />
      <VuesaxLinearUser />
    </div>
  );
}

function FullName() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Full Name">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[8px] text-[#5f5e5e] text-[12px] top-[8px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Full Name</p>
      </div>
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
          <p className="leading-[24px]">iamfarukdeyemi@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f2f4f6] left-0 rounded-[32px] top-[24px] w-[392px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[25px] pr-[49px] py-[17px] relative rounded-[inherit] size-full">
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(149,110,103,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
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

function Email() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Email">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[8px] text-[#5f5e5e] text-[12px] top-[8px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Email Address</p>
      </div>
      <Input1 />
      <div className="absolute left-[348px] size-[20px] top-[43px]" data-name="vuesax/linear/sms">
        <VuesaxLinearSms />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[16px] w-full">
          <p className="leading-[24px]">09073808749</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[#f2f4f6] left-0 rounded-[32px] top-[24px] w-[392px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[25px] pr-[49px] py-[17px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(149,110,103,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
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

function PhoneNumber() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Phone Number">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[8px] text-[#5f5e5e] text-[12px] top-[8px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Phone Number</p>
      </div>
      <Input2 />
      <div className="absolute left-[348px] size-[20px] top-[43px]" data-name="vuesax/linear/call">
        <VuesaxLinearCall />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[16px] w-full">
          <p className="leading-[24px]">4515-1438-822</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[#eceef0] left-0 rounded-[32px] top-[24px] w-[392px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip pl-[25px] pr-[49px] py-[17px] relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(149,110,103,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function VuesaxLinearCalculator() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/calculator">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calculator">
          <path d={svgPaths.pc67d580} id="Vector" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2e73cf00} id="Vector_2" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.7801 11.6667H6.78973" id="Vector_3" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.99602 11.6667H10.0056" id="Vector_4" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.2119 11.6667H13.2216" id="Vector_5" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.7801 14.5833H6.78973" id="Vector_6" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.99602 14.5833H10.0056" id="Vector_7" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.2119 14.5833H13.2216" id="Vector_8" stroke="var(--stroke-0, #F70003)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_9" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[8px] right-0 top-[90px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(95,94,94,0.6)] w-[269px]">
        <p className="leading-[16.5px]">Meter number is linked to your utility account and cannot be changed.</p>
      </div>
    </div>
  );
}

function MeterNumber() {
  return (
    <div className="h-[123px] relative shrink-0 w-full" data-name="Meter Number">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[8px] text-[#5f5e5e] text-[12px] top-[8px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Meter Number</p>
      </div>
      <Input3 />
      <div className="absolute left-[348px] size-[20px] top-[43px]" data-name="vuesax/linear/calculator">
        <VuesaxLinearCalculator />
      </div>
      <Container5 />
    </div>
  );
}

function FormSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form Section">
      <FullName />
      <Email />
      <PhoneNumber />
      <MeterNumber />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f70003] content-stretch flex h-[54px] items-center justify-center py-[16px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[120px]">
        <p className="leading-[28px]">Save Changes</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-px py-[17px] relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(186,26,26,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#f70003] text-[18px] text-center w-[68px]">
        <p className="leading-[28px]">Log Out</p>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[16px] relative shrink-0 w-full" data-name="Action Section">
      <Button />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #F70003)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(188,0,1,0.1)] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Data Protection</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[307px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f5e5e] text-[14px] w-full">
        <p className="leading-[20px]">Your profile data is encrypted and secure with Access Power protocols.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Container8 />
      </div>
    </div>
  );
}

function SecurityBadgeBentoStyleSnippet() {
  return (
    <div className="backdrop-blur-[10px] relative rounded-[32px] shrink-0 w-full" data-name="Security Badge (Bento-style snippet)">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_30px_0px_rgba(247,0,3,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[9px] py-px relative size-full">
          <Overlay />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 max-w-[512px] px-[24px] top-[160px] w-[440px]" data-name="Main">
      <FormSection />
      <ActionSection />
      <SecurityBadgeBentoStyleSnippet />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-[#f7f6f8] relative size-full" data-name="Profile">
      <StatusbarIPhoneXLightBackground />
      <Frame1 />
      <Main />
    </div>
  );
}