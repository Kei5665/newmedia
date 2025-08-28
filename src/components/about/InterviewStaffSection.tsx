import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Member } from "@/types/microcms";
import MemberInteractiveSection from "../MemberInteractiveSection";
import { SectionContainer, WhiteCard } from "./SectionContainer";

interface InterviewStaffSectionProps {
  members: Member[];
}

export function InterviewStaffSection({ members }: InterviewStaffSectionProps) {
  const imgFrame2241 = "/figma/interview-section-heading.png";
  const imgFrame2151 = "/figma/interview-staff-title.png";

  return (
    <SectionContainer>
      <Image
        src={withBasePath(imgFrame2241)}
        alt="面談担当者見出し"
        width={280}
        height={200}
        className="w-[280px] md:w-[408px] h-auto object-contain"
        loading="lazy"
        sizes="(max-width: 768px) 280px, 408px"
      />
      
      <WhiteCard>
        <div className="flex flex-col gap-6 md:gap-8 items-center w-full">
          <Image
            src={withBasePath(imgFrame2151)}
            alt="面談担当者サブタイトル"
            width={150}
            height={35}
            className="w-[150px] md:w-[197px] h-auto object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 150px, 197px"
          />
          <div className="w-full">
            <MemberInteractiveSection members={members} />
          </div>
        </div>
      </WhiteCard>
    </SectionContainer>
  );
}
