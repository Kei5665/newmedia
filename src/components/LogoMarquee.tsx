import { getLogos } from "@/lib/microcms";

export default async function LogoMarquee() {
  const res = await getLogos(30);
  const logos = res.contents || [];

  if (!logos.length) return null;

  // 無限スクロールのため2周分に展開
  const looped = [...logos, ...logos];

  return (
    <section aria-label="企業ロゴ" className="w-full">
      <div className="w-full bg-white border-t border-b border-black/10 py-6">
        <div className="logo-marquee overflow-hidden">
          <div className="logo-marquee__track flex items-center gap-10 md:gap-14">
            {looped.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                {/* 画像縦横の差異を吸収するため高さ固定・オブジェクトフィット */}
                <img
                  src={item.logo?.url || ''}
                  alt={item.company || 'company logo'}
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                  loading={idx < 10 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


