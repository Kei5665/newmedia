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
      <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0">
        <Image
          src={withBasePath(imgFrame2241)}
          alt="面談担当者見出し"
          width={280}
          height={200}
          className="w-[280px] md:w-[408px] h-[200px] md:h-[308px] object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 280px, 408px"
        />
      </div>
      
      <WhiteCard>
        <div className="box-border content-stretch flex flex-col gap-8 md:gap-[71px] items-center justify-center p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-6 md:gap-8 items-center justify-start p-0 relative shrink-0 w-full">
            <Image
              src={withBasePath(imgFrame2151)}
              alt="面談担当者サブタイトル"
              width={150}
              height={35}
              className="w-[150px] md:w-[197px] h-[35px] md:h-[45px] object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 150px, 197px"
            />
            <div className="w-full">
              <MemberInteractiveSection members={members} />
            </div>
          </div>
        </div>
      </WhiteCard>
    </SectionContainer>
  );
}
