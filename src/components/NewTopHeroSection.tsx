import { getLatestBlogs } from "@/lib/microcms";
import { Blog } from "@/types/microcms";

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
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 h-[88px] items-start justify-start p-0 relative shrink-0 w-[93px]">
        <div
          className="bg-center bg-cover bg-no-repeat h-[88px] rounded-[10px] shrink-0 w-[93px]"
          style={{
            backgroundImage: `url('${blog.eyecatch?.url || fallbackThumb}')`,
          }}
        />
      </div>
      <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0">
        <div className="box-border content-stretch flex flex-row gap-2 h-[22px] items-center justify-start p-0 relative shrink-0 w-full">
          <div className="bg-[#2204db] box-border content-stretch flex flex-row items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[32px] shrink-0">
            <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
              <p className="block leading-[16px] whitespace-pre">
                {blog.category?.name || "最新"}
              </p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[91.81px] items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-['Noto_Sans_JP:DemiLight',_sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#6a7282] text-[11.438px] text-left text-nowrap">
                <p className="block leading-[16px] whitespace-pre">
                  {formatDate(blog.publishedAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] text-left text-nowrap">
            <p className="block leading-[1.4] whitespace-pre">{blog.title}</p>
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
  let blogs: Blog[] = [];

  try {
    const response = await getLatestBlogs(6);
    blogs = response.contents || [];
  } catch (error) {
    console.error("ブログデータの取得に失敗しました:", error);
  }

  const leftColumn = blogs.slice(0, 3);
  const rightColumn = blogs.slice(3, 6);

  return (
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-9 py-[29px] relative w-full min-h-[856px]"
      style={{ backgroundImage: `url('${imgHero}')` }}
    >
      <div className="basis-0 box-border content-stretch flex flex-row gap-5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col h-[798px] items-start justify-start p-0 relative shrink-0 w-[811px]">
          {/* タイトルロゴとイラスト */}
          <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
            <div
              className="bg-center bg-cover bg-no-repeat h-[260px] shrink-0 w-[445px]"
              style={{ backgroundImage: `url('${imgTopH11}')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[312px] shrink-0 w-[366px]"
              style={{ backgroundImage: `url('${imgGroup1911}')` }}
            />
          </div>

          {/* ブログ記事一覧セクション */}
          <div
            className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-row items-center justify-between p-[24px] relative shrink-0 w-full"
            style={{ backgroundImage: `url('${imgCardBoxTopMain}')` }}
          >
            <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow h-[438px] items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
              {blogs.length === 0 ? (
                <EmptyPlaceholder />
              ) : (
                <>
                  {/* 左カラム */}
                  <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-full items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                    {leftColumn.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                  {/* 右カラム */}
                  <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-full items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                    {rightColumn.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 右側のメイン画像 */}
        <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow h-full items-center justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0">
          <div
            className="basis-0 bg-center bg-cover bg-no-repeat grow h-[681px] min-h-px min-w-px shrink-0"
            style={{ backgroundImage: `url('${imgTopMainImgA2}')` }}
          />
        </div>
      </div>
    </div>
  );
}