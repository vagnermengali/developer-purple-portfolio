import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import { GlobalContext } from "@/context/globalContext";

const LineScroll = () => {
  const { router } = useContext(GlobalContext);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (router.pathname === "/") {
        const isHashMatched = window.location.hash === "#work" || window.location.hash === "#contact" || window.location.hash === "#about";
        setScroll(isHashMatched);
      } else if (router.pathname === "/about" || router.pathname === "/work") {
        const isScrolled = window.pageYOffset > 0;
        setScroll(isScrolled);
      }
    };

    const handleHashChange = () => {
      if (router.pathname === "/") {
        handleScroll();
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router.pathname]);

  console.log(router.pathname)

  return (
    <>
      {
        router.pathname == "/about" || router.pathname == "/work" || router.pathname == "/" && (
          <div className="flex w-fit flex-col items-center justify-center fixed left-auto right-5 -bottom-8 sm:right-10 lg:left-10 lg:bottom-0 z-30">
            <motion.p
              className="relative whitespace-nowrap uppercase text-white z-50 font-medium tracking-down text-xs [writing-mode:vertical-lr] lg:text-sm after:content-[''] after:w-1 after:h-16 after:bg-white after:absolute after:left-0 after:right-0 after:m-auto after:-bottom-20"
              initial={{ bottom: scroll ? "5rem" : "-11rem" }}
              animate={{ bottom: scroll ? "-11rem" : "5rem" }}
            >
              Role para baixo
            </motion.p>
          </div>
        )
      }
    </>

  );
};

export default LineScroll;
