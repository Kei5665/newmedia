import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

export default function JobSection() {
  return (
    <div className="relative w-full h-[800px] bg-center bg-cover bg-no-repeat" 
         style={{ backgroundImage: `url('${withBasePath('/figma/section4-job-1.png')}')` }}>
      
      {/* Section Title */}
      <div className="absolute left-1/2 top-20 translate-x-[-50%] w-[383px] h-[162px]">
        <Image src="/figma/heading04.png" alt="最新求人" width={383} height={162} className="object-contain w-full h-full" />
      </div>
      
      {/* Job Cards Grid */}
      <div className="absolute box-border content-stretch flex flex-col gap-10 items-center justify-center px-10 py-0 top-[298px] translate-x-[-50%] w-[1439px]" 
           style={{ left: "calc(50% + 0.5px)" }}>
        
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full">
          
          {/* Job Card 1 */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-[16px] relative rounded-[20px] shrink-0 w-full">
                <div className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                
                <div className="bg-center bg-cover bg-no-repeat h-[193px] rounded-[10px] shrink-0 w-full" 
                     style={{ backgroundImage: `url('${withBasePath('/figma/company-interview-bg.png')}')` }} />
                
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#101828] text-[16px] text-left" 
                       style={{ width: "min-content" }}>
                    <p className="block leading-[1.5]">アプリ配車タクシードライバー</p>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">newmoグループ 株式会社未来都 門真営業所</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-mask-shape1.svg')} alt="location" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">門真市 大阪府</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-frame.png')} alt="salary" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">月給 350,000〜800,000円</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-character.png')} alt="work type" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">正社員</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">保証給あり</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">駅徒歩10分以内</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">社員寮あり</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bg-red-500 box-border content-stretch flex flex-row items-center justify-center left-6 overflow-clip px-2 py-1.5 rounded-md top-6">
                  <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">NEW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-[16px] relative rounded-[20px] shrink-0 w-full">
                <div className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                
                <div className="bg-center bg-cover bg-no-repeat h-[189px] rounded-[10px] shrink-0 w-full" 
                     style={{ backgroundImage: `url('${withBasePath('/figma/category-company-interview.png')}')` }} />
                
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#101828] text-[16px] text-left" 
                       style={{ width: "min-content" }}>
                    <p className="block leading-[1.5]">【整備士資格2級 or 3級】自動車整備士</p>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">日本交通株式会社 千住工場</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-mask-shape1.svg')} alt="location" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">足立区 東京都</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-frame.png')} alt="salary" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">月給 270,000円 ~ 500,000円</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-character.png')} alt="work type" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">正社員</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">特定技能採用あり</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">日勤OK</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">外国人採用あり</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bg-red-500 box-border content-stretch flex flex-row items-center justify-center left-[24.25px] overflow-clip px-2 py-1.5 rounded-md top-6">
                  <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">NEW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative rounded-[20px] shrink-0 w-full">
              <div className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[20px]" />
              
              <div className="bg-center bg-cover bg-no-repeat h-[189px] rounded-[10px] shrink-0 w-full" 
                   style={{ backgroundImage: `url('${withBasePath('/figma/interview-image-83.png')}')` }} />
              
              <div className="absolute bg-red-500 box-border content-stretch flex flex-row items-center justify-center left-[24.5px] overflow-clip px-2 py-1.5 rounded-md top-6">
                <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                  <p className="block leading-[16px] whitespace-pre">NEW</p>
                </div>
              </div>
              
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#101828] text-[16px] text-left" 
                     style={{ width: "min-content" }}>
                  <p className="block leading-[20px]">アプリ配車タクシードライバー</p>
                </div>
                
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-medium justify-center leading-[normal] relative shrink-0 text-[12px] text-left text-neutral-500 text-nowrap whitespace-pre">
                    <p className="block mb-0">第一交通産業グループ 南大阪第一交通株式会社</p>
                    <p className="block">堺営業所</p>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                  <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="relative shrink-0 size-4">
                    <Image src={withBasePath('/figma/category-mask-shape1.svg')} alt="location" width={16} height={16} />
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">堺市西区 大阪府</p>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                  <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="relative shrink-0 size-4">
                    <Image src={withBasePath('/figma/category-frame.png')} alt="salary" width={16} height={16} />
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">月給 400,000円 ~ 800,000円</p>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 size-4">
                    <Image src={withBasePath('/figma/category-character.png')} alt="work type" width={16} height={16} />
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">正社員</p>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">夜勤OK</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">隔日勤務</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">賞与あり</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-[16px] relative rounded-[20px] shrink-0 w-full">
                <div className="absolute border-[#333333] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                
                <div className="bg-center bg-cover bg-no-repeat h-[189px] rounded-[10px] shrink-0 w-full" 
                     style={{ backgroundImage: `url('${withBasePath('/figma/company-interview-bg.png')}')` }} />
                
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#101828] text-[16px] text-left" 
                       style={{ width: "min-content" }}>
                    <p className="block leading-[20px]">タクシー乗務員</p>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">新星タクシー株式会社 太田営業所</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-mask-shape1.svg')} alt="location" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">常陸太田市 茨城県</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="absolute border-[#cccccc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-frame.png')} alt="salary" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">月給 200,000円 ~ 600,000円</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 w-full">
                    <div className="relative shrink-0 size-4">
                      <Image src={withBasePath('/figma/category-character.png')} alt="work type" width={16} height={16} />
                    </div>
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-neutral-500 text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">正社員</p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">賞与あり</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                    <div className="h-8 relative rounded-md shrink-0">
                      <div className="box-border content-stretch flex flex-row h-8 items-center justify-center overflow-clip p-[8px] relative">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
                          <p className="block leading-[16px] whitespace-pre">日勤OK</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bg-red-500 box-border content-stretch flex flex-row items-center justify-center left-[23.75px] overflow-clip px-2 py-1.5 rounded-md top-6">
                <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap">
                  <p className="block leading-[16px] whitespace-pre">NEW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* More Jobs Button */}
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-center p-0 relative shadow-[4px_4px_0px_0px_rgba(19,19,19,0.3)] shrink-0">
          <div className="bg-[#04acdb] box-border content-stretch flex flex-row gap-4 items-center justify-center pl-6 pr-4 py-4 relative rounded-[58px] shrink-0">
            <div className="absolute border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[58px]" />
            <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]">
              <p className="block leading-[normal] whitespace-pre">求人をもっと見る</p>
            </div>
            <div className="flex h-[31.984px] items-center justify-center relative shrink-0 w-[32px]">
              <div className="flex-none rotate-[270deg]">
                <div className="relative size-8">
                  <Image src={withBasePath('/figma/arrow-group3.svg')} alt="arrow" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}