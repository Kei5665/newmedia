import React from 'react';
import Image from 'next/image';

interface BreadcrumbsProps {
  pageName?: string;
}

export default function Breadcrumbs({ pageName = "メディアトップページ" }: BreadcrumbsProps) {
  return (
    <div className="bg-white w-full">
      <div className="px-4 sm:px-10 py-2">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-5 h-4 pr-1">
            <div className="relative w-4 h-4">
              <Image
                src="/figma/home-icon.svg"
                alt="Home icon"
                width={16}
                height={16}
                className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2 w-1 h-2"
              />
              <Image
                src="/figma/home-icon-detail.svg"
                alt="Home icon detail"
                width={16}
                height={16}
                className="absolute bottom-[12.498%] left-[12.5%] right-[12.5%] top-[8.337%] w-3 h-[10.5px]"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center w-6 h-4 px-1">
            <Image
              src="/figma/arrow-right.svg"
              alt="Separator"
              width={16}
              height={16}
              className="w-1 h-2"
            />
          </div>
          
          <div className="text-[#4b5563] text-sm font-normal leading-5">
            {pageName}
          </div>
        </div>
      </div>
    </div>
  );
}