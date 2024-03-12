import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import MenuBurguer from "@/components/Other/MenuBurguer";
import Sidebar from "@/components/Other/Sidebar";
import BackButton from "@/components/Other/BackButton";
import LineScroll from "@/components/Other/LineScroll";
import ScrollNavigation from "@/components/Other/ScrollNavigation";

import { HeaderProps } from "@/interfaces/HeaderProps/HeaderProps";

const Header = ({ linkedin, github, instagram, name, route }: HeaderProps) => {
    return (
        <>
            <header className="fixed top-0 w-full flex justify-between items-center p-5 sm:pb-0 sm:px-10 sm:pt-10 z-50">
                <Link href={"/#main"} className="h-full text-base md:text-2xl tracking-widest no-underline text-white duration-300 hover:text-brand5" aria-label="logo">
                    {name}
                </Link>
                <nav className="flex justify-center items-center">
                    <div className="hidden items-center justify-center mr-24 gap-[1.875rem] sm:flex">
                        <Link className="flex items-center text-white duration-300 m-auto no-underline text-start align-top text-[1.625rem] leading-[2.625rem] hover:text-brand5" href={`${linkedin}`} target="_blank" aria-label="linkedin">
                            <FaLinkedinIn />
                        </Link>
                        <Link className="flex items-center text-white duration-300 m-auto no-underline text-start align-top text-[1.625rem] leading-[2.625rem] hover:text-brand5" href={`${instagram}`} target="_blank" aria-label="instagram">
                            <FaInstagram />
                        </Link>
                        <Link className="h-full text-base md:text-2xl tracking-widest no-underline text-white duration-300 hover:text-brand5" href={`${github}`} target="_blank" aria-label="github">
                            GitHub
                        </Link>
                    </div>
                    <MenuBurguer />
                </nav>
            </header>
            <BackButton route={route} />
            <Sidebar linkedin={linkedin} github={github} instagram={instagram} />
            <ScrollNavigation />
            <LineScroll />
        </>
    );
};

export default Header;
