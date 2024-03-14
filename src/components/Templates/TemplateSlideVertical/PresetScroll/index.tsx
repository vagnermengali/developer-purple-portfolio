import { useContext } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Abril_Fatface } from 'next/font/google'

import { GlobalContext } from "@/context/globalContext";

import Bars from "@/components/Other/Bars";
import AnimatedCharactersNumber from "@/components/Animations/AnimatedTextNumber";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";

import { TemplateSlideVerticalProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";

const abril = Abril_Fatface({
  weight: ["400"],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

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
    <section className={`${home ? 'justify-center': 'justify-start sm:justify-center'} w-screen h-dvh overflow-hidden flex items-end flex-col justify-start sm:justify-center relative`}>
      <motion.div
        className="flex justify-end sm:justify-center my-0 mx-auto sm:mx-0"
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
        <div className={`${home ? 'top-96 sm:top-1/4': 'top-80 sm:top-40'} left-5 sm:left-20 lg:left-44 flex flex-col justify-center absolute z-20`}>
          {!home && details && !link ? (
            <>
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-80 lg:w-5/6 text-4xl sm:text-6xl lg:text-8xl text-white font-medium leading-none tracking-widest"> {title} </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              <AnimatedCharactersDetailsLeft duration={1.1}>
                <div className="w-full sm:w-2/5 h-min sm:h-20 pr-36 sm:pr-36 mb-3 sm:mb-2 lg:mb-8">
                  <h3 className="whitespace-normal break-all tracking-widest leading-normal text-white font-light text-sm sm:text-xl lg:text-3xl"> {details} </h3>
                </div>
              </AnimatedCharactersDetailsLeft>
            </>
          ) : !home && link ? (
            <>
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-5/6 text-4xl sm:text-6xl lg:text-8xl text-white font-medium leading-none tracking-widest"> {title} </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
            </>
          ) : (
            <>
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-80  lg:w-5/6 text-4xl sm:text-6xl lg:text-8xl text-white font-medium leading-none tracking-widest"> {title} </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              <AnimatedCharactersDetailsLeft duration={1.1}>
                <h3 className="whitespace-normal break-all tracking-widest leading-normal text-white font-light text-sm sm:text-xl lg:text-3xl"> {details} </h3>
              </AnimatedCharactersDetailsLeft>
            </>
          )}
          {home ? null : !link ? (
            <AnimatedTextButton duration={1.2} width="calc(100vw - 1.25rem)">
              <button
                className="w-40 h-11 text-xs relative top-1/2 left-2/4 mb-0 -translate-x-1/2 sm:w-40 sm:h-12 sm:text-sm hover:bg-brand1 hover:border-2 hover:border-solid hover:border-brand1 lg:w-44 lg:h-12 lg:text-base sm:top-auto sm:left-auto sm:translate-x-0 flex items-center justify-center text-white cursor-pointer no-underline font-extrabold whitespace-nowrap bg-transparent text-center leading-3 border-2 border-solid border-brand1 transition-all duration-300 ease-linear px-8 py-4"
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
                  <Link className="text-sm sm:text-3xl hover:text-brand5 mb-6 sm:mb-4 leading-6 sm:leading-normal text-white tracking-widest duration-300 no-underline" href={`mailto:${email}`} target="_blank" >
                    {email}
                  </Link>
                </AnimatedCharactersDetailsLeft>
              )}
              {github && (
                <AnimatedCharactersDetailsLeft duration={1.4}>
                  <Link className="text-sm sm:text-3xl hover:text-brand5 mb-6 sm:mb-4 leading-6 sm:leading-normal text-white tracking-widest duration-300 no-underline" href={`${github}`} target="_blank" > GitHub </Link>
                </AnimatedCharactersDetailsLeft>
              )}
              <AnimatedCharactersDetailsLeft duration={1.5}>
                <div className="flex gap-3 sm:gap-4 lg:gap-7">
                  {linkedin && (
                    <Link className="text-sm sm:text-xl lg:text-3xl text-white hover:text-brand5 text-start duration-300 leading-normal no-underline align-top" href={`${linkedin}`} target="_blank" aria-label="linkedin" >
                      <FaLinkedinIn />
                    </Link>
                  )}
                  {instagram && (
                    <Link className="text-sm sm:text-xl lg:text-3xl text-white hover:text-brand5 text-start duration-300 leading-normal no-underline align-top" href={`${instagram}`} target="_blank" aria-label="instagram" >
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
            <div className="w-full sm:w-3/4 h-full flex relative">
              <div className="clip-custom w-full h-3/4 sm:h-full left-0 sm:left-12 relative bg-cover bg-no-repeat bg-center z-10" style={{ backgroundImage: `url(${img})` }} />
            </div>
          </>
        ) : (
          <>
            <motion.div
              className="flex static sm:relative my-auto mx-auto sm:my-0 sm:mx-0 h-3/4 sm:h-auto"
              initial={{ scale: isMobile ? 1 : .7, width: isMobile ? "80%" : "67%", right: isMobile ? "0" : "-6%" }}
              whileInView={{ scale: 1, right: isMobile ? "0" : "-6%", width: isMobile ? "80%" : "67%" }}
              transition={{ duration: 0.3, delay: 0.1, type: "spring", damping: 35 }}
            >
              {!home ? (
                <>
                  <div
                    className={`${cursor ? `cursor-pointer` : `cursor-default`} w-full h-full left-0 relative bg-cover bg-no-repeat bg-center z-0`}
                    style={{ backgroundImage: `url(${img})` }}
                    onClick={() => {
                      router.push(`/${section}`);
                      setAnimationImage(true);
                    }}
                  >
                    <motion.div
                      className="absolute bg-brand1 right-0"
                      initial={{ height: "100%", width: "100%" }}
                      whileInView={{ height: "100%", width: "0vw" }}
                      transition={{ ease: "anticipate", duration: .9, delay: .2, }}
                    />
                    <motion.div
                      className="absolute right-0 bg-brand3"
                      initial={{ height: "100%", width: "100%" }}
                      whileInView={{ height: "100%", width: "0vw" }}
                      transition={{ ease: "anticipate", duration: .9, delay: .1 }}
                    />
                  </div>
                  <AnimatedCharactersNumber>
                    <span
                      className={`${cursor ? `cursor-pointer` : `cursor-default`} ${abril.className} hidden sm:block sm:text-7xl lg:text-9xl break-all h-fit whitespace-normal leading-tight`}
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
