import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import { NumberPaginationProps } from "@/interfaces/HeaderProps/HeaderProps";

const NumberPagination = ({ number }: NumberPaginationProps) => {
  const { router } = useContext(GlobalContext);

  return (
    <>
      {router.pathname === "/about" && (
        <div className="flex items-center justify-center z-50">
          <p className="absolute h-[1.9rem] text-center lg:text-start top-4 text-brand8 whitespace-nowrap uppercase leading-[1.1] z-50 left-8 sm:left-12 lg:left-20 text-2xl sm:text-[2rem] lg:text-[2.5rem] after:content-[''] after:bg-white after:absolute after:m-auto after:h-[0.125rem] after:w-16 after:-left-20 after:bottom-[1.3rem] sm:after:bottom-4 lg:after:bottom-[0.4rem]">{`0${number}`}</p>
          <span className="text-white whitespace-break-spaces uppercase absolute top-4 left-20 sm:left-36 text-2xl sm:text-[2rem] lg:text-[2.5rem] leading-[1.1] ">
            {`${number === 1 ? "quem sou eu" : number === 2 ? "paixão" : "conjunto de habilidades"}`}
          </span>
        </div>
      )}
    </>
  );
};

export default NumberPagination;
