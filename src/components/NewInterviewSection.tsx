import { getAllMembers } from "@/lib/microcms";
import { withBasePath } from "@/lib/basePath";
import { Member } from "@/types/microcms";
import MemberInteractiveSection from "./MemberInteractiveSection";
import Image from "next/image";

const img = "/figma/interview-section-background.png";
const imgFrame2241 = "/figma/interview-section-heading.png";
const imgFrame2151 = "/figma/interview-staff-title.png";
// これらの画像はMemberInteractiveSectionで使用されるため削除
const imgFrame2141 = "/figma/interview-video-title.png";
const imgImage111 = "/figma/video-thumbnail-1.png";
const imgImage112 = "/figma/video-thumbnail-2.png";
const imgImage113 = "/figma/video-thumbnail-3.png";
const imgHeading051 = "/figma/troubled-you-heading.png";
const imgGroup3 = "/figma/arrow-icon.svg";

export default async function NewInterviewSection() {
  // メンバーデータを取得
  let members: Member[] = [];
  try {
    const response = await getAllMembers(10);
    members = response.contents || [];
  } catch (error) {
    console.error('メンバーデータ取得エラー:', error);
  }

  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start md:px-9 py-[29px] relative size-full">
      {/* 背景画像をImageで最適化 */}
      <Image
        src={withBasePath(img)}
        alt="面談セクション背景"
        fill
        className="object-center object-repeat -z-10"
        loading="lazy"
        sizes="100vw"
      />

      <div
        className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center md:px-8 lg:px-[432px] py-0 relative rounded-tl-[80px] shrink-0 w-full relative z-10"
        data-name="icon bg_pc"
        id="node-2163_847"
      >
        {/* Section 1: 面談担当者 (Interview Staff) */}
        <div
          className="bg-[#fdeab1] box-border content-stretch flex flex-col gap-6 items-center justify-start px-6 md:px-12 py-8 md:py-14 relative rounded-[60px] shrink-0 w-full max-w-[700px]"
          id="node-2163_886"
        >
          <div
            className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
            data-name="Heading 3"
            id="node-2163_887"
          >
            {/* 見出し画像をImageで最適化 */}
            <Image
              src={withBasePath(imgFrame2241)}
              alt="面談担当者見出し"
              width={280}
              height={200}
              className="w-[280px] md:w-[408px] h-[200px] md:h-[308px] object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 280px, 408px"
            />
          </div>
          <div
            className="bg-[#ffffff] box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 md:px-6 py-6 md:py-10 relative rounded-[30px] shrink-0 w-full"
            id="node-2163_889"
          >
            <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div
              className="box-border content-stretch flex flex-col gap-8 md:gap-[71px] items-center justify-center p-0 relative shrink-0 w-full"
              id="node-2163_892"
            >
              <div
                className="box-border content-stretch flex flex-col gap-6 md:gap-8 items-center justify-start p-0 relative shrink-0 w-full"
                id="node-2163_893"
              >
                {/* サブタイトル画像をImageで最適化 */}
                <Image
                  src={withBasePath(imgFrame2151)}
                  alt="面談担当者サブタイトル"
                  width={150}
                  height={35}
                  className="w-[150px] md:w-[197px] h-[35px] md:h-[45px] object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 150px, 197px"
                />
                <div className="w-full">
                  <MemberInteractiveSection members={members} />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 2: 面談者の動画 (Interview Videos) */}
        <div
          className="bg-[#fdeab1] box-border content-stretch flex flex-col gap-6 items-center justify-start px-6 md:px-12 py-8 md:py-14 relative rounded-[60px] shrink-0 w-full max-w-[700px]"
          id="node-2166_996"
        >
          <div
            className="bg-[#ffffff] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 md:px-6 py-6 md:py-10 relative rounded-[30px] shrink-0 w-full"
            id="node-2166_999"
          >
            <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div
              className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0"
              id="node-2166_1000"
            >
              {/* ビデオタイトル画像をImageで最適化 */}
              <Image
                src={withBasePath(imgFrame2141)}
                alt="ビデオタイトル"
                width={180}
                height={32}
                className="w-[180px] md:w-[229px] h-8 md:h-11 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 180px, 229px"
              />
              <div
                className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
                id="node-2163_515"
              >
                <div
                  className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] text-center text-gray-800 tracking-[0.32px]"
                  id="node-2163_516"
                >
                  <p className="adjustLetterSpacing block leading-[1.6] whitespace-pre-line">
                    あなたのお仕事探し
                    <br />
                    貴方に1番に寄り添う転職エージェント✨
                    <br />
                    ︎社内の様子や色々な事を動画で発信します
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-1 md:gap-2 h-32 md:h-64 items-center justify-center p-0 relative shrink-0 w-full"
                id="node-2163_518"
              >
                {/* ビデオサムネイル1をImageで最適化 */}
                <div className="flex-1 relative rounded-[8px] md:rounded-[10px] shrink-0 max-w-[100px] md:max-w-[140px]">
                  <Image
                    src={withBasePath(imgImage111)}
                    alt="ビデオサムネイル1"
                    width={100}
                    height={128}
                    className="h-full w-full object-cover rounded-[8px] md:rounded-[10px]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100px, 140px"
                  />
                  <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px]" />
                </div>
                {/* ビデオサムネイル2をImageで最適化 */}
                <div className="flex-1 relative rounded-[8px] md:rounded-[10px] shrink-0 max-w-[100px] md:max-w-[140px]">
                  <Image
                    src={withBasePath(imgImage112)}
                    alt="ビデオサムネイル2"
                    width={100}
                    height={128}
                    className="h-full w-full object-cover rounded-[8px] md:rounded-[10px]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100px, 140px"
                  />
                  <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px]" />
                </div>
                {/* ビデオサムネイル3をImageで最適化 */}
                <div className="flex-1 relative rounded-[8px] md:rounded-[10px] shrink-0 max-w-[100px] md:max-w-[140px]">
                  <Image
                    src={withBasePath(imgImage113)}
                    alt="ビデオサムネイル3"
                    width={100}
                    height={128}
                    className="h-full w-full object-cover rounded-[8px] md:rounded-[10px]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100px, 140px"
                  />
                  <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px]" />
                </div>
              </div>
              <a
                href="https://www.tiktok.com/@ride.job"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RIDE JOB チャンネルへ（TikTok）"
                className="block no-underline w-full"
              >
                <div
                  className="bg-[#19bbfb] box-border content-stretch flex flex-col gap-3.5 items-center justify-center pb-6 md:pb-10 pt-6 md:pt-8 px-4 md:px-8 relative rounded-[20px] shrink-0 w-full hover:opacity-90 transition-opacity duration-200"
                  data-name="Button"
                  id="node-2163_522"
                >
                  <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                  <div
                    className="box-border content-stretch flex flex-row gap-3.5 items-center justify-center p-0 relative shrink-0"
                    id="node-2163_523"
                  >
                    <div
                      className="flex flex-col font-['Noto_Sans_JP:ExtraBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[0px] text-center"
                      id="node-2163_524"
                    >
                      <p className="leading-none">
                        <span className="text-[24px] md:text-[24px]">{`RIDE JOB `}</span>
                        <span className="text-[22px] md:text-[24px]">チャンネルへ</span>
                      </p>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0"
                      id="node-2163_525"
                    >
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: 困ったあなたへ (For Those in Need) */}
        <div
          className="bg-[#fdeab1] box-border content-stretch flex flex-col gap-6 items-center justify-start px-6 md:px-12 py-8 md:py-14 relative rounded-[60px] shrink-0 w-full max-w-[700px]"
          id="node-2166_1042"
        >
          {/* 見出し画像をImageで最適化 */}
          <Image
            src={withBasePath(imgHeading051)}
            alt="困ったあなたへ見出し"
            width={260}
            height={140}
            className="w-[260px] md:w-[346px] h-[140px] md:h-[187px] object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 260px, 346px"
          />
          <div
            className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full"
            data-name="Background+Border+Shadow"
            id="node-2163_416"
          >
            <div className="box-border content-stretch flex flex-col-reverse items-center justify-start overflow-clip p-0 relative w-full">
              <div
                className="box-border content-stretch flex flex-col gap-4 items-start justify-start order-2 pb-4 pt-8 px-4 relative shrink-0"
                data-name="Container"
                id="node-2163_417"
              >
                <div
                  className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0"
                  data-name="info"
                  id="node-2163_418"
                >
                  <div
                    className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
                    id="node-2163_419"
                  >
                    <div
                      className="flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[32px] text-gray-800 text-center tracking-[0.64px]"
                      id="node-2163_420"
                    >
                      <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
                        キャリアにお悩みの方
                      </p>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
                      id="node-2163_421"
                    >
                      <div
                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0"
                        id="node-2163_422"
                      >
                        <div
                          className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] md:text-[16px] text-center"
                          id="node-2163_423"
                        >
                          <p className="block leading-[1.6] whitespace-pre-line">
                            未経験でも安心。面接対策や
                            <br />
                            {` 働き方の相談まで丁寧に対応します。`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://ridejob.pmagent.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="相談する（外部サイト）"
                className="block no-underline w-full"
              >
                <div
                  className="bg-[#19bbfb] box-border content-stretch flex flex-col gap-3.5 items-center justify-center order-1 pb-6 md:pb-[30px] pt-4 md:pt-6 px-6 md:px-12 relative rounded-2xl shrink-0 w-full hover:opacity-90 transition-opacity duration-200"
                  data-name="Button"
                  id="node-2163_424"
                >
                  <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-2xl" />
                  <div
                    className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0"
                    id="node-2163_425"
                  >
                    <div
                      className="flex flex-col font-['Noto_Sans_JP:ExtraBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] md:text-[32px] text-center text-nowrap"
                      id="node-2163_426"
                    >
                      <p className="block leading-none whitespace-pre">
                        相談する
                      </p>
                    </div>
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
          <div
            className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full"
            data-name="Background+Border+Shadow"
            id="node-2163_431"
          >
            <div className="box-border content-stretch flex flex-col-reverse items-center justify-start overflow-clip p-0 relative w-full">
              <div
                className="box-border content-stretch flex flex-col gap-4 items-start justify-start order-2 pb-4 pt-8 px-4 relative shrink-0"
                data-name="Container"
                id="node-2163_432"
              >
                <div
                  className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0"
                  data-name="info"
                  id="node-2163_433"
                >
                  <div
                    className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
                    id="node-2163_434"
                  >
                    <div
                      className="flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[32px] text-center text-gray-800 text-nowrap tracking-[0.64px]"
                      id="node-2163_435"
                    >
                      <p className="adjustLetterSpacing block leading-[1.1] whitespace-pre">
                        求人をお探しの方
                      </p>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
                      id="node-2163_436"
                    >
                      <div
                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0"
                        id="node-2163_437"
                      >
                        <div
                          className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[1.6] relative shrink-0 text-[#333333] text-[14px] md:text-[16px] text-center whitespace-pre-line"
                          id="node-2163_438"
                        >
                          <p className="block mb-0">
                            希望条件に合う求人情報を掲載。
                          </p>
                          <p className="block">
                            気になる仕事を見つけて応募できます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://ridejob.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="求人を探す（外部サイト）"
                className="block no-underline w-full"
              >
                <div
                  className="bg-[#2204db] box-border content-stretch flex flex-col gap-3.5 items-center justify-center order-1 pb-6 md:pb-[30px] pt-4 md:pt-6 px-6 md:px-12 relative rounded-2xl shrink-0 w-full hover:opacity-90 transition-opacity duration-200"
                  data-name="Button"
                  id="node-2163_439"
                >
                  <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-2xl" />
                  <div
                    className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0"
                    id="node-2163_440"
                  >
                    <div
                      className="flex flex-col font-['Noto_Sans_JP:ExtraBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] md:text-[32px] text-center text-nowrap"
                      id="node-2163_441"
                    >
                      <p className="block leading-none whitespace-pre">
                        求人を探す
                      </p>
                    </div>
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
        </div>
      </div>
    </div>
  );
}