import { Blog } from "@/types/microcms";
import { getBlogsByCategory, getLatestBlogs } from "./microcms";

/**
 * カテゴリでブログを取得し、取得できない場合はフォールバックする
 * @param categoryId カテゴリID
 * @param limit 取得件数
 * @returns Blog[]
 */
export async function fetchBlogsWithFallback(
  categoryId: string,
  limit: number = 6
): Promise<Blog[]> {
  try {
    // 1. APIフィルタリングを試行
    const response = await getBlogsByCategory(categoryId, limit);
    if (response.contents && response.contents.length > 0) {
      return response.contents;
    }

    // 2. クライアントサイドフィルタリングを試行
    const allResponse = await getLatestBlogs(50);
    const filteredBlogs = allResponse.contents?.filter(blog => 
      blog.category?.id === categoryId
    ) || [];
    
    if (filteredBlogs.length > 0) {
      return filteredBlogs.slice(0, limit);
    }

    // 3. 最新記事をフォールバック
    const latestResponse = await getLatestBlogs(limit);
    return latestResponse.contents || [];
    
  } catch {
    // エラー時は最新記事を返す
    try {
      const latestResponse = await getLatestBlogs(limit);
      return latestResponse.contents || [];
    } catch {
      return [];
    }
  }
} 