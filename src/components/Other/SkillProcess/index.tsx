import Icon from "@/components/Other/Icon";

import { SkillProcessProps } from "@/interfaces/SkillProcessProps/SkillProcessProps";

const SkillProcess = ({ title, years, percentage }: SkillProcessProps) => {

  return (
    <li className="w-full h-min flex items-center justify-start lg:justify-center gap-4">
      <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
        <Icon className="relative w-full" id={title} />
      </div>
      <div className="w-full h-full gap-3 flex justify-center flex-col">
        <div className="flex items-end justify-between gap-5">
          <div className="flex items-end justify-center gap-1">
            <h2 className="text-sm max-w-24 sm:text-xl text-brand9 leading-tight whitespace-nowrap tracking-down font-bold">{title}</h2>
            <p className="w-0 overflow-hidden leading-none">{years}</p> {/* text-brand5 tracking-down leading-tight text-xs sm:text-sm */}
          </div>
          <p className="text-2xl text-brand1 tracking-down leading-none font-bold">
            {percentage}<span className="text-brand4 tracking-down leading-none text-xs sm:text-base font-light">%</span>
          </p>
        </div>
        <div className="w-full relative h-3">
          <div className={`w-full h-2 sm:h-3 absolute rounded-xl bg-blur`}></div>
          <div className={`w-full h-2 sm:h-3 absolute rounded-xl bg-gradient1`} style={{ width: `${percentage.toString()}%` }}></div>
        </div>
      </div>
    </li>
  );
};

export default SkillProcess;
