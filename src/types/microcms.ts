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
 * microCMS メンバーの型定義
 */
export interface Member {
  id: string;
  name?: string;
  icon?: {
    url: string;
    height?: number;
    width?: number;
  };
  text?: string;
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

/**
 * microCMS メンバー一覧APIのレスポンス型
 */
export interface MembersResponse {
  contents: Member[];
  totalCount: number;
  offset: number;
  limit: number;
}

/**
 * microCMS 都道府県の型定義
 */
export interface Prefecture {
  id: string;
  region: string;
  area: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS 市区町村の型定義
 */
export interface Municipality {
  id: string;
  name: string;
  prefecture: Prefecture;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS 職種カテゴリの型定義
 */
export interface JobCategory {
  id: string;
  name: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS タグの型定義
 */
export interface Tag {
  id: string;
  name: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS 求人の型定義
 */
export interface Job {
  id: string;
  title?: string;
  prefecture?: Prefecture;
  municipality?: Municipality;
  tags?: Tag[];
  jobCategory?: JobCategory;
  companyName?: string;
  jobName?: string;
  catchCopy?: string;
  addressZip?: string;
  addressPrefMuni?: string;
  addressLine?: string;
  addressBuilding?: string;
  employmentType?: string;
  wageType?: string;
  salaryMin?: number;
  salaryMax?: number;
  workStyle?: string;
  avgScheduledHours?: number;
  socialInsurance?: string;
  ssReason?: string;
  descriptionWork?: string;
  descriptionAppeal?: string;
  descriptionPerson?: string;
  workHours?: string;
  holidays?: string;
  dlNote?: string;
  access?: string;
  salaryNote?: string;
  descriptionBenefits?: string;
  descriptionOther?: string;
  images?: {
    url: string;
    height?: number;
    width?: number;
  }[];
  hasResume?: string;
  applyEmail?: string;
  inquiryTel?: string;
  matchingKeywords?: string;
  recurteId?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

/**
 * microCMS 求人一覧APIのレスポンス型
 */
export interface JobsResponse {
  contents: Job[];
  totalCount: number;
  offset: number;
  limit: number;
} 