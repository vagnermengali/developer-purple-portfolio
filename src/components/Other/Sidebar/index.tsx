import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
import Link from "next/link";

import AnimatedTextSidebar from "@/components/Animations/AnimatedTextSidebar";

import { SidebarProps } from "@/interfaces/SidebarProps/SidebarProps";

const Sidebar = ({ linkedin, github, instagram }: SidebarProps) => {
    const { setIsSideBarVisible, isSideBarVisible, router, isMobile } = useContext(GlobalContext);

    return (
        <motion.div
            className="fixed bg-gradient1 z-40 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
            initial={{ width: "100%", height: "0%" }}
            animate={{ width: "100%", height: isSideBarVisible ? "100%" : "0%" }}
            transition={{ ease: "anticipate", delay: -5 }}
        >
            <motion.ul
                className="w-fit h-fit flex flex-col items-center justify-between absolute gap-11 list-none"
            >
                <li>
                    <AnimatedTextSidebar>
                        <Link aria-label="Página inicial" className="block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-7xl text-4xl sm:text-5xl hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-1 lg:before:h-2 before:bg- before:ease-linear before:duration-300 before:m-auto before:left-0" href={"/#main"} onClick={() => setTimeout(() => { setIsSideBarVisible(false); }, 700)}>
                            Página inicial
                        </Link>
                    </AnimatedTextSidebar>
                </li>
                <li>
                    <AnimatedTextSidebar>
                        <Link aria-label="Trabalhos" className="block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-7xl text-4xl sm:text-5xl hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-1 lg:before:h-2 before:bg- before:ease-linear before:duration-300 before:m-auto before:left-0"
                            href={"/work"}
                            onClick={() => {
                                setIsSideBarVisible(false);
                            }}
                        >
                            Trabalhos
                        </Link>
                    </AnimatedTextSidebar>
                </li>
                <li>
                    <AnimatedTextSidebar>
                        <Link aria-label="Sobre mim" className="block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-7xl text-4xl sm:text-5xl hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-1 lg:before:h-2 before:bg- before:ease-linear before:duration-300 before:m-auto before:left-0"
                            href={"/about"}
                            onClick={() => {
                                setIsSideBarVisible(false);
                            }}
                        >
                            Sobre mim
                        </Link>
                    </AnimatedTextSidebar>
                </li>
                <li>
                    <AnimatedTextSidebar>
                        <Link aria-label="Contato" className="block text-white relative no-underline uppercase whitespace-nowrap tracking-widest font-normal leading-none lg:text-7xl text-4xl sm:text-5xl hover:before:w-full before:content-[''] before:top-1/2 before:absolute before:w-0 before:h-1 lg:before:h-2 before:bg- before:ease-linear before:duration-300 before:m-auto before:left-0" href={"/#contact"} onClick={() => setTimeout(() => { setIsSideBarVisible(false); }, 500)}>
                            Contato
                        </Link>
                    </AnimatedTextSidebar>
                </li>
                {isMobile && (
                    <li>
                        <AnimatedTextSidebar>
                            <div className="flex gap-6">
                                <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-2xl sm:text-3xl leading-10" href={`${linkedin}`} target="_blank" aria-label="linkedin">
                                    <FaLinkedinIn />
                                </Link>
                                <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-2xl sm:text-3xl leading-10" href={`${instagram}`} target="_blank" aria-label="instagram">
                                    <FaInstagram />
                                </Link>
                                <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-2xl sm:text-3xl leading-10" href={`${github}`} target="_blank" aria-label="gitbub">
                                    <FaGithub />
                                </Link>
                            </div>
                        </AnimatedTextSidebar>
                    </li>
                )}
            </motion.ul>
        </motion.div>
    );
};

export default Sidebar;
