'use client';

import { useState } from 'react';
import BlogListSection from '@/components/BlogListSection';
import BlogSidebar from '@/components/BlogSidebar';
import { Blog, Category } from '@/types/microcms';

interface BlogClientPageProps {
  blogs: Blog[];
  categories: Category[];
  pickupArticles: Blog[];
}

export default function BlogClientPage({ blogs, categories, pickupArticles }: BlogClientPageProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryIds: string[]) => {
    setSelectedCategories(categoryIds);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* メインコンテンツエリア */}
      <BlogListSection
        blogs={blogs}
        selectedCategories={selectedCategories}
        loading={false}
      />
      
      {/* サイドバー（デスクトップのみ表示） */}
      <aside className="hidden lg:block lg:order-last">
        <BlogSidebar
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          pickupArticles={pickupArticles}
        />
      </aside>
    </div>
  );
}