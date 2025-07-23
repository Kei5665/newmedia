import React from 'react';

const imgSection2CompanyInterview = "/figma/company-interview-bg.png";
const imgHeading021 = "/figma/heading-02.png";
const imgImage82 = "/figma/news-card-image-82.png";
const imgImage = "/figma/company-icon-bg.png";
const imgImage34 = "/figma/sanwa-icon.png";
const imgImage83 = "/figma/interview-image-83.png";
const imgImage54 = "/figma/nikko-icon.png";
const imgImage61 = "/figma/harukoma-icon.png";
const img50SMan = "/figma/50s-man.png";
const imgGroup3 = "/figma/arrow-group3.svg";
const imgVector2 = "/figma/speech-bubble-tail.svg";

export default function CompanyInterviewSection() {
  const interviewData = [
    // First row - larger cards
    {
      id: 1,
      title: "三和交通株式会社様【後編】",
      date: "2025/6/23",
      category: "企業取材",
      description: "ここまでお話を伺って、三和交通様は「仕組み」より「人」が中心にある会社だと感じました。では、採用において....",
      company: "三和交通株式会社",
      image: imgImage82,
      companyIcon: imgImage34,
      size: "large"
    },
    {
      id: 2,
      title: "三和交通株式会社様【中編】",
      date: "2025/6/23",
      category: "企業取材",
      description: "前編では学び続けるドライバーの姿がとても印象的でした。では、その成長を支える育成環境について、もう少...",
      company: "三和交通株式会社",
      image: imgImage83,
      companyIcon: imgImage34,
      size: "large"
    },
    // Second row - smaller cards
    {
      id: 3,
      title: "三和交通株式会社様【前編】",
      date: "2025/6/23",
      category: "企業取材",
      description: "1950年創業、70年以上の歴史を持ちながら、今なお攻めの姿勢を貫くタクシー会社──三和交通株式会社...",
      company: "三和交通株式会社",
      companyIcon: imgImage34,
      size: "small"
    },
    {
      id: 4,
      title: "日興自動車株式会社様【後編】",
      date: "2025/6/23",
      category: "企業取材",
      description: "上京してタクシー業界に飛び込もうとする方にとって、住まいの不安は大きいと思います。御社ではどんな.....",
      company: "日興自動車株式会社",
      companyIcon: imgImage54,
      size: "small"
    },
    {
      id: 5,
      title: "日興自動車株式会社様【前編】",
      date: "2025/6/23",
      category: "企業取材",
      description: "東京都・池袋を拠点に、創業から75年。346台の車両と800名以上の乗務員を抱える日興自動車グループは、都内最大級の....",
      company: "日興自動車株式会社",
      companyIcon: imgImage54,
      size: "small"
    },
    {
      id: 6,
      title: "春駒交通株式會社様【後編】",
      date: "2025/6/23",
      category: "企業取材",
      description: "前職は物流業界でトラックの運転をされていたと伺いました。転職を考えたきっかけは何だったんですか？",
      company: "春駒交通株式会社",
      companyIcon: imgImage61,
      size: "small"
    }
  ];

  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative w-full min-h-screen"
      style={{ backgroundImage: `url('${imgSection2CompanyInterview}')` }}
    >
      <div className="flex flex-row items-center justify-center relative w-full min-h-screen">
        <div className="box-border flex flex-row items-center justify-center pb-24 pt-[140px] px-[170px] relative w-full">
          <div className="flex flex-row gap-10 items-start justify-center w-full relative">
            {/* Heading */}
            <div
              className="bg-center bg-cover bg-no-repeat h-[292px] shrink-0 w-[284px]"
              style={{ backgroundImage: `url('${imgHeading021}')` }}
            />
            
            {/* Cards Container */}
            <div className="flex flex-col gap-10 items-end justify-end flex-1">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                {/* First Row - Large Cards */}
                <div className="flex flex-row gap-6 items-start justify-start w-full">
                  {interviewData.slice(0, 2).map((item) => (
                    <div key={item.id} className="flex-1 bg-white rounded-[20px] border-[#333333] border-[1.2px] p-4">
                      <div className="flex flex-col gap-[17px] w-full">
                        <div
                          className="bg-center bg-cover bg-no-repeat h-[235px] rounded-[10px] w-full"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                        <div className="flex flex-col gap-4 w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="bg-[#2204db] flex items-center justify-center px-3 py-[3px] rounded-[32px]">
                              <span
                                className="text-white font-medium text-center text-nowrap"
                                style={{
                                  fontSize: '12px',
                                  lineHeight: '16px',
                                  fontFamily: 'Noto Sans JP, sans-serif'
                                }}
                              >
                                {item.category}
                              </span>
                            </div>
                            <span
                              className="text-[#6a7282] font-[350] text-left text-nowrap"
                              style={{
                                fontSize: '11.438px',
                                lineHeight: '16px',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.date}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2 w-full">
                            <h3
                              className="text-[#101828] font-bold text-left w-full"
                              style={{
                                fontSize: '18px',
                                lineHeight: '20px',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className="text-[#4a5565] font-normal text-justify w-full"
                              style={{
                                fontSize: '14px',
                                lineHeight: '1.5',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-row gap-2 items-center">
                            <div className="relative rounded-[40px] size-[50px] overflow-clip">
                              <div
                                className="absolute bg-center bg-cover bg-no-repeat left-0.5 size-[46px] top-0.5"
                                style={{ backgroundImage: `url('${item.companyIcon}')` }}
                              />
                              <div className="absolute border border-[#b1b1b1] border-solid inset-0 rounded-[40px]" />
                            </div>
                            <span
                              className="text-[#101828] font-bold text-left text-nowrap"
                              style={{
                                fontSize: '14px',
                                lineHeight: '24px',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.company}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row - Small Cards */}
                <div className="flex flex-row gap-6 items-start justify-start w-full">
                  {interviewData.slice(2, 6).map((item) => (
                    <div key={item.id} className="flex-1 bg-white rounded-[20px] border-[#333333] border-[1.2px] p-4">
                      <div className="flex flex-col gap-[17px] w-full">
                        <div className="flex flex-col gap-4 w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="bg-[#2204db] flex items-center justify-center px-3 py-[3px] rounded-[32px]">
                              <span
                                className="text-white font-medium text-center text-nowrap"
                                style={{
                                  fontSize: '12px',
                                  lineHeight: '16px',
                                  fontFamily: 'Noto Sans JP, sans-serif'
                                }}
                              >
                                {item.category}
                              </span>
                            </div>
                            <span
                              className="text-[#6a7282] font-[350] text-left text-nowrap"
                              style={{
                                fontSize: '11.438px',
                                lineHeight: '16px',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.date}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2 w-full">
                            <h3
                              className="text-[#101828] font-bold text-left w-full"
                              style={{
                                fontSize: '16px',
                                lineHeight: '20px',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.title.includes('前編') && item.title.includes('三和交通') ? 
                                <>三和交通株式会社様<br />【前編】</> :
                                item.title.includes('後編') && item.title.includes('春駒交通') ?
                                <>春駒交通株式會社様<br />【後編】</> :
                                item.title
                              }
                            </h3>
                            <p
                              className="text-[#4a5565] font-normal text-justify w-full"
                              style={{
                                fontSize: '14px',
                                lineHeight: '1.5',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-row gap-2 items-center w-full">
                            <div className="relative rounded-[40px] size-[50px] overflow-clip">
                              <div
                                className="absolute bg-center bg-cover bg-no-repeat size-12 top-px"
                                style={{ 
                                  backgroundImage: `url('${item.companyIcon}')`,
                                  left: item.companyIcon === imgImage54 ? '1.5px' : item.companyIcon === imgImage61 ? '8px' : '2px'
                                }}
                              />
                              <div className="absolute border border-[#b1b1b1] border-solid inset-0 rounded-[40px]" />
                            </div>
                            <span
                              className="text-[#101828] font-bold text-left flex-1"
                              style={{
                                fontSize: '12px',
                                lineHeight: '20px',
                                fontFamily: 'Noto Sans JP, sans-serif'
                              }}
                            >
                              {item.company}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col gap-12 items-center justify-center shadow-[4px_4px_0px_0px_rgba(19,19,19,0.3)]">
                <div className="bg-[#04acdb] flex flex-row gap-4 items-center justify-center pl-6 pr-4 py-4 rounded-[58px] border-[#333333] border-[1.5px]">
                  <span
                    className="text-white font-medium text-center text-nowrap tracking-[0.36px]"
                    style={{
                      fontSize: '18px',
                      fontFamily: 'Noto Sans JP, sans-serif'
                    }}
                  >
                    企業取材をもっと見る
                  </span>
                  <div className="flex h-[31.984px] items-center justify-center w-8">
                    <div className="rotate-[270deg]">
                      <img
                        alt=""
                        className="block max-w-none size-8"
                        src={imgGroup3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Character and Speech Bubble */}
            <div className="absolute flex h-[500px] items-center justify-center left-[-48px] top-[514px] w-[338px]">
              <div className="rotate-[180deg] scale-y-[-100%]">
                <div
                  className="h-[500px] w-[338px] bg-no-repeat"
                  style={{ 
                    backgroundImage: `url('${img50SMan}')`,
                    backgroundSize: '149.3% 179.43%',
                    backgroundPosition: '86.9% -0.08%'
                  }}
                />
              </div>
            </div>
            
            <div className="absolute left-[-38px] top-[358px]">
              <div className="flex h-[180.083px] items-center justify-center w-[257.109px]">
                <div className="rotate-[350.794deg]">
                  <div className="bg-[#ffc422] flex items-center justify-center p-6 rounded-[32px]">
                    <div
                      className="text-white text-center text-nowrap whitespace-pre leading-none"
                      style={{
                        fontSize: '32px',
                        fontFamily: 'Dela Gothic One, sans-serif',
                        textShadow: 'rgba(51,51,51,0.45) 2px 2px 0px'
                      }}
                    >
                      <p className="block mb-0">働くイメージ</p>
                      <p className="block mb-0">ガンガン</p>
                      <p className="block">見せる！</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[23.902px] items-center justify-center left-[103px] top-[160px] w-[28.865px]">
                <div className="rotate-[350.794deg]">
                  <div className="h-5 relative w-[26px]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgVector2}
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
}