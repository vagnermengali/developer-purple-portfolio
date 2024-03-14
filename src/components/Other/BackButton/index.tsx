import { useContext, useEffect } from "react";

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
            {router.pathname == "/about" || router.pathname == "/work" && (
                <a
                    className="fixed z-30 block overflow-hidden text-white top-14 left-5 hover:left-7 sm:top-28 hover:sm:left-12 sm:left-10 w-16 duration-300 transition-all font-normal"
                    href={`/#${route}`}
                    aria-label="return"
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
                        className="w-8 h-8 left-5 sm:w-12 lg:w-auto"
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
                </a>
            )}
        </>
    );
};

export default BackButton;
