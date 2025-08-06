import { BlogsResponse, MembersResponse, JobsResponse, Category } from "@/types/microcms";

// 環境変数の確認とフォールバック
const getEnvVar = (key: string, fallback?: string): string => {
  const value = process.env[key];
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
    return fallback || '';
  }
  return value;
};

// サーバーサイドとクライアントサイドの両方に対応
const API_KEY = getEnvVar('MICROCMS_API_KEY') || getEnvVar('NEXT_PUBLIC_MICROCMS_API_KEY');
const SERVICE_DOMAIN = getEnvVar('MICROCMS_SERVICE_DOMAIN') || getEnvVar('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN');
const BASE_URL = SERVICE_DOMAIN ? `https://${SERVICE_DOMAIN}.microcms.io/api/v1` : '';

// 求人専用のmicroCMS設定
const JOB_API_KEY = getEnvVar('MICROCMS_API_KEY_2');
const JOB_SERVICE_DOMAIN = getEnvVar('MICROCMS_SERVICE_DOMAIN_2');
const JOB_BASE_URL = JOB_SERVICE_DOMAIN ? `https://${JOB_SERVICE_DOMAIN}.microcms.io/api/v1` : '';

// 初期化時の環境変数チェック
console.log('MicroCMS Configuration:', {
  API_KEY: API_KEY ? 'Set' : 'Not set',
  SERVICE_DOMAIN,
  BASE_URL,
  JOB_API_KEY: JOB_API_KEY ? 'Set' : 'Not set',
  JOB_SERVICE_DOMAIN,
  JOB_BASE_URL
});

/**
 * 最新ブログを取得（公開日順）
 * @param limit 取得件数（デフォルト: 6）
 * @returns BlogsResponse
 */
export async function getLatestBlogs(limit: number = 6): Promise<BlogsResponse> {
  // 環境変数の検証
  if (!API_KEY || !SERVICE_DOMAIN) {
    console.error('MicroCMS environment variables are not properly configured');
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: limit
    };
  }

  console.log('Environment check:', {
    SERVICE_DOMAIN,
    API_KEY: API_KEY ? 'Set' : 'Not set',
    BASE_URL
  });

  const url = `${BASE_URL}/blogs?limit=${limit}&orders=-publishedAt`;
  console.log('Fetching from URL:', url);

  try {
    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    console.log('Response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('API Error Response:', errorText);
      throw new Error(`Failed to fetch blogs: ${res.status} - ${errorText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Network or parsing error:', error);
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: limit
    };
  }
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
  // 環境変数の検証
  if (!API_KEY || !SERVICE_DOMAIN) {
    console.error('MicroCMS environment variables are not properly configured');
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: limit
    };
  }

  try {
    const filters = encodeURIComponent(`category[equals]${categoryId}`);
    const url = `${BASE_URL}/blogs?filters=${filters}&limit=${limit}&orders=-publishedAt`;
    console.log('Fetching category blogs from URL:', url);

    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    console.log('Category blogs response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Category blogs API Error Response:', errorText);
      throw new Error(`Failed to fetch blogs by category: ${res.status} - ${errorText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Category blogs Network or parsing error:', error);
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: limit
    };
  }
}

/**
 * 全メンバーを取得
 * @param limit 取得件数（デフォルト: 10）
 * @returns MembersResponse
 */
export async function getAllMembers(limit: number = 10): Promise<MembersResponse> {
  const url = `${BASE_URL}/member?limit=${limit}&orders=-publishedAt`;

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch members: ${res.status}`);
  }

  return res.json();
}

/**
 * 最新求人を取得（公開日順）
 * @param limit 取得件数（デフォルト: 4）
 * @returns JobsResponse
 */
export async function getLatestJobs(limit: number = 4): Promise<JobsResponse> {
  const url = `${JOB_BASE_URL}/jobs?limit=${limit}&orders=-publishedAt`;

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": JOB_API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch jobs: ${res.status}`);
  }

  return res.json();
}

/**
 * 全ブログを取得（ページネーション対応）
 * @param limit 取得件数（デフォルト: 10）
 * @param offset 取得開始位置（デフォルト: 0）
 * @returns BlogsResponse
 */
