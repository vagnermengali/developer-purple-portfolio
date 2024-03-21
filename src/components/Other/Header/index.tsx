import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import MenuBurguer from "@/components/Other/MenuBurguer";
import Sidebar from "@/components/Other/Sidebar";
import BackButton from "@/components/Other/BackButton";
import LineScroll from "@/components/Other/LineScroll";

import { HeaderProps } from "@/interfaces/HeaderProps/HeaderProps";

const Header = ({ linkedin, github, instagram, name, route }: HeaderProps) => {
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
            <header className={`fixed top-0 w-full flex justify-between items-center py-4 px-5 sm:px-10 sm:py-5 z-50 transition-all duration-300 ease-linear ${isScrolled ? 'bg-brand2 bg-opacity-70 backdrop-blur-xl' : 'bg-transparent'}`}>
                <Link href={"/#main"} className="h-full text-base md:text-2xl tracking-widest no-underline text-white duration-500 transition-all hover:text-brand5" aria-label="logo">
                    {name}
                </Link>
                <nav className="flex justify-center items-center">
                    <div className="hidden items-center justify-center mr-24 gap-8 sm:flex">
                        <Link className="text-white text-3xl hover:text-brand5 duration-500 transition-all" href={`${linkedin}`} target="_blank" aria-label="linkedin">
                            <FaLinkedinIn />
                        </Link>
                        <Link className="text-white text-3xl hover:text-brand5 duration-500 transition-all" href={`${instagram}`} target="_blank" aria-label="instagram">
                            <FaInstagram />
                        </Link>
                        <Link className="h-full text-base md:text-2xl tracking-widest no-underline text-white duration-500 hover:text-brand5 transition-all" href={`${github}`} target="_blank" aria-label="github">
                            GitHub
                        </Link>
                    </div>
                    <MenuBurguer />
                </nav>
            </header>
            <BackButton route={route} />
            <Sidebar linkedin={linkedin} github={github} instagram={instagram} />
            <LineScroll />
        </>
    );
};

export default Header;
