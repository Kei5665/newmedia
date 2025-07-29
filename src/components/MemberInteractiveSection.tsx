'use client';

import { useState } from 'react';
import { Member } from '@/types/microcms';

const imgGroup2091 = "/figma/interview-staff-photos.png"; // フォールバック用
const imgGroup2071 = "/figma/interview-featured-staff.png";
const imgGroup4 = "/figma/interview-arrow-icon.svg";

interface MemberInteractiveSectionProps {
  members: Member[];
}

/**
 * メンバーアイコンコンポーネント（クリック可能）
 */
function ClickableMemberIcon({ 
  member, 
  index, 
  isSelected, 
  onClick 
}: { 
  member: Member; 
  index: number; 
  isSelected: boolean; 
  onClick: () => void; 
}) {
  return (
    <div
      className={`bg-center bg-cover bg-no-repeat h-[117px] shrink-0 w-[93px] rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
        isSelected ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105 hover:ring-2 hover:ring-blue-300'
      }`}
      style={{
        backgroundImage: `url('${member.icon?.url || imgGroup2091}')`,
      }}
      title={member.name || `メンバー ${index + 1}`}
      onClick={onClick}
    />
  );
}

/**
 * メンバー詳細表示コンポーネント
 */
function MemberDetail({ member }: { member: Member }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-10 items-start justify-center p-0 relative shrink-0">
      {/* メンバー画像 */}
      <div
        className="bg-center bg-cover bg-no-repeat h-[316px] shrink-0 w-[265px] rounded-lg overflow-hidden"
        style={{ 
          backgroundImage: `url('${member.icon?.url || imgGroup2071}')` 
        }}
      />
      
      {/* メンバー情報 */}
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap">
          <div className="flex flex-col font-['Dela_Gothic_One:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-[#101828] text-[32px]">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              {member.name || 'Unknown Member'}
            </p>
          </div>
          <div className="flex flex-col font-['Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#2204db] text-[24px]">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              {member.name || '名前未設定'}
            </p>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium h-[271px] justify-start leading-[1.8] relative shrink-0 text-[16px] text-justify text-neutral-950 w-[250px] overflow-y-auto">
            <p className="block">
              {member.text || 'メンバーの説明文が設定されていません。'}
            </p>
          </div>
        </div>
        
        <div className="bg-[#06bef1] box-border content-stretch flex flex-row gap-2 items-center justify-center pl-6 pr-2 py-2 relative rounded-[3.35544e+07px] shrink-0 cursor-pointer hover:bg-[#05a5d6] transition-colors">
          <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[4px_4px_0px_0px_rgba(19,19,19,0.3)]" />
          <div className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              記事を読む
            </p>
          </div>
          <div className="flex h-[31.984px] items-center justify-center relative shrink-0 w-[32px]">
            <div className="flex-none rotate-[270deg]">
              <div className="relative size-8">
                <img
                  alt="Arrow icon"
                  className="block max-w-none size-full"
                  loading="lazy"
                  src={imgGroup4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * メンバーインタラクティブセクション
 */
export default function MemberInteractiveSection({ members }: MemberInteractiveSectionProps) {
  // 最大4人のメンバーを表示（足りない場合はフォールバック）
  const displayMembers = [...members].slice(0, 4);
  while (displayMembers.length < 4) {
    displayMembers.push({
      id: `fallback-${displayMembers.length}`,
      name: '',
      icon: undefined,
      text: '',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      revisedAt: ''
    });
  }

  // 最初のメンバー（または最初の実際のメンバー）を初期選択
  const firstRealMember = members.find(m => m.name && m.name.trim() !== '') || members[0];
  const [selectedMember, setSelectedMember] = useState<Member>(
    firstRealMember || displayMembers[0]
  );

  return (
    <>
      {/* メンバーアイコン一覧 */}
      <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0">
        {displayMembers.map((member, index) => (
          <ClickableMemberIcon 
            key={member.id} 
            member={member} 
            index={index}
            isSelected={selectedMember.id === member.id}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* 選択されたメンバーの詳細表示 */}
      <MemberDetail member={selectedMember} />
    </>
  );
} 