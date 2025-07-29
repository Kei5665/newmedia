import { BlogsResponse, MembersResponse, JobsResponse } from "@/types/microcms";

const API_KEY = process.env.MICROCMS_API_KEY!;
const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN!;
const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

// 求人専用のmicroCMS設定
const JOB_API_KEY = process.env.MICROCMS_API_KEY_2!;
const JOB_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN_2!;
const JOB_BASE_URL = `https://${JOB_SERVICE_DOMAIN}.microcms.io/api/v1`;

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