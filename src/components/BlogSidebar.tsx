'use client';

import { Category, Blog } from '@/types/microcms';
import CategoryFilter from './CategoryFilter';
import PickupArticles from './PickupArticles';
import { withBasePath } from '@/lib/basePath';
import Image from 'next/image';

interface BlogSidebarProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryIds: string[]) => void;
  pickupArticles: Blog[];
}

export default function BlogSidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  pickupArticles
}: BlogSidebarProps) {
  return (
    <div className="w-full lg:w-80 space-y-4 lg:space-y-6 bg-[#DDFCFE] p-4 rounded-2xl">
      {/* キーワード検索（プレースホルダー） */}
      <div className="bg-white rounded-[12px] p-3 sm:p-4 shadow-sm">
        <h3 className="text-[#333333] font-bold text-base sm:text-lg mb-3 sm:mb-4">キーワードから探す</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="キーワードを入力"
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-[8px] text-sm focus:outline-none focus:border-[#0066ff] bg-gray-100"
            disabled
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">※ キーワード検索は準備中です</p>
      </div>

      {/* カテゴリフィルター */}
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={onCategoryChange}
      />

      {/* ピックアップ記事 */}
      <PickupArticles articles={pickupArticles} />

      {/* バナーセクション */}
      <div className="bg-white rounded-[12px] p-3 sm:p-4 shadow-sm">
        <div className="space-y-3">
          <a href="https://ridejob.jp/ssw/ja" target="_blank" rel="noopener noreferrer" aria-label="RIDE JOB FOR SSW">
            <div className="relative w-full h-24 sm:h-28 rounded-[8px] overflow-hidden">
              <Image src={withBasePath('/ssw.png')} alt="LINEで相談" fill className="object-contain" unoptimized />
            </div>
          </a>
          <a href="https://www.tiktok.com/@ride.job" target="_blank" rel="noopener noreferrer" aria-label="RIDE JOB TikTok">
            <div className="relative w-full h-24 sm:h-28 rounded-[8px] overflow-hidden">
              <Image src={withBasePath('/Tiltok.png')} alt="RIDE JOB TikTok" fill className="object-contain" unoptimized />
            </div>
          </a>
          <a href="https://www.youtube.com/@RIDEJOB%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB" target="_blank" rel="noopener noreferrer" aria-label="RIDE JOB YouTube">
            <div className="relative w-full h-24 sm:h-28 rounded-[8px] overflow-hidden">
              <Image src={withBasePath('/youtube.png')} alt="RIDE JOB YouTube" fill className="object-contain" unoptimized />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}