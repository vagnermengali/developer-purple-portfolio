import Icon from "@/components/Other/Icon";

import { SkillProcessProps } from "@/interfaces/SkillProcessProps/SkillProcessProps";

const SkillProcess = ({ title, years, percentage }: SkillProcessProps) => {
  const percentageCss = percentage.toString() + '%'
  
  return (
    <li className="w-full h-min flex items-center justify-start lg:justify-center gap-[.9375rem]">
      <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-[3.75rem] lg:h-[3.75rem] flex items-center justify-center">
        <Icon className="relative w-full" id={title} />
      </div>
      <div className="min-w-[80%] lg:min-w-[25rem] w-full h-full gap-[0.625rem] flex justify-center flex-col">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-end justify-center gap-[0.3135rem]">
            <h2 className="text-[0.6875rem] max-w-[6.25rem] sm:text-[1.3rem] text-white leading-[1.2] whitespace-nowrap tracking-[0.2rem] font-bold">{title}</h2>
            <p className="w-0 overflow-hidden text-brand5 tracking-[0.2rem] leading-[1.2] text-[.625rem] sm:text-[.8rem]">{years}</p>
          </div>
          <p className="text-[1.4rem] text-brand1 tracking-[0.2rem] leading-[1.2] font-bold">
            {percentage}<span className="text-white tracking-[0.2rem] leading-[1.2] text-[0.6875rem] sm:text-base font-light">%</span>
          </p>
        </div>
        <div className="w-full">
          <div className={`w-full h-[.4375rem] sm:h-[.8rem] bg-blur relative rounded-[0.625rem] after:content-[''] after:absolute after:h-full after:rounded-[10px] after:bg-gradient1 after:w-[${percentageCss}] custom-class`}></div>
        </div>
      </div>
    </li>
  );
};

export default SkillProcess;
