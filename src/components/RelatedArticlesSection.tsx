import { Blog } from "@/types/microcms";
import BlogCard from "./BlogCard";

interface RelatedArticlesSectionProps {
  articles: Blog[];
}

export default function RelatedArticlesSection({ articles }: RelatedArticlesSectionProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-[#d9d9d9] pt-10" aria-labelledby="related-articles-heading">
      <div className="mb-6">
        <h2 id="related-articles-heading" className="text-2xl font-bold text-[#333333]">
          関連記事
        </h2>
        <p className="mt-2 text-sm text-[#666666]">
          あわせて読みたい記事をピックアップしています。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article.id} blog={article} />
        ))}
      </div>
    </section>
  );
}
