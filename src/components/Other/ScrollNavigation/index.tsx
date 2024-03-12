import { useEffect, useState, useContext } from "react";
import Link from "next/link";

import { GlobalContext } from "@/context/globalContext";

const ScrollNavigation = () => {
    const { router } = useContext(GlobalContext);
    const [activeMain, setActiveMain] = useState<boolean>(false);
    const [activeWork, setActiveWork] = useState<boolean>(false);
    const [activeAbout, setActiveAbout] = useState<boolean>(false);
    const [activeContact, setActiveContact] = useState<boolean>(false);

    useEffect(() => {
        if (router.pathname === "/") {
            const handleHashChange = () => {
                setActiveMain(window.location.hash === "#main" || (router.pathname === "/" && window.location.hash === ""));
                setActiveAbout(window.location.hash === "#about");
                setActiveWork(window.location.hash === "#work");
                setActiveContact(window.location.hash === "#contact");
            };
            handleHashChange();
            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }
    }, [router.pathname]);

    return (
        <>
            {router.pathname === "/" && (
                <div className="fixed flex items-center flex-col justify-center w-8 sm:w-10 h-full lg:w-10 lg:h-[8.25rem] left-1/2 lg:left-10 z-30 top-[90%] sm:top-[93%] lg:top-[40%] -rotate-90 lg:rotate-0 -translate-x-2/4 -translate-y-2/4 lg:translate-x-0 lg:translate-y-0">
                    <ul className="list-none w-full h-full flex flex-col items-center justify-center gap-[0.625rem] sm:gap-5 lg:block">
                        <li className="w-full my-[0.625rem] sm:my-[0.9375rem] lg:my-0 lg:mb-10 flex items-center h-6 lg:block relative lg:h-[.1875rem]">
                            <Link aria-label="main" href={"#main"} className={`block absolute top-[50%] lg:top-auto lg:relative z-50 h-[.15rem] sm:h-[.2rem] lg:h-full cursor-pointer bg-white no-underline transition-width duration-1000 ease-linear mb-10 ${activeMain ? "w-full" : "w-4 lg:w-6"}`} />
                        </li>
                        <li className="w-full my-[0.625rem] sm:my-[0.9375rem] lg:my-0 lg:mb-10 flex items-center h-6 lg:block relative lg:h-[.1875rem]">
                            <Link aria-label="main" href={"#main"} className={`block absolute top-[50%] lg:top-auto lg:relative z-50 h-[.15rem] sm:h-[.2rem] lg:h-full cursor-pointer bg-white no-underline transition-width duration-1000 ease-linear mb-10 ${activeWork ? "w-full" : "w-4 lg:w-6"}`} />
                        </li>
                        <li className="w-full my-[0.625rem] sm:my-[0.9375rem] lg:my-0 lg:mb-10 flex items-center h-6 lg:block relative lg:h-[.1875rem]">
                            <Link aria-label="main" href={"#main"} className={`block absolute top-[50%] lg:top-auto lg:relative z-50 h-[.15rem] sm:h-[.2rem] lg:h-full cursor-pointer bg-white no-underline transition-width duration-1000 ease-linear mb-10 ${activeAbout ? "w-full" : "w-4 lg:w-6"}`} />
                        </li>
                        <li className="w-full my-[0.625rem] sm:my-[0.9375rem] lg:my-0 lg:mb-10 flex items-center h-6 lg:block relative lg:h-[.1875rem]">
                            <Link aria-label="main" href={"#main"} className={`block absolute top-[50%] lg:top-auto lg:relative z-50 h-[.15rem] sm:h-[.2rem] lg:h-full cursor-pointer bg-white no-underline transition-width duration-1000 ease-linear mb-10 ${activeContact ? "w-full" : "w-4 lg:w-6"}`} />
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default ScrollNavigation;
