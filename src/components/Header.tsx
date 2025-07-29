'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full border-b border-gray-200">
      <div className="px-4 md:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col items-center">
            <Image
              src="/logo-ridejob.png"
              alt="RIDE JOB Logo"
              width={89}
              height={29}
              className="h-[29px] w-[89px]"
            />
            <div className="text-[#155dfc] text-xs font-bold text-center">
              ライドジョブ
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#04acdb] text-white px-6 py-2 rounded-[10px] font-bold text-base shadow-sm hover:bg-[#0398c0] transition-colors">
              まずお話を聞く
            </button>
            <button className="bg-[#2204db] text-white px-6 py-2 rounded-[10px] font-bold text-base shadow-sm hover:bg-[#1b03b8] transition-colors">
              求人情報を見る
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <button className="bg-[#04acdb] text-white px-6 py-3 rounded-[10px] font-bold text-base shadow-sm hover:bg-[#0398c0] transition-colors">
                まずお話を聞く
              </button>
              <button className="bg-[#2204db] text-white px-6 py-3 rounded-[10px] font-bold text-base shadow-sm hover:bg-[#1b03b8] transition-colors">
                求人情報を見る
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}