const imgHero = "http://localhost:3845/assets/d9eec8b789d9485b0dbe7a65d99b129a924c2768.png";
const imgRectangle119 = "http://localhost:3845/assets/5c42e1a7e90a396c05d4c01c3300398e84be1f1c.png";
const imgCardBoxTopMain = "http://localhost:3845/assets/3cdc307a07710934a37a84c715cd05b1bdf84b68.png";
const img1 = "http://localhost:3845/assets/63633fff2dcafea8e385efea23056a66ed31a877.png";
const img2 = "http://localhost:3845/assets/93aaed91f02ca13f835566300cb1ac749d046b1b.png";
const img3 = "http://localhost:3845/assets/b06ac78c9bf108d60fa572e4d006bd8af779aaca.png";
const img4 = "http://localhost:3845/assets/d7f85ef6be52ad459d67d52875ed96b275e52a1f.png";
const img5 = "http://localhost:3845/assets/a5e965a0b0fa94da234759e0ceaa86248762dec4.png";
const img6 = "http://localhost:3845/assets/4685db1c09497b8f7d67e1da4126b98c818f2ca4.png";
const imgTopH11 = "http://localhost:3845/assets/a1764feca684ea2f9d4083510d13a20ea775f309.png";
const imgGroup1911 = "http://localhost:3845/assets/ef1531bf1b11a07375f7a8b1878cd62eba237da4.png";
const imgImage96 = "http://localhost:3845/assets/087451e01f73ed4153c1c29b5199b2627d8c1c73.svg";
const imgSubtract = "http://localhost:3845/assets/c9aa3d59b1e869ab3e9b899a2a60a6a51f3f1efb.svg";
const imgGuidanceDownArrow = "http://localhost:3845/assets/4580cc35045d9fd3335764ac8a07a1000d56241b.svg";

