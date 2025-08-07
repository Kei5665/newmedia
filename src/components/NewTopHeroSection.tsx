import Link from "next/link";
import { Blog } from "@/types/microcms";
import { fetchBlogsWithFallback } from "@/lib/blogHelpers";
import { CATEGORY_IDS } from "@/constants/categories";

const imgHero = "/figma/hero-bg.png";
const imgTopH11 = "/figma/title-logo.png";
const imgGroup1911 = "/figma/center-illustration.png";
const imgCombinedLogo = "/figma/center-illustration+title-logo.png";
const imgMobileLogo = "/figma/charamobile.png";
const imgCardBoxTopMain = "/figma/pickup-card-bg.png";
const fallbackThumb = "/figma/article-thumb.png";
const imgTopMainImgA2 = "/figma/main-person.png";
const imgPickupTitle = "/figma/ピックアップ.png";

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

  // タイトルが20文字を超える場合は省略記号を追加
  const truncateTitle = (title: string, maxLength: number = 20) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "…";
    }
    return title;
  };

  // スラッグがない場合はIDを使用、どちらもない場合は無効なリンクを防ぐ
  const linkHref = blog.slug ? `/blog/${blog.slug}` : (blog.id ? `/blog/${blog.id}` : '#');

  // デバッグ情報をコンソールに出力
  console.log('BlogCard - blog.id:', blog.id, 'blog.slug:', blog.slug, 'linkHref:', linkHref);

  // IDもスラッグもない場合は警告を表示
  if (!blog.id && !blog.slug) {
    console.warn('BlogCard: blog.idとblog.slugの両方が存在しません', blog);
  }

  // 無効なリンクの場合はクリックを無効化
  if (linkHref === '#') {
    return (
      <div className="box-border content-stretch flex flex-row gap-3 md:gap-4 items-start justify-start p-2 relative shrink-0 w-full opacity-50 cursor-not-allowed rounded-lg">
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
              <p className="block leading-[1.4] line-clamp-2">{truncateTitle(blog.title)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={linkHref} className="block w-full mb-4">
      <div className="box-border content-stretch flex flex-row gap-3 md:gap-4 items-start justify-start p-3 relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg">
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
            <p className="block leading-[1.4] line-clamp-2">{truncateTitle(blog.title)}</p>
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
  const mobileBlogs = blogs.slice(0, 3); // モバイル版は3記事のみ

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
            <div className="w-full">
              {/* モバイル専用画像 */}
              <div className="block md:hidden">
                <div
                  className="bg-center bg-contain bg-no-repeat w-full aspect-[202/329]"
                  style={{ backgroundImage: `url('${imgMobileLogo}')` }}
                />
              </div>
              {/* タブレット以上で統合画像 */}
              <div className="hidden md:block">
                <div
                  className="bg-center bg-contain bg-no-repeat w-full aspect-[665/266]"
                  style={{ backgroundImage: `url('${imgCombinedLogo}')` }}
                />
              </div>
            </div>

            {/* ピックアップ記事一覧 */}
            <div className="flex flex-col gap-4 w-full p-4 bg-white border-2 border-black rounded-3xl max-h-[380px] overflow-y-auto" style={{ pointerEvents: 'auto' }}>
              {/* ピックアップタイトル */}
              <div className="flex justify-center">
                <div
                  className="bg-center bg-contain bg-no-repeat h-[60px] w-[240px]"
                  style={{ backgroundImage: `url('${imgPickupTitle}')` }}
                />
              </div>
              
              {mobileBlogs.length === 0 ? (
                <div className="text-center p-6">
                  <div className="text-gray-500 font-medium">記事を読み込み中...</div>
                </div>
              ) : (
                mobileBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PC専用レイアウト */}
      <div className="hidden lg:block">
        <div
          className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 md:px-9 py-[29px] relative w-full"
          style={{ backgroundImage: `url('${imgHero}')` }}
        >
          <div className="flex flex-row gap-5 items-start justify-start w-full">
            <div className="flex-1 max-w-[50%]">
              {/* タイトルロゴとイラスト */}
              <div className="w-full mb-5">
                <div
                  className="bg-center bg-contain bg-no-repeat w-full aspect-[665/266]"
                  style={{ backgroundImage: `url('${imgCombinedLogo}')` }}
                />
              </div>

              {/* ピックアップ記事一覧 */}
              <div className="w-full bg-white border-2 border-black rounded-3xl p-6">
                {/* ピックアップタイトル */}
                <div className="flex justify-center w-full mb-4">
                  <div
                    className="bg-center bg-contain bg-no-repeat h-[80px] w-[320px]"
                    style={{ backgroundImage: `url('${imgPickupTitle}')` }}
                  />
                </div>
                
                {blogs.length === 0 ? (
                  <EmptyPlaceholder />
                ) : (
                  <div className="flex flex-row gap-6 w-full">
                    {/* 左カラム */}
                    <div className="flex-1 flex flex-col gap-4">
                      {leftColumn.map((blog) => (
                        <div key={blog.id} className="w-full">
                          <BlogCard blog={blog} />
                        </div>
                      ))}
                    </div>
                    {/* 右カラム */}
                    <div className="flex-1 flex flex-col gap-4">
                      {rightColumn.map((blog) => (
                        <div key={blog.id} className="w-full">
                          <BlogCard blog={blog} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 右側のメイン画像 */}
            <div className="flex-1 max-w-[50%] self-stretch">
              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url('${imgTopMainImgA2}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}