export async function getAllBlogs(
  limit: number = 10,
  offset: number = 0
): Promise<BlogsResponse> {
  try {
    // まず既存のgetLatestBlogs関数を使って動作確認
    if (offset === 0) {
      try {
        const latestBlogs = await getLatestBlogs(limit);
        console.log('Successfully fetched blogs using getLatestBlogs');
        return latestBlogs;
      } catch (error) {
        console.warn('getLatestBlogs failed, trying direct API call:', error);
      }
    }

    const url = `${BASE_URL}/blogs?limit=${limit}&offset=${offset}&orders=-publishedAt`;
    console.log('Fetching from URL:', url);

    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API returned ${res.status} for URL: ${url}`);
      throw new Error(`Failed to fetch all blogs: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('getAllBlogs failed:', error);
    // フォールバック: 空のレスポンスを返す
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: limit
    };
  }
}

/**
 * ブログ記事からカテゴリを抽出
 * @returns Category[]
 */
export async function getCategoriesFromBlogs(): Promise<Category[]> {
  try {
    const blogsResponse = await getLatestBlogs(50); // 最新記事からカテゴリを抽出
    const blogs = blogsResponse.contents || [];
    
    const categoryMap = new Map<string, Category>();
    
    blogs.forEach(blog => {
      if (blog.category && !categoryMap.has(blog.category.id)) {
        categoryMap.set(blog.category.id, blog.category);
      }
    });
    
    return Array.from(categoryMap.values());
  } catch (error) {
    console.error('Failed to extract categories from blogs:', error);
    return [];
  }
}

/**
 * スラッグで単一ブログ記事を取得
 * @param slug 記事のスラッグ
 * @returns Blog | null
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  // 環境変数の検証
  if (!API_KEY || !SERVICE_DOMAIN) {
    console.error('MicroCMS environment variables are not properly configured');
    return null;
  }

  try {
    const filters = encodeURIComponent(`slug[equals]${slug}`);
    const url = `${BASE_URL}/blogs?filters=${filters}&limit=1`;
    console.log('Fetching blog by slug from URL:', url);

    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    console.log('Blog by slug response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Blog by slug API Error Response:', errorText);
      throw new Error(`Failed to fetch blog by slug: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    const blogs = data.contents || [];
    
    if (blogs.length === 0) {
      console.log(`No blog found with slug: ${slug}`);
      return null;
    }

    return blogs[0];
  } catch (error) {
    console.error('Blog by slug Network or parsing error:', error);
    return null;
  }
}

/**
 * IDで単一ブログ記事を取得
 * @param id 記事のID
 * @returns Blog | null
 */
export async function getBlogById(id: string): Promise<Blog | null> {
  // 環境変数の検証
  if (!API_KEY || !SERVICE_DOMAIN) {
    console.error('MicroCMS environment variables are not properly configured');
    return null;
  }

  try {
    const url = `${BASE_URL}/blogs/${id}`;
    console.log('Fetching blog by ID from URL:', url);

    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    console.log('Blog by ID response status:', res.status);

    if (!res.ok) {
      if (res.status === 404) {
        console.log(`Blog not found with ID: ${id}`);
        return null;
      }
      const errorText = await res.text();
      console.error('Blog by ID API Error Response:', errorText);
      throw new Error(`Failed to fetch blog by ID: ${res.status} - ${errorText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Blog by ID Network or parsing error:', error);
    return null;
  }
}

/**
 * 全カテゴリを取得（複数の方法を試行）
 * @returns Category[]
 */
export async function getAllCategories(): Promise<Category[]> {
  try {
    // 1. 専用のcategoriesエンドポイントを試行
    const url = `${BASE_URL}/categories?limit=100&orders=-publishedAt`;

    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      const categories = data.contents || [];
      if (categories.length > 0) {
        return categories;
      }
    }

    console.warn(`Categories endpoint returned ${res.status}, trying to extract from blogs`);
    
    // 2. ブログ記事からカテゴリを抽出
    const categoriesFromBlogs = await getCategoriesFromBlogs();
    if (categoriesFromBlogs.length > 0) {
      return categoriesFromBlogs;
    }

    // 3. フォールバックカテゴリを返す
    console.warn('No categories found, using fallback categories');
    return [
      { id: '2', name: '企業取材', slug: 'company-interview', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'rqk2lr41z', name: 'ピックアップ', slug: 'pickup', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: '3', name: 'インタビュー', slug: 'interview', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: '4', name: 'お役立ち情報', slug: 'helpful-info', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' }
    ];
  } catch (error) {
    console.error('Failed to fetch categories, using fallback:', error);
    // エラー時もフォールバックカテゴリを返す
    return [
      { id: '2', name: '企業取材', slug: 'company-interview', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'rqk2lr41z', name: 'ピックアップ', slug: 'pickup', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: '3', name: 'インタビュー', slug: 'interview', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: '4', name: 'お役立ち情報', slug: 'helpful-info', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' }
    ];
  }
} 