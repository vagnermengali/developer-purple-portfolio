import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";

const Bars = ({ animate }: { animate?: boolean }) => {
  return (
    <>
      {animate ? (
        <div className="flex flex-col w-36 gap-1 sm:gap-5">
          <AnimatedCharactersDetailsLeft duration={1.1} animate>
            <span className="block self-start w-11 sm:w-16 lg:w-20 h-1 sm:h-1 bg-brand1 mt-4 sm:mt-6" />
          </AnimatedCharactersDetailsLeft>
          <AnimatedCharactersDetailsLeft duration={1.25} animate>
            <span className="block self-end w-11 sm:w-16 lg:w-20 h-1 sm:h-1 bg-brand1 mb-3 sm:mb-8 ml-6 sm:ml-12" />
          </AnimatedCharactersDetailsLeft>
        </div>
      ) : (
        <div className="flex flex-col w-36 gap-1 sm:gap-5">
          <AnimatedCharactersDetailsLeft duration={1.1}>
            <span className="block self-start w-11 sm:w-16 lg:w-20 h-1 sm:h-1 bg-brand1 mt-4 sm:mt-6" />
          </AnimatedCharactersDetailsLeft>
          <AnimatedCharactersDetailsLeft duration={1.25}>
            <span className="block self-end w-11 sm:w-16 lg:w-20 h-1 sm:h-1 bg-brand1 mb-3 sm:mb-8 ml-6 sm:ml-12" />
          </AnimatedCharactersDetailsLeft>
        </div>
      )}
    </>

  );
};

export default Bars;
