/**
 * microCMSカテゴリID定数
 * 各カテゴリのコンテンツIDをここで管理
 */
export const CATEGORY_IDS = {
  /** ピックアップカテゴリ */
  PICKUP: 'rqk2lr41z',
  /** 企業取材カテゴリ */
  COMPANY_INTERVIEW: '2',
} as const;

/**
 * カテゴリID型
 */
export type CategoryId = typeof CATEGORY_IDS[keyof typeof CATEGORY_IDS]; 