import Link from "next/link";
import { useRouter } from 'next/router';

import { FooterProps } from "@/interfaces/FooterProps/FooterProps";

const Footer = ({ email, github }: FooterProps) => {
    const router = useRouter();

    if (router.pathname === '/') {
        return null;
    }

    return (
        <footer className="w-full flex items-center justify-center flex-col bg-gradient1 gap-[.3rem] lg:gap-6 h-40 lg:h-80 mt-auto">
            <Link className="w-fit text-white hover:text-brand5 no-underline transition-all duration-300 tracking-widest mb-[.1rem] md:mb-[.3rem] lg:mb-0 text-sm md:text-[22px] lg:text-[1.75rem] leading-[1.4rem] lg:leading-[2.625rem]" href={`mailto:${email}`} target="_blank">
                {email}
            </Link>
            <Link className="w-fit text-white hover:text-brand5 no-underline transition-all duration-300 tracking-widest mb-[.1rem] md:mb-[.3rem] lg:mb-0 text-sm md:text-[22px] lg:text-[1.75rem] leading-[1.4rem] lg:leading-[2.625rem]" href={`${github}`} target="_blank">
                GitHub
            </Link>
        </footer>
    );
};

export default Footer;
