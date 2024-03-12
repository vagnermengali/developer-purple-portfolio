import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { GlobalContext } from "@/context/globalContext";

import Icon from "@/components/Other/Icon";

import { BackButtonProps } from "@/interfaces/BackButtonProps/BackButtonProps";

const BackButton = ({ route }: BackButtonProps) => {
    const { setAnimationImage, setAnimationImageSlide, router, isMobile } = useContext(GlobalContext);

    useEffect(() => {
        const delaySlide = setTimeout(() => {
            setAnimationImageSlide(false);
        }, 1000);

        return () => clearTimeout(delaySlide);
    }, [setAnimationImageSlide]);

    return (
        <>
            {router.pathname !== "/" && (
                <motion.a
                    className="fixed z-30 block overflow-hidden text-white top-[3.75rem] left-[6.25%] sm:top-[7.5rem] sm:left-10 w-16 duration-300 transition-all font-normal"
                    href={`/#${route}`}
                    aria-label="return"
                    whileHover={{ left: "2rem" }}
                    onClick={() => {
                        isMobile
                            ? router.push(`/#${route}`)
                            : (
                                setAnimationImage(false),
                                setAnimationImageSlide(true),
                                router.push(`/#${route}`)
                            );
                    }}
                >
                    <Icon
                        className="w-8 h-8 left-[1.375rem] sm:w-12 lg:w-auto"
                        id="Arrow"
                        width={"64"}
                        height={"34"}
                        onClick={() => {
                            isMobile
                                ? router.push(`/#${route}`)
                                : (
                                    setAnimationImage(false),
                                    setAnimationImageSlide(true),
                                    router.push(`/#${route}`)
                                );
                        }}
                    />
                </motion.a>
            )}
        </>
    );
};

export default BackButton;
