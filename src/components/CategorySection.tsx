import React from 'react';

// Local asset imports
const ASSETS = {
  backgrounds: {
    section: "/figma/category-background.png",
    frame: "/figma/category-frame.png",
    character: "/figma/category-character.png",
    effect: "/figma/category-effect-bg.png",
  },
  cards: {
    companyInterview: "/figma/category-company-interview.png",
    userVoices: "/figma/category-user-voices.png",
    helpfulInfo: "/figma/category-helpful-info.png",
    interview: "/figma/category-interview.png",
  },
  masks: {
    shape1: "/figma/category-mask-shape1.svg",
    shape2: "/figma/category-mask-shape2.svg",
    shape3: "/figma/category-mask-shape3.svg",
    shape4: "/figma/category-mask-shape4.svg",
    effect1: "/figma/category-effect-mask1.svg",
    effect2: "/figma/category-effect-mask2.svg",
    effect3: "/figma/category-effect-mask3.svg",
  },
  overlays: {
    bg1: "/figma/category-overlay-bg1.svg",
    bg2: "/figma/category-overlay-bg2.svg",
    bg3: "/figma/category-overlay-bg3.svg",
    bg4: "/figma/category-overlay-bg4.svg",
  },
  icons: {
    arrow1: "/figma/category-arrow1.svg",
    arrow2: "/figma/category-arrow2.svg",
    arrow3: "/figma/category-arrow3.svg",
    speechTail: "/figma/category-speech-tail.svg",
  }
};

// Category data
const CATEGORIES = [
  {
    id: 'company-interview',
    title: '企業取材',
    description: ['企業の現場を直接訪問し、リアルな', '声と雰囲気をお届けします。'],
    cardImage: ASSETS.cards.companyInterview,
    maskImage: ASSETS.masks.shape1,
    overlayImage: ASSETS.overlays.bg1,
    effectMask: ASSETS.masks.effect1,
    arrowIcon: ASSETS.icons.arrow1,
    buttonFontSize: '16px',
  },
  {
    id: 'user-voices',
    title: 'ご利用者様の声',
    description: ['RIDE JOB活用者のリアルな', '体験談を紹介！'],
    cardImage: ASSETS.cards.userVoices,
    maskImage: ASSETS.masks.shape2,
    overlayImage: ASSETS.overlays.bg2,
    effectMask: ASSETS.masks.effect2,
    arrowIcon: ASSETS.icons.arrow2,
    buttonFontSize: '18px',
  },
  {
    id: 'helpful-info',
    title: 'お役立ち情報',
    description: ['面接対策や応募準備のコツなど、', '転職活動に活かせる情報を', '発信します！'],
    cardImage: ASSETS.cards.helpfulInfo,
    maskImage: ASSETS.masks.shape3,
    overlayImage: ASSETS.overlays.bg3,
    effectMask: ASSETS.masks.effect3,
    arrowIcon: ASSETS.icons.arrow2,
    buttonFontSize: '18px',
    hasLineBreak: true,
    containerHeight: '188px',
  },
  {
    id: 'interview',
    title: 'インタビュー',
    description: ['RIDE JOBで求職者と面談を', '行う担当者をご紹介します。'],
    cardImage: ASSETS.cards.interview,
    maskImage: ASSETS.masks.shape4,
    overlayImage: ASSETS.overlays.bg4,
    effectMask: ASSETS.masks.effect3,
    arrowIcon: ASSETS.icons.arrow3,
    buttonFontSize: '18px',
    customCardStyle: '[background-size:113.87%_100%] bg-[0.66%_0%]',
  }
];

// Reusable components
interface CategoryCardProps {
  category: typeof CATEGORIES[0];
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const isWideCard = index === 0 || index === 2;
  const cardWidth = isWideCard ? 'w-full' : '';
  const containerHeight = category.containerHeight || '174px';
  
