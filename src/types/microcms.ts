/**
 * microCMS カテゴリの型定義
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS ブログの型定義
 */
export interface Blog {
  id: string;
  title: string;
  content?: string;
  eyecatch?: {
    url: string;
    height?: number;
    width?: number;
  };
  category?: Category;
  slug?: string;
  html?: string;
  "blog-style"?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS ブログ一覧APIのレスポンス型
 */
export interface BlogsResponse {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
} 