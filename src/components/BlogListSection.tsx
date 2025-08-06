'use client';

import { useState, useEffect, useMemo } from 'react';
import { Blog } from '@/types/microcms';
import BlogCard from './BlogCard';

interface BlogListSectionProps {
  blogs: Blog[];
  selectedCategories: string[];
  loading?: boolean;
}

const ITEMS_PER_PAGE = 9;

export default function BlogListSection({
  blogs,
  selectedCategories,
  loading = false
}: BlogListSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // カテゴリフィルタリング
  const filteredBlogs = useMemo(() => {
    if (selectedCategories.length === 0) {
      return blogs;
    }
    return blogs.filter(blog => 
      blog.category && selectedCategories.includes(blog.category.id)
    );
  }, [blogs, selectedCategories]);

  // ページネーション計算
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // フィルタが変更されたときに1ページ目に戻す
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  // ページ変更関数
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // ページ変更時にトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ページ番号配列を生成
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5);
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#333333] mb-2">ブログ一覧</h2>
          <p className="text-[#666666] text-sm">読み込み中...</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-[12px] h-[300px]"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* ヘッダー */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#333333] mb-2">ブログ一覧</h2>
        <p className="text-[#666666] text-sm">
          {selectedCategories.length > 0 
            ? `フィルタ適用中: ${filteredBlogs.length}件の記事`
            : `${filteredBlogs.length}件の記事`
          }
        </p>
      </div>

      {/* 記事がない場合 */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">記事が見つかりませんでした</div>
          <p className="text-gray-500 text-sm">条件を変更して再度お試しください</p>
        </div>
      ) : (
        <>
          {/* 記事グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {/* 前のページ */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#0066ff] hover:bg-[#0066ff] hover:text-white'
                } transition-colors`}
              >
                ‹
              </button>

              {/* ページ番号 */}
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full text-sm font-medium ${
                    currentPage === page
                      ? 'bg-[#0066ff] text-white'
                      : 'text-[#666666] hover:bg-[#0066ff] hover:text-white'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}

              {/* 次のページ */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#0066ff] hover:bg-[#0066ff] hover:text-white'
                } transition-colors`}
              >
                ›
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}