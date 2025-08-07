'use client';

import { Category } from '@/types/microcms';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryIds: string[]) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  onCategoryChange
}: CategoryFilterProps) {
  const handleToggle = (categoryId: string) => {
    const newSelected = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    onCategoryChange(newSelected);
  };

  return (
    <div className="bg-white rounded-[12px] p-4 shadow-sm">
      <h3 className="text-[#333333] font-bold text-lg mb-4">カテゴリから探す</h3>
      
      <div className="space-y-3">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <div key={category.id} className="flex items-center justify-between">
              <span className="text-[#333333] text-sm font-medium">
                {category.name}
              </span>
              
              <button
                onClick={() => handleToggle(category.id)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                  isSelected ? 'bg-[#0066ff]' : 'bg-[#cccccc]'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                    isSelected ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}