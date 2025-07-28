import React from 'react';
import { getBlogsByCategory, getLatestBlogs } from '@/lib/microcms';
import { Blog } from '@/types/microcms';

const imgSection2CompanyInterview = "/figma/company-interview-bg.png";
const imgHeading021 = "/figma/heading-02.png";
const fallbackImage = "/figma/news-card-image-82.png";
const fallbackIcon = "/figma/company-icon-bg.png";
const img50SMan = "/figma/50s-man.png";
const imgGroup3 = "/figma/arrow-group3.svg";

/**
 * 企業インタビュー記事カード（大サイズ）
 */
function LargeInterviewCard({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className="flex-1 bg-white rounded-[20px] border-[#333333] border-[1.2px] p-4">
      <div className="flex flex-col gap-[17px] w-full">
        <div
          className="bg-center bg-cover bg-no-repeat h-[235px] rounded-[10px] w-full"
          style={{ backgroundImage: `url('${blog.eyecatch?.url || fallbackImage}')` }}
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
                {blog.category?.name || '企業取材'}
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
              {formatDate(blog.publishedAt)}
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
              {blog.title}
            </h3>
            <p
              className="text-[#4a5565] font-normal text-justify w-full line-clamp-4"
              style={{
                fontSize: '14px',
                lineHeight: '1.5',
                fontFamily: 'Noto Sans JP, sans-serif'
              }}
            >
              {blog.content || 'インタビュー記事の詳細をご覧ください。'}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="relative rounded-[40px] size-[50px] overflow-clip">
              <div
                className="absolute bg-center bg-cover bg-no-repeat left-0.5 size-[46px] top-0.5"
                style={{ backgroundImage: `url('${fallbackIcon}')` }}
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
              企業インタビュー
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 企業インタビュー記事カード（小サイズ）
 */
function SmallInterviewCard({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className="flex-1 bg-white rounded-[20px] border-[#333333] border-[1.2px] p-4">
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
                {blog.category?.name || '企業取材'}
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
              {formatDate(blog.publishedAt)}
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
              {blog.title}
            </h3>
            <p
              className="text-[#4a5565] font-normal text-justify w-full line-clamp-3"
              style={{
                fontSize: '14px',
                lineHeight: '1.5',
                fontFamily: 'Noto Sans JP, sans-serif'
              }}
            >
              {blog.content || 'インタビュー記事の詳細をご覧ください。'}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center w-full">
            <div className="relative rounded-[40px] size-[50px] overflow-clip">
              <div
                className="absolute bg-center bg-cover bg-no-repeat size-12 top-px left-[2px]"
                style={{ backgroundImage: `url('${fallbackIcon}')` }}
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
              企業インタビュー
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * データ読み込み中プレースホルダー
 */
function LoadingPlaceholder() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full">
      <div className="flex flex-row gap-6 items-start justify-start w-full">
        <div className="flex-1 bg-gray-200 rounded-[20px] border-[#333333] border-[1.2px] p-4 animate-pulse">
          <div className="h-[235px] bg-gray-300 rounded-[10px] mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 rounded-[20px] border-[#333333] border-[1.2px] p-4 animate-pulse">
          <div className="h-[235px] bg-gray-300 rounded-[10px] mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-start justify-start w-full">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-1 bg-gray-200 rounded-[20px] border-[#333333] border-[1.2px] p-4 animate-pulse">
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-5 bg-gray-300 rounded w-2/3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 企業インタビューセクション
 */
export default async function CompanyInterviewSection() {
  let blogs: Blog[] = [];

  try {
    console.log('🏢 CompanyInterviewSection: 企業取材データ取得開始');
    
    // デバッグ用：全ブログを取得してカテゴリ情報を確認
    console.log('🔍 デバッグ: 全ブログのカテゴリ情報を確認中...');
    const allBlogsResponse = await getLatestBlogs(10);
    console.log('📋 全ブログ数:', allBlogsResponse.contents?.length || 0);
    allBlogsResponse.contents?.forEach((blog, index) => {
      console.log(`📝 ブログ ${index + 1}:`, {
        id: blog.id,
        title: blog.title,
        category: blog.category,
        categorySlug: blog.category?.slug,
        hasCategory: !!blog.category
      });
    });

    // 企業取材カテゴリのブログを取得
    const response = await getBlogsByCategory('company-interview', 6);
    blogs = response.contents || [];
    
    // 一時的対処：カテゴリフィルタが効かない場合は全ブログを表示
    if (blogs.length === 0) {
      console.log('⚠️ 企業取材カテゴリで0件のため、全ブログを取得します');
      const fallbackResponse = await getLatestBlogs(6);
      blogs = fallbackResponse.contents || [];
      console.log('🔄 フォールバック: 全ブログから', blogs.length, '件を表示');
    }
    
    console.log('✅ 企業取材データ取得完了:', blogs.length, '件');
    console.log('📄 取得した記事:', blogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      category: blog.category?.name,
      categorySlug: blog.category?.slug
    })));
  } catch (error) {
    console.error('❌ 企業インタビューデータの取得に失敗しました:', error);
  }

  // 上段用（大カード2枚）と下段用（小カード4枚）に分割
  const largeCardBlogs = blogs.slice(0, 2);
  const smallCardBlogs = blogs.slice(2, 6);

  console.log('📊 CompanyInterviewSection 表示データ:', {
    total: blogs.length,
    largeCards: largeCardBlogs.length,
    smallCards: smallCardBlogs.length,
  });

  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative w-full min-h-screen"
      style={{ backgroundImage: `url('${imgSection2CompanyInterview}')` }}
    >
      <div className="flex flex-row items-center justify-center relative w-full min-h-screen">
        <div className="box-border flex flex-row items-center justify-center pb-24 pt-[140px] px-[170px] relative w-full">
          <div className="flex flex-row gap-10 items-start justify-center w-full relative">
            {/* セクションタイトル */}
            <div
              className="bg-center bg-cover bg-no-repeat h-[292px] shrink-0 w-[284px]"
              style={{ backgroundImage: `url('${imgHeading021}')` }}
            />
            
            {/* 記事カード一覧 */}
            <div className="flex flex-col gap-10 items-end justify-end flex-1">
              {blogs.length === 0 ? (
                <>
                  <LoadingPlaceholder />
                  {/* デバッグ情報表示 */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded text-sm z-50 max-w-xs">
                    <div>⚠️ 企業取材記事が見つかりません</div>
                    <div className="text-xs mt-1">
                      取得件数: {blogs.length}件<br/>
                      ブラウザのConsoleを確認してください
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    {/* 上段 - 大カード2枚 */}
                    <div className="flex flex-row gap-6 items-start justify-start w-full">
                      {largeCardBlogs.map((blog) => (
                        <LargeInterviewCard key={blog.id} blog={blog} />
                      ))}
                      {/* 大カードが1枚しかない場合のプレースホルダー */}
                      {largeCardBlogs.length === 1 && (
                        <div className="flex-1 bg-gray-100 rounded-[20px] border-[#333333] border-[1.2px] p-4 opacity-50">
                          <div className="h-[235px] bg-gray-200 rounded-[10px] mb-4"></div>
                          <div className="text-center text-gray-500">記事を読み込み中...</div>
                        </div>
                      )}
                    </div>

                    {/* 下段 - 小カード4枚 */}
                    <div className="flex flex-row gap-6 items-start justify-start w-full">
                      {smallCardBlogs.map((blog) => (
                        <SmallInterviewCard key={blog.id} blog={blog} />
                      ))}
                      {/* 小カードが不足している場合のプレースホルダー */}
                      {Array.from({ length: Math.max(0, 4 - smallCardBlogs.length) }).map((_, index) => (
                        <div key={`placeholder-${index}`} className="flex-1 bg-gray-100 rounded-[20px] border-[#333333] border-[1.2px] p-4 opacity-30">
                          <div className="text-center text-gray-500 text-sm">記事を読み込み中...</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* 成功時のデバッグ情報 */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded text-sm z-50">
                    ✅ 企業取材記事: {blogs.length}件取得
                  </div>
                </>
              )}

              {/* もっと見るボタン */}
              <div className="flex flex-col gap-12 items-center justify-center">
                <div className="bg-[#04acdb] flex flex-row gap-4 items-center justify-center pl-6 pr-4 py-4 rounded-[58px] border-[#333333] shadow-[4px_4px_0px_0px_rgba(19,19,19,0.3)] border-[1.5px] cursor-pointer hover:shadow-[2px_2px_0px_0px_rgba(19,19,19,0.3)] transition-shadow">
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

            {/* キャラクターと吹き出し */}
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
                  <div className="relative">
                    <img
                      src="/figma/hukidasi.png"
                      alt="働くイメージガンガン見せる！"
                      className="block max-w-none"
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