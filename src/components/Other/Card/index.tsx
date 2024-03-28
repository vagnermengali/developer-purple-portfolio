import { useState } from "react";
import { motion } from 'framer-motion';
import { FaDesktop, FaMobileAlt, FaGithub, FaShareSquare } from "react-icons/fa";
import Link from "next/link";

import AnimatedTexDown from "@/components/Animations/AnimatedTexDown";
import AnimatedIconDown from "@/components/Animations/AnimatedIconDown";
import Icon from "@/components/Other/Icon";

const Card = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { id, name, tags, demo, github, screens, image } = props.data;

  const Item = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.li
      className="w-full min-w-full sm:min-w-80 h-72 relative bg-cover bg-no-repeat bg-center cursor-pointer group overflow-hidden drop-shadow-md" 
      style={{ backgroundImage: `url(${image})` }}
      key={id}
      variants={Item}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-gradient1  group-hover:backdrop-blur-sm opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
      <div
        className="absolute w-full h-full z-10 flex justify-between flex-col py-3 px-5 sm:py-6 sm:px-8"
      >
        <AnimatedTexDown>
          <h2 className="text-xl text-white whitespace-nowrap">{name}</h2>
          <div className="flex items-center justify-end gap-2 overflow-auto w-1/2 sm:w-full scrollbar-none">
            {screens.desktop && <FaDesktop className="text-white" />}
            {screens.mobile && <FaMobileAlt className="text-white" />}
          </div>
        </AnimatedTexDown>
        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
          <AnimatedIconDown>
            <div className="flex items-center justify-start gap-2 overflow-auto w-1/2 sm:w-full scrollbar-none">
              {tags.map((elem: any, index: number) => (
                <Icon key={index} className="w-4 h-4 sm:w-7 sm:h-7" id={elem} width={27.2} height={27.2} size={27.2} />
              ))}
            </div>
            <div className="flex justify-between gap-4 sm:gap-5">
              <Link className="w-7 h-7 text-white tracking-widest duration-300 no-underline hover:text-brand5" href={demo} target="_blank" aria-label="deploy">
                <FaShareSquare className="w-7 h-7" />
              </Link>
              <Link className="w-7 h-7 text-white tracking-widest duration-300 no-underline hover:text-brand5" href={github} target="_blank" aria-label="github">
                <FaGithub className="w-7 h-7" />
              </Link>
            </div>
          </AnimatedIconDown>
        </div>

      </div>
    </motion.li>
  );
};

export default Card;
