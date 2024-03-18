export interface IGlobalContext {
    isSideBarVisible?: boolean;
    setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: () => void;
    router: any;
    isMobile?: boolean;
    setCardHover: React.Dispatch<React.SetStateAction<boolean>>;
    cardHover: boolean;
    isTablet: boolean;
}
