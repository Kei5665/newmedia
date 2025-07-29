import { getLatestJobs } from "@/lib/microcms";
import { Job } from "@/types/microcms";

const imgSection4Job = "/figma/section4-job-bg.png";
const imgHeading042 = "/figma/heading04-2.png";
const imgBxsMap = "/figma/bxs-map.svg";
const imgLucideJapaneseYen = "/figma/lucide-japanese-yen.svg";
const imgMaterialSymbolsWork = "/figma/material-symbols-work.svg";
const imgFrame3 = "/figma/frame-3-arrow.svg";

// デフォルト画像
const defaultJobImage = "/figma/job-image-82.png";

// 給与をフォーマットする関数
function formatSalary(min?: number, max?: number, wageType?: string): string {
  if (!min && !max) return "応相談";
  
  const prefix = wageType === "hourly" ? "時給" : "月給";
  
  if (min && max) {
    return `${prefix} ${min.toLocaleString()}〜${max.toLocaleString()}円`;
  } else if (min) {
    return `${prefix} ${min.toLocaleString()}円〜`;
  } else if (max) {
    return `${prefix} 〜${max.toLocaleString()}円`;
  }
  
  return "応相談";
}

// 勤務地をフォーマットする関数
function formatLocation(municipality?: { name: string; prefecture?: { region: string } }, addressPrefMuni?: string): string {
  if (municipality?.name && municipality?.prefecture?.region) {
    return `${municipality.name} ${municipality.prefecture.region}`;
  }
  if (addressPrefMuni) {
    return addressPrefMuni;
  }
  return "勤務地未設定";
}

// 求人カードコンポーネント
function JobCard({ job }: { job: Job }) {
  const jobImage = job.images?.[0]?.url || defaultJobImage;
  const jobTitle = job.jobName || job.title || "求人情報";
  const companyName = job.companyName || "会社名未設定";
  const location = formatLocation(job.municipality, job.addressPrefMuni);
  const salary = formatSalary(job.salaryMin, job.salaryMax, job.wageType);
  const employmentType = job.employmentType || "雇用形態未設定";
  const tags = job.tags?.slice(0, 3) || [];

  return (
    <div className="flex-1 min-w-0">
      <div className="bg-[#ffffff] border-[#333333] border-[1.2px] border-solid rounded-[20px] p-4 h-full flex flex-col">
        <div
          className="bg-center bg-cover bg-no-repeat h-[193px] rounded-[10px] shrink-0 w-full mb-4"
          style={{ backgroundImage: `url('${jobImage}')` }}
        />
        <div className="flex flex-col gap-2 flex-1">
          <div className="font-['Noto_Sans_JP:Bold',_sans-serif] font-bold text-[#101828] text-[16px] leading-[1.5] break-words">
            {jobTitle}
          </div>
          <div className="font-['Noto_Sans_JP:Medium',_sans-serif] font-medium text-neutral-500 text-[12px] leading-normal pb-1 break-words">
            {companyName}
          </div>
          <div className="flex items-center gap-2 pb-1 border-b border-[#cccccc]">
            <div className="shrink-0 size-4">
              <img
                alt="Map icon"
                className="block max-w-none size-full"
                src={imgBxsMap}
              />
            </div>
            <div className="font-['Noto_Sans_JP:Medium',_sans-serif] font-medium text-neutral-500 text-[14px] leading-normal break-words flex-1 min-w-0">
              {location}
            </div>
          </div>
          <div className="flex items-center gap-2 pb-1 border-b border-[#cccccc]">
            <div className="shrink-0 size-4">
              <img
                alt="Yen icon"
                className="block max-w-none size-full"
                loading="lazy"
                src={imgLucideJapaneseYen}
              />
            </div>
            <div className="font-['Noto_Sans_JP:Medium',_sans-serif] font-medium text-neutral-500 text-[14px] leading-normal break-words flex-1 min-w-0">
              {salary}
            </div>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <div className="shrink-0 size-4">
              <img
                alt="Work icon"
                className="block max-w-none size-full"
                loading="lazy"
                src={imgMaterialSymbolsWork}
              />
            </div>
            <div className="font-['Noto_Sans_JP:Medium',_sans-serif] font-medium text-neutral-500 text-[14px] leading-normal break-words flex-1 min-w-0">
              {employmentType}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, tagIndex) => (
              <div key={tagIndex} className="border border-[#333333] border-solid rounded-md px-2 py-1 shrink-0">
                <div className="font-['Noto_Sans_JP:Medium',_sans-serif] font-medium text-[#333333] text-[12px] leading-4">
                  {tag.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function NewJobSection() {
  let jobs: Job[] = [];
  
  try {
    const jobsResponse = await getLatestJobs(4);
    jobs = jobsResponse.contents;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    // エラーが発生した場合は空配列のまま
  }

  return (
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-20 relative size-full"
      data-name="section4 job"
      id="node-2161_192"
      style={{ backgroundImage: `url('${imgSection4Job}')` }}
    >
      <div
        className="box-border content-stretch flex flex-col gap-14 items-center justify-start p-0 relative shrink-0 w-full"
        id="node-2161_343"
      >
        <div
          className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0"
          data-name="heading04"
          id="node-2161_312"
        >
          <div
            className="bg-center bg-cover bg-no-repeat h-[162px] shrink-0 w-[383px]"
            data-name="heading04 2"
            id="node-2161_347"
            style={{ backgroundImage: `url('${imgHeading042}')` }}
          />
        </div>
        <div
          className="box-border content-stretch flex flex-col gap-10 items-center justify-center px-10 py-0 relative shrink-0 w-full"
          data-name="cardA"
          id="node-2161_193"
        >
          {jobs.length > 0 ? (
            <div className="w-full max-w-7xl">
              <div className="flex flex-row gap-6 w-full">
                {jobs.slice(0, 4).map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          ) : (
            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-8 relative shrink-0 w-full">
              <p className="text-[#666666] text-[16px] font-medium">
                求人情報を取得できませんでした
              </p>
            </div>
          )}
        </div>
        <div
          className="box-border content-stretch flex flex-col gap-12 items-center justify-center p-0 relative shrink-0"
          data-name="btn"
          id="node-2161_306"
        >
          <div
            className="shadow-[4px_4px_0px_0px_rgba(19,19,19,0.3)] bg-[#04acdb] box-border content-stretch flex flex-row gap-4 items-center justify-center pl-6 pr-4 py-4 relative rounded-[58px] shrink-0"
            data-name="Button"
            id="node-2161_307"
          >
            <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[58px]" />
            <div
              className="flex flex-col font-['Noto_Sans_JP:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]"
              id="node-2161_308"
            >
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                求人をもっと見る
              </p>
            </div>
            <div className="flex h-[31.984px] items-center justify-center relative shrink-0 w-[32px]">
              <div className="flex-none rotate-[270deg]">
                <div className="relative size-8" id="node-2161_309">
                  <img
                    alt="Arrow icon"
                    className="block max-w-none size-full"
                    loading="lazy"
                    src={imgFrame3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}