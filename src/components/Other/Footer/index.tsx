import Link from "next/link";
import { useRouter } from 'next/router';

import { FooterProps } from "@/interfaces/FooterProps/FooterProps";

const Footer = ({ email, github }: FooterProps) => {
    const router = useRouter();

    if (router.pathname === '/') {
        return null;
    }

    return (
        <footer className="w-full flex items-center justify-center flex-col bg-gradient1 gap-1 lg:gap-6 h-40 lg:h-80 mt-auto">
            <Link className="w-fit text-white hover:text-brand5 no-underline transition-all duration-300 tracking-widest mb-1 lg:mb-0 text-sm md:text- lg:text-3xl leading-6 lg:leading-10" href={`mailto:${email}`} target="_blank">
                {email}
            </Link>
            <Link className="w-fit text-white hover:text-brand5 no-underline transition-all duration-300 tracking-widest mb-mb-1 lg:mb-0 text-sm md:text- lg:text-3xl leading-6 lg:leading-10" href={`${github}`} target="_blank">
                GitHub
            </Link>
        </footer>
    );
};

export default Footer;
