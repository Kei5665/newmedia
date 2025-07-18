import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[771px]" data-name="hero">
      <div
        className="absolute bg-[#19bbfb] h-[771px] left-0 rounded-bl-[48px] top-0 w-full"
        data-name="bg"
      />
      <div className="absolute left-0 top-[3px] w-full h-[767px]">
        <Image
          src="/figma/icon-bg.png"
          alt="Background pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute right-12 top-[23px] w-[646px] h-[688px]">
        <Image
          src="/figma/hero-main-image.png"
          alt="Hero main image"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute left-[29px] top-[23px]">
        <div className="absolute left-0 top-[274px] w-[690px] h-[414px]">
          <Image
            src="/figma/hero-pickup-section.png"
            alt="Pickup section"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute left-[17px] top-0 w-[445px] h-[260px]">
          <Image
            src="/figma/hero-title.png"
            alt="Hero title"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute left-[403px] top-10 w-[366px] h-[312px]">
          <Image
            src="/figma/hero-characters.png"
            alt="Hero characters"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}