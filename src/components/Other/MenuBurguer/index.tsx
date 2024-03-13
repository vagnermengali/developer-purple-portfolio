import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

const MenuBurguer = () => {
    const { isSideBarVisible, isMobile, showSideBar } = useContext(GlobalContext);

    return (
        <div className="flex items-center w-6 h-fit sm:w-8 lg:w-12 lg:h-6 cursor-pointer" onClick={showSideBar}>
            <div
                className={`w-full transition-colors duration-300 ease-in-out before:content-[''] before:bg-white before:w-6 sm:before:w-10 lg:before:w-full before:block before:h-1 before:transition-all before:duration-300 before:ease-in-out after:content-[''] after:bg-white after:w-6 sm:after:w-10 lg:after:w-full  after:block after:h-1 after:transition-all after:duration-300 after:ease-in-out after:-mt-1 ${isSideBarVisible ? 'before:-rotate-45 before:translate-y-0 after:rotate-45 after:translate-y-0' : isMobile ? 'before:-translate-y-2 after:translate-y-2' : 'before:-translate-y-2.5 after:translate-y-2.5'}`}
                onClick={showSideBar}
            ></div>
        </div>
    );
};

export default MenuBurguer;
