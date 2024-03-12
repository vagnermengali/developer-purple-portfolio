import { useContext, useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

import { GlobalContext } from "@/context/globalContext";
import Bars from "@/components/Other/Bars";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";

import { TemplateRouteProps } from "@/interfaces/TemplateRouteProps/TemplateRouteProps";


const TemplateRoute = ({ image, children, title, details, textButton, email, github, link }: TemplateRouteProps) => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  useEffect(() => {
    window.scrollTo(-100, -110);
  }, []);

  return (
    <section className="w-screen h-full flex flex-col bg-gradient2">
      <div className="w-full min-h-screen flex justify-center items-center relative overflow-hidden bg-brand2 flex-row">
        <div className="w-1/2 h-full flex justify-center flex-col z-30 absolute sm:flex-col left-5 sm:left-10 lg:left-[11%] top-[25%] sm:top-auto">
          <AnimatedCharactersDetailsLeft duration={1} animate>
            <h2 className="text-white leading-none tracking-widest font-medium w-[62.5rem] text-4xl sm:text-[3.875rem] lg:text-[6.875rem]">{title}</h2>
          </AnimatedCharactersDetailsLeft>
          <Bars animate />
          <AnimatedCharactersDetailsLeft duration={1.1} animate>
            <div className="w-full min-w-[12.5rem] mb-[.1rem] h-[3.25rem] lg:mb-8 lg:h-[5.25rem] lg:w-[90%] lg:min-w-[36.875rem] lg:pr-60">
              <h3 className="w-full text-white text-sm leading-4 sm:text-xl sm:leading-5 lg:text-[1.75rem] lg:leading-[2.625rem] tracking-widest break-all whitespace-normal">{details}</h3>
            </div>
          </AnimatedCharactersDetailsLeft>
          <AnimatedTextButton duration={1.2} width="calc(100vw - 1.25rem)" animate>
            <Link className="w-[9.6875rem] h-11 text-xs relative top-1/2 left-2/4 mb-0 -translate-x-1/2 sm:w-40 sm:h-12 sm:text-[.8rem] hover:bg-brand1 hover:border-2 hover:border-solid hover:border-brand1 lg:w-[11.75rem] lg:h-[3.375rem] lg:text-[.9375rem] sm:top-auto sm:left-auto sm:translate-x-0 flex items-center justify-center text-white cursor-pointer no-underline font-extrabold whitespace-nowrap bg-transparent text-center leading-[.1125rem] border-[.125rem] border-solid border-brand1 transition-all duration-300 ease-linear px-8 py-[1.125rem]" href={`${link}`} target="_blank">{textButton}</Link>
          </AnimatedTextButton>
        </div>
        <motion.div
          className="w-full top-0 sm:top-auto sm:w-1/2 h-1/2 sm:h-full absolute right-auto sm:right-0"
          initial={{ width: "0%", }}
          animate={{ width: isMobile ? "100%" : isTablet ? "65%" : "50%", }}
          exit={{ transition: { duration: 100 } }}
          transition={{ duration: 1, type: "spring", delay: .2, damping: 15, staggerChildren: 0.5 }}
        >
          <div className="w-full h-[65vh] sm:h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }} />
        </motion.div>
      </div>
      {children}
    </section>
  );
};

export default TemplateRoute;
