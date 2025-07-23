import React from 'react';

const imgSection1News = "/figma/section1-news-bg.png";
const imgImage82 = "/figma/news-card-image-82.png";
const imgFrame621 = "/figma/frame-621-title.png";
const imgFrame2221 = "/figma/frame-222-dots.png";
const imgRectangle137 = "/figma/rectangle-137-bg.svg";

export default function NewsSection2() {
  const newsItems = [
    {
      id: 1,
      title: "三和交通株式会社様【後編】",
      date: "2025/6/23",
      category: "企業取材",
      image: imgImage82
    },
    {
      id: 2,
      title: "三和交通株式会社様【中編】",
      date: "2025/6/23",
      category: "企業取材",
      image: imgImage82
    },
    {
      id: 3,
      title: "三和交通株式会社様【前編】",
      date: "2025/6/23",
      category: "企業取材",
      image: imgImage82
    }
  ];

  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative w-full min-h-screen"
      style={{ 
        backgroundImage: `url('${imgSection1News}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="absolute top-14 left-1/2 transform -translate-x-1/2"
        data-name="heading01"
      >
        <div className="relative">
          <div
            className="relative h-[162px] w-[386px]"
          >
            <div className="absolute bottom-0 left-[0.811%] right-[0.811%] top-0">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgRectangle137}
              />
            </div>
          </div>
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center justify-center w-[306px]"
          >
            <div
              className="bg-center bg-cover bg-no-repeat h-[74px] shrink-0 w-[258px]"
              data-name="Frame 62 1"
              style={{ backgroundImage: `url('${imgFrame621}')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-9 shrink-0 w-[306px]"
              data-name="Frame 222 1"
              style={{ backgroundImage: `url('${imgFrame2221}')` }}
            />
          </div>
        </div>
      </div>

      <div
        className="absolute flex items-center justify-center gap-8 top-[258px] left-1/2 transform -translate-x-1/2"
      >
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 w-[425px]"
          >
            <div
              className="bg-white h-[251px] relative rounded-[20px] w-full border-[#333333] border-[1.2px] border-solid"
            >
              <div className="flex flex-col h-[251px] items-start justify-start p-4 relative w-full">
                <div
                  className="flex-1 bg-center bg-cover bg-no-repeat rounded-[10px] w-full min-h-0"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col gap-2 items-start justify-start px-2 py-0 relative w-full">
                <div className="flex items-center gap-2 w-full">
                  <div className="bg-[#2204db] flex items-center justify-center px-3 py-2 rounded-[32px]">
                    <span
                      className="font-medium text-center text-white text-nowrap"
                      style={{
                        fontSize: '16px',
                        lineHeight: '16px',
                        fontFamily: 'Noto Sans JP, sans-serif'
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <span
                    className="font-medium text-left text-nowrap"
                    style={{
                      fontSize: '14px',
                      lineHeight: '16px',
                      color: '#101828',
                      fontFamily: 'Noto Sans JP, sans-serif'
                    }}
                  >
                    {item.date}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start relative w-full">
                  <h3
                    className="font-bold text-left w-full"
                    style={{
                      fontSize: '20px',
                      lineHeight: '1.4',
                      color: '#101828',
                      fontFamily: 'Noto Sans JP, sans-serif'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}