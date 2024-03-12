import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";

import { AnimateProps } from "@/interfaces/AnimationsProps/AnimationsProps";

const Bars = ({ animate }: AnimateProps) => {
  return (
    <>
      {animate ? (
        <div className="flex flex-col w-[8.875rem] gap-[0.2rem] sm:gap-[0.6rem] lg:gap-[0.875rem]">
          <AnimatedCharactersDetailsLeft duration={1.1} animate>
            <span className="block self-start w-11 sm:w-16 lg:w-[5.5rem] h-[0.125rem] sm:h-1 bg-brand1 mt-[0.6rem] sm:mt-[1.6rem]" />
          </AnimatedCharactersDetailsLeft>
          <AnimatedCharactersDetailsLeft duration={1.25} animate>
            <span className="block self-end w-11 sm:w-16 lg:w-[5.5rem] h-[0.125rem] sm:h-1 bg-brand1 mb-[0.8rem] sm:mb-8 ml-6 sm:ml-12" />
          </AnimatedCharactersDetailsLeft>
        </div>
      ) : (
        <div className="flex flex-col w-[8.875rem] gap-">
          <AnimatedCharactersDetailsLeft duration={1.1}>
            <span className="block self-start w-11 sm:w-16 lg:w-[5.5rem] h-[0.125rem] sm:h-1 bg-brand1 mt-[0.6rem] sm:mt-[1.6rem]" />
          </AnimatedCharactersDetailsLeft>
          <AnimatedCharactersDetailsLeft duration={1.25}>
            <span className="block self-end w-11 sm:w-16 lg:w-[5.5rem] h-[0.125rem] sm:h-1 bg-brand1 mb-[0.8rem] sm:mb-8 ml-6 sm:ml-12" />
          </AnimatedCharactersDetailsLeft>
        </div>
      )}
    </>
  );
};

export default Bars;
