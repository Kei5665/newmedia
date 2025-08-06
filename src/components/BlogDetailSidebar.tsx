import { Category, Blog } from '@/types/microcms';
import PickupArticles from './PickupArticles';

interface BlogDetailSidebarProps {
  categories: Category[];
  pickupArticles: Blog[];
}

export default function BlogDetailSidebar({
  categories,
  pickupArticles
}: BlogDetailSidebarProps) {
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">※ キーワード検索は準備中です</p>
      </div>

      {/* カテゴリ一覧（表示のみ） */}
      <div className="bg-white rounded-[12px] p-3 sm:p-4 shadow-sm">
        <h3 className="text-[#333333] font-bold text-base sm:text-lg mb-3 sm:mb-4">カテゴリ</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <span className="text-sm text-[#333333] hover:text-[#0066ff] cursor-pointer transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ピックアップ記事 */}
      <PickupArticles articles={pickupArticles} />

      {/* バナー広告エリア */}
      <div className="bg-white rounded-[12px] p-3 sm:p-4 shadow-sm">
        <div className="bg-gradient-to-r from-[#0066ff] to-[#04acdb] rounded-[8px] p-4 sm:p-6 text-center text-white">
          <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">求人情報をチェック！</h4>
          <p className="text-xs sm:text-sm mb-3 sm:mb-4">あなたにぴったりの仕事を見つけよう</p>
          <button className="bg-white text-[#0066ff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors">
            求人を見る
          </button>
        </div>
      </div>

      {/* 追加バナー */}
      <div className="bg-white rounded-[12px] p-3 sm:p-4 shadow-sm">
        <div className="bg-[#ff6600] rounded-[8px] p-4 sm:p-6 text-center text-white">
          <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">面談のご相談</h4>
          <p className="text-xs sm:text-sm mb-3 sm:mb-4">まずはお気軽にお話を聞かせてください</p>
          <button className="bg-white text-[#ff6600] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors">
            相談する
          </button>
        </div>
      </div>
    </div>
  );
}