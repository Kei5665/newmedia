import { Blog } from "@/types/microcms";
import { fetchBlogsWithFallback } from "@/lib/blogHelpers";
import { CATEGORY_IDS } from "@/constants/categories";

const imgHero = "/figma/hero-bg.png";
const imgTopH11 = "/figma/title-logo.png";
const imgGroup1911 = "/figma/center-illustration.png";
const imgCardBoxTopMain = "/figma/pickup-card-bg.png";
const fallbackThumb = "/figma/article-thumb.png";
const imgTopMainImgA2 = "/figma/main-person.png";

/**
 * ブログカードコンポーネント
 */
function BlogCard({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className="box-border content-stretch flex flex-row gap-3 md:gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 h-[70px] md:h-[88px] items-start justify-start p-0 relative shrink-0 w-[70px] md:w-[93px]">
        <div
          className="bg-center bg-cover bg-no-repeat h-[70px] md:h-[88px] rounded-[10px] shrink-0 w-[70px] md:w-[93px]"
          style={{
            backgroundImage: `url('${blog.eyecatch?.url || fallbackThumb}')`,
          }}
        />
      </div>
      <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0">
        <div className="box-border content-stretch flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start p-0 relative shrink-0 w-full">
          <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
            <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11px] md:text-[12px] text-center text-neutral-50 text-nowrap">
              <p className="block leading-[16px] whitespace-pre">
                {blog.category?.name || "最新"}
              </p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[10px] md:text-[11.438px] text-left text-nowrap">
              <p className="block leading-[16px] whitespace-pre">
                {formatDate(blog.publishedAt)}
              </p>
            </div>
          </div>
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[14px] md:text-[16px] text-left">
            <p className="block leading-[1.4] line-clamp-2">{blog.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * データがない場合のプレースホルダー
 */
function EmptyPlaceholder() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center h-full p-4 text-center">
      <div className="text-gray-500 font-medium">記事を読み込み中...</div>
    </div>
  );
}

/**
 * ヒーローセクション - トップページのメインビジュアル
 */
export default async function NewTopHeroSection() {
  const blogs = await fetchBlogsWithFallback(CATEGORY_IDS.PICKUP, 6);
  
  const leftColumn = blogs.slice(0, 3);
  const rightColumn = blogs.slice(3, 6);

  return (
    <>
      {/* モバイル・タブレット専用レイアウト */}
      <div className="lg:hidden">
        <div
          className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 md:px-9 py-[29px] relative w-full min-h-screen"
          style={{ backgroundImage: `url('${imgHero}')` }}
        >
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            {/* タイトルロゴとイラスト */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full mb-4">
              <div
                className="bg-center bg-cover bg-no-repeat h-[180px] md:h-[260px] w-[280px] md:w-[445px] mb-4 md:mb-0"
                style={{ backgroundImage: `url('${imgTopH11}')` }}
              />
              <div
                className="bg-center bg-cover bg-no-repeat h-[220px] md:h-[312px] w-[280px] md:w-[366px]"
                style={{ backgroundImage: `url('${imgGroup1911}')` }}
              />
            </div>

            {/* ピックアップ記事一覧 */}
            <div className="flex flex-col gap-4 w-full p-4">
              {blogs.length === 0 ? (
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/20 text-center">
                  <div className="text-gray-500 font-medium">記事を読み込み中...</div>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div key={blog.id} className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/20 w-full">
                    <BlogCard blog={blog} />
                  </div>
                ))
              )}
            </div>

            {/* メイン画像 */}
            <div className="w-full h-[300px] mt-4">
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-full rounded-lg"
                style={{ backgroundImage: `url('${imgTopMainImgA2}')` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PC専用レイアウト */}
      <div className="hidden lg:block">
        <div
          className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 md:px-9 py-[29px] relative w-full min-h-[856px]"
          style={{ backgroundImage: `url('${imgHero}')` }}
        >
          <div className="basis-0 box-border content-stretch flex flex-row gap-5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col h-[798px] items-start justify-start p-0 relative shrink-0 w-[811px]">
              {/* タイトルロゴとイラスト */}
              <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full mb-0">
                <div
                  className="bg-center bg-cover bg-no-repeat h-[260px] shrink-0 w-[445px]"
                  style={{ backgroundImage: `url('${imgTopH11}')` }}
                />
                <div
                  className="bg-center bg-cover bg-no-repeat h-[312px] shrink-0 w-[366px]"
                  style={{ backgroundImage: `url('${imgGroup1911}')` }}
                />
              </div>

              {/* ピックアップ記事一覧 */}
              <div
                className="box-border content-stretch flex flex-col items-center justify-center p-[24px] relative shrink-0 w-full h-[438px]"
              >
                {blogs.length === 0 ? (
                  <EmptyPlaceholder />
                ) : (
                  <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow h-[438px] items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full">
                    {/* 左カラム */}
                    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-full items-start justify-center min-h-px min-w-px p-0 relative shrink-0 w-auto">
                      {leftColumn.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                      ))}
                    </div>
                    {/* 右カラム */}
                    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-full items-start justify-center min-h-px min-w-px p-0 relative shrink-0 w-auto">
                      {rightColumn.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 右側のメイン画像 */}
            <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow h-full items-center justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-auto">
              <div
                className="basis-0 bg-center bg-cover bg-no-repeat grow h-[681px] min-h-px min-w-px shrink-0"
                style={{ backgroundImage: `url('${imgTopMainImgA2}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}