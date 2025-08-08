import React from 'react';
import { withBasePath } from '@/lib/basePath';
import Link from 'next/link';
import { Blog } from '@/types/microcms';
import { fetchBlogsWithFallback } from '@/lib/blogHelpers';
import { CATEGORY_IDS } from '@/constants/categories';

const imgSection2CompanyInterview = "/figma/company-interview-bg.png";
const imgHeading021 = "/figma/heading-02.png";
const imgDsgf1 = "/figma/50s-man.png";
const fallbackImage = "/figma/news-card-image-82.png";
const imgButtonIcon = "/figma/arrow-group3.svg";

/**
 * 企業インタビュー記事カード
 */
function InterviewCard({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  // タイトルを20文字で省略
  const truncateTitle = (title: string, maxLength: number = 20) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  // ブログのスラッグまたはIDでリンクを生成
  const blogLink = blog.slug ? `/blog/${blog.slug}` : `/blog/${blog.id}`;

  return (
    <Link href={blogLink} className="block group">
      <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-4 h-[413px] md:h-[380px] lg:h-[520px] items-start justify-start p-[16px] md:p-[16px] lg:p-[20px] relative rounded-[20px] shrink-0 w-full max-w-[349px] md:max-w-[349px] lg:max-w-[460px] hover:shadow-lg transition-shadow duration-200 cursor-pointer">
          <div
          aria-hidden="true"
          className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[20px] group-hover:border-[#2204db] transition-colors duration-200"
        />
        <div className="box-border content-stretch flex flex-col gap-[17px] lg:gap-[20px] h-full items-start justify-start p-0 relative shrink-0 w-full">
          <div
            className="bg-center bg-cover bg-no-repeat h-[235px] md:h-[200px] lg:h-[240px] rounded-[10px] shrink-0 w-full"
            style={{ backgroundImage: `url('${withBasePath(blog.eyecatch?.url || fallbackImage)}')` }}
          />
          <div className="box-border content-stretch flex flex-col gap-4 lg:gap-6 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
              <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-3 py-[3px] lg:px-5 lg:py-[5px] relative rounded-[32px] shrink-0">
                <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] lg:text-[14px] text-center text-neutral-50 text-nowrap">
                  <p className="block leading-[16px] lg:leading-[20px] whitespace-pre">
                    {blog.category?.name || '企業取材'}
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] lg:text-[13px] text-left text-nowrap">
                  <p className="block leading-[16px] lg:leading-[20px] whitespace-pre">
                    {formatDate(blog.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-2 lg:gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#101828] text-[18px] md:text-[16px] lg:text-[20px] text-left w-full">
                <p className="block leading-[20px] lg:leading-[24px] group-hover:text-[#2204db] transition-colors duration-200">
                  {truncateTitle(blog.title)}
                </p>
              </div>
              <div className="flex flex-col font-['Noto_Sans_JP:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#4a5565] text-[14px] md:text-[13px] lg:text-[16px] text-justify w-full">
                <p className="block leading-[1.5] line-clamp-3 lg:line-clamp-4">
                  {blog.content?.replace(/<[^>]*>/g, '').substring(0, 100) || 'インタビュー記事の詳細をご覧ください。'}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}


/**
 * データがない場合のプレースホルダー
 */
function EmptyCard() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-4 h-[413px] md:h-[380px] lg:h-[520px] items-start justify-start p-[16px] md:p-[16px] lg:p-[20px] relative rounded-[20px] shrink-0 w-full max-w-[349px] md:max-w-[349px] lg:max-w-[460px] opacity-50">
      <div
        aria-hidden="true"
        className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <div className="box-border content-stretch flex flex-col gap-[17px] h-full items-center justify-center p-0 relative shrink-0 w-full">
        <div className="bg-gray-200 h-[235px] md:h-[200px] lg:h-[240px] rounded-[10px] shrink-0 w-full" />
        <div className="text-center text-gray-500 text-sm lg:text-base">記事を準備中...</div>
      </div>
    </div>
  );
}

/**
 * 企業インタビューセクション - 企業取材記事を動的表示
 */
export default async function CompanyInterviewSection() {
  const blogs = await fetchBlogsWithFallback(CATEGORY_IDS.COMPANY_INTERVIEW, 4);

  return (
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col items-center justify-center pb-12 md:pb-16 lg:pb-24 pt-16 md:pt-24 lg:pt-[140px] px-4 md:px-8 lg:px-[170px] relative w-full min-h-screen"
      style={{ backgroundImage: `url('${withBasePath(imgSection2CompanyInterview)}')` }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-center lg:items-start justify-center w-full">
          
          {/* Title and Character Section */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center lg:items-start justify-start shrink-0">
            <div
              className="bg-center bg-contain bg-no-repeat h-[200px] md:h-[180px] lg:h-[220px] shrink-0 w-[320px] md:w-[300px] lg:w-[300px]"
            style={{ backgroundImage: `url('${withBasePath(imgHeading021)}')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[300px] md:h-[400px] lg:h-[557px] shrink-0 w-[170px] md:w-[220px] lg:w-[312px] hidden md:block"
            style={{ backgroundImage: `url('${withBasePath(imgDsgf1)}')` }}
            />
          </div>
          
          {/* Cards Section */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center justify-center w-full lg:flex-1">
            {/* Desktop: 2x2 Grid, Mobile: Single Column (3 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-6 w-full max-w-none md:max-w-[750px] lg:max-w-[960px] justify-items-center">
              {blogs.length >= 1 && <InterviewCard blog={blogs[0]} />}
              {blogs.length >= 2 ? <InterviewCard blog={blogs[1]} /> : <EmptyCard />}
              {blogs.length >= 3 ? <InterviewCard blog={blogs[2]} /> : <EmptyCard />}
              <div className="hidden md:block">
                {blogs.length >= 4 ? <InterviewCard blog={blogs[3]} /> : <EmptyCard />}
              </div>
            </div>
            
            {/* Button */}
            <div className="flex flex-col items-center justify-center mt-4 md:mt-6 lg:mt-8">
              <Link href="/blog" className="block">
                <div className="bg-[#04acdb] box-border content-stretch flex flex-row gap-4 items-center justify-center pl-6 pr-4 py-4 relative rounded-[58px] shrink-0 cursor-pointer shadow-[4px_4px_0px_0px_rgba(19,19,19,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(19,19,19,0.3)] transition-shadow">
                  <div
                    aria-hidden="true"
                    className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[58px]"
                  />
                  <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] md:text-[18px] text-center text-nowrap tracking-[0.36px]">
                    <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                      企業取材をもっと見る
                    </p>
                  </div>
                  <div className="flex h-[31.984px] items-center justify-center relative shrink-0 w-[32px]">
                    <div className="flex-none rotate-[270deg]">
                      <div className="relative size-8">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          loading="lazy"
                          src={withBasePath(imgButtonIcon)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}