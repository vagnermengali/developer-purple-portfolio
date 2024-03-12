import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
import Link from "next/link";

import AnimatedTextSidebar from "@/components/Animations/AnimatedTextSidebar";

import { SidebarProps } from "@/interfaces/SidebarProps/SidebarProps";

const Sidebar = ({ linkedin, github, instagram }: SidebarProps) => {
    const { setIsSideBarVisible, isSideBarVisible, setAnimationImage, router, isMobile, isTabletSmall } = useContext(GlobalContext);

    return (
        <motion.div
            className="fixed bg-gradient1 z-40 w-screen h-screen max-w-[100vw] max-h-[100vh] overflow-hidden flex flex-col items-center justify-center transition-height duration-500 ease-in-out"
            initial={{ width: "100%", height: "0%" }}
            animate={{ width: "100%", height: isSideBarVisible ? "100%" : "0%" }}
            transition={{ ease: "anticipate", delay: -5 }}
        >
            <motion.ul className="w-fit h-fit flex flex-col items-center justify-between absolute gap-[2.625rem] list-none">
                <AnimatedTextSidebar>
                    <Link className="inline-block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-[5rem] text-[2.375rem] sm:text-[3.375rem] hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-[0.3rem] lg:before:h-[0.6rem] before:bg-white before:ease-linear before:duration-300 before:m-auto before:left-0" href={"/#main"} onClick={() => setTimeout(() => { setIsSideBarVisible(false); }, 700)}>
                        Página inicial
                    </Link>
                </AnimatedTextSidebar>
                <AnimatedTextSidebar>
                    <Link className="inline-block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-[5rem] text-[2.375rem] sm:text-[3.375rem] hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-[0.3rem] lg:before:h-[0.6rem] before:bg-white before:ease-linear before:duration-300 before:m-auto before:left-0"
                        href={"/work"}
                        onClick={() => {
                            router.push("/work");
                            setIsSideBarVisible(false);
                            setAnimationImage(true);
                        }}
                    >
                        Trabalhos
                    </Link>
                </AnimatedTextSidebar>
                <AnimatedTextSidebar>
                    <Link className="inline-block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-[5rem] text-[2.375rem] sm:text-[3.375rem] hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-[0.3rem] lg:before:h-[0.6rem] before:bg-white before:ease-linear before:duration-300 before:m-auto before:left-0"
                        href={"/about"}
                        onClick={() => {
                            router.push("/about");
                            setIsSideBarVisible(false);
                            setAnimationImage(true);
                        }}
                    >
                        Sobre mim
                    </Link>
                </AnimatedTextSidebar>
                <AnimatedTextSidebar>
                    <Link className="inline-block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-[5rem] text-[2.375rem] sm:text-[3.375rem] hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-[0.3rem] lg:before:h-[0.6rem] before:bg-white before:ease-linear before:duration-300 before:m-auto before:left-0" href={"/#contact"} onClick={() => setTimeout(() => { setIsSideBarVisible(false); }, 500)}>
                        Contato
                    </Link>
                </AnimatedTextSidebar>
                {isMobile && (
                    <AnimatedTextSidebar>
                        <div className="flex gap-[1.4rem]">
                            <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-[1.4rem] sm:text-[2rem] leading-[2.625rem]" href={`${linkedin}`} target="_blank" aria-label="linkedin">
                                <FaLinkedinIn />
                            </Link>
                            <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-[1.4rem] sm:text-[2rem] leading-[2.625rem]" href={`${instagram}`} target="_blank" aria-label="instagram">
                                <FaInstagram />
                            </Link>
                            <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-[1.4rem] sm:text-[2rem] leading-[2.625rem]" href={`${github}`} target="_blank" aria-label="gitbub">
                                <FaGithub />
                            </Link>
                        </div>
                    </AnimatedTextSidebar>
                )}
                {isTabletSmall && (
                    <AnimatedTextSidebar>
                        <div className="flex gap-[1.4rem]">
                            <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-[1.4rem] sm:text-[2rem] leading-[2.625rem]" href={`${linkedin}`} target="_blank" aria-label="linkedin">
                                <FaLinkedinIn />
                            </Link>
                            <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-[1.4rem] sm:text-[2rem] leading-[2.625rem]" href={`${instagram}`} target="_blank" aria-label="instagram">
                                <FaInstagram />
                            </Link>
                            <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-[1.4rem] sm:text-[2rem] leading-[2.625rem]" href={`${github}`} target="_blank" aria-label="github">
                                <FaGithub />
                            </Link>
                        </div>
                    </AnimatedTextSidebar>
                )}
            </motion.ul>
        </motion.div>
    );
};

export default Sidebar;
