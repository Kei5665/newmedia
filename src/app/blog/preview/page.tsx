import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogDetailSection from '@/components/BlogDetailSection';
import BlogDetailSidebar from '@/components/BlogDetailSidebar';
import BlogCTASection from '@/components/BlogCTASection';
import { getBlogById, getAllCategories, getLatestBlogs } from '@/lib/microcms';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'プレビュー',
  description: 'microCMS下書きプレビュー',
};

interface PreviewPageProps {
  searchParams?: Promise<{ contentId?: string; dk?: string; draftKey?: string }>;
}

export default async function BlogPreviewPage({ searchParams }: PreviewPageProps) {
  const sp = searchParams ? await searchParams : {};
  const contentId = sp?.contentId;
  const draftKey = sp?.dk || sp?.draftKey;

  if (!contentId || !draftKey) {
    return (
      <div className="font-sans min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-2">プレビューURLが不正です</h1>
          <p className="text-gray-600">contentId と dk（または draftKey）を指定してください。</p>
        </div>
        <Footer />
      </div>
    );
  }

  const blog = await getBlogById(contentId, draftKey);

  if (!blog) {
    return (
      <div className="font-sans min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-2">プレビュー記事が見つかりません</h1>
          <p className="text-gray-600">contentId と draftKey を確認してください。</p>
        </div>
        <Footer />
      </div>
    );
  }

  const [categoriesRes, pickupRes] = await Promise.allSettled([
    getAllCategories(),
    getLatestBlogs(3),
  ]);

  const categories = categoriesRes.status === 'fulfilled' ? categoriesRes.value : [];
  const pickupArticles = pickupRes.status === 'fulfilled' ? (pickupRes.value.contents || []) : [];

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <Breadcrumbs pageName={`[プレビュー] ${blog.title}`} />
      <main
        className="min-h-screen"
        style={{
          backgroundImage: `url('${withBasePath('/figma/blue-bg.png')}')`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top left',
        }}
      >
        <div className="container mx-auto md:px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg px-2 py-4 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1 lg:order-first">
                <BlogDetailSection blog={blog} />
              </div>
              <aside className="hidden lg:block lg:order-last">
                <BlogDetailSidebar categories={categories} pickupArticles={pickupArticles} />
              </aside>
            </div>
          </div>
        </div>
      </main>
      <BlogCTASection />
      <Footer />
    </div>
  );
}


