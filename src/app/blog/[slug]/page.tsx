import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import BlogDetailSection from '@/components/BlogDetailSection';
import BlogDetailSidebar from '@/components/BlogDetailSidebar';
import BlogCTASection from '@/components/BlogCTASection';
import { Blog, Category } from '@/types/microcms';
import { getBlogBySlug, getBlogById, getAllCategories, getLatestBlogs } from '@/lib/microcms';
import { withBasePath } from '@/lib/basePath';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// メタデータ生成
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: '記事が見つかりません',
      description: '指定された記事は存在しないか、削除された可能性があります。'
    };
  }

  return {
    title: blog.title,
    description: blog.content ? blog.content.substring(0, 160).replace(/<[^>]*>/g, '') : blog.title,
    openGraph: {
      title: blog.title,
      description: blog.content ? blog.content.substring(0, 160).replace(/<[^>]*>/g, '') : blog.title,
      images: blog.eyecatch ? [blog.eyecatch.url] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  
  // 並行してデータを取得
  let blog: Blog | null = null;
  let categories: Category[] = [];
  let pickupArticles: Blog[] = [];
  let error: string | null = null;

  try {
    // メインの記事を取得（スラッグまたはIDで）
    blog = await getBlogBySlug(slug);
    
    // スラッグで見つからない場合、IDで検索を試行
    if (!blog) {
      blog = await getBlogById(slug);
    }
    
    if (!blog) {
      notFound();
    }

    // サイドバー用のデータを並行取得
    const [categoriesResponse, pickupLatestResponse] = await Promise.allSettled([
      getAllCategories(),
      getLatestBlogs(3)
    ]);

    if (categoriesResponse.status === 'fulfilled') {
      categories = categoriesResponse.value;
    } else {
      console.error('カテゴリの取得に失敗しました:', categoriesResponse.reason);
    }

    // 最新記事3件をピックアップとして表示
    if (pickupLatestResponse.status === 'fulfilled') {
      pickupArticles = pickupLatestResponse.value.contents || [];
    } else {
      console.error('ピックアップ記事（最新3件）の取得に失敗しました:', pickupLatestResponse.reason);
    }

  } catch (err) {
    console.error('データの取得に失敗しました:', err);
    error = 'データの取得に失敗しました。';
  }

  if (error) {
    return (
      <div className="font-sans min-h-screen bg-gray-50">
        <Header />
        <Breadcrumbs />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">エラーが発生しました</h1>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <Breadcrumbs 
        pageName={blog.title} 
      />
      
      {/* メインコンテンツ - 背景画像付きセクション */}
      <main 
        className="min-h-screen bg-repeat"
        style={{ backgroundImage: `url('${withBasePath('/figma/blue-bg.png')}')` }}
      >
        {/* 白い背景のコンテナ */}
        <div className="container mx-auto md:px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg px-2 py-4 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* メインコンテンツエリア */}
              <div className="flex-1 lg:order-first">
                <BlogDetailSection blog={blog} />
              </div>
              
              {/* サイドバー（デスクトップのみ表示） */}
              <aside className="hidden lg:block lg:order-last">
                <BlogDetailSidebar
                  categories={categories}
                  pickupArticles={pickupArticles}
                />
              </aside>
            </div>
          </div>
        </div>
      </main>
      
      {/* CTAセクション */}
      <BlogCTASection />
      
      <Footer />
    </div>
  );
}