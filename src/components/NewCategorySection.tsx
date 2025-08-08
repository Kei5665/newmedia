import Link from 'next/link';
import { withBasePath } from '@/lib/basePath';
import { Category } from '@/types/microcms';

interface NewCategorySectionProps {
  categories: Category[];
}

const imgSection3Category = "/figma/category-bg.png";
const imgFrame683 = "/figma/category-title.png";
const imgGroup20611 = "/figma/category-character.png";
const imgFrame471 = "/figma/category-card1.png";
const imgFrame481 = "/figma/category-card2.png";
const imgFrame461 = "/figma/category-card3.png";
const imgFrame491 = "/figma/category-card4.png";

export default function NewCategorySection({ categories }: NewCategorySectionProps) {
  // カテゴリ名からIDを取得するヘルパー関数
  const getCategoryId = (categoryName: string): string | undefined => {
    const category = categories.find(cat => cat.name === categoryName);
    return category?.id;
  };
  return (
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center pb-8 lg:pb-0 px-4 md:px-8 lg:pl-[150px] lg:pr-[72px] pt-16 lg:pt-20 relative w-full min-h-screen"
      data-name="section3 Category"
      id="node-2151_193"
      style={{ backgroundImage: `url('${withBasePath(imgSection3Category)}')` }}
    >
      <div
        className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start justify-center lg:justify-start p-0 relative shrink-0 w-full lg:w-auto"
        id="node-2151_195"
      >
        <div
          className="box-border content-stretch flex flex-col gap-8 lg:gap-[173px] items-center lg:items-start justify-center p-0 relative shrink-0"
          id="node-2151_417"
        >
          <div
            className="box-border content-stretch flex flex-col gap-6 lg:gap-10 items-center lg:items-start justify-start p-0 relative shrink-0"
            id="node-2151_196"
          >
            <div
              className="box-border content-stretch flex flex-col gap-6 items-center lg:items-start justify-start p-0 relative shrink-0"
              data-name="heading03"
              id="node-2151_200"
            >
              <div
                className="bg-center bg-contain bg-no-repeat h-[180px] md:h-[240px] lg:h-[273px] shrink-0 w-[280px] md:w-[320px] lg:w-[376px]"
                data-name="Frame 68 3"
                id="node-2152_192"
                style={{ backgroundImage: `url('${withBasePath(imgFrame683)}')` }}
              />
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-col gap-4 items-center lg:items-start justify-start p-0 relative shrink-0"
            id="node-2151_418"
          >
            <div
              className="bg-center bg-contain bg-no-repeat h-[400px] md:h-[500px] lg:h-[595px] shrink-0 w-[280px] md:w-[320px] lg:w-[367.5px]"
              data-name="Group 206 (1) 1"
              id="node-2151_1161"
              style={{ backgroundImage: `url('${withBasePath(imgGroup20611)}')` }}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-center w-full min-w-0 flex-1 lg:w-auto lg:flex-initial"
        id="node-2151_1328"
      >
        <Link
          href={`/blog?category=${getCategoryId('ご利用者様の声') || ''}`}
          className="block hover:opacity-80 transition-opacity"
        >
          <div
            className="bg-center bg-contain bg-no-repeat min-h-[120px] h-[150px] md:h-[200px] lg:h-[222px] w-full min-w-[380px] max-w-[400px] mx-auto lg:max-w-none lg:w-[680px] lg:mx-0 cursor-pointer"
            data-name="Frame 47 1"
            id="node-2151_1192"
            style={{ backgroundImage: `url('${withBasePath(imgFrame471)}')` }}
          />
        </Link>
        <Link
          href={`/blog?category=${getCategoryId('お役立ち情報') || ''}`}
          className="block hover:opacity-80 transition-opacity"
        >
          <div
            className="bg-center bg-contain bg-no-repeat min-h-[120px] h-[150px] md:h-[200px] lg:h-[222px] w-full min-w-[380px] max-w-[400px] mx-auto lg:max-w-none lg:w-[680px] lg:mx-0 cursor-pointer"
            data-name="Frame 48 1"
            id="node-2151_1207"
            style={{ backgroundImage: `url('${withBasePath(imgFrame481)}')` }}
          />
        </Link>
        <Link
          href={`/blog?category=${getCategoryId('企業取材') || ''}`}
          className="block hover:opacity-80 transition-opacity"
        >
          <div
            className="bg-center bg-contain bg-no-repeat min-h-[120px] h-[150px] md:h-[200px] lg:h-[222px] w-full min-w-[380px] max-w-[400px] mx-auto lg:max-w-none lg:w-[680px] lg:mx-0 cursor-pointer"
            data-name="Frame 46 1"
            id="node-2151_1177"
            style={{ backgroundImage: `url('${withBasePath(imgFrame461)}')` }}
          />
        </Link>
        <Link
          href={`/blog?category=${getCategoryId('インタビュー') || ''}`}
          className="block hover:opacity-80 transition-opacity"
        >
          <div
            className="bg-center bg-contain bg-no-repeat min-h-[120px] h-[150px] md:h-[200px] lg:h-[222px] w-full min-w-[380px] max-w-[400px] mx-auto lg:max-w-none lg:w-[680px] lg:mx-0 cursor-pointer"
            data-name="Frame 49 1"
            id="node-2151_1222"
            style={{ backgroundImage: `url('${withBasePath(imgFrame491)}')` }}
          />
        </Link>
      </div>
    </div>
  );
}