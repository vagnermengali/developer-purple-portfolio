import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ChildrenProps } from "@/interfaces/ChildrenProps/ChildrenProps";
import { IGlobalContext } from "@/interfaces/IGlobalContextProps/IGlobalContextProps";

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalProvider = ({ children }: ChildrenProps) => {
    const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
    const [animationImage, setAnimationImage] = useState<boolean>(false);
    const [animationImageSlide, setAnimationImageSlide] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTabletSmall, setIsTabletSmall] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [cardHover, setCardHover] = useState<boolean>(false);
    const router = useRouter();

    const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
            setIsTabletSmall(window.innerWidth < 750 && window.innerWidth > 600);
            setIsTablet(window.innerWidth < 950 && window.innerWidth > 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlobalContext.Provider value={{
            isSideBarVisible,
            setIsSideBarVisible,
            showSideBar,
            animationImage,
            setAnimationImage,
            animationImageSlide,
            setAnimationImageSlide,
            router,
            isMobile,
            setCardHover,
            cardHover,
            isTabletSmall,
            isTablet
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
