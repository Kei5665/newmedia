import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { SectionContainer } from "./SectionContainer";

interface HelpCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  href: string;
  ariaLabel: string;
}

function HelpCard({ title, description, buttonText, buttonColor, href, ariaLabel }: HelpCardProps) {
  const imgGroup3 = "/figma/arrow-icon.svg";

  return (
    <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col-reverse items-center justify-start overflow-clip p-0 relative w-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start order-2 pb-4 pt-8 px-4 relative shrink-0">
          <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
              <h3 className="font-['Dela_Gothic_One:Regular',_sans-serif] text-[24px] md:text-[32px] text-gray-800 text-center tracking-[0.64px] leading-[1.1] whitespace-pre">
                {title}
              </h3>
              <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0">
                  <p className="font-['Noto_Sans_JP:Medium',_sans-serif] font-medium text-[#333333] text-[14px] md:text-[16px] text-center leading-[1.6] whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="block no-underline w-full"
        >
          <div
            className="box-border content-stretch flex flex-col gap-3.5 items-center justify-center order-1 pb-6 md:pb-[30px] pt-4 md:pt-6 px-6 md:px-12 relative rounded-2xl shrink-0 w-full hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: buttonColor }}
          >
            <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-2xl" />
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0">
              <p className="font-['Noto_Sans_JP:ExtraBold',_sans-serif] text-[#ffffff] text-[24px] md:text-[32px] text-center text-nowrap leading-none whitespace-pre">
                {buttonText}
              </p>
              <div className="flex h-[35.984px] items-center justify-center relative shrink-0 w-[36px]">
                <div className="flex-none rotate-[270deg]">
                  <Image
                    src={withBasePath(imgGroup3)}
                    alt="矢印アイコン"
                    width={36}
                    height={36}
                    className="size-9"
                    loading="lazy"
                    sizes="36px"
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

export function HelpSection() {
  const imgHeading051 = "/figma/troubled-you-heading.png";

  return (
    <SectionContainer>
      <Image
        src={withBasePath(imgHeading051)}
        alt="困ったあなたへ見出し"
        width={260}
        height={140}
        className="w-[260px] md:w-[346px] h-[140px] md:h-[187px] object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 260px, 346px"
      />
      
      <HelpCard
        title="キャリアにお悩みの方"
        description="未経験でも安心。面接対策や\n 働き方の相談まで丁寧に対応します。"
        buttonText="相談する"
        buttonColor="#19bbfb"
        href="https://ridejob.pmagent.jp/"
        ariaLabel="相談する（外部サイト）"
      />
      
      <HelpCard
        title="求人をお探しの方"
        description="希望条件に合う求人情報を掲載。\n気になる仕事を見つけて応募できます。"
        buttonText="求人を探す"
        buttonColor="#2204db"
        href="https://ridejob.jp/"
        ariaLabel="求人を探す（外部サイト）"
      />
    </SectionContainer>
  );
}