export default function NewHeroSection() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative w-full h-[736px]"
      style={{ backgroundImage: `url('${imgHero}')` }}
    >
      <div className="contents relative size-full">
        {/* Top main image section with person photo */}
        <div
          className="absolute box-border content-stretch flex flex-row items-start justify-start left-[754px] p-0 top-[23px]"
          data-name="topMain_img"
        >
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div
              className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.993px] mt-0 place-items-start relative"
              data-name="Mask group"
            >
              <div
                className="[grid-area:1_/_1] h-[726.915px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[40.803px_16.431px] mask-size-[645px_688px] ml-[-40.802px] mt-[-16.431px] w-[727.27px]"
                data-name="image 96"
                style={{ maskImage: `url('${imgImage96}')` }}
              />
              <div
                className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[739px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56.514px_3px] mask-size-[645px_688px] ml-[-56.514px] mt-[-3px] w-[776.534px]"
                style={{
                  backgroundImage: `url('${imgRectangle119}')`,
                  maskImage: `url('${imgImage96}')`,
                }}
              />
            </div>
            <div
              className="[grid-area:1_/_1] h-[688px] ml-0 mt-0 relative w-[645.998px]"
              data-name="Subtract"
            >
              <img alt="" className="block max-w-none size-full" src={imgSubtract} />
            </div>
          </div>
          
          {/* Button section */}
          <div className="absolute contents left-[563px] top-0" data-name="btn">
            <div className="absolute flex h-[286px] items-center justify-center left-[563px] top-0 w-[82.984px]">
              <div className="flex-none rotate-[90deg]">
                <div className="bg-[#ffb543] h-[83px] relative rounded-[20px] w-[286px]">
                  <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[20px]" />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[67px] items-center justify-center left-[563px] top-[298px] w-[83px]">
              <div className="flex-none rotate-[90deg]">
                <div className="bg-[#ffb543] h-[83px] relative rounded-[30px] w-[67px]">
                  <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[30px]" />
                </div>
              </div>
            </div>
            <div
              className="absolute left-[583px] size-[42px] top-[312px]"
              data-name="guidance:down-arrow"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgGuidanceDownArrow}
              />
            </div>
            <div className="absolute box-border content-stretch flex flex-col items-center justify-start left-[581px] p-0 top-[19px] w-12">
              <div className="[text-shadow:rgba(51,51,51,0.45)_2px_2px_0px] flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[48px] text-left tracking-[0.96px] w-full">
                <p className="block leading-none">面談担当者</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup card section */}
        <div className="absolute contents left-10 top-[297px]">
          <div
            className="absolute bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 h-[414px] items-center justify-end left-10 p-[24px] top-[297px]"
            data-name="cardBox topMain"
            style={{ backgroundImage: `url('${imgCardBoxTopMain}')` }}
          >
            <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0">
              {/* Left column */}
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-[309px]">
                {/* Article 1 */}
                <div className="box-border content-stretch flex flex-row gap-2 h-[88px] items-start justify-start p-0 relative shrink-0 w-[93px]">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
                    style={{ backgroundImage: `url('${img1}')` }}
                  />
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
                      <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
                        <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">企業取材</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">2025/6/23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-[30px] p-0 relative">
                      <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] text-left text-nowrap">
                        <p className="block leading-[1.4] whitespace-pre">三和交通株式会社様【後編】</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[88px] items-start justify-start p-0 relative shrink-0 w-[93px]">
                    <div
                      className="bg-center bg-cover bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
                      style={{ backgroundImage: `url('${img2}')` }}
                    />
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
                        <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
                          <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">企業取材</p>
                          </div>
                        </div>
                        <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                            <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">2025/6/23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-[30px] p-0 relative">
                        <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] text-left text-nowrap">
                          <p className="block leading-[1.4] whitespace-pre">三和交通株式会社様【中編】</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[88px] items-start justify-start p-0 relative shrink-0 w-[93px]">
                    <div
                      className="bg-center bg-cover bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
                      style={{ backgroundImage: `url('${img3}')` }}
                    />
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
                        <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
                          <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">企業取材</p>
                          </div>
                        </div>
                        <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                            <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">2025/6/23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-[30px] p-0 relative">
                        <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] text-left text-nowrap">
                          <p className="block leading-[1.4] whitespace-pre">三和交通株式会社様【前編】</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-[309px]">
                {/* Article 4 */}
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div
                    className="[background-size:126.16%_100%] bg-[4.52%_0%] bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
                    style={{ backgroundImage: `url('${img4}')` }}
                  />
                  <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[117.938px]">
                      <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
                        <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">ご利用者様の声</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">2025/6/12</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-[30px] p-0 relative w-52">
                      <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] text-left w-full">
                        <p className="block leading-[1.4]">特定技能でタクシー業界へ。中国出身の郭さんが語る...</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 5 */}
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div
                    className="[background-size:168.22%_100%] bg-[2.27%_0%] bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
                    style={{ backgroundImage: `url('${img5}')` }}
                  />
                  <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[117.938px]">
                      <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
                        <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">お役立ち情報</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">2025/6/12</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-[30px] p-0 relative w-52">
                      <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] text-left w-full">
                        <p className="block leading-[1.4]">実際に寄せられる質問から見る【タクシー運転手】転職...</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 6 */}
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div
                    className="[background-size:141.82%_100%] bg-[19.15%_0%] bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
                    style={{ backgroundImage: `url('${img6}')` }}
                  />
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
                      <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
                        <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">インタビュー</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">2025/6/12</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-[30px] p-0 relative">
                      <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[1.4] relative shrink-0 text-[#101828] text-[16px] text-left text-nowrap whitespace-pre">
                        <p className="block mb-0">留学生の"働く"を後押し！</p>
                        <p className="block">【留学生向け就職ガイダン...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and heading sections */}
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[260px] left-12 top-5 w-[445px]"
          data-name="top_h1 1"
          style={{ backgroundImage: `url('${imgTopH11}')` }}
        />
        
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[312px] left-[443px] top-[39px] w-[366px]"
          data-name="Group 191 1"
          style={{ backgroundImage: `url('${imgGroup1911}')` }}
        />
      </div>
    </div>
  );
}