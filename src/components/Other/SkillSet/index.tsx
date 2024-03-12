import { Skill } from "@/data/SkillData";

import SkillProcess from "@/components/Other/SkillProcess";

import { SkillData } from "@/interfaces/SkillProcessProps/SkillProcessProps";

const SkillSet = () => {
  return (
    <div className="w-full h-fit sm:h-full flex items-center justify-start lg:justify-center flex-col pt-[5.3125rem] pb-10 sm:py-20 lg:py-[6.25rem] ">
      <ul className="w-[83%] h-3/4 lg:h-full flex flex-col gap-[0.625rem] sm:gap-5 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10 lg:grid lg:flex-row lg:items-center lg:justify-center">
        {Skill.map((e: SkillData) => (
          <SkillProcess
            key={e.id}
            title={e.title}
            years={e.years}
            percentage={e.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
