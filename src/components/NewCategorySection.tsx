const imgSection3Category = "/figma/category-bg.png";
const imgFrame683 = "/figma/category-title.png";
const imgGroup20611 = "/figma/category-character.png";
const imgFrame471 = "/figma/category-card1.png";
const imgFrame481 = "/figma/category-card2.png";
const imgFrame461 = "/figma/category-card3.png";
const imgFrame491 = "/figma/category-card4.png";

export default function NewCategorySection() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-row gap-16 items-center justify-start pb-0 pl-[150px] pr-[72px] pt-20 relative w-full min-h-screen"
      data-name="section3 Category"
      id="node-2151_193"
      style={{ backgroundImage: `url('${imgSection3Category}')` }}
    >
      <div
        className="box-border content-stretch flex flex-row gap-10 items-start justify-start p-0 relative shrink-0"
        id="node-2151_195"
      >
        <div
          className="box-border content-stretch flex flex-col gap-[173px] items-start justify-center p-0 relative shrink-0"
          id="node-2151_417"
        >
          <div
            className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0"
            id="node-2151_196"
          >
            <div
              className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0"
              data-name="heading03"
              id="node-2151_200"
            >
              <div
                className="bg-center bg-cover bg-no-repeat h-[273px] shrink-0 w-[376px]"
                data-name="Frame 68 3"
                id="node-2152_192"
                style={{ backgroundImage: `url('${imgFrame683}')` }}
              />
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
            id="node-2151_418"
          >
            <div
              className="bg-center bg-cover bg-no-repeat h-[595px] shrink-0 w-[367.5px]"
              data-name="Group 206 (1) 1"
              id="node-2151_1161"
              style={{ backgroundImage: `url('${imgGroup20611}')` }}
            />
          </div>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-col gap-6 items-start justify-center p-0 relative shrink-0"
        id="node-2151_1328"
      >
        <div
          className="bg-center bg-cover bg-no-repeat h-[222px] shrink-0 w-[680px]"
          data-name="Frame 47 1"
          id="node-2151_1192"
          style={{ backgroundImage: `url('${imgFrame471}')` }}
        />
        <div
          className="bg-center bg-cover bg-no-repeat h-[222px] shrink-0 w-[680px]"
          data-name="Frame 48 1"
          id="node-2151_1207"
          style={{ backgroundImage: `url('${imgFrame481}')` }}
        />
        <div
          className="bg-center bg-cover bg-no-repeat h-[222px] shrink-0 w-[680px]"
          data-name="Frame 46 1"
          id="node-2151_1177"
          style={{ backgroundImage: `url('${imgFrame461}')` }}
        />
        <div
          className="bg-center bg-cover bg-no-repeat h-[222px] shrink-0 w-[680px]"
          data-name="Frame 49 1"
          id="node-2151_1222"
          style={{ backgroundImage: `url('${imgFrame491}')` }}
        />
      </div>
    </div>
  );
}