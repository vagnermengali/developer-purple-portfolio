import { useContext } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from "next/link";

import { GlobalContext } from "@/context/globalContext";

import Bars from "@/components/Other/Bars";
import AnimatedCharactersNumber from "@/components/Animations/AnimatedTextNumber";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";

import { TemplateSlideVerticalProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";


const TemplateSlideVertical = ({
  title,
  details,
  textButton,
  number,
  link,
  email,
  github,
  linkedin,
  instagram,
  img,
  home,
  cursor,
  section
}: TemplateSlideVerticalProps) => {
  const { setAnimationImage, isMobile, router } = useContext(GlobalContext);

  return (
    <section className="w-screen h-[100vh] sm:h-screen overflow-hidden flex items-center sm:items-end flex-col justify-start sm:justify-center relative">
      <motion.div
        className="flex justify-end sm:justify-center"
        initial={{ height: "100%", width: "100%" }}
        whileInView={{
          width: home ? "90%" : isMobile ? "100%" : "78%",
          height: home ? "90%" : isMobile ? "65%" : "75%"
        }}
        transition={{
          duration: home ? 1.3 : 1,
          type: home ? "none" : "spring",
          damping: home ? 0 : 15
        }}
      >
        <div className="top-[60%] sm:top-[27%] left-5 sm:left-[11%] flex flex-col justify-center absolute z-50">
          {!home && details && !link ? (
            <>
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-[21.875rem] sm:w-[31.25rem] lg:w-[62.5rem] text-4xl sm:text-[4rem] lg:text-[6.875rem] text-white font-medium leading-none tracking-widest"> {title} </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              <AnimatedCharactersDetailsLeft duration={1.1}>
                <div className="w-[80%] h-min sm:h-[5.25rem] pl-60 mb-[.7rem] sm:mb-2 lg:mb-8">
                  <h3 className="whitespace-normal break-all tracking-widest leading-[2.625rem] text-white font-light text-sm sm:text-[1.375rem] lg:text-[1.75rem]"> {details} </h3>
                </div>
              </AnimatedCharactersDetailsLeft>
            </>
          ) : !home && link ? (
            <>
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-[62.5rem] text-4xl sm:text-[4rem] lg:text-[6.875rem] text-white font-medium leading-none tracking-widest"> {title} </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
            </>
          ) : (
            <>
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-[21.875rem] sm:w-[31.25rem] lg:w-[62.5rem] text-4xl sm:text-[4rem] lg:text-[6.875rem] text-white font-medium leading-none tracking-widest"> {title} </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              <AnimatedCharactersDetailsLeft duration={1.1}>
                <h3 className="whitespace-normal break-all tracking-widest leading-[2.625rem] text-white font-light text-sm sm:text-[1.375rem] lg:text-[1.75rem]"> {details} </h3>
              </AnimatedCharactersDetailsLeft>
            </>
          )}
          {home ? null : !link ? (
            <AnimatedTextButton duration={1.2} width="calc(100vw - 1.25rem)">
              <button
                className="w-[9.6875rem] h-11 text-xs relative top-1/2 left-2/4 mb-0 -translate-x-1/2 sm:w-40 sm:h-12 sm:text-[.8rem] hover:bg-brand1 hover:border-2 hover:border-solid hover:border-brand1 lg:w-[11.75rem] lg:h-[3.375rem] lg:text-[.9375rem] sm:top-auto sm:left-auto sm:translate-x-0 flex items-center justify-center text-white cursor-pointer no-underline font-extrabold whitespace-nowrap bg-transparent text-center leading-[.1125rem] border-[.125rem] border-solid border-brand1 transition-all duration-300 ease-linear px-8 py-[1.125rem]"
                onClick={() => {
                  router.push(`/${section}`);
                  setAnimationImage(true);
                }}
              >
                {textButton}
              </button>
            </AnimatedTextButton>
          ) : (
            <>
              {email && (
                <AnimatedCharactersDetailsLeft duration={1.3}>
                  <Link className="text-sm sm:text-[1.375rem] hover:text-brand5 mb-[1.4rem] sm:mb-4 leading-[1.4rem] sm:leading-[2.625rem] text-white tracking-widest duration-300 no-underline" href={`mailto:${email}`} target="_blank" >
                    {email}
                  </Link>
                </AnimatedCharactersDetailsLeft>
              )}
              {github && (
                <AnimatedCharactersDetailsLeft duration={1.4}>
                  <Link className="text-sm sm:text-[1.375rem] hover:text-brand5 mb-[1.4rem] sm:mb-4 leading-[1.4rem] sm:leading-[2.625rem] text-white tracking-widest duration-300 no-underline" href={`${github}`} target="_blank" > GitHub </Link>
                </AnimatedCharactersDetailsLeft>
              )}
              <AnimatedCharactersDetailsLeft duration={1.5}>
                <div className="flex gap-[.625rem] sm:gap-[.9375rem] lg:gap-[1.875rem]">
                  {linkedin && (
                    <Link className="text-sm sm:text-[1.375rem] lg:text-[1.75rem] text-white hover:text-brand5 text-start duration-300 leading-[2.625rem] no-underline align-top" href={`${linkedin}`} target="_blank" aria-label="linkedin" >
                      <FaLinkedinIn />
                    </Link>
                  )}
                  {instagram && (
                    <Link className="text-sm sm:text-[1.375rem] lg:text-[1.75rem] text-white hover:text-brand5 text-start duration-300 leading-[2.625rem] no-underline align-top" href={`${instagram}`} target="_blank" aria-label="instagram" >
                      <FaInstagram />
                    </Link>
                  )}
                  { }
                </div>
              </AnimatedCharactersDetailsLeft>
            </>
          )}
        </div>
        {home ? (
          <>
            <div className="w-full sm:w-[80%] h-full flex relative">
              <div className="clip-custom w-full h-3/4 sm:h-full left-0 sm:-left-[50px] relative bg-cover bg-no-repeat bg-center z-10" style={{ backgroundImage: `url(${img})` }} />
            </div>
          </>
        ) : (
          <>
            <motion.div
              className="flex static sm:relative mb-12 sm:mb-0 "
              initial={{ scale: isMobile ? 1 : .7, width: isMobile ? "80%" : "67%", right: isMobile ? "0" : "10%" }}
              whileInView={{ scale: 1, right: isMobile ? "0" : "10%", width: isMobile ? "80%" : "67%" }}
              transition={{ duration: 0.3, delay: 0.1, type: "spring", damping: 35 }}
            >
              {!home ? (
                <>
                  <div
                    className={`${cursor ? `cursor-pointer` : `cursor-default`} w-full h-full left-0 relative bg-cover bg-no-repeat bg-center z-10`}
                    style={{ backgroundImage: `url(${img})` }}
                    onClick={() => {
                      router.push(`/${section}`);
                      setAnimationImage(true);
                    }}
                  >
                    <motion.div
                      className="absolute bg-brand1 right-0"
                      initial={{ height: "100%", width: "calc(100vw - 33%)" }}
                      whileInView={{ height: "100%", width: "0vw" }}
                      transition={{ ease: "anticipate", duration: .9, delay: .2, }}
                    />
                    <motion.div
                      className="absolute right-0 bg-brand3"
                      initial={{ height: "100%", width: "calc(100vw - 33%)" }}
                      whileInView={{ height: "100%", width: "0vw" }}
                      transition={{ ease: "anticipate", duration: .9, delay: .1 }}
                    />
                  </div>
                  <AnimatedCharactersNumber>
                    <span
                      className={`${cursor ? `cursor-pointer` : `cursor-default`} hidden sm:text-[4.375rem] lg:text-[9.375rem] break-all h-fit whitespace-normal leading-[1.1]`}
                      onClick={() => {
                        router.push(`/${section}`);
                        setAnimationImage(true);
                      }}
                    >
                      {number}
                    </span>
                  </AnimatedCharactersNumber>
                </>
              ) : (
                null
              )}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default TemplateSlideVertical;
