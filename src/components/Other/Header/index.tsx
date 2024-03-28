import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import MenuBurguer from "@/components/Other/MenuBurguer";
import Sidebar from "@/components/Other/Sidebar";
import BackButton from "@/components/Other/BackButton";
import LineScroll from "@/components/Other/LineScroll";

import { HeaderProps } from "@/interfaces/HeaderProps/HeaderProps";

const Header = ({ linkedin, github, instagram, name, route }: HeaderProps) => {
    const { isSideBarVisible, router } = useContext(GlobalContext);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            const scrollThreshold = 50;

            setIsScrolled(scrollTop > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 w-full flex justify-between items-center py-4 px-5 sm:px-10 sm:py-5 z-50 transition-all duration-300 ease-linear ${isSideBarVisible ? 'bg-transparent' : isScrolled ? 'bg-brand2 bg-opacity-70 backdrop-blur-xl' : 'bg-transparent'}`}>
                <Link href={"/#main"} className={`h-full text-base md:text-2xl tracking-widest no-underline duration-500 transition-all ${isSideBarVisible ? "text-white hover:text-brand5" : router.pathname === "/about" && !isScrolled || router.pathname === "/work" && !isScrolled ? "text-white hover:text-brand5 sm:text-brand4 sm:hover:text-brand9" : "text-brand4 hover:text-brand9"}`} aria-label="logo">
                    {name}
                </Link>
                <nav className="flex justify-center items-center">
                    <div className="hidden items-center justify-center mr-24 gap-8 sm:flex">
                        <Link className={`text-3xl duration-500 transition-all ${isSideBarVisible ? "text-white hover:text-brand5" : router.pathname === "/about" && !isScrolled || router.pathname === "/work" && !isScrolled ? "text-white hover:text-brand5" : "text-brand4 hover:text-brand9"}`} href={`${linkedin}`} target="_blank" aria-label="linkedin">
                            <FaLinkedinIn />
                        </Link>
                        <Link className={`text-3xl duration-500 transition-all ${isSideBarVisible ? "text-white hover:text-brand5" : router.pathname === "/about" && !isScrolled || router.pathname === "/work" && !isScrolled ? "text-white hover:text-brand5" : "text-brand4 hover:text-brand9"}`} href={`${instagram}`} target="_blank" aria-label="instagram">
                            <FaInstagram />
                        </Link>
                        <Link className={`h-full text-base md:text-2xl tracking-widest no-underline duration-500 transition-all ${isSideBarVisible ? "text-white hover:text-brand5" : router.pathname === "/about" && !isScrolled || router.pathname === "/work" && !isScrolled ? "text-white hover:text-brand5" : "text-brand4 hover:text-brand9"}`} href={`${github}`} target="_blank" aria-label="github">
                            GitHub
                        </Link>
                    </div>
                    <MenuBurguer isScrolled={isScrolled} />
                </nav>
            </header>
            <BackButton route={route} isScrolled={isScrolled}/>
            <Sidebar linkedin={linkedin} github={github} instagram={instagram} />
            <LineScroll />
        </>
    );
};

export default Header;
