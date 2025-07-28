import { BlogsResponse } from "@/types/microcms";

const API_KEY = process.env.MICROCMS_API_KEY!;
const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN!;
const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

/**
 * 最新ブログを取得（公開日順）
 * @param limit 取得件数（デフォルト: 6）
 * @returns BlogsResponse
 */
export async function getLatestBlogs(limit: number = 6): Promise<BlogsResponse> {
  const url = `${BASE_URL}/blogs?limit=${limit}&orders=-publishedAt`;

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  return res.json();
}

/**
 * 特定カテゴリのブログを取得
 * @param categorySlug カテゴリのスラッグ
 * @param limit 取得件数（デフォルト: 6）
 * @returns BlogsResponse
 */
export async function getBlogsByCategory(
  categorySlug: string,
  limit: number = 6
): Promise<BlogsResponse> {
  const url = `${BASE_URL}/blogs?filters=category.slug[equals]${categorySlug}&limit=${limit}&orders=-publishedAt`;

  console.log(`🔍 Fetching blogs by category: ${categorySlug}`);
  console.log(`🌐 URL: ${url}`);
  console.log(`🔑 API Key exists: ${!!API_KEY}`);
  console.log(`🌍 Service Domain: ${SERVICE_DOMAIN}`);

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
    cache: "no-store",
  });

  console.log(`📡 Response status: ${res.status}`);
  console.log(`📡 Response ok: ${res.ok}`);

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`❌ API Error for category ${categorySlug}:`, errorText);
    throw new Error(`Failed to fetch blogs by category: ${res.status} - ${errorText}`);
  }

  const data = await res.json();
  console.log(`📦 Received data for category ${categorySlug}:`, data);
  console.log(`📊 Number of blogs found: ${data.contents?.length || 0}`);
  
  // 各ブログの詳細をログ出力
  data.contents?.forEach((blog: any, index: number) => {
    console.log(`📝 Blog ${index + 1} (${categorySlug}):`, {
      id: blog.id,
      title: blog.title,
      category: blog.category,
      categorySlug: blog.category?.slug,
      hasEyecatch: !!blog.eyecatch,
      publishedAt: blog.publishedAt
    });
  });

  return data;
} 