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
 * @param categoryId カテゴリのコンテンツID（例: "2"）
 * @param limit 取得件数（デフォルト: 6）
 * @returns BlogsResponse
 */
export async function getBlogsByCategory(
  categoryId: string,
  limit: number = 6
): Promise<BlogsResponse> {
  const filters = encodeURIComponent(`category[equals]${categoryId}`);
  const url = `${BASE_URL}/blogs?filters=${filters}&limit=${limit}&orders=-publishedAt`;

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs by category: ${res.status}`);
  }

  return res.json();
} 