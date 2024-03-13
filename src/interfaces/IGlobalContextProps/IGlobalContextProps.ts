export interface IGlobalContext {
    isSideBarVisible?: boolean;
    setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: () => void;
    animationImage: boolean;
    setAnimationImage: React.Dispatch<React.SetStateAction<boolean>>;
    animationImageSlide: boolean;
    setAnimationImageSlide: React.Dispatch<React.SetStateAction<boolean>>;
    router: any;
    isMobile?: boolean;
    setCardHover: React.Dispatch<React.SetStateAction<boolean>>;
    cardHover: boolean;
    isTablet: boolean;
}
