import Link from "next/link";
import { useContext, useEffect } from "react";

import { GlobalContext } from "@/context/globalContext";

import Icon from "@/components/Other/Icon";

import { BackButtonProps } from "@/interfaces/BackButtonProps/BackButtonProps";

const BackButton = ({ route }: BackButtonProps) => {
    const { router} = useContext(GlobalContext);

    return (
        <>
            {(router.pathname == "/about" || router.pathname == "/work") && (
                <Link
                    className="fixed z-30 block overflow-hidden text-white top-16 left-5 hover:left-7 sm:top-24 hover:sm:left-12 sm:left-10 w-16 duration-300 transition-all font-normal"
                    href={`/#${route.substring(1)}`}
                    aria-label="return"
                >
                    <Icon
                        className="w-8 h-8 left-5 sm:w-12 lg:w-auto"
                        id="Arrow"
                        width={"64"}
                        height={"34"}
                    />
                </Link>
            )}
        </>
    );

};

export default BackButton;