  return (
    <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 ${cardWidth}`}>
      {/* Masked card image */}
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[388.03px] mt-0 place-items-start relative">
        <div
          className={`[grid-area:1_/_1] ${category.customCardStyle || 'bg-center bg-cover'} bg-no-repeat h-[222px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.74px_-0.6px] mask-size-[293.311px_223.2px] ml-0 mt-0 relative rounded-br-[10px] rounded-tr-[10px] w-[292.202px]`}
          style={{
            backgroundImage: `url('${category.cardImage}')`,
            maskImage: `url('${category.maskImage}')`,
          }}
        >
          <div className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-br-[10px] rounded-tr-[10px]" />
        </div>
      </div>

      {/* Background overlay */}
      <div className="[grid-area:1_/_1] h-[222px] ml-0 mt-0 relative w-[441.38px]">
        <div className="absolute bottom-0 left-0 right-[0.529%] top-0">
          <img
            alt=""
            className="block max-w-none size-full"
            src={category.overlayImage}
          />
        </div>
      </div>

      {/* Effect layer */}
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[0.141px] mt-0 place-items-start relative">
        <div
          className="[background-size:112.61%_176.73%] [grid-area:1_/_1] bg-[92.33%_39.85%] bg-no-repeat h-[222px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.141px_0px] mask-size-[439.049px_222px] ml-[-0.141px] mt-0 opacity-[0.15] rounded-[10px] w-[441.115px]"
          style={{
            backgroundImage: `url('${ASSETS.backgrounds.effect}')`,
            maskImage: `url('${category.effectMask}')`,
          }}
        />
      </div>

      {/* Content */}
      <div className={`[grid-area:1_/_1] box-border content-stretch flex flex-col gap-2 items-start justify-start ml-[29.672px] mt-6 p-0 relative rounded-2xl w-[358.544px]`}
           style={{ height: containerHeight }}>
        {/* Title */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-2 py-0 relative shrink-0">
          <div className="flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2204db] text-[40px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              {category.title}
            </p>
          </div>
        </div>

        {/* Description and button */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-end p-0 relative shrink-0 w-full">
            <div className="[text-shadow:rgba(51,51,51,0.45)_2px_2px_0px] flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap tracking-[0.6px] whitespace-pre">
              {category.description.map((line, lineIndex) => (
                <p key={lineIndex} className={`adjustLetterSpacing block ${lineIndex === category.description.length - 1 ? '' : 'mb-0'}`}>
                  {line}
                  {category.hasLineBreak && lineIndex === 0 && <br />}
                </p>
              ))}
            </div>

            {/* More button */}
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
              <div 
                className="flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-center text-nowrap tracking-[0.32px]"
                style={{ fontSize: category.buttonFontSize }}
              >
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                  もっと見る
                </p>
              </div>
              <div className="flex h-[31.984px] items-center justify-center relative shrink-0 w-[32px]">
                <div className="flex-none rotate-[270deg]">
                  <div className="relative size-8">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      loading={index > 1 ? "lazy" : undefined}
                      src={category.arrowIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeechBubble: React.FC = () => (
  <div className="absolute contents left-[231px] top-[515px]">
    <div className="absolute bg-[#ffbb00] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-[231px] p-[24px] rounded-[32px] top-[515px]">
      <div className="[text-shadow:rgba(51,51,51,0.45)_2px_2px_0px] flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-none not-italic relative shrink-0 text-[#ffffff] text-[32px] text-center text-nowrap whitespace-pre">
        <p className="block mb-0">業界の</p>
        <p className="block mb-0">リアル、</p>
        <p className="block">まるわかり！</p>
      </div>
    </div>
    <div className="absolute h-[19.914px] left-[307.027px] top-[657.086px] w-[26px]">
      <div className="absolute bottom-[4.251%] left-[2.319%] right-[10.974%] top-0">
        <img
          alt=""
          className="block max-w-none size-full"
          loading="lazy"
          src={ASSETS.icons.speechTail}
        />
      </div>
    </div>
  </div>
);

export default function CategorySection() {
  return (
    <div
      className="relative w-full"
      style={{ 
        backgroundImage: "url('/figma/category-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        height: "auto"
      }}
    >
      <div className="relative box-border content-stretch flex flex-row gap-16 items-center justify-start pl-[170px] pr-[72px] py-20 w-full min-h-screen">
        <div className="box-border content-stretch flex flex-row gap-11 items-start justify-start p-0 relative shrink-0">
          {/* Left frame */}
          <div
            className="bg-center bg-cover bg-no-repeat h-[273px] shrink-0 w-[376px]"
            style={{ backgroundImage: `url('${ASSETS.backgrounds.frame}')` }}
          />
          
          {/* Category cards */}
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 w-[680px]">
            {CATEGORIES.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* Character image */}
          <div
            className="[background-size:127.88%_206.44%] absolute bg-[81.85%_10.68%] bg-no-repeat h-[417px] left-[42px] top-[623px] w-[367.192px]"
            style={{ backgroundImage: `url('${ASSETS.backgrounds.character}')` }}
          />
        </div>

        {/* Speech bubble */}
        <SpeechBubble />
      </div>
    </div>
  );
